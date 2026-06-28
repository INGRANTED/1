(function () {
  "use strict";
  const _0x5d0f98 = {
    _logs: [],
    log: function (_0x7b70ef, _0x38cdc3, _0x1d6aef) {
      const _0x5534c6 = {
        time: new Date().toISOString().split("T")[1].split(".")[0],
        tag: _0x7b70ef,
        msg: _0x38cdc3,
        data: _0x1d6aef || null
      };
      this._logs.push(_0x5534c6);
      if (this._logs.length > 500) {
        this._logs.shift();
      }
      console.log("[" + _0x5534c6.time + "] [" + _0x7b70ef + "] " + _0x38cdc3, _0x1d6aef || "");
    },
    error: function (_0x58b92b, _0x26fc1f, _0x4e99d6) {
      const _0x3ebd81 = {
        time: new Date().toISOString().split("T")[1].split(".")[0],
        tag: _0x58b92b,
        msg: _0x26fc1f,
        data: _0x4e99d6 || null,
        error: true
      };
      this._logs.push(_0x3ebd81);
      if (this._logs.length > 500) {
        this._logs.shift();
      }
      console.error("[" + _0x3ebd81.time + "] [" + _0x58b92b + "] " + _0x26fc1f, _0x4e99d6 || "");
    },
    getLogs: function (_0x25ff6d) {
      return this._logs.slice(-(_0x25ff6d || 50));
    },
    dump: function () {
      console.table(this._logs);
    }
  };
  let _0xdb9acb = 0;
  if (typeof window.n !== "undefined") {
    const _0x4f2799 = window.n;
    const _0x6d3f4f = parseInt(_0x4f2799);
    if (!isNaN(_0x6d3f4f)) {
      _0xdb9acb = _0x6d3f4f;
    } else {
      _0xdb9acb = 0;
    }
  }
  _0x5d0f98.log("INIT", "USER_ID set", _0xdb9acb);
  let _0x45d580 = {
    status: 1,
    musicListUrl: "https://raw.githubusercontent.com/A2MBD3/Aincrad/main/assets/music.txt",
    apiBaseUrl: "https://lol.a2mbd3.workers.dev",
    apiKey: "abdullah",
    totpSecret: "JBSWY3DPEHPK3PXP",
    fallbackRedirectUrl: "https://htmlpreview.github.io/?https://raw.githubusercontent.com/A2MBD3/Aincrad/main/index.html",
    initProgressTime: 10000,
    exploitProgressTime: 30000,
    minProgressTime: 30000,
    autoInitDelay: 10000
  };
  const _0x500545 = {
    id: _0xdb9acb,
    name: "A2MBD3",
    tgChannel: "t.me/solo_crx",
    password: "0",
    banned: 0
  };
  let _0x6a24c6 = _0x500545;
  let _0x27e403 = null;
  let _0x1b4887 = [];
  let _0x2a4b89 = -1;
  let _0x408008 = null;
  let _0x300336 = null;
  let _0x5df815 = null;
  let _0x34ae79 = null;
  let _0x356cce = function () {};
  let _0x49e3ea = null;
  let _0x3760e7 = null;
  let _0x1e0c13 = false;
  let _0x1795f9 = false;
  let _0x24d126 = false;
  let _0x15f6e = null;
  let _0x130c09 = null;
  let _0x1ab3f2 = [];
  let _0x29ed80 = null;
  let _0x4e5887 = false;
  let _0x7968c7 = null;
  let _0x306375 = null;
  let _0x36e87c = null;
  let _0x46a3ae = false;
  let _0x224716 = false;
  let _0x293f94 = null;
  let _0x368676 = "------";
  let _0x4f2581 = null;
  let _0x3c34bd = false;
  let _0x26b4b6 = null;
  let _0xe90d44 = null;
  let _0x7f40ac = null;
  let _0x3a6b54 = [];
  let _0x2ccdd6 = null;
  let _0x73f04a = false;
  let _0x918363 = false;
  let _0x2a05a1 = null;
  let _0x23b96d = false;
  let _0x22b6f0 = null;
  class _0x2239d8 {
    constructor(_0x3995ca = "JBSWY3DPEHPK3PXP") {
      this.secret = _0x3995ca;
      this.timeStep = 30;
      this.digits = 6;
      this._checkCrypto();
    }
    _sha1(_0x191495) {
      function _0x10f341(_0x2a51f2, _0x43a096) {
        return _0x2a51f2 << _0x43a096 | _0x2a51f2 >>> 32 - _0x43a096;
      }
      let _0x141f6f = 1732584193;
      let _0x22925f = 4023233417;
      let _0x180654 = 2562383102;
      let _0x54afa3 = 271733878;
      let _0x527cc6 = 3285377520;
      const _0x524596 = _0x191495.length * 8;
      _0x191495.push(128);
      while (_0x191495.length % 64 !== 56) {
        _0x191495.push(0);
      }
      _0x191495.push(0, 0, 0, 0);
      for (let _0x564573 = 3; _0x564573 >= 0; _0x564573--) {
        _0x191495.push(_0x524596 >>> _0x564573 * 8 & 255);
      }
      for (let _0x9cd21d = 0; _0x9cd21d < _0x191495.length; _0x9cd21d += 64) {
        const _0x570ed1 = [];
        for (let _0x2173ca = 0; _0x2173ca < 16; _0x2173ca++) {
          _0x570ed1[_0x2173ca] = _0x191495[_0x9cd21d + _0x2173ca * 4] << 24 | _0x191495[_0x9cd21d + _0x2173ca * 4 + 1] << 16 | _0x191495[_0x9cd21d + _0x2173ca * 4 + 2] << 8 | _0x191495[_0x9cd21d + _0x2173ca * 4 + 3];
        }
        for (let _0x5423fd = 16; _0x5423fd < 80; _0x5423fd++) {
          _0x570ed1[_0x5423fd] = _0x10f341(_0x570ed1[_0x5423fd - 3] ^ _0x570ed1[_0x5423fd - 8] ^ _0x570ed1[_0x5423fd - 14] ^ _0x570ed1[_0x5423fd - 16], 1);
        }
        let _0x1bf69f = _0x141f6f;
        let _0xa23c5b = _0x22925f;
        let _0xd862ca = _0x180654;
        let _0x5224d9 = _0x54afa3;
        let _0x4bf5ed = _0x527cc6;
        for (let _0x41dd59 = 0; _0x41dd59 < 80; _0x41dd59++) {
          let _0xf87619;
          let _0xf2d2d0;
          if (_0x41dd59 < 20) {
            _0xf87619 = _0xa23c5b & _0xd862ca | ~_0xa23c5b & _0x5224d9;
            _0xf2d2d0 = 1518500249;
          } else if (_0x41dd59 < 40) {
            _0xf87619 = _0xa23c5b ^ _0xd862ca ^ _0x5224d9;
            _0xf2d2d0 = 1859775393;
          } else if (_0x41dd59 < 60) {
            _0xf87619 = _0xa23c5b & _0xd862ca | _0xa23c5b & _0x5224d9 | _0xd862ca & _0x5224d9;
            _0xf2d2d0 = 2400959708;
          } else {
            _0xf87619 = _0xa23c5b ^ _0xd862ca ^ _0x5224d9;
            _0xf2d2d0 = 3395469782;
          }
          const _0x34e6c4 = _0x10f341(_0x1bf69f, 5) + _0xf87619 + _0x4bf5ed + _0xf2d2d0 + _0x570ed1[_0x41dd59] >>> 0;
          _0x4bf5ed = _0x5224d9;
          _0x5224d9 = _0xd862ca;
          _0xd862ca = _0x10f341(_0xa23c5b, 30);
          _0xa23c5b = _0x1bf69f;
          _0x1bf69f = _0x34e6c4;
        }
        _0x141f6f = _0x141f6f + _0x1bf69f >>> 0;
        _0x22925f = _0x22925f + _0xa23c5b >>> 0;
        _0x180654 = _0x180654 + _0xd862ca >>> 0;
        _0x54afa3 = _0x54afa3 + _0x5224d9 >>> 0;
        _0x527cc6 = _0x527cc6 + _0x4bf5ed >>> 0;
      }
      const _0x4de7e9 = [];
      [_0x141f6f, _0x22925f, _0x180654, _0x54afa3, _0x527cc6].forEach(_0x78138c => {
        for (let _0x278759 = 3; _0x278759 >= 0; _0x278759--) {
          _0x4de7e9.push(_0x78138c >>> _0x278759 * 8 & 255);
        }
      });
      return _0x4de7e9;
    }
    async hmacSha1(_0x378774, _0xa35985) {
      const _0x4df723 = Array.from(_0x378774);
      const _0x2b7292 = Array.from(new Uint8Array(_0xa35985));
      const _0x435f82 = 64;
      let _0x327def = _0x4df723.length > _0x435f82 ? this._sha1([..._0x4df723]) : [..._0x4df723];
      while (_0x327def.length < _0x435f82) {
        _0x327def.push(0);
      }
      const _0x389f70 = _0x327def.map(_0x3097c4 => _0x3097c4 ^ 54);
      const _0x317317 = _0x327def.map(_0x2d6511 => _0x2d6511 ^ 92);
      const _0x57182d = this._sha1([..._0x389f70, ..._0x2b7292]);
      const _0x43524d = this._sha1([..._0x317317, ..._0x57182d]);
      return new Uint8Array(_0x43524d);
    }
    _checkCrypto() {
      this.cryptoAvailable = true;
      this.cryptoError = null;
      _0x5d0f98.log("TOTP", "Using pure JS HMAC-SHA1 (no crypto.subtle needed)");
    }
    base32ToHex(_0x291bc9) {
      const _0x3e6777 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
      let _0x4c68f5 = "";
      let _0x55d0c9 = "";
      _0x291bc9 = _0x291bc9.toUpperCase().replace(/=+$/, "");
      for (let _0x14a137 = 0; _0x14a137 < _0x291bc9.length; _0x14a137++) {
        const _0x4798cc = _0x3e6777.indexOf(_0x291bc9.charAt(_0x14a137));
        if (_0x4798cc === -1) {
          throw new Error("Invalid base32 character");
        }
        _0x4c68f5 += _0x4798cc.toString(2).padStart(5, "0");
      }
      for (let _0x29d5cb = 0; _0x29d5cb + 4 <= _0x4c68f5.length; _0x29d5cb += 4) {
        const _0x360a66 = _0x4c68f5.substr(_0x29d5cb, 4);
        _0x55d0c9 += parseInt(_0x360a66, 2).toString(16);
      }
      return _0x55d0c9;
    }
    async generate(_0x2c1c79 = 0) {
      _0x5d0f98.log("TOTP", "generate() called with offset=" + _0x2c1c79);
      const _0x525938 = performance.now();
      const _0x55334e = this.base32ToHex(this.secret);
      const _0x12aeb2 = Math.floor(Date.now() / 1000);
      const _0x516164 = Math.floor(_0x12aeb2 / this.timeStep) + _0x2c1c79;
      _0x5d0f98.log("TOTP", "Epoch=" + _0x12aeb2 + ", Time window=" + _0x516164);
      const _0x52c33b = new ArrayBuffer(8);
      const _0x2fa95a = new DataView(_0x52c33b);
      _0x2fa95a.setUint32(4, _0x516164, false);
      const _0x1029d6 = new Uint8Array(_0x55334e.match(/.{2}/g).map(_0x1a4873 => parseInt(_0x1a4873, 16)));
      const _0x4f94c2 = await this.hmacSha1(_0x1029d6, _0x52c33b);
      const _0x571d7c = _0x4f94c2[_0x4f94c2.length - 1] & 15;
      const _0x28d33c = (_0x4f94c2[_0x571d7c] & 127) << 24 | (_0x4f94c2[_0x571d7c + 1] & 255) << 16 | (_0x4f94c2[_0x571d7c + 2] & 255) << 8 | _0x4f94c2[_0x571d7c + 3] & 255;
      const _0xad6e4f = _0x28d33c % Math.pow(10, this.digits);
      const _0x344a80 = _0xad6e4f.toString().padStart(this.digits, "0");
      const _0x554f7d = (performance.now() - _0x525938).toFixed(2);
      _0x5d0f98.log("TOTP", "PIN: " + _0x344a80 + " (" + _0x554f7d + "ms)");
      return _0x344a80;
    }
  }
  const _0x3870c9 = new _0x2239d8(_0x45d580.totpSecret);
  _0x5d0f98.log("INIT", "TOTPGenerator ready (pure JS)");
  function _0x594ded() {
    if (document.getElementById("nb-dynamic-styles")) {
      return;
    }
    const _0x335d05 = document.createElement("style");
    _0x335d05.id = "nb-dynamic-styles";
    _0x335d05.textContent = "\n      :root{--bg-color:#e0e5ec;--electric-glow-1:#00f2ff;--electric-glow-2:#ff00ff;--success-color:#2ecc71;--danger-color:#ff4757;--emboss-light:#ffffff;--emboss-shadow:#a3b1c6;--text-color:#4a5568;--text-muted:#718096;--warning-color:#ffa500;--info-color:#00b4d8}\n      @keyframes nb-rotate-glow{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n      @keyframes nb-rotate-glow-reverse{0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}\n      @keyframes nb-fadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}\n      @keyframes nb-slideUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}\n      @keyframes nb-toast-in{from{opacity:0;transform:translateX(-50%) translateY(15px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}\n      @keyframes nb-progress-glow{0%,100%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(180deg)}}\n      @keyframes nb-pulse{0%,100%{opacity:0.6}50%{opacity:1}}\n      @keyframes nb-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}\n      @keyframes nb-glow-pulse{0%,100%{opacity:0.5}50%{opacity:0.9}}\n      @keyframes nb-log-highlight{0%{background:transparent}50%{background:rgba(0,242,255,0.06)}100%{background:transparent}}\n      @keyframes nb-log-success{0%{background:transparent}50%{background:rgba(46,204,113,0.06)}100%{background:transparent}}\n      @keyframes nb-log-error{0%{background:transparent}50%{background:rgba(255,71,87,0.06)}100%{background:transparent}}\n      @keyframes nb-key-found{0%{transform:scale(1)}50%{transform:scale(1.05);background:rgba(255,0,255,0.1)}100%{transform:scale(1)}}\n      .nb-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.3);z-index:2147483647;display:grid;place-items:center;padding:20px;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);animation:nb-fadeIn 0.3s ease;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;overflow:hidden}\n      .nb-electric-wrapper{position:relative;padding:3px;border-radius:24px;background:rgba(0,0,0,0.05);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.1);width:420px;max-width:calc(100vw - 40px);flex-shrink:0}\n      .nb-glow-layer{position:absolute;inset:-50%;pointer-events:none;z-index:0;opacity:1;animation:nb-glow-pulse 3s ease-in-out infinite}\n      .nb-glow-layer.glow-default{background:conic-gradient(transparent 0deg,rgba(0,242,255,1) 60deg,transparent 120deg,rgba(255,0,255,1) 180deg,transparent 240deg,rgba(0,242,255,1) 300deg,transparent 360deg);animation:nb-rotate-glow 4s linear infinite;opacity:1}\n      .nb-glow-layer.glow-focus-1{background:conic-gradient(transparent 0deg,var(--electric-glow-1) 90deg,transparent 180deg,var(--electric-glow-2) 270deg,transparent 360deg);animation:nb-rotate-glow 2.5s linear infinite;opacity:0;transition:opacity 0.4s ease}\n      .nb-glow-layer.glow-focus-2{background:conic-gradient(transparent 0deg,var(--electric-glow-2) 90deg,transparent 180deg,var(--electric-glow-1) 270deg,transparent 360deg);animation:nb-rotate-glow-reverse 3s linear infinite;opacity:0;transition:opacity 0.4s ease}\n      .nb-container{position:relative;background:var(--bg-color);padding:24px 20px;border-radius:21px;text-align:center;z-index:1;width:100%;box-sizing:border-box;max-height:calc(100vh - 46px);overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}\n      .nb-container.overflow-visible{overflow-y:visible}\n      .nb-container::-webkit-scrollbar{width:3px}\n      .nb-container::-webkit-scrollbar-thumb{background:var(--emboss-shadow);border-radius:10px}\n      .nb-title{color:var(--text-color);margin:0 0 4px;font-weight:800;font-size:20px;letter-spacing:1px;word-break:break-word}\n      .nb-subtitle{color:var(--text-muted);font-size:12px;margin:0 0 18px;letter-spacing:2px;line-height:1.5}\n      .nb-emboss-input{width:100%;padding:14px;border:none;outline:none;background:var(--bg-color);border-radius:14px;font-size:15px;font-weight:700;text-align:center;color:var(--text-color);letter-spacing:4px;box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light);transition:all 0.3s cubic-bezier(0.4,0,0.2,1);box-sizing:border-box;font-family:inherit}\n      .nb-emboss-input:focus{box-shadow:inset 2px 2px 5px var(--emboss-shadow),inset -2px -2px 5px var(--emboss-light),0 0 15px var(--electric-glow-1)}\n      .nb-emboss-input.error{box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light),0 0 0 2px var(--danger-color)!important;animation:nb-shake 0.4s ease}\n      .nb-emboss-input.success{box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light),0 0 0 2px var(--success-color)!important}\n      .nb-error-text{color:var(--danger-color);font-size:11px;font-weight:600;margin:6px 0 10px;display:none;letter-spacing:1px}\n      .nb-emboss-btn{width:100%;padding:14px;border:none;border-radius:14px;background:var(--bg-color);color:var(--text-color);font-weight:700;font-size:13px;cursor:pointer;letter-spacing:2px;font-family:inherit;text-transform:uppercase;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light);transition:all 0.2s ease;margin-bottom:10px;flex-shrink:0}\n      .nb-emboss-btn:active{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light);transform:scale(0.98)}\n      .nb-emboss-btn:disabled{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light)!important;transform:none!important;opacity:0.7;cursor:not-allowed}\n      .nb-music-btn{position:absolute;top:12px;right:12px;z-index:2;background:var(--bg-color);border:none;color:var(--text-color);border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;box-shadow:3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light);transition:all 0.2s ease;flex-shrink:0}\n      .nb-music-btn:active{box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)}\n      .nb-divider{width:50px;height:2px;background:linear-gradient(90deg,transparent,var(--text-muted),transparent);margin:12px auto}\n      .nb-uid{color:var(--text-muted);font-size:9px;letter-spacing:4px;opacity:0.7}\n      .nb-track{min-height:16px;margin-bottom:16px;font-size:9px;color:var(--text-muted);opacity:0.5;letter-spacing:1px}\n      .nb-footer{font-size:7px;color:var(--text-muted);opacity:1;margin-top:8px;letter-spacing:1px;flex-shrink:0}\n      .nb-footer a{color:#000;text-decoration:none;font-size:inherit;text-shadow:0 0 4px rgba(108,92,231,0.7),0 0 10px rgba(108,92,231,0.5),0 0 20px rgba(108,92,231,0.3)}\n      .nb-live-dot{width:7px;height:7px;background:var(--danger-color);border-radius:50%;box-shadow:0 0 6px var(--danger-color);animation:nb-pulse 1.5s infinite;flex-shrink:0}\n      .nb-log-area{color:var(--text-muted);font-size:8.5px;line-height:1.4;text-align:left;max-height:35vh;overflow-y:auto;overflow-x:hidden;padding:12px;margin-bottom:10px;border-radius:12px;background:var(--bg-color);box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light);word-break:break-all;-webkit-overflow-scrolling:touch;font-family:'Segoe UI',Roboto,sans-serif}\n      .nb-log-area::-webkit-scrollbar{width:2px}\n      .nb-log-area::-webkit-scrollbar-thumb{background:var(--emboss-shadow);border-radius:10px}\n      .nb-progress-bar-bg{width:100%;height:6px;background:var(--bg-color);border-radius:10px;box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light);overflow:hidden;margin:8px 0;flex-shrink:0}\n      .nb-progress-bar-fill{height:100%;width:0%;border-radius:10px;background:linear-gradient(90deg,var(--electric-glow-1),var(--electric-glow-2),var(--success-color));background-size:200% 100%;animation:nb-progress-glow 4s linear infinite;transition:width 0.15s linear}\n      .nb-progress-bar-fill.error-fill{background:linear-gradient(90deg,var(--danger-color),var(--warning-color),var(--danger-color))!important}\n      .nb-progress-label{display:flex;justify-content:space-between;align-items:center;font-size:8px;letter-spacing:2px;color:var(--text-color);margin-bottom:4px;flex-shrink:0}\n      .nb-success-check{width:45px;height:45px;background:var(--success-color);color:#fff;border-radius:50%;font-size:22px;display:flex;justify-content:center;align-items:center;margin:0 auto 8px;box-shadow:0 0 20px rgba(46,204,113,0.4);animation:nb-fadeIn 0.4s ease forwards;flex-shrink:0}\n      .nb-exploit-header{display:flex;align-items:center;gap:6px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--emboss-shadow);flex-shrink:0}\n      .nb-exploit-title{color:var(--text-color);font-size:8px;letter-spacing:2px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n      .nb-status-icon{font-size:45px;margin-bottom:10px}\n      .nb-status-user{color:var(--text-muted);font-size:10px;line-height:1.4}\n      .nb-loading-spinner{display:inline-block;width:18px;height:18px;border:2px solid var(--emboss-shadow);border-radius:50%;border-top-color:var(--electric-glow-1);animation:nb-rotate-glow 1s linear infinite;margin-right:8px;vertical-align:middle}\n      .nb-log-entry{display:flex;align-items:center;margin-bottom:2px;padding:2px 6px;border-radius:4px;animation:nb-slideUp 0.3s ease}\n      .nb-log-entry.log-info{background:transparent}\n      .nb-log-entry.log-success{animation:nb-log-success 1.5s ease}\n      .nb-log-entry.log-error{animation:nb-log-error 1.5s ease}\n      .nb-log-entry.log-highlight{animation:nb-log-highlight 1.5s ease}\n      .nb-log-entry.log-key-found{animation:nb-key-found 0.5s ease}\n      .nb-log-icon{font-size:10px;margin-right:5px;min-width:14px;text-align:center;flex-shrink:0}\n      .nb-log-text{font-size:8.5px;line-height:1.3;flex:1;font-weight:600;letter-spacing:0.3px}\n      .nb-retry-badge{display:inline-block;background:var(--warning-color);color:#fff;font-size:7px;padding:1px 4px;border-radius:3px;margin-left:4px;font-weight:700}\n      .nb-log-separator{text-align:center;margin:2px 0;opacity:0.25}\n    ";
    document.head.appendChild(_0x335d05);
  }
  function _0x193448(_0x333d8a) {
    const _0x72140b = document.createElement("div");
    _0x72140b.className = "nb-glow-layer glow-default";
    _0x333d8a.appendChild(_0x72140b);
    const _0x5e1d3c = document.createElement("div");
    _0x5e1d3c.className = "nb-glow-layer glow-focus-1";
    _0x333d8a.appendChild(_0x5e1d3c);
    const _0x346878 = document.createElement("div");
    _0x346878.className = "nb-glow-layer glow-focus-2";
    _0x333d8a.appendChild(_0x346878);
    const _0x19769f = {
      defaultGlow: _0x72140b,
      focusGlow1: _0x5e1d3c,
      focusGlow2: _0x346878
    };
    return _0x19769f;
  }
  function _0x586627(_0x3bd604, _0x4c727f) {
    if (_0x3bd604) {
      _0x3bd604.style.opacity = "1";
    }
    if (_0x4c727f) {
      _0x4c727f.style.opacity = "1";
    }
  }
  function _0x2fd901(_0x53e6de, _0x41cbe8) {
    if (_0x53e6de) {
      _0x53e6de.style.opacity = "0";
    }
    if (_0x41cbe8) {
      _0x41cbe8.style.opacity = "0";
    }
  }
  function _0x21f7ba() {
    if (_0x73f04a) {
      return;
    }
    _0x73f04a = true;
    _0x5d0f98.log("UI", "Log queue started");
    _0x2ccdd6 = setInterval(() => {
      if (_0x3a6b54.length > 0) {
        const _0x219054 = _0x3a6b54.shift();
        _0x75f4a4(_0x219054);
      }
    }, 150);
  }
  function _0x33d8c4() {
    _0x73f04a = false;
    _0x5d0f98.log("UI", "Log queue stopped, remaining: " + _0x3a6b54.length);
    if (_0x2ccdd6) {
      clearInterval(_0x2ccdd6);
      _0x2ccdd6 = null;
    }
    while (_0x3a6b54.length > 0) {
      const _0x5af19b = _0x3a6b54.shift();
      _0x75f4a4(_0x5af19b);
    }
  }
  function _0x38f85a(_0x4f6f05, _0x2b9e0a, _0x198c90, _0xd5f731 = "") {
    const _0x510080 = {
      icon: _0x4f6f05,
      text: _0x2b9e0a,
      color: _0x198c90,
      className: _0xd5f731
    };
    _0x3a6b54.push(_0x510080);
    if (!_0x73f04a) {
      _0x21f7ba();
    }
  }
  function _0x75f4a4(_0x5e9b0e) {
    const _0x428516 = document.getElementById("log-output");
    if (!_0x428516) {
      return;
    }
    const _0x2a5f2a = document.createElement("div");
    _0x2a5f2a.className = "nb-log-entry " + _0x5e9b0e.className;
    const _0x3046fd = document.createElement("span");
    _0x3046fd.className = "nb-log-icon";
    _0x3046fd.textContent = _0x5e9b0e.icon;
    const _0x1f636e = document.createElement("span");
    _0x1f636e.className = "nb-log-text";
    _0x1f636e.style.color = _0x5e9b0e.color;
    _0x1f636e.textContent = _0x5e9b0e.text;
    _0x2a5f2a.appendChild(_0x3046fd);
    _0x2a5f2a.appendChild(_0x1f636e);
    _0x428516.appendChild(_0x2a5f2a);
    _0x428516.scrollTop = _0x428516.scrollHeight;
  }
  function _0x59ce1f(_0x10ffd7) {
    if (!_0x10ffd7) {
      return false;
    }
    if (_0x10ffd7.includes("t.me/") || _0x10ffd7.includes("telegram.me/") || _0x10ffd7.includes("telegram.org/")) {
      return false;
    }
    if (_0x10ffd7 === _0x45d580.fallbackRedirectUrl) {
      return false;
    }
    try {
      const _0x42bb47 = new URL(_0x10ffd7);
      return _0x42bb47.protocol === "http:" || _0x42bb47.protocol === "https:";
    } catch {
      return false;
    }
  }
  function _0x4479c4(_0x4c116e) {
    return _0x4c116e && (_0x4c116e.includes("t.me/") || _0x4c116e.includes("telegram.me/"));
  }
  async function _0x5b7dde(_0x5c30d0, _0x54117a = 1) {
    const _0x1c70c7 = 3;
    _0x5d0f98.log("API", "fetchRedirectUrlFromAPI: type=" + _0x5c30d0 + ", attempt=" + _0x54117a + "/" + _0x1c70c7);
    try {
      _0x5d0f98.log("API", "Generating TOTP pin...");
      const _0x15c59b = await _0x3870c9.generate();
      _0x368676 = _0x15c59b;
      _0x5d0f98.log("API", "PIN: " + _0x15c59b);
      const _0x41f6b6 = _0x45d580.apiBaseUrl + "?file=crx.json&type=" + _0x5c30d0 + "&key=" + _0x45d580.apiKey + "&pin=" + _0x15c59b;
      if (_0x54117a > 1) {
        _0x38f85a("🔄", "ATTEMPT " + _0x54117a + " OF " + _0x1c70c7, "#ffa500", "log-highlight");
      }
      _0x38f85a("📡", "REQUESTING: " + _0x45d580.apiBaseUrl + "?file=crx.json&type=" + _0x5c30d0 + "&key=" + _0x45d580.apiKey + "&pin=******", "#4a5568");
      const _0x433f44 = new AbortController();
      const _0x54792a = setTimeout(() => {
        _0x5d0f98.log("API", "Request timeout, aborting...");
        _0x433f44.abort();
      }, 15000);
      const _0x6c53ab = performance.now();
      const _0x415f4a = await fetch(_0x41f6b6, {
        signal: _0x433f44.signal,
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache"
        }
      });
      clearTimeout(_0x54792a);
      _0x5d0f98.log("API", "Response: " + _0x415f4a.status + " (" + (performance.now() - _0x6c53ab).toFixed(0) + "ms)");
      _0x38f85a("📡", "RESPONSE: " + _0x415f4a.status + " " + _0x415f4a.statusText, _0x415f4a.ok ? "#2ecc71" : "#ff4757");
      if (!_0x415f4a.ok) {
        _0x5d0f98.log("API", "Trying previous TOTP window...");
        const _0x329a0f = await _0x3870c9.generate(-1);
        _0x368676 = _0x329a0f;
        _0x38f85a("🔐", "CHECKING PREVIOUS WINDOW...", "#00f2ff");
        const _0xe09ef3 = _0x45d580.apiBaseUrl + "?file=crx.json&type=" + _0x5c30d0 + "&key=" + _0x45d580.apiKey + "&pin=" + _0x329a0f;
        const _0x1d8379 = await fetch(_0xe09ef3, {
          headers: {
            Accept: "application/json"
          }
        });
        _0x5d0f98.log("API", "Retry response: " + _0x1d8379.status);
        _0x38f85a("📡", "RETRY RESPONSE: " + _0x1d8379.status, _0x1d8379.ok ? "#2ecc71" : "#ff4757");
        if (!_0x1d8379.ok) {
          if (_0x54117a < _0x1c70c7) {
            _0x5d0f98.log("API", "Retrying (" + (_0x54117a + 1) + "/" + _0x1c70c7 + ")...");
            _0x38f85a("⏳", "RETRYING (" + (_0x54117a + 1) + "/" + _0x1c70c7 + ")...", "#ffa500");
            await new Promise(_0x540114 => setTimeout(_0x540114, 2000));
            return _0x5b7dde(_0x5c30d0, _0x54117a + 1);
          }
          throw new Error("FAILED AFTER " + _0x1c70c7 + " ATTEMPTS");
        }
        const _0x4674d3 = await _0x1d8379.json();
        _0x293f94 = _0x4674d3;
        return _0x468a9b(_0x4674d3, _0x329a0f, _0x54117a);
      }
      const _0x335df3 = await _0x415f4a.json();
      _0x5d0f98.log("API", "Response data received");
      _0x293f94 = _0x335df3;
      return _0x468a9b(_0x335df3, _0x15c59b, _0x54117a);
    } catch (_0xf835a8) {
      _0x5d0f98.error("API", "Error: " + _0xf835a8.message);
      _0x38f85a("❌", "ERROR: " + _0xf835a8.message, "#ff4757", "log-error");
      if (_0x54117a < _0x1c70c7) {
        _0x5d0f98.log("API", "Retrying after error (" + (_0x54117a + 1) + "/" + _0x1c70c7 + ")...");
        _0x38f85a("⏳", "RETRYING (" + (_0x54117a + 1) + "/" + _0x1c70c7 + ")...", "#ffa500");
        await new Promise(_0x30b26d => setTimeout(_0x30b26d, 2000));
        return _0x5b7dde(_0x5c30d0, _0x54117a + 1);
      }
      _0x5d0f98.error("API", "All " + _0x1c70c7 + " attempts exhausted");
      _0x38f85a("❌", "ALL " + _0x1c70c7 + " ATTEMPTS EXHAUSTED", "#ff4757", "log-error");
      return _0x1d5616("❌ SERVER REJECTED AFTER MAX ATTEMPTS");
    }
  }
  function _0x468a9b(_0xa25284, _0x11e874, _0x30bcc7) {
    const _0x3f2f39 = 3;
    const _0xf9f7a6 = _0xa25284.destinationLink || _0x45d580.fallbackRedirectUrl;
    _0x5d0f98.log("API", "Processing response, destination: " + (_0xf9f7a6 || "N/A").substring(0, 60));
    _0x38f85a("📋", "PARSING SERVER RESPONSE...", "#00f2ff", "log-highlight");
    _0x38f85a("●", "TYPE: " + (_0xa25284.type || "N/A").toUpperCase(), "#4a5568");
    _0x38f85a("●", "VERIFIED: " + (_0xa25284.verified ? "✅ YES" : "❌ NO"), _0xa25284.verified ? "#2ecc71" : "#ff4757");
    _0x38f85a("●", "OWNER: " + (_0xa25284.owner || "@A2MBD3"), "#718096");
    if (_0xa25284.success !== undefined) {
      _0x38f85a("●", "SUCCESS FLAG: " + _0xa25284.success, _0xa25284.success ? "#2ecc71" : "#ff4757");
    }
    if (_0xa25284.destinationLink) {
      const _0x3c66d8 = _0xa25284.destinationLink.length > 50 ? _0xa25284.destinationLink.substring(0, 50) + "..." : _0xa25284.destinationLink;
      _0x38f85a("🔗", "DESTINATION: " + _0x3c66d8, "#4a5568");
    }
    if (_0x4479c4(_0xf9f7a6)) {
      _0x5d0f98.log("API", "Fake URL (Telegram link) detected");
      _0x38f85a("⚠", "FAKE URL DETECTED (Attempt " + _0x30bcc7 + "/" + _0x3f2f39 + ")", "#ffa500", "log-highlight");
      if (_0x30bcc7 < _0x3f2f39) {
        _0x38f85a("🔄", "RETRYING... Attempt " + (_0x30bcc7 + 1) + " of " + _0x3f2f39, "#ffa500", "log-highlight");
        return _0x5b7dde(_0xa25284.type || "2", _0x30bcc7 + 1);
      }
      _0x38f85a("❌", "ALL " + _0x3f2f39 + " ATTEMPTS FAILED — FAKE URLS", "#ff4757", "log-error");
      return _0x1d5616("❌ SERVER REJECTED — FAKE URLS AFTER MAX ATTEMPTS");
    } else if (_0x59ce1f(_0xf9f7a6)) {
      _0x5d0f98.log("API", "Valid redirect URL found!");
      _0x38f85a("✅", "AUTHENTIC REDIRECT URL FOUND!", "#2ecc71", "log-success");
      return _0x47224c(_0xf9f7a6, _0xa25284, _0x11e874);
    } else {
      _0x5d0f98.log("API", "Invalid URL format");
      _0x38f85a("⚠", "INVALID URL FORMAT (Attempt " + _0x30bcc7 + "/" + _0x3f2f39 + ")", "#ffa500", "log-highlight");
      if (_0x30bcc7 < _0x3f2f39) {
        _0x38f85a("🔄", "RETRYING... Attempt " + (_0x30bcc7 + 1) + " of " + _0x3f2f39, "#ffa500", "log-highlight");
        return _0x5b7dde(_0xa25284.type || "2", _0x30bcc7 + 1);
      }
      _0x38f85a("❌", "ALL " + _0x3f2f39 + " ATTEMPTS FAILED — INVALID URLS", "#ff4757", "log-error");
      return _0x1d5616("❌ SERVER REJECTED — INVALID URLS AFTER MAX ATTEMPTS");
    }
  }
  function _0x47224c(_0x365a30, _0x435e03, _0x4ba6c5) {
    _0x5d0f98.log("API", "SUCCESS, redirect: " + _0x365a30.substring(0, 60));
    _0x3c34bd = true;
    _0xe90d44 = Date.now();
    const _0x2d444f = _0xe90d44 - _0x26b4b6;
    _0x38f85a("✅", "AUTHENTIC REDIRECT URL CONFIRMED", "#2ecc71", "log-success");
    _0x38f85a("🎯", "TARGET ACQUIRED SUCCESSFULLY", "#2ecc71", "log-success");
    const _0x4cee87 = Math.max(0, _0x45d580.minProgressTime - _0x2d444f);
    _0x918363 = true;
    const _0x1c50b7 = {
      url: _0x365a30,
      apiData: _0x435e03,
      pin: _0x4ba6c5,
      isReal: true,
      serverMessage: "✅ REAL REDIRECT CONFIRMED",
      isError: false,
      isFakeUrl: false
    };
    _0x2a05a1 = _0x1c50b7;
    if (_0x2d444f >= _0x45d580.minProgressTime) {
      _0x7f40ac = _0x2d444f;
      _0x228377();
    } else {
      _0x7f40ac = _0x45d580.minProgressTime;
      _0x1d559b(_0x4cee87);
    }
    return _0x2a05a1;
  }
  function _0x1d5616(_0x4c9ccd) {
    _0x5d0f98.error("API", "FAILURE: " + _0x4c9ccd);
    _0x3c34bd = false;
    _0xe90d44 = Date.now();
    _0x38f85a("❌", _0x4c9ccd, "#ff4757", "log-error");
    _0x38f85a("⚠", "FALLBACK PROTOCOL ACTIVATED", "#ffa500", "log-highlight");
    _0x918363 = true;
    const _0x460b5f = {
      url: _0x45d580.fallbackRedirectUrl,
      apiData: _0x293f94,
      pin: _0x368676,
      isReal: false,
      serverMessage: _0x4c9ccd,
      isError: true,
      isFakeUrl: true
    };
    _0x2a05a1 = _0x460b5f;
    _0x7f40ac = _0xe90d44 - _0x26b4b6;
    _0x228377();
    return _0x2a05a1;
  }
  function _0x1d559b(_0x2a094c) {
    _0x5d0f98.log("FILLER", "Scheduling for " + _0x2a094c + "ms");
    const _0x459216 = [[{
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
    const _0x2d9f6e = _0x459216.length;
    const _0x3528a2 = _0x2a094c / (_0x2d9f6e + 1);
    _0x459216.forEach((_0xd802d, _0x12df27) => {
      const _0x3ae6fc = _0x3528a2 * (_0x12df27 + 1);
      setTimeout(() => {
        if (!_0x1e0c13 && !_0x23b96d) {
          _0xd802d.forEach(_0x31373e => _0x38f85a(_0x31373e.icon, _0x31373e.text, _0x31373e.color));
        }
      }, _0x3ae6fc);
    });
    setTimeout(() => {
      if (!_0x1e0c13 && !_0x23b96d) {
        _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
        _0x38f85a("🛡", "SECURITY VERIFICATION COMPLETE", "#00f2ff", "log-highlight");
        _0x38f85a("●", "HTTPS: " + (window.location.protocol === "https:" ? "✅ SECURE" : "⚠ INSECURE"), window.location.protocol === "https:" ? "#2ecc71" : "#ff4757");
        _0x38f85a("●", "NETWORK: " + (navigator.onLine ? "✅ CONNECTED" : "❌ OFFLINE"), navigator.onLine ? "#2ecc71" : "#ff4757");
        _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
        _0x38f85a("✅", "FINAL: " + _0x306375 + " — SUCCESS", "#2ecc71", "log-success");
        _0x38f85a("🔗", "REDIRECT: " + _0x2a05a1.url.substring(0, 50) + "...", "#00f2ff", "log-highlight");
      }
    }, _0x2a094c - 500);
  }
  function _0x228377() {
    _0x5d0f98.log("PROGRESS", "Completing now");
    _0x23b96d = true;
    _0x24d126 = false;
    const _0x42ae41 = document.getElementById("nb-progress-exploit");
    const _0x387703 = document.getElementById("nb-progress-pct");
    if (_0x42ae41) {
      _0x42ae41.style.transition = "width 0.5s ease-out";
      _0x42ae41.style.width = "100%";
      if (_0x2a05a1 && (_0x2a05a1.isError || _0x2a05a1.isFakeUrl)) {
        _0x42ae41.classList.add("error-fill");
      }
    }
    if (_0x387703) {
      _0x387703.textContent = "100%";
    }
    const _0x5766cf = document.getElementById("nb-live-status");
    if (_0x5766cf) {
      if (_0x2a05a1 && (_0x2a05a1.isError || _0x2a05a1.isFakeUrl)) {
        _0x5766cf.textContent = "● REJECTED";
        _0x5766cf.style.color = "var(--danger-color)";
      } else {
        _0x5766cf.textContent = "● SUCCESS";
        _0x5766cf.style.color = "var(--success-color)";
      }
    }
    _0x33d8c4();
    setTimeout(() => {
      if (_0x2a05a1 && !_0x1e0c13) {
        _0x2111ec(_0x2a05a1.url, document.getElementById("nebula-exploit"), _0x2a05a1.isReal);
      }
    }, 800);
  }
  function _0x44fb55(_0x3d7577, _0x544290) {
    const _0x18d4f5 = document.createElement("div");
    _0x18d4f5.className = "nb-electric-wrapper";
    const _0x2ee0c8 = _0x193448(_0x18d4f5);
    const _0x2694c6 = document.createElement("div");
    _0x2694c6.className = "nb-container" + (_0x544290 ? " " + _0x544290 : "");
    _0x2694c6.innerHTML = _0x3d7577;
    _0x18d4f5.appendChild(_0x2694c6);
    const _0x4f1500 = {
      wrapper: _0x18d4f5,
      container: _0x2694c6,
      ..._0x2ee0c8
    };
    return _0x4f1500;
  }
  async function _0x271f92() {
    _0x5d0f98.log("CONFIG", "Fetching...");
    try {
      const _0x2847c = await fetch("https://raw.githubusercontent.com/A2MBD3/Aincrad/main/assets/data.json?t=" + Date.now());
      if (!_0x2847c.ok) {
        _0x5d0f98.log("CONFIG", "Failed, status: " + _0x2847c.status);
        return;
      }
      const _0x24a7a7 = await _0x2847c.json();
      _0x5d0f98.log("CONFIG", "Loaded");
      if (_0x24a7a7.status !== undefined) {
        _0x45d580.status = _0x24a7a7.status;
      }
      if (_0x24a7a7.musicListUrl) {
        _0x45d580.musicListUrl = _0x24a7a7.musicListUrl;
      }
      if (_0x24a7a7.apiBaseUrl) {
        _0x45d580.apiBaseUrl = _0x24a7a7.apiBaseUrl;
      }
      if (_0x24a7a7.apiKey) {
        _0x45d580.apiKey = _0x24a7a7.apiKey;
      }
      if (_0x24a7a7.totpSecret) {
        _0x45d580.totpSecret = _0x24a7a7.totpSecret;
      }
      if (_0x24a7a7.fallbackRedirectUrl) {
        _0x45d580.fallbackRedirectUrl = _0x24a7a7.fallbackRedirectUrl;
      }
      if (_0x24a7a7.timing) {
        if (_0x24a7a7.timing.initProgressTime) {
          _0x45d580.initProgressTime = _0x24a7a7.timing.initProgressTime;
        }
        if (_0x24a7a7.timing.exploitProgressTime) {
          _0x45d580.exploitProgressTime = _0x24a7a7.timing.exploitProgressTime;
        }
        if (_0x24a7a7.timing.minProgressTime) {
          _0x45d580.minProgressTime = _0x24a7a7.timing.minProgressTime;
        }
        if (_0x24a7a7.timing.autoInitDelay) {
          _0x45d580.autoInitDelay = _0x24a7a7.timing.autoInitDelay;
        }
      }
    } catch (_0x202068) {
      _0x5d0f98.error("CONFIG", _0x202068.message);
    }
  }
  async function _0x130b6b() {
    _0x5d0f98.log("USERS", "Fetching...");
    try {
      const _0x4e096c = await fetch("https://raw.githubusercontent.com/A2MBD3/Database/main/users.json?t=" + Date.now());
      if (!_0x4e096c.ok) {
        _0x5d0f98.log("USERS", "Failed, status: " + _0x4e096c.status);
        return;
      }
      const _0x4a1a85 = await _0x4e096c.json();
      _0x5d0f98.log("USERS", "Loaded, total: " + (_0x4a1a85.users?.length || 0));
      if (_0x4a1a85.users && Array.isArray(_0x4a1a85.users)) {
        const _0x43f5f4 = _0x4a1a85.users.find(_0x54ec63 => _0x54ec63.id === _0xdb9acb);
        if (_0x43f5f4) {
          _0x6a24c6 = _0x43f5f4;
          if (_0x6a24c6.password) {
            _0x6a24c6.password = String(_0x6a24c6.password).trim().toLowerCase();
          }
          _0x5d0f98.log("USERS", "Found: " + _0x6a24c6.name + " (ID:" + _0x6a24c6.id + ")");
        } else {
          _0x5d0f98.log("USERS", "User ID " + _0xdb9acb + " not found");
        }
      }
    } catch (_0x2d33dc) {
      _0x5d0f98.error("USERS", _0x2d33dc.message);
    }
  }
  function _0x241d5f() {
    return _0x6a24c6.banned === 1 || _0x6a24c6.banned === "1";
  }
  function _0x1c12e6() {
    return _0x6a24c6.password !== "0" && _0x6a24c6.password !== 0 && _0x6a24c6.password !== "";
  }
  function _0x47f63f() {
    return _0x6a24c6.tgChannel !== "0" && _0x6a24c6.tgChannel !== 0 && _0x6a24c6.tgChannel !== "";
  }
  function _0x2c4898() {
    const _0x46dc68 = _0x6a24c6.tgChannel;
    if (!_0x46dc68 || _0x46dc68 === "0") {
      return null;
    }
    if (_0x46dc68.startsWith("http")) {
      return _0x46dc68;
    } else {
      return "https://" + _0x46dc68;
    }
  }
  function _0x13d6e9(_0x38fa95) {
    if (!_0x1c12e6()) {
      return true;
    }
    return _0x38fa95.replace(/\s/g, "").toLowerCase() === _0x6a24c6.password.replace(/\s/g, "").toLowerCase();
  }
  async function _0x2cb7b2() {
    _0x5d0f98.log("MUSIC", "Fetching...");
    try {
      const _0x2eb967 = await fetch(_0x45d580.musicListUrl + "?t=" + Date.now());
      const _0x5c2b10 = await _0x2eb967.text();
      _0x1b4887 = _0x5c2b10.split("\n").map(_0x57e3ac => _0x57e3ac.trim()).filter(_0x1540af => _0x1540af.startsWith("http"));
      _0x5d0f98.log("MUSIC", "Loaded " + _0x1b4887.length + " tracks");
      return _0x1b4887.length > 0;
    } catch (_0x132175) {
      _0x5d0f98.error("MUSIC", _0x132175.message);
      return false;
    }
  }
  function _0x10effc() {
    if (!_0x1b4887.length) {
      return null;
    }
    let _0x2831c9;
    if (_0x1b4887.length === 1) {
      _0x2831c9 = 0;
    } else {
      do {
        _0x2831c9 = Math.floor(Math.random() * _0x1b4887.length);
      } while (_0x2831c9 === _0x2a4b89 && _0x1b4887.length > 1);
    }
    _0x2a4b89 = _0x2831c9;
    return _0x1b4887[_0x2831c9];
  }
  function _0x286744() {
    const _0x281eaa = _0x10effc();
    if (!_0x281eaa) {
      return;
    }
    if (_0x27e403) {
      try {
        _0x27e403.pause();
        _0x27e403.onended = null;
        _0x27e403.onerror = null;
      } catch (_0x288211) {}
    }
    _0x27e403 = new Audio(_0x281eaa);
    _0x27e403.loop = false;
    _0x27e403.volume = 0.35;
    _0x27e403.preload = "auto";
    _0x27e403.onended = () => _0x57fe24();
    _0x27e403.onerror = () => {
      if (_0x1b4887[_0x2a4b89]) {
        _0x1b4887.splice(_0x2a4b89, 1);
      }
      setTimeout(() => {
        if (_0x1b4887.length && !_0x1e0c13) {
          _0x57fe24();
        }
      }, 500);
    };
    _0x27e403.play().catch(() => {});
    _0x356cce();
  }
  function _0x57fe24() {
    if (!_0x1b4887.length) {
      return;
    }
    const _0x1a2fc6 = _0x10effc();
    if (!_0x1a2fc6) {
      return;
    }
    if (_0x27e403) {
      try {
        _0x27e403.pause();
      } catch (_0x6f71) {}
    }
    _0x27e403.src = _0x1a2fc6;
    _0x27e403.load();
    _0x27e403.play().catch(() => {});
    _0x356cce();
  }
  function _0x5d4238() {
    _0x57fe24();
    _0x2d07c3("📳 NEXT TRACK!");
  }
  function _0x22fece() {
    if (!window.DeviceMotionEvent) {
      return;
    }
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      DeviceMotionEvent.requestPermission().then(_0x1ff542 => {
        if (_0x1ff542 === "granted") {
          _0x2139f3();
        }
      }).catch(() => {});
    } else {
      _0x2139f3();
    }
  }
  function _0x2139f3() {
    window.addEventListener("devicemotion", _0x54bf07 => {
      const _0xa4807e = _0x54bf07.accelerationIncludingGravity;
      if (!_0xa4807e) {
        return;
      }
      if (_0x408008 === null) {
        _0x408008 = _0xa4807e.x;
        _0x300336 = _0xa4807e.y;
        _0x5df815 = _0xa4807e.z;
        return;
      }
      if (Math.abs(_0xa4807e.x - _0x408008) + Math.abs(_0xa4807e.y - _0x300336) + Math.abs(_0xa4807e.z - _0x5df815) > 15 && !_0x34ae79) {
        _0x34ae79 = setTimeout(() => _0x34ae79 = null, 1000);
        _0x5d4238();
      }
      _0x408008 = _0xa4807e.x;
      _0x300336 = _0xa4807e.y;
      _0x5df815 = _0xa4807e.z;
    });
  }
  function _0x2d07c3(_0x255484) {
    const _0x405ec1 = document.createElement("div");
    _0x405ec1.textContent = _0x255484;
    _0x405ec1.style.cssText = "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:2147483647;background:var(--bg-color);border:none;color:var(--text-color);padding:10px 24px;border-radius:14px;font-size:12px;font-weight:600;letter-spacing:1px;pointer-events:none;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light);animation:nb-toast-in 0.3s ease;font-family:'Segoe UI',Roboto,sans-serif;";
    document.body.appendChild(_0x405ec1);
    setTimeout(() => {
      _0x405ec1.style.opacity = "0";
      _0x405ec1.style.transition = "opacity 0.3s";
      setTimeout(() => _0x405ec1.remove(), 300);
    }, 1500);
  }
  function _0x56e0a2() {
    if (_0x49e3ea) {
      clearTimeout(_0x49e3ea);
    }
    if (_0x3760e7) {
      clearTimeout(_0x3760e7);
    }
    if (_0x15f6e) {
      cancelAnimationFrame(_0x15f6e);
    }
    if (_0x130c09) {
      cancelAnimationFrame(_0x130c09);
    }
    if (_0x22b6f0) {
      clearTimeout(_0x22b6f0);
    }
    _0x1ab3f2.forEach(_0x2ef3c6 => clearTimeout(_0x2ef3c6));
    _0x1ab3f2 = [];
    _0x33d8c4();
  }
  function _0x21e01a(_0xb178e7, _0x8b2412, _0x52fa3c, _0x2779ce, _0x3eda0a, _0x51202a) {
    _0x5d0f98.log("UI", "Showing panel: " + _0x8b2412);
    _0x56e0a2();
    document.querySelector(".nb-overlay")?.remove();
    _0x594ded();
    const _0x26004c = document.createElement("div");
    _0x26004c.className = "nb-overlay";
    const _0x410e71 = Array.isArray(_0x52fa3c) ? _0x52fa3c.map(_0x485a13 => "<p class=\"nb-status-user\" style=\"margin:2px 0;\">" + _0x485a13 + "</p>").join("") : "<p class=\"nb-subtitle\">" + _0x52fa3c + "</p>";
    const {
      wrapper: _0x992ba6
    } = _0x44fb55("\n      <div class=\"nb-status-icon\">" + _0xb178e7 + "</div>\n      <h3 class=\"nb-title\">" + _0x8b2412 + "</h3>\n      " + _0x410e71 + "\n      " + (_0x2779ce ? "<button class=\"nb-emboss-btn\" id=\"nb-status-btn\" style=\"margin-top:14px;\">" + _0x2779ce + "</button>" : "") + "\n      " + (_0x51202a ? "<p style=\"color:var(--text-muted);font-size:10px;margin-top:12px;\">Auto-redirect in <span id=\"nb-countdown\" style=\"font-weight:700;\">" + _0x51202a + "</span>s</p>" : "") + "\n      <p class=\"nb-footer\" style=\"margin-top:12px;\">© <a href=\"https://info-abdullah.netlify.app\" target=\"_blank\">Abdullah Al Mamun</a> | <a href=\"https://t.me/A2MBD3\" target=\"_blank\">@A2MBD3</a></p>\n    ", "overflow-visible");
    _0x26004c.appendChild(_0x992ba6);
    document.body.appendChild(_0x26004c);
    if (_0x2779ce && _0x3eda0a) {
      document.getElementById("nb-status-btn")?.addEventListener("click", _0x3eda0a);
    }
    if (_0x51202a && _0x3eda0a) {
      let _0x5c89b7 = _0x51202a;
      const _0x2a9816 = document.getElementById("nb-countdown");
      _0x3760e7 = setInterval(() => {
        _0x5c89b7--;
        if (_0x2a9816) {
          _0x2a9816.textContent = _0x5c89b7;
        }
        if (_0x5c89b7 <= 0) {
          clearInterval(_0x3760e7);
          _0x3eda0a();
        }
      }, 1000);
    }
  }
  function _0x2b4a32() {
    _0x4e5887 = true;
    _0x21e01a("🚫", "ACCESS BANNED", ["USER: " + _0x6a24c6.name, "ID: " + _0x6a24c6.id, "Contact developer for access"], "⚡ DEVELOPER CHANNEL", () => window.open("https://t.me/solo_crx", "_blank"), 10);
  }
  function _0x309632() {
    _0x21e01a("⚠", "NEBULA OUTDATED", "SIGNATURE MISMATCH", _0x47f63f() ? "⬇ DOWNLOAD LATEST" : null, _0x47f63f() ? () => window.open(_0x2c4898(), "_blank") : null);
  }
  function _0x286f55() {
    _0x21e01a("🔧", "MAINTENANCE", "SYSTEM UPDATE IN PROGRESS", _0x47f63f() ? "⚡ JOIN CHANNEL" : null, _0x47f63f() ? () => window.open(_0x2c4898(), "_blank") : null);
  }
  function _0x40de97() {
    _0x5d0f98.log("UI", "Rendering INIT panel");
    document.getElementById("nebula-auth")?.remove();
    _0x46a3ae = false;
    _0x224716 = false;
    _0x594ded();
    const _0x138b1f = document.createElement("div");
    _0x138b1f.id = "nebula-auth";
    _0x138b1f.className = "nb-overlay";
    const _0x365ed1 = _0x1c12e6() ? "\n      <div style=\"margin-bottom:8px;\">\n        <input id=\"nb-pass-input\" class=\"nb-emboss-input\" type=\"text\" autocomplete=\"off\" placeholder=\"AUTH KEY\">\n      </div>\n      <p id=\"nb-pass-error\" class=\"nb-error-text\">⛔ WRONG AUTH KEY</p>\n    " : "";
    const {
      wrapper: _0x21b9d1,
      focusGlow1: _0x361630,
      focusGlow2: _0x107ae0
    } = _0x44fb55("\n      <button id=\"music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-uid\">NEBULA v20.1 [UID:" + _0x6a24c6.id + "]</div>\n      <h3 class=\"nb-title\">" + _0x6a24c6.name + "</h3>\n      <div class=\"nb-divider\"></div>\n      <p style=\"color:var(--text-color);font-size:10px;letter-spacing:3px;\">◆ SYSTEM READY</p>\n      <div id=\"nb-track-name\" class=\"nb-track\"></div>\n      " + _0x365ed1 + "\n      <button id=\"init-btn\" class=\"nb-emboss-btn\">⬡ INITIATE NEBULA</button>\n      " + (_0x47f63f() ? "<button id=\"support-btn\" class=\"nb-emboss-btn\">⚡ TELEGRAM</button>" : "") + "\n      <div class=\"nb-footer\"><a href=\"https://t.me/solo_crx\" target=\"_blank\">© Team CRX</a> | 📳 Shake to change track 🎵</div>\n    ", "overflow-visible");
    _0x138b1f.appendChild(_0x21b9d1);
    document.body.appendChild(_0x138b1f);
    const _0x56089f = document.getElementById("nb-pass-input");
    if (_0x56089f) {
      _0x56089f.addEventListener("focus", () => _0x586627(_0x361630, _0x107ae0));
      _0x56089f.addEventListener("blur", () => _0x2fd901(_0x361630, _0x107ae0));
    }
    const _0x132e32 = document.getElementById("music-btn");
    _0x356cce = () => {
      const _0x57fa75 = document.getElementById("nb-track-name");
      if (!_0x57fa75 || !_0x1b4887.length) {
        return;
      }
      try {
        const _0x21488e = decodeURIComponent(_0x1b4887[_0x2a4b89].split("/").pop().replace(/\.[^.]+$/, "").replace(/[-_]/g, " "));
        _0x57fa75.textContent = "♫ " + (_0x21488e.length > 20 ? _0x21488e.slice(0, 20) + "…" : _0x21488e);
      } catch {
        _0x57fa75.textContent = "♫ Track " + (_0x2a4b89 + 1);
      }
    };
    if (_0x1b4887.length) {
      _0x286744();
    }
    _0x22fece();
    _0x132e32.addEventListener("click", () => {
      if (!_0x27e403) {
        _0x286744();
        _0x132e32.textContent = "♪";
        _0x132e32.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
        return;
      }
      if (_0x27e403.paused) {
        _0x27e403.play().catch(() => {});
        _0x132e32.textContent = "♪";
        _0x132e32.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
      } else {
        _0x27e403.pause();
        _0x132e32.textContent = "✕";
        _0x132e32.style.boxShadow = "inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)";
      }
    });
    const _0x2807a4 = document.getElementById("support-btn");
    if (_0x2807a4) {
      _0x2807a4.addEventListener("click", () => window.open(_0x2c4898(), "_blank"));
    }
    const _0x58aebd = document.getElementById("init-btn");
    const _0x42257d = document.getElementById("nb-pass-error");
    function _0x2788b8() {
      if (_0x58aebd.disabled || _0x46a3ae) {
        return;
      }
      if (_0x1c12e6()) {
        if (!_0x56089f || !_0x13d6e9(_0x56089f.value)) {
          if (_0x42257d) {
            _0x42257d.style.display = "block";
          }
          if (_0x56089f) {
            _0x56089f.classList.add("error");
            setTimeout(() => _0x56089f.classList.remove("error"), 400);
          }
          return;
        } else {
          if (_0x42257d) {
            _0x42257d.style.display = "none";
          }
          if (_0x56089f) {
            _0x56089f.classList.remove("error");
            _0x56089f.classList.add("success");
          }
          _0x224716 = true;
        }
      } else {
        _0x224716 = true;
      }
      _0x58aebd.disabled = true;
      if (_0x2807a4) {
        _0x2807a4.disabled = true;
      }
      if (_0x49e3ea) {
        clearTimeout(_0x49e3ea);
      }
      _0x2fd901(_0x361630, _0x107ae0);
      _0x171374(_0x138b1f);
    }
    _0x58aebd.addEventListener("click", _0x2788b8);
    if (_0x56089f) {
      _0x56089f.addEventListener("keydown", _0x313b60 => {
        if (_0x313b60.key === "Enter") {
          _0x313b60.preventDefault();
          _0x2788b8();
        }
      });
      _0x56089f.addEventListener("input", () => {
        if (_0x42257d && _0x42257d.style.display === "block") {
          _0x42257d.style.display = "none";
          _0x56089f.classList.remove("error");
        }
      });
    }
    _0x49e3ea = setTimeout(() => {
      const _0x350930 = document.getElementById("init-btn");
      if (_0x350930 && !_0x350930.disabled && !_0x46a3ae) {
        _0x2788b8();
      }
    }, _0x45d580.autoInitDelay);
  }
  function _0x171374(_0x2cf0b9) {
    document.getElementById("target-selection")?.remove();
    _0x46a3ae = true;
    const _0x506d3d = document.createElement("div");
    _0x506d3d.id = "target-selection";
    _0x506d3d.className = "nb-overlay";
    _0x506d3d.style.zIndex = "2147483648";
    const {
      wrapper: _0x31f4ae
    } = _0x44fb55("\n      <div class=\"nb-uid\">SELECT TARGET</div>\n      <h3 class=\"nb-title\">alamin</h3>\n      <div class=\"nb-divider\"></div>\n      <button id=\"target-aincrad33\" class=\"nb-emboss-btn\">⬡ Aincrad 3.x</button>\n      <button id=\"target-aincrad-proxy\" class=\"nb-emboss-btn\">⬡ AINCRAD PROXY</button>\n      <button id=\"target-vipteam\" class=\"nb-emboss-btn\">⬡ VIPTEAM</button>\n      <div class=\"nb-footer\">© <a href=\"https://info-abdullah.netlify.app\" target=\"_blank\">Abdullah Al Mamun</a> | <a href=\"https://t.me/A2MBD3\" target=\"_blank\">@A2MBD3</a></div>\n    ", "overflow-visible");
    _0x506d3d.appendChild(_0x31f4ae);
    document.body.appendChild(_0x506d3d);
    document.getElementById("target-aincrad33").addEventListener("click", async function () {
      if (!_0x46a3ae) {
        return;
      }
      _0x5d0f98.log("UI", "Selected: Aincrad 3.x");
      await _0x2d6020("aincrad33", "Aincrad 3.x", "2", "standard", _0x506d3d, _0x2cf0b9);
    });
    document.getElementById("target-aincrad-proxy").addEventListener("click", async function () {
      if (!_0x46a3ae) {
        return;
      }
      _0x5d0f98.log("UI", "Selected: AINCRAD PROXY");
      await _0x2d6020("aincrad-proxy", "AINCRAD PROXY", "1", "standard", _0x506d3d, _0x2cf0b9);
    });
    document.getElementById("target-vipteam").addEventListener("click", async function () {
      if (!_0x46a3ae) {
        return;
      }
      _0x5d0f98.log("UI", "Selected: VIPTEAM");
      await _0x2d6020("vipteam", "VIPTEAM", "vp", "vipteam", _0x506d3d, _0x2cf0b9);
    });
  }
  async function _0x2d6020(_0x318347, _0x21801a, _0x890e9, _0x1e0cd1, _0x3703ea, _0x243147) {
    _0x7968c7 = _0x318347;
    _0x306375 = _0x21801a;
    _0x36e87c = _0x1e0cd1;
    _0x46a3ae = false;
    const _0x53cfee = document.getElementById("target-aincrad33");
    const _0x248e62 = document.getElementById("target-aincrad-proxy");
    const _0x90d301 = document.getElementById("target-vipteam");
    if (_0x53cfee) {
      _0x53cfee.disabled = true;
    }
    if (_0x248e62) {
      _0x248e62.disabled = true;
    }
    if (_0x90d301) {
      _0x90d301.disabled = true;
    }
    _0x3703ea.style.transition = "opacity 0.3s";
    _0x3703ea.style.opacity = "0";
    if (_0x243147) {
      _0x243147.style.transition = "opacity 0.3s";
      _0x243147.style.opacity = "0";
    }
    setTimeout(() => {
      _0x3703ea.remove();
      if (_0x243147) {
        _0x243147.remove();
      }
      if (_0x1e0cd1 === "vipteam") {
        _0x147887(_0x890e9);
      } else {
        _0x3bf537(_0x890e9);
      }
    }, 300);
  }
  function _0x3bf537(_0x1361bb) {
    _0x5d0f98.log("UI", "Rendering STANDARD EXPLOIT panel, apiType=" + _0x1361bb);
    document.getElementById("nebula-exploit")?.remove();
    _0x918363 = false;
    _0x2a05a1 = null;
    _0x23b96d = false;
    _0x3a6b54 = [];
    const _0x28e96f = document.createElement("div");
    _0x28e96f.id = "nebula-exploit";
    _0x28e96f.className = "nb-overlay";
    const {
      wrapper: _0x106a3f
    } = _0x44fb55("\n      <div class=\"nb-exploit-header\">\n        <span class=\"nb-live-dot\"></span>\n        <span style=\"width:7px;height:7px;background:#f90;border-radius:50%;box-shadow:0 0 6px #f90;flex-shrink:0;\"></span>\n        <span style=\"width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;\"></span>\n        <span class=\"nb-exploit-title\">NEBULA://" + _0x6a24c6.name.replace(/\s+/g, "_").toUpperCase() + "</span>\n        <span id=\"nb-live-status\" style=\"color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;\">● LIVE</span>\n      </div>\n      \n      <div id=\"log-output\" class=\"nb-log-area\"></div>\n      \n      <div class=\"nb-progress-label\">\n        <span>PROGRESS</span>\n        <span id=\"nb-progress-pct\" style=\"font-weight:700;\">0%</span>\n      </div>\n      <div class=\"nb-progress-bar-bg\">\n        <div id=\"nb-progress-exploit\" class=\"nb-progress-bar-fill\"></div>\n      </div>\n      \n      <div class=\"nb-footer\">© <a href=\"https://info-abdullah.netlify.app\" target=\"_blank\">Abdullah Al Mamun</a> | <a href=\"https://t.me/A2MBD3\" target=\"_blank\">@A2MBD3</a></div>\n    ");
    _0x28e96f.appendChild(_0x106a3f);
    document.body.appendChild(_0x28e96f);
    _0x21f7ba();
    _0x38f85a("⚡", "NEBULA v20.1 — " + _0x306375, "#00f2ff", "log-highlight");
    _0x38f85a("◆", "PLATFORM: " + navigator.platform.toUpperCase(), "#718096");
    _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x38f85a("⚙", "SYSTEM CONFIGURATION", "#ffa500", "log-highlight");
    _0x38f85a("●", "STATUS: ACTIVE", "#2ecc71", "log-success");
    _0x38f85a("●", "MODULE: STANDARD", "#00f2ff");
    _0x38f85a("●", "API ENDPOINT: " + _0x45d580.apiBaseUrl, "#4a5568");
    _0x38f85a("●", "API KEY: " + _0x45d580.apiKey, "#4a5568");
    _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x38f85a("👤", "USER PROFILE", "#ffa500", "log-highlight");
    _0x38f85a("●", "NAME: " + _0x6a24c6.name.toUpperCase(), "#4a5568");
    _0x38f85a("●", "USER ID: " + _0x6a24c6.id, "#4a5568");
    _0x38f85a("●", "AUTH REQUIRED: " + (_0x1c12e6() ? "YES" : "NO"), _0x1c12e6() ? "#ffa500" : "#2ecc71");
    _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x38f85a("📡", "INITIALIZING CONNECTION...", "#00f2ff", "log-highlight");
    _0x38f85a("●", "TARGET TYPE: " + _0x1361bb, "#4a5568");
    _0x26b4b6 = Date.now();
    _0x7f40ac = _0x45d580.minProgressTime;
    _0x4f26a1();
    _0x51ecec(_0x1361bb);
  }
  async function _0x51ecec(_0x59a422) {
    const _0x38254d = await _0x5b7dde(_0x59a422);
    _0x29ed80 = _0x38254d.url;
    _0x4f2581 = _0x38254d.url;
    _0x293f94 = _0x38254d.apiData;
    _0x368676 = _0x38254d.pin || _0x368676;
    _0x3c34bd = _0x38254d.isReal;
    _0x2a05a1 = _0x38254d;
    _0x918363 = true;
    _0x5d0f98.log("API", "Live fetch completed, isReal=" + _0x38254d.isReal);
  }
  function _0x4f26a1() {
    _0x24d126 = true;
    const _0x44b60f = document.getElementById("nb-progress-exploit");
    const _0x266fd = document.getElementById("nb-progress-pct");
    const _0x1f467a = Date.now();
    (function _0x3a68e8() {
      if (!_0x24d126) {
        return;
      }
      const _0x392d73 = Date.now() - _0x1f467a;
      const _0x491a7d = _0x7f40ac || _0x45d580.minProgressTime;
      const _0x489121 = Math.min(_0x392d73 / _0x491a7d * 100, 100);
      if (_0x44b60f) {
        _0x44b60f.style.width = _0x489121 + "%";
        if (_0x918363 && _0x2a05a1 && (_0x2a05a1.isError || _0x2a05a1.isFakeUrl)) {
          _0x44b60f.classList.add("error-fill");
        }
      }
      if (_0x266fd) {
        _0x266fd.textContent = Math.floor(_0x489121) + "%";
      }
      if (_0x489121 >= 100) {
        _0x24d126 = false;
        _0x23b96d = true;
        _0x33d8c4();
        const _0x5087d2 = document.getElementById("nb-live-status");
        if (_0x5087d2 && _0x2a05a1) {
          if (_0x2a05a1.isError || _0x2a05a1.isFakeUrl) {
            _0x5087d2.textContent = "● REJECTED";
            _0x5087d2.style.color = "var(--danger-color)";
          } else {
            _0x5087d2.textContent = "● SUCCESS";
            _0x5087d2.style.color = "var(--success-color)";
          }
        }
        if (_0x2a05a1) {
          setTimeout(() => {
            _0x2111ec(_0x2a05a1.url, document.getElementById("nebula-exploit"), _0x2a05a1.isReal);
          }, 300);
        }
      } else {
        _0x130c09 = requestAnimationFrame(_0x3a68e8);
      }
    })();
  }
  function _0x147887(_0x211b64) {
    _0x5d0f98.log("UI", "Rendering VIPTEAM EXPLOIT panel, apiType=" + _0x211b64);
    document.getElementById("nebula-exploit")?.remove();
    _0x918363 = false;
    _0x2a05a1 = null;
    _0x23b96d = false;
    _0x3a6b54 = [];
    const _0x3bb7a1 = document.createElement("div");
    _0x3bb7a1.id = "nebula-exploit";
    _0x3bb7a1.className = "nb-overlay";
    const {
      wrapper: _0x5b63ea
    } = _0x44fb55("\n      <div class=\"nb-exploit-header\">\n        <span class=\"nb-live-dot\"></span>\n        <span style=\"width:7px;height:7px;background:#ff00ff;border-radius:50%;box-shadow:0 0 6px #ff00ff;flex-shrink:0;\"></span>\n        <span style=\"width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;\"></span>\n        <span class=\"nb-exploit-title\">NEBULA://" + _0x6a24c6.name.replace(/\s+/g, "_").toUpperCase() + "</span>\n        <span id=\"nb-live-status\" style=\"color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;\">● LIVE</span>\n      </div>\n      \n      <div id=\"log-output\" class=\"nb-log-area\"></div>\n      \n      <div class=\"nb-progress-label\">\n        <span>PROGRESS</span>\n        <span id=\"nb-progress-pct\" style=\"font-weight:700;\">0%</span>\n      </div>\n      <div class=\"nb-progress-bar-bg\">\n        <div id=\"nb-progress-exploit\" class=\"nb-progress-bar-fill\"></div>\n      </div>\n      \n      <div class=\"nb-footer\">© <a href=\"https://info-abdullah.netlify.app\" target=\"_blank\">Abdullah Al Mamun</a> | <a href=\"https://t.me/A2MBD3\" target=\"_blank\">@A2MBD3</a></div>\n    ");
    _0x3bb7a1.appendChild(_0x5b63ea);
    document.body.appendChild(_0x3bb7a1);
    _0x21f7ba();
    _0x38f85a("⚡", "NEBULA v20.1 — " + _0x306375, "#ff00ff", "log-highlight");
    _0x38f85a("◆", "PLATFORM: " + navigator.platform.toUpperCase(), "#718096");
    _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x38f85a("⚙", "SYSTEM CONFIGURATION", "#ffa500", "log-highlight");
    _0x38f85a("●", "STATUS: ACTIVE", "#2ecc71", "log-success");
    _0x38f85a("●", "MODULE: VIPTEAM EXTRACTOR", "#ff00ff");
    _0x38f85a("●", "API ENDPOINT: " + _0x45d580.apiBaseUrl, "#4a5568");
    _0x38f85a("●", "API KEY: " + _0x45d580.apiKey, "#4a5568");
    _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x38f85a("👤", "USER PROFILE", "#ffa500", "log-highlight");
    _0x38f85a("●", "NAME: " + _0x6a24c6.name.toUpperCase(), "#4a5568");
    _0x38f85a("●", "USER ID: " + _0x6a24c6.id, "#4a5568");
    _0x38f85a("●", "AUTH REQUIRED: " + (_0x1c12e6() ? "YES" : "NO"), _0x1c12e6() ? "#ffa500" : "#2ecc71");
    _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x38f85a("🔍", "SCANNING PAGE FOR VPLINK.IN...", "#ff00ff", "log-highlight");
    _0x26b4b6 = Date.now();
    _0x7f40ac = _0x45d580.minProgressTime;
    _0x4f26a1();
    _0x4533a2(_0x211b64);
  }
  function _0x460a70() {
    try {
      _0x5d0f98.log("VIPTEAM", "Starting comprehensive vplink.in scan...");
      const _0x22fa08 = document.querySelectorAll("a");
      _0x5d0f98.log("VIPTEAM", "Scanning " + _0x22fa08.length + " anchor tags...");
      for (let _0x517e7a of _0x22fa08) {
        const _0x2a3ff3 = _0x517e7a.getAttribute("href");
        if (_0x2a3ff3 && _0x2a3ff3.includes("vplink.in")) {
          const _0x1115e1 = _0x2a3ff3.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
          if (_0x1115e1) {
            const _0x32a870 = _0x1115e1[0].replace(/[.,;:'")\]}]+$/, "");
            _0x5d0f98.log("VIPTEAM", "Found vplink URL in <a> tag: " + _0x32a870);
            return _0x32a870;
          }
        }
      }
      _0x5d0f98.log("VIPTEAM", "Scanning text content of all elements...");
      const _0x1c0feb = document.querySelectorAll("p, div, span, td, li, pre, code, strong, em, b, i, h1, h2, h3, h4, h5, h6");
      for (let _0x232e4c of _0x1c0feb) {
        const _0x526daa = _0x232e4c.textContent || _0x232e4c.innerText || "";
        const _0x45d533 = _0x526daa.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
        if (_0x45d533) {
          const _0x3ea9a8 = _0x45d533[0].replace(/[.,;:'")\]}]+$/, "");
          _0x5d0f98.log("VIPTEAM", "Found vplink URL in element text: " + _0x3ea9a8);
          return _0x3ea9a8;
        }
      }
      _0x5d0f98.log("VIPTEAM", "Full page text scan...");
      const _0x335edc = document.body.innerText;
      const _0x5c2378 = _0x335edc.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
      if (_0x5c2378) {
        const _0xac5afe = _0x5c2378[0].replace(/[.,;:'")\]}]+$/, "");
        _0x5d0f98.log("VIPTEAM", "Found vplink URL in body text: " + _0xac5afe);
        return _0xac5afe;
      }
      _0x5d0f98.log("VIPTEAM", "Scanning all element attributes...");
      const _0x3804f5 = document.querySelectorAll("*");
      for (let _0x302d3f of _0x3804f5) {
        for (let _0x271460 of _0x302d3f.attributes) {
          if (_0x271460.value && _0x271460.value.includes("vplink.in")) {
            const _0x5cf9d4 = _0x271460.value.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
            if (_0x5cf9d4) {
              const _0x2bcd68 = _0x5cf9d4[0].replace(/[.,;:'")\]}]+$/, "");
              _0x5d0f98.log("VIPTEAM", "Found vplink URL in attribute: " + _0x2bcd68);
              return _0x2bcd68;
            }
          }
        }
        const _0x32d917 = _0x302d3f.dataset;
        for (let _0x36161a in _0x32d917) {
          if (_0x32d917[_0x36161a] && _0x32d917[_0x36161a].includes("vplink.in")) {
            const _0x375e43 = _0x32d917[_0x36161a].match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
            if (_0x375e43) {
              const _0x51a775 = _0x375e43[0].replace(/[.,;:'")\]}]+$/, "");
              _0x5d0f98.log("VIPTEAM", "Found vplink URL in data attribute: " + _0x51a775);
              return _0x51a775;
            }
          }
        }
      }
      _0x5d0f98.log("VIPTEAM", "Scanning script tags...");
      const _0x51a4c1 = document.querySelectorAll("script");
      for (let _0x468ba5 of _0x51a4c1) {
        const _0x36fdf4 = _0x468ba5.textContent || _0x468ba5.innerText || "";
        if (_0x36fdf4.includes("vplink.in")) {
          const _0xbcf947 = _0x36fdf4.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
          if (_0xbcf947) {
            const _0x2a2f01 = _0xbcf947[0].replace(/[.,;:'")\]}]+$/, "");
            _0x5d0f98.log("VIPTEAM", "Found vplink URL in script: " + _0x2a2f01);
            return _0x2a2f01;
          }
        }
      }
      _0x5d0f98.log("VIPTEAM", "No vplink.in URL found after comprehensive scan");
      return null;
    } catch (_0x1a5907) {
      _0x5d0f98.error("VIPTEAM", "Extraction error: " + _0x1a5907.message);
      return null;
    }
  }
  function _0x30b994(_0x2d26b0) {
    try {
      let _0xf90db3 = _0x2d26b0.trim();
      _0xf90db3 = _0xf90db3.split("?")[0].split("#")[0];
      const _0x234b53 = new URL(_0xf90db3);
      let _0x256194 = _0x234b53.pathname;
      _0x256194 = _0x256194.replace(/^\/+|\/+$/g, "");
      const _0x1cdd9e = _0x256194.split("/")[0];
      if (!_0x1cdd9e || _0x1cdd9e.length === 0) {
        _0x5d0f98.error("VIPTEAM", "Empty key extracted from URL: " + _0x2d26b0);
        return null;
      }
      _0x5d0f98.log("VIPTEAM", "Extracted VP key: " + _0x1cdd9e);
      return _0x1cdd9e;
    } catch (_0x207c10) {
      _0x5d0f98.log("VIPTEAM", "URL parsing failed, trying regex extraction");
      try {
        const _0x370563 = _0x2d26b0.match(/vplink\.in\/([^\/\s?#]+)/);
        if (_0x370563 && _0x370563[1]) {
          _0x5d0f98.log("VIPTEAM", "Regex extracted VP key: " + _0x370563[1]);
          return _0x370563[1];
        }
      } catch (_0x56a07a) {
        _0x5d0f98.error("VIPTEAM", "Regex extraction also failed: " + _0x56a07a.message);
      }
      _0x5d0f98.error("VIPTEAM", "All key extraction methods failed for URL: " + _0x2d26b0);
      return null;
    }
  }
  async function _0x4533a2(_0x1f04b3) {
    _0x5d0f98.log("VIPTEAM", "Starting extraction process");
    _0x38f85a("🔍", "EXTRACTING VPLINK.IN FROM PAGE...", "#ff00ff", "log-highlight");
    await new Promise(_0x366075 => setTimeout(_0x366075, 800));
    const _0x3ca0cf = _0x460a70();
    if (!_0x3ca0cf) {
      _0x38f85a("❌", "NO VPLINK.IN URL FOUND ON PAGE", "#ff4757", "log-error");
      _0x38f85a("⚠", "PAGE EXTRACTION FAILED", "#ffa500", "log-highlight");
      _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x38f85a("📊", "FAILURE ANALYSIS", "#ff4757", "log-highlight");
      _0x38f85a("●", "STATUS: FAILED", "#ff4757");
      _0x38f85a("●", "MODULE: VIPTEAM", "#ff00ff");
      _0x918363 = true;
      const _0x520ade = {
        url: _0x45d580.fallbackRedirectUrl,
        apiData: null,
        pin: _0x368676,
        isReal: false,
        serverMessage: "❌ NO VPLINK.IN URL FOUND",
        isError: true,
        isFakeUrl: true
      };
      _0x2a05a1 = _0x520ade;
      _0x7f40ac = Date.now() - _0x26b4b6;
      _0x228377();
      return;
    }
    _0x38f85a("✅", "FOUND: " + (_0x3ca0cf.length > 50 ? _0x3ca0cf.substring(0, 50) + "..." : _0x3ca0cf), "#2ecc71", "log-success");
    const _0x217c48 = _0x30b994(_0x3ca0cf);
    if (!_0x217c48) {
      _0x38f85a("❌", "FAILED TO EXTRACT KEY FROM URL", "#ff4757", "log-error");
      _0x38f85a("⚠", "KEY EXTRACTION FAILED", "#ffa500", "log-highlight");
      _0x918363 = true;
      const _0x3c1222 = {
        url: _0x45d580.fallbackRedirectUrl,
        apiData: null,
        pin: _0x368676,
        isReal: false,
        serverMessage: "❌ KEY EXTRACTION FAILED",
        isError: true,
        isFakeUrl: true
      };
      _0x2a05a1 = _0x3c1222;
      _0x7f40ac = Date.now() - _0x26b4b6;
      _0x228377();
      return;
    }
    _0x38f85a("🔑", "VP KEY: " + _0x217c48.toUpperCase(), "#ff00ff", "log-key-found");
    _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x38f85a("📡", "INITIALIZING VIPTEAM CONNECTION...", "#00f2ff", "log-highlight");
    await _0x2cf3b7(_0x1f04b3, _0x217c48);
  }
  async function _0x2cf3b7(_0x51a887, _0x47b9d8, _0x519b5c = 1) {
    const _0x1834a0 = 3;
    _0x5d0f98.log("VIPTEAM", "fetchVipteamRedirectUrl: type=" + _0x51a887 + ", vpKey=" + _0x47b9d8 + ", attempt=" + _0x519b5c + "/" + _0x1834a0);
    try {
      _0x5d0f98.log("VIPTEAM", "Generating TOTP pin...");
      const _0x352a1d = await _0x3870c9.generate();
      _0x368676 = _0x352a1d;
      _0x5d0f98.log("VIPTEAM", "PIN: " + _0x352a1d);
      const _0x5b23ec = _0x45d580.apiBaseUrl + "?file=crx.json&type=" + _0x51a887 + "&key=" + _0x45d580.apiKey + "&pin=" + _0x352a1d + "&vp=" + _0x47b9d8;
      if (_0x519b5c > 1) {
        _0x38f85a("🔄", "ATTEMPT " + _0x519b5c + " OF " + _0x1834a0, "#ffa500", "log-highlight");
      }
      _0x38f85a("📡", "REQUESTING: " + _0x45d580.apiBaseUrl + "?file=crx.json&type=" + _0x51a887 + "&key=" + _0x45d580.apiKey + "&pin=******&vp=" + _0x47b9d8, "#4a5568");
      const _0x45f68b = new AbortController();
      const _0x3e3f26 = setTimeout(() => {
        _0x5d0f98.log("VIPTEAM", "Request timeout, aborting...");
        _0x45f68b.abort();
      }, 15000);
      const _0x2c16ab = performance.now();
      const _0x2595c9 = await fetch(_0x5b23ec, {
        signal: _0x45f68b.signal,
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache"
        }
      });
      clearTimeout(_0x3e3f26);
      _0x5d0f98.log("VIPTEAM", "Response: " + _0x2595c9.status + " (" + (performance.now() - _0x2c16ab).toFixed(0) + "ms)");
      _0x38f85a("📡", "RESPONSE: " + _0x2595c9.status + " " + _0x2595c9.statusText, _0x2595c9.ok ? "#2ecc71" : "#ff4757");
      if (!_0x2595c9.ok) {
        _0x5d0f98.log("VIPTEAM", "Trying previous TOTP window...");
        const _0x51720a = await _0x3870c9.generate(-1);
        _0x368676 = _0x51720a;
        _0x38f85a("🔐", "CHECKING PREVIOUS WINDOW...", "#00f2ff");
        const _0x276efb = _0x45d580.apiBaseUrl + "?file=crx.json&type=" + _0x51a887 + "&key=" + _0x45d580.apiKey + "&pin=" + _0x51720a + "&vp=" + _0x47b9d8;
        const _0x3bf475 = await fetch(_0x276efb, {
          headers: {
            Accept: "application/json"
          }
        });
        _0x5d0f98.log("VIPTEAM", "Retry response: " + _0x3bf475.status);
        _0x38f85a("📡", "RETRY RESPONSE: " + _0x3bf475.status, _0x3bf475.ok ? "#2ecc71" : "#ff4757");
        if (!_0x3bf475.ok) {
          if (_0x519b5c < _0x1834a0) {
            _0x5d0f98.log("VIPTEAM", "Retrying (" + (_0x519b5c + 1) + "/" + _0x1834a0 + ")...");
            _0x38f85a("⏳", "RETRYING (" + (_0x519b5c + 1) + "/" + _0x1834a0 + ")...", "#ffa500");
            await new Promise(_0x2c0f7c => setTimeout(_0x2c0f7c, 2000));
            return _0x2cf3b7(_0x51a887, _0x47b9d8, _0x519b5c + 1);
          }
          throw new Error("FAILED AFTER " + _0x1834a0 + " ATTEMPTS");
        }
        const _0x2bf154 = await _0x3bf475.json();
        _0x293f94 = _0x2bf154;
        return _0x118786(_0x2bf154, _0x51720a, _0x47b9d8, _0x519b5c);
      }
      const _0x5cc8b7 = await _0x2595c9.json();
      _0x5d0f98.log("VIPTEAM", "Response data received");
      _0x293f94 = _0x5cc8b7;
      return _0x118786(_0x5cc8b7, _0x352a1d, _0x47b9d8, _0x519b5c);
    } catch (_0x417c14) {
      _0x5d0f98.error("VIPTEAM", "Error: " + _0x417c14.message);
      _0x38f85a("❌", "ERROR: " + _0x417c14.message, "#ff4757", "log-error");
      if (_0x519b5c < _0x1834a0) {
        _0x5d0f98.log("VIPTEAM", "Retrying after error (" + (_0x519b5c + 1) + "/" + _0x1834a0 + ")...");
        _0x38f85a("⏳", "RETRYING (" + (_0x519b5c + 1) + "/" + _0x1834a0 + ")...", "#ffa500");
        await new Promise(_0x3e6792 => setTimeout(_0x3e6792, 2000));
        return _0x2cf3b7(_0x51a887, _0x47b9d8, _0x519b5c + 1);
      }
      _0x5d0f98.error("VIPTEAM", "All " + _0x1834a0 + " attempts exhausted");
      _0x38f85a("❌", "ALL " + _0x1834a0 + " ATTEMPTS EXHAUSTED", "#ff4757", "log-error");
      return _0x42da2c("❌ SERVER REJECTED AFTER MAX ATTEMPTS");
    }
  }
  function _0x118786(_0x549647, _0x57dc3c, _0x597e9a, _0x24d62d) {
    const _0x52e939 = 3;
    const _0x22067e = _0x549647.destinationLink || _0x45d580.fallbackRedirectUrl;
    _0x5d0f98.log("VIPTEAM", "Processing response, destination: " + (_0x22067e || "N/A").substring(0, 60));
    _0x38f85a("📋", "PARSING SERVER RESPONSE...", "#00f2ff", "log-highlight");
    _0x38f85a("●", "TYPE: " + (_0x549647.type || "N/A").toUpperCase(), "#4a5568");
    _0x38f85a("●", "VERIFIED: " + (_0x549647.verified ? "✅ YES" : "❌ NO"), _0x549647.verified ? "#2ecc71" : "#ff4757");
    _0x38f85a("●", "OWNER: " + (_0x549647.owner || "@A2MBD3"), "#718096");
    _0x38f85a("●", "PIN EXPIRES: " + (_0x549647.pinExpiresIn || "N/A"), "#4a5568");
    if (_0x549647.success !== undefined) {
      _0x38f85a("●", "SUCCESS FLAG: " + _0x549647.success, _0x549647.success ? "#2ecc71" : "#ff4757");
    }
    if (_0x549647.destinationLink) {
      const _0xb03126 = _0x549647.destinationLink.length > 50 ? _0x549647.destinationLink.substring(0, 50) + "..." : _0x549647.destinationLink;
      _0x38f85a("🔗", "DESTINATION: " + _0xb03126, "#4a5568");
    }
    if (_0x4479c4(_0x22067e)) {
      _0x5d0f98.log("VIPTEAM", "Fake URL (Telegram link) detected");
      _0x38f85a("⚠", "FAKE URL DETECTED (Attempt " + _0x24d62d + "/" + _0x52e939 + ")", "#ffa500", "log-highlight");
      if (_0x24d62d < _0x52e939) {
        _0x38f85a("🔄", "RETRYING... Attempt " + (_0x24d62d + 1) + " of " + _0x52e939, "#ffa500", "log-highlight");
        return _0x2cf3b7(_0x549647.type || "vp", _0x597e9a, _0x24d62d + 1);
      }
      _0x38f85a("❌", "ALL " + _0x52e939 + " ATTEMPTS FAILED — FAKE URLS", "#ff4757", "log-error");
      return _0x42da2c("❌ SERVER REJECTED — FAKE URLS AFTER MAX ATTEMPTS");
    } else if (_0x59ce1f(_0x22067e)) {
      _0x5d0f98.log("VIPTEAM", "Valid redirect URL found!");
      _0x38f85a("✅", "AUTHENTIC VIP TEAM LINK FOUND!", "#2ecc71", "log-success");
      return _0x223bbc(_0x22067e, _0x549647, _0x57dc3c);
    } else {
      _0x5d0f98.log("VIPTEAM", "Invalid URL format");
      _0x38f85a("⚠", "INVALID URL FORMAT (Attempt " + _0x24d62d + "/" + _0x52e939 + ")", "#ffa500", "log-highlight");
      if (_0x24d62d < _0x52e939) {
        _0x38f85a("🔄", "RETRYING... Attempt " + (_0x24d62d + 1) + " of " + _0x52e939, "#ffa500", "log-highlight");
        return _0x2cf3b7(_0x549647.type || "vp", _0x597e9a, _0x24d62d + 1);
      }
      _0x38f85a("❌", "ALL " + _0x52e939 + " ATTEMPTS FAILED — INVALID URLS", "#ff4757", "log-error");
      return _0x42da2c("❌ SERVER REJECTED — INVALID URLS AFTER MAX ATTEMPTS");
    }
  }
  function _0x223bbc(_0x610121, _0x316a86, _0x22d4ba) {
    _0x5d0f98.log("VIPTEAM", "SUCCESS, redirect: " + _0x610121.substring(0, 60));
    _0x3c34bd = true;
    _0xe90d44 = Date.now();
    const _0x1ac706 = _0xe90d44 - _0x26b4b6;
    _0x38f85a("✅", "VIP LINK VERIFIED SUCCESSFULLY", "#2ecc71", "log-success");
    _0x38f85a("🎯", "TARGET ACQUIRED SUCCESSFULLY", "#2ecc71", "log-success");
    _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x38f85a("📊", "FINAL ANALYSIS", "#ffa500", "log-highlight");
    _0x38f85a("●", "STATUS: SUCCESS", "#2ecc71", "log-success");
    _0x38f85a("●", "TYPE: VIPTEAM", "#ff00ff");
    _0x38f85a("●", "ELAPSED: " + (_0x1ac706 / 1000).toFixed(1) + "s", "#4a5568");
    const _0x5eefc0 = Math.max(0, _0x45d580.minProgressTime - _0x1ac706);
    _0x918363 = true;
    const _0x372836 = {
      url: _0x610121,
      apiData: _0x316a86,
      pin: _0x22d4ba,
      isReal: true,
      serverMessage: "✅ VIP LINK VERIFIED",
      isError: false,
      isFakeUrl: false
    };
    _0x2a05a1 = _0x372836;
    if (_0x1ac706 >= _0x45d580.minProgressTime) {
      _0x7f40ac = _0x1ac706;
      _0x228377();
    } else {
      _0x7f40ac = _0x45d580.minProgressTime;
      _0x1d559b(_0x5eefc0);
    }
    return _0x2a05a1;
  }
  function _0x42da2c(_0x3b881f) {
    _0x5d0f98.error("VIPTEAM", "FAILURE: " + _0x3b881f);
    _0x3c34bd = false;
    _0xe90d44 = Date.now();
    const _0x4a2362 = _0xe90d44 - _0x26b4b6;
    _0x38f85a("❌", _0x3b881f, "#ff4757", "log-error");
    _0x38f85a("⚠", "FALLBACK PROTOCOL ACTIVATED", "#ffa500", "log-highlight");
    _0x38f85a("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x38f85a("📊", "FAILURE ANALYSIS", "#ff4757", "log-highlight");
    _0x38f85a("●", "STATUS: FAILED", "#ff4757");
    _0x38f85a("●", "TYPE: VIPTEAM", "#ff00ff");
    _0x38f85a("●", "ELAPSED: " + (_0x4a2362 / 1000).toFixed(1) + "s", "#4a5568");
    _0x918363 = true;
    const _0x2cd5e0 = {
      url: _0x45d580.fallbackRedirectUrl,
      apiData: _0x293f94,
      pin: _0x368676,
      isReal: false,
      serverMessage: _0x3b881f,
      isError: true,
      isFakeUrl: true
    };
    _0x2a05a1 = _0x2cd5e0;
    _0x7f40ac = _0x4a2362;
    _0x228377();
    return _0x2a05a1;
  }
  function _0x2111ec(_0xa36acf, _0x5b63d4, _0x51c759) {
    _0x5d0f98.log("REDIRECT", "Redirecting to: " + _0xa36acf.substring(0, 60));
    if (_0x1e0c13) {
      return;
    }
    _0x1e0c13 = true;
    _0x56e0a2();
    const _0x1370ad = document.getElementById("log-output");
    if (_0x1370ad) {
      const _0xd0293b = document.createElement("div");
      _0xd0293b.style.cssText = "text-align:center;margin-top:10px;animation:nb-fadeIn 0.5s ease forwards;flex-shrink:0;";
      if (_0x51c759) {
        _0xd0293b.innerHTML = "\n          <div class=\"nb-success-check\">✓</div>\n          <div style=\"color:var(--success-color);font-size:14px;font-weight:800;letter-spacing:1px;margin-top:6px;\">SUCCESS</div>\n          <div style=\"color:var(--text-muted);font-size:10px;margin-top:2px;\">" + _0x306375 + " — AUTHENTIC REDIRECT</div>\n          <div style=\"color:var(--success-color);font-size:9px;margin-top:2px;word-break:break-all;\">" + (_0xa36acf.length > 50 ? _0xa36acf.substring(0, 50) + "..." : _0xa36acf) + "</div>\n          <div id=\"nb-cd\" style=\"color:var(--text-color);font-size:9px;margin-top:6px;font-weight:700;\">REDIRECTING IN 3s...</div>\n        ";
      } else {
        _0xd0293b.innerHTML = "\n          <div style=\"width:40px;height:40px;background:var(--danger-color);color:#fff;border-radius:50%;font-size:20px;display:flex;justify-content:center;align-items:center;margin:0 auto 6px;box-shadow:0 0 20px rgba(255,71,87,0.4);animation:nb-fadeIn 0.4s ease forwards;flex-shrink:0;\">✕</div>\n          <div style=\"color:var(--danger-color);font-size:14px;font-weight:800;letter-spacing:1px;margin-top:6px;\">SERVER REJECTED</div>\n          <div style=\"color:var(--text-muted);font-size:10px;margin-top:2px;\">" + _0x306375 + " — FALLBACK ACTIVATED</div>\n          <div style=\"color:var(--danger-color);font-size:9px;margin-top:2px;\">ALL RETRIES EXHAUSTED</div>\n          <div id=\"nb-cd\" style=\"color:var(--text-color);font-size:9px;margin-top:6px;font-weight:700;\">REDIRECTING IN 3s...</div>\n        ";
      }
      _0x1370ad.appendChild(_0xd0293b);
      _0x1370ad.scrollTop = _0x1370ad.scrollHeight;
    }
    let _0x5813aa = 3;
    const _0x284928 = setInterval(() => {
      _0x5813aa--;
      const _0x27e2e1 = document.getElementById("nb-cd");
      if (_0x27e2e1) {
        _0x27e2e1.textContent = "REDIRECTING IN " + _0x5813aa + "s...";
      }
      if (_0x5813aa <= 0) {
        clearInterval(_0x284928);
        if (_0x5b63d4) {
          _0x5b63d4.style.transition = "opacity 0.4s";
          _0x5b63d4.style.opacity = "0";
        }
        setTimeout(() => {
          try {
            window.location.replace(_0xa36acf);
          } catch (_0x49bad3) {
            window.location.href = _0xa36acf;
          }
        }, 400);
      }
    }, 1000);
  }
  (async function () {
    _0x5d0f98.log("BOOT", "═══════ NEBULA v20.1 BOOTING ═══════");
    _0x5d0f98.log("BOOT", "Protocol: " + window.location.protocol);
    _0x5d0f98.log("BOOT", "URL: " + window.location.href);
    await _0x271f92();
    await _0x130b6b();
    if (_0x241d5f()) {
      _0x2b4a32();
      return;
    }
    if (_0x45d580.status === 0) {
      _0x309632();
      return;
    }
    if (_0x45d580.status === 2) {
      _0x286f55();
      return;
    }
    await _0x2cb7b2();
    _0x5d0f98.log("BOOT", "═══════ BOOT COMPLETE ═══════");
    _0x40de97();
  })();
})();
