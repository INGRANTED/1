(function () {
  "use strict";
  const _0x304696 = {
    _logs: [],
    log: function (_0x5732f0, _0x402f23, _0x1a54bf) {
      const _0x1e3cdc = {
        time: new Date().toISOString().split("T")[1].split(".")[0],
        tag: _0x5732f0,
        msg: _0x402f23,
        data: _0x1a54bf || null
      };
      this._logs.push(_0x1e3cdc);
      if (this._logs.length > 500) {
        this._logs.shift();
      }
      console.log("[" + _0x1e3cdc.time + "] [" + _0x5732f0 + "] " + _0x402f23, _0x1a54bf || "");
    },
    error: function (_0x3b1fd5, _0x5f0f96, _0x1b4121) {
      const _0x292374 = {
        time: new Date().toISOString().split("T")[1].split(".")[0],
        tag: _0x3b1fd5,
        msg: _0x5f0f96,
        data: _0x1b4121 || null,
        error: true
      };
      this._logs.push(_0x292374);
      if (this._logs.length > 500) {
        this._logs.shift();
      }
      console.error("[" + _0x292374.time + "] [" + _0x3b1fd5 + "] " + _0x5f0f96, _0x1b4121 || "");
    },
    getLogs: function (_0x3016a8) {
      return this._logs.slice(-(_0x3016a8 || 50));
    },
    dump: function () {
      console.table(this._logs);
    }
  };
  let _0x5b0d47 = 0;
  if (typeof window.ABDULLAH_BOOKMARK_LOAD !== "undefined") {
    const _0x9a59d5 = window.ABDULLAH_BOOKMARK_LOAD;
    const _0x4a0787 = parseInt(_0x9a59d5);
    if (!isNaN(_0x4a0787)) {
      _0x5b0d47 = _0x4a0787;
    } else {
      _0x5b0d47 = 0;
    }
  }
  _0x304696.log("INIT", "USER_ID set", _0x5b0d47);
  let _0x3f86cb = {
    status: 1,
    musicListUrl: "https://raw.githubusercontent.com/INGRANTED/bypass/refs/heads/main/music.txt",
    apiBaseUrl: "https://lol.amin89310.workers.dev",
    apiKey: "abdullah",
    totpSecret: "6ZQ4X3VPEK5XG2Q",
    fallbackRedirectUrl: "https://htmlpreview.github.io/?https://raw.githubusercontent.com/A2MBD3/Aincrad/main/index.html",
    initProgressTime: 10000,
    exploitProgressTime: 30000,
    minProgressTime: 30000,
    autoInitDelay: 10000
  };
  const _0x706991 = {
    id: _0x5b0d47,
    name: "ALAMIN",
    tgChannel: "t.me/alamin_key_shop",
    password: "alamin",
    banned: 0
  };
  let _0x524954 = _0x706991;
  let _0x4f2873 = null;
  let _0x1ca769 = [];
  let _0xc7f707 = -1;
  let _0x5a2e6c = null;
  let _0x4cbe3d = null;
  let _0x57f675 = null;
  let _0x149ec6 = null;
  let _0x2007e2 = function () {};
  let _0x23da8a = null;
  let _0x319432 = null;
  let _0x1f824e = false;
  let _0x21d4f9 = false;
  let _0x9e6557 = false;
  let _0x1ccb09 = null;
  let _0x3adb76 = null;
  let _0x2ee074 = [];
  let _0x5f4dbe = null;
  let _0x14fde6 = false;
  let _0x19c0c8 = null;
  let _0x36b230 = null;
  let _0x4084bf = null;
  let _0x21bb78 = false;
  let _0x8ec053 = false;
  let _0x27df9e = null;
  let _0x4e94eb = "------";
  let _0x2e06fc = null;
  let _0x132cad = false;
  let _0x31134b = null;
  let _0x4e3291 = null;
  let _0x122b6c = null;
  let _0x7ad4a5 = [];
  let _0x231fec = null;
  let _0x5c2b26 = false;
  let _0x5ef0d1 = false;
  let _0x305f7a = null;
  let _0x1173ba = false;
  let _0xac4935 = null;
  let _0x5a5bee = false;
  class _0x4b62f0 {
    constructor(_0x22b43a = "JBSWY3DPEHPK3PXP") {
      this.secret = _0x22b43a;
      this.timeStep = 30;
      this.digits = 6;
      this._checkCrypto();
    }
    _sha1(_0x53646d) {
      function _0x5df637(_0x227a8b, _0x48ae5f) {
        return _0x227a8b << _0x48ae5f | _0x227a8b >>> 32 - _0x48ae5f;
      }
      let _0x41037d = 1732584193;
      let _0x4e8a07 = 4023233417;
      let _0xb84291 = 2562383102;
      let _0x53dd0a = 271733878;
      let _0x51fd76 = 3285377520;
      const _0x57b16b = _0x53646d.length * 8;
      _0x53646d.push(128);
      while (_0x53646d.length % 64 !== 56) {
        _0x53646d.push(0);
      }
      _0x53646d.push(0, 0, 0, 0);
      for (let _0x5a25d1 = 3; _0x5a25d1 >= 0; _0x5a25d1--) {
        _0x53646d.push(_0x57b16b >>> _0x5a25d1 * 8 & 255);
      }
      for (let _0x5beda9 = 0; _0x5beda9 < _0x53646d.length; _0x5beda9 += 64) {
        const _0x5c5fd3 = [];
        for (let _0x13dd0c = 0; _0x13dd0c < 16; _0x13dd0c++) {
          _0x5c5fd3[_0x13dd0c] = _0x53646d[_0x5beda9 + _0x13dd0c * 4] << 24 | _0x53646d[_0x5beda9 + _0x13dd0c * 4 + 1] << 16 | _0x53646d[_0x5beda9 + _0x13dd0c * 4 + 2] << 8 | _0x53646d[_0x5beda9 + _0x13dd0c * 4 + 3];
        }
        for (let _0x43206a = 16; _0x43206a < 80; _0x43206a++) {
          _0x5c5fd3[_0x43206a] = _0x5df637(_0x5c5fd3[_0x43206a - 3] ^ _0x5c5fd3[_0x43206a - 8] ^ _0x5c5fd3[_0x43206a - 14] ^ _0x5c5fd3[_0x43206a - 16], 1);
        }
        let _0x1a5d99 = _0x41037d;
        let _0x2d39a4 = _0x4e8a07;
        let _0x406992 = _0xb84291;
        let _0x4460eb = _0x53dd0a;
        let _0x5c1efe = _0x51fd76;
        for (let _0x329251 = 0; _0x329251 < 80; _0x329251++) {
          let _0x5986a0;
          let _0x213bfa;
          if (_0x329251 < 20) {
            _0x5986a0 = _0x2d39a4 & _0x406992 | ~_0x2d39a4 & _0x4460eb;
            _0x213bfa = 1518500249;
          } else if (_0x329251 < 40) {
            _0x5986a0 = _0x2d39a4 ^ _0x406992 ^ _0x4460eb;
            _0x213bfa = 1859775393;
          } else if (_0x329251 < 60) {
            _0x5986a0 = _0x2d39a4 & _0x406992 | _0x2d39a4 & _0x4460eb | _0x406992 & _0x4460eb;
            _0x213bfa = 2400959708;
          } else {
            _0x5986a0 = _0x2d39a4 ^ _0x406992 ^ _0x4460eb;
            _0x213bfa = 3395469782;
          }
          const _0x575dfa = _0x5df637(_0x1a5d99, 5) + _0x5986a0 + _0x5c1efe + _0x213bfa + _0x5c5fd3[_0x329251] >>> 0;
          _0x5c1efe = _0x4460eb;
          _0x4460eb = _0x406992;
          _0x406992 = _0x5df637(_0x2d39a4, 30);
          _0x2d39a4 = _0x1a5d99;
          _0x1a5d99 = _0x575dfa;
        }
        _0x41037d = _0x41037d + _0x1a5d99 >>> 0;
        _0x4e8a07 = _0x4e8a07 + _0x2d39a4 >>> 0;
        _0xb84291 = _0xb84291 + _0x406992 >>> 0;
        _0x53dd0a = _0x53dd0a + _0x4460eb >>> 0;
        _0x51fd76 = _0x51fd76 + _0x5c1efe >>> 0;
      }
      const _0x42ebb3 = [];
      [_0x41037d, _0x4e8a07, _0xb84291, _0x53dd0a, _0x51fd76].forEach(_0x3f3355 => {
        for (let _0x1ac356 = 3; _0x1ac356 >= 0; _0x1ac356--) {
          _0x42ebb3.push(_0x3f3355 >>> _0x1ac356 * 8 & 255);
        }
      });
      return _0x42ebb3;
    }
    async hmacSha1(_0x4948a2, _0xafece) {
      const _0x502b37 = Array.from(_0x4948a2);
      const _0x224821 = Array.from(new Uint8Array(_0xafece));
      const _0x13d071 = 64;
      let _0x1aa470 = _0x502b37.length > _0x13d071 ? this._sha1([..._0x502b37]) : [..._0x502b37];
      while (_0x1aa470.length < _0x13d071) {
        _0x1aa470.push(0);
      }
      const _0x54a1b4 = _0x1aa470.map(_0x29acee => _0x29acee ^ 54);
      const _0x3625d7 = _0x1aa470.map(_0x272b1c => _0x272b1c ^ 92);
      const _0x15a1e6 = this._sha1([..._0x54a1b4, ..._0x224821]);
      const _0x1e40d8 = this._sha1([..._0x3625d7, ..._0x15a1e6]);
      return new Uint8Array(_0x1e40d8);
    }
    _checkCrypto() {
      this.cryptoAvailable = true;
      this.cryptoError = null;
      _0x304696.log("TOTP", "Using pure JS HMAC-SHA1 (no crypto.subtle needed)");
    }
    base32ToHex(_0x21cf6b) {
      const _0x3f6dff = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
      let _0xe9a847 = "";
      let _0x265846 = "";
      _0x21cf6b = _0x21cf6b.toUpperCase().replace(/=+$/, "");
      for (let _0x13a07d = 0; _0x13a07d < _0x21cf6b.length; _0x13a07d++) {
        const _0x5d993e = _0x3f6dff.indexOf(_0x21cf6b.charAt(_0x13a07d));
        if (_0x5d993e === -1) {
          throw new Error("Invalid base32 character");
        }
        _0xe9a847 += _0x5d993e.toString(2).padStart(5, "0");
      }
      for (let _0x354df5 = 0; _0x354df5 + 4 <= _0xe9a847.length; _0x354df5 += 4) {
        const _0x2ee7b9 = _0xe9a847.substr(_0x354df5, 4);
        _0x265846 += parseInt(_0x2ee7b9, 2).toString(16);
      }
      return _0x265846;
    }
    async generate(_0x2bf8f1 = 0) {
      _0x304696.log("TOTP", "generate() called with offset=" + _0x2bf8f1);
      const _0x4d2542 = performance.now();
      const _0x426c16 = this.base32ToHex(this.secret);
      const _0xd0aa61 = Math.floor(Date.now() / 1000);
      const _0x1c5055 = Math.floor(_0xd0aa61 / this.timeStep) + _0x2bf8f1;
      _0x304696.log("TOTP", "Epoch=" + _0xd0aa61 + ", Time window=" + _0x1c5055);
      const _0x2d32f6 = new ArrayBuffer(8);
      const _0x2311ad = new DataView(_0x2d32f6);
      _0x2311ad.setUint32(4, _0x1c5055, false);
      const _0x4d3f1a = new Uint8Array(_0x426c16.match(/.{2}/g).map(_0x760d04 => parseInt(_0x760d04, 16)));
      const _0x5a6cf2 = await this.hmacSha1(_0x4d3f1a, _0x2d32f6);
      const _0x3c7bac = _0x5a6cf2[_0x5a6cf2.length - 1] & 15;
      const _0x5bf97c = (_0x5a6cf2[_0x3c7bac] & 127) << 24 | (_0x5a6cf2[_0x3c7bac + 1] & 255) << 16 | (_0x5a6cf2[_0x3c7bac + 2] & 255) << 8 | _0x5a6cf2[_0x3c7bac + 3] & 255;
      const _0x58a3a5 = _0x5bf97c % Math.pow(10, this.digits);
      const _0x47248f = _0x58a3a5.toString().padStart(this.digits, "0");
      const _0x1d5c2d = (performance.now() - _0x4d2542).toFixed(2);
      _0x304696.log("TOTP", "PIN: " + _0x47248f + " (" + _0x1d5c2d + "ms)");
      return _0x47248f;
    }
  }
  const _0x2b860f = new _0x4b62f0(_0x3f86cb.totpSecret);
  _0x304696.log("INIT", "TOTPGenerator ready (pure JS)");
  function _0x4dcafa() {
    if (document.getElementById("nb-dynamic-styles")) {
      return;
    }
    const _0x3e2975 = document.createElement("style");
    _0x3e2975.id = "nb-dynamic-styles";
    _0x3e2975.textContent = "\n      :root{--bg-color:#e0e5ec;--electric-glow-1:#00f2ff;--electric-glow-2:#ff00ff;--success-color:#2ecc71;--danger-color:#ff4757;--emboss-light:#ffffff;--emboss-shadow:#a3b1c6;--text-color:#4a5568;--text-muted:#718096;--warning-color:#ffa500;--info-color:#00b4d8}\n      @keyframes nb-rotate-glow{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n      @keyframes nb-rotate-glow-reverse{0%{transform:rotate(360deg)}100%{transform:rotate(0deg)}}\n      @keyframes nb-fadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}\n      @keyframes nb-slideUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}\n      @keyframes nb-toast-in{from{opacity:0;transform:translateX(-50%) translateY(15px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}\n      @keyframes nb-progress-glow{0%,100%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(180deg)}}\n      @keyframes nb-pulse{0%,100%{opacity:0.6}50%{opacity:1}}\n      @keyframes nb-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}\n      @keyframes nb-glow-pulse{0%,100%{opacity:0.5}50%{opacity:0.9}}\n      @keyframes nb-log-highlight{0%{background:transparent}50%{background:rgba(0,242,255,0.06)}100%{background:transparent}}\n      @keyframes nb-log-success{0%{background:transparent}50%{background:rgba(46,204,113,0.06)}100%{background:transparent}}\n      @keyframes nb-log-error{0%{background:transparent}50%{background:rgba(255,71,87,0.06)}100%{background:transparent}}\n      @keyframes nb-key-found{0%{transform:scale(1)}50%{transform:scale(1.05);background:rgba(255,0,255,0.1)}100%{transform:scale(1)}}\n      .nb-overlay{position:fixed;inset:0;background:rgba(0,0,0,0.3);z-index:2147483647;display:grid;place-items:center;padding:20px;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);animation:nb-fadeIn 0.3s ease;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;overflow:hidden}\n      .nb-electric-wrapper{position:relative;padding:3px;border-radius:24px;background:rgba(0,0,0,0.05);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.1);width:420px;max-width:calc(100vw - 40px);flex-shrink:0}\n      .nb-glow-layer{position:absolute;inset:-50%;pointer-events:none;z-index:0;opacity:1;animation:nb-glow-pulse 3s ease-in-out infinite}\n      .nb-glow-layer.glow-default{background:conic-gradient(transparent 0deg,rgba(0,242,255,1) 60deg,transparent 120deg,rgba(255,0,255,1) 180deg,transparent 240deg,rgba(0,242,255,1) 300deg,transparent 360deg);animation:nb-rotate-glow 4s linear infinite;opacity:1}\n      .nb-glow-layer.glow-focus-1{background:conic-gradient(transparent 0deg,var(--electric-glow-1) 90deg,transparent 180deg,var(--electric-glow-2) 270deg,transparent 360deg);animation:nb-rotate-glow 2.5s linear infinite;opacity:0;transition:opacity 0.4s ease}\n      .nb-glow-layer.glow-focus-2{background:conic-gradient(transparent 0deg,var(--electric-glow-2) 90deg,transparent 180deg,var(--electric-glow-1) 270deg,transparent 360deg);animation:nb-rotate-glow-reverse 3s linear infinite;opacity:0;transition:opacity 0.4s ease}\n      .nb-container{position:relative;background:var(--bg-color);padding:24px 20px;border-radius:21px;text-align:center;z-index:1;width:100%;box-sizing:border-box;max-height:calc(100vh - 46px);overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch}\n      .nb-container.overflow-visible{overflow-y:visible}\n      .nb-container::-webkit-scrollbar{width:3px}\n      .nb-container::-webkit-scrollbar-thumb{background:var(--emboss-shadow);border-radius:10px}\n      .nb-title{color:var(--text-color);margin:0 0 4px;font-weight:800;font-size:20px;letter-spacing:1px;word-break:break-word}\n      .nb-subtitle{color:var(--text-muted);font-size:12px;margin:0 0 18px;letter-spacing:2px;line-height:1.5}\n      .nb-emboss-input{width:100%;padding:14px;border:none;outline:none;background:var(--bg-color);border-radius:14px;font-size:15px;font-weight:700;text-align:center;color:var(--text-color);letter-spacing:4px;box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light);transition:all 0.3s cubic-bezier(0.4,0,0.2,1);box-sizing:border-box;font-family:inherit}\n      .nb-emboss-input:focus{box-shadow:inset 2px 2px 5px var(--emboss-shadow),inset -2px -2px 5px var(--emboss-light),0 0 15px var(--electric-glow-1)}\n      .nb-emboss-input.error{box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light),0 0 0 2px var(--danger-color)!important;animation:nb-shake 0.4s ease}\n      .nb-emboss-input.success{box-shadow:inset 6px 6px 12px var(--emboss-shadow),inset -6px -6px 12px var(--emboss-light),0 0 0 2px var(--success-color)!important}\n      .nb-error-text{color:var(--danger-color);font-size:11px;font-weight:600;margin:6px 0 10px;display:none;letter-spacing:1px}\n      .nb-emboss-btn{width:100%;padding:14px;border:none;border-radius:14px;background:var(--bg-color);color:var(--text-color);font-weight:700;font-size:13px;cursor:pointer;letter-spacing:2px;font-family:inherit;text-transform:uppercase;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light);transition:all 0.2s ease;margin-bottom:10px;flex-shrink:0}\n      .nb-emboss-btn:active{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light);transform:scale(0.98)}\n      .nb-emboss-btn:disabled{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light)!important;transform:none!important;opacity:0.7;cursor:not-allowed}\n      .nb-unban-btn{background:linear-gradient(135deg, #667eea 0%, #764ba2 100%)!important;color:white!important;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light),0 0 20px rgba(102,126,234,0.3)!important}\n      .nb-unban-btn:active{box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light),0 0 10px rgba(102,126,234,0.2)!important}\n      .nb-music-btn{position:absolute;top:12px;right:12px;z-index:2;background:var(--bg-color);border:none;color:var(--text-color);border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;box-shadow:3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light);transition:all 0.2s ease;flex-shrink:0}\n      .nb-music-btn:active{box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)}\n      .nb-back-btn{position:absolute;top:12px;left:12px;z-index:2;background:var(--bg-color);border:none;color:var(--text-color);border-radius:50%;width:34px;height:34px;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;box-shadow:3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light);transition:all 0.2s ease;flex-shrink:0}\n      .nb-back-btn:active{box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)}\n      .nb-divider{width:50px;height:2px;background:linear-gradient(90deg,transparent,var(--text-muted),transparent);margin:12px auto}\n      .nb-uid{color:var(--text-muted);font-size:9px;letter-spacing:4px;opacity:0.7}\n      .nb-track{min-height:16px;margin-bottom:16px;font-size:9px;color:var(--text-muted);opacity:0.5;letter-spacing:1px}\n      .nb-footer{font-size:7px;color:var(--text-muted);opacity:1;margin-top:8px;letter-spacing:1px;flex-shrink:0}\n      .nb-footer a{color:#000;text-decoration:none;font-size:inherit;text-shadow:0 0 4px rgba(108,92,231,0.7),0 0 10px rgba(108,92,231,0.5),0 0 20px rgba(108,92,231,0.3)}\n      .nb-live-dot{width:7px;height:7px;background:var(--danger-color);border-radius:50%;box-shadow:0 0 6px var(--danger-color);animation:nb-pulse 1.5s infinite;flex-shrink:0}\n      .nb-log-area{color:var(--text-muted);font-size:8.5px;line-height:1.4;text-align:left;max-height:35vh;overflow-y:auto;overflow-x:hidden;padding:12px;margin-bottom:10px;border-radius:12px;background:var(--bg-color);box-shadow:inset 4px 4px 8px var(--emboss-shadow),inset -4px -4px 8px var(--emboss-light);word-break:break-all;-webkit-overflow-scrolling:touch;font-family:'Segoe UI',Roboto,sans-serif}\n      .nb-log-area::-webkit-scrollbar{width:2px}\n      .nb-log-area::-webkit-scrollbar-thumb{background:var(--emboss-shadow);border-radius:10px}\n      .nb-progress-bar-bg{width:100%;height:6px;background:var(--bg-color);border-radius:10px;box-shadow:inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light);overflow:hidden;margin:8px 0;flex-shrink:0}\n      .nb-progress-bar-fill{height:100%;width:0%;border-radius:10px;background:linear-gradient(90deg,var(--electric-glow-1),var(--electric-glow-2),var(--success-color));background-size:200% 100%;animation:nb-progress-glow 4s linear infinite;transition:width 0.15s linear}\n      .nb-progress-bar-fill.error-fill{background:linear-gradient(90deg,var(--danger-color),var(--warning-color),var(--danger-color))!important}\n      .nb-progress-bar-fill.vipteam-success{background:linear-gradient(90deg,#ff00ff,var(--success-color),#ff00ff)!important;background-size:200% 100%!important;animation:nb-progress-glow 2s linear infinite!important}\n      .nb-progress-label{display:flex;justify-content:space-between;align-items:center;font-size:8px;letter-spacing:2px;color:var(--text-color);margin-bottom:4px;flex-shrink:0}\n      .nb-success-check{width:45px;height:45px;background:var(--success-color);color:#fff;border-radius:50%;font-size:22px;display:flex;justify-content:center;align-items:center;margin:0 auto 8px;box-shadow:0 0 20px rgba(46,204,113,0.4);animation:nb-fadeIn 0.4s ease forwards;flex-shrink:0}\n      .nb-exploit-header{display:flex;align-items:center;gap:6px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--emboss-shadow);flex-shrink:0}\n      .nb-exploit-title{color:var(--text-color);font-size:8px;letter-spacing:2px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}\n      .nb-status-icon{font-size:45px;margin-bottom:10px}\n      .nb-suspended-icon{font-size:45px;margin-bottom:10px;animation:nb-pulse 2s infinite}\n      .nb-status-user{color:var(--text-muted);font-size:10px;line-height:1.4}\n      .nb-loading-spinner{display:inline-block;width:18px;height:18px;border:2px solid var(--emboss-shadow);border-radius:50%;border-top-color:var(--electric-glow-1);animation:nb-rotate-glow 1s linear infinite;margin-right:8px;vertical-align:middle}\n      .nb-log-entry{display:flex;align-items:center;margin-bottom:2px;padding:2px 6px;border-radius:4px;animation:nb-slideUp 0.3s ease}\n      .nb-log-entry.log-info{background:transparent}\n      .nb-log-entry.log-success{animation:nb-log-success 1.5s ease}\n      .nb-log-entry.log-error{animation:nb-log-error 1.5s ease}\n      .nb-log-entry.log-highlight{animation:nb-log-highlight 1.5s ease}\n      .nb-log-entry.log-key-found{animation:nb-key-found 0.5s ease}\n      .nb-log-icon{font-size:10px;margin-right:5px;min-width:14px;text-align:center;flex-shrink:0}\n      .nb-log-text{font-size:8.5px;line-height:1.3;flex:1;font-weight:600;letter-spacing:0.3px}\n      .nb-retry-badge{display:inline-block;background:var(--warning-color);color:#fff;font-size:7px;padding:1px 4px;border-radius:3px;margin-left:4px;font-weight:700}\n      .nb-log-separator{text-align:center;margin:2px 0;opacity:0.25}\n    ";
    document.head.appendChild(_0x3e2975);
  }
  function _0x56d82c(_0x4ec1b6) {
    const _0x111ba3 = document.createElement("div");
    _0x111ba3.className = "nb-glow-layer glow-default";
    _0x4ec1b6.appendChild(_0x111ba3);
    const _0x52d68b = document.createElement("div");
    _0x52d68b.className = "nb-glow-layer glow-focus-1";
    _0x4ec1b6.appendChild(_0x52d68b);
    const _0x296f91 = document.createElement("div");
    _0x296f91.className = "nb-glow-layer glow-focus-2";
    _0x4ec1b6.appendChild(_0x296f91);
    const _0x22b88f = {
      defaultGlow: _0x111ba3,
      focusGlow1: _0x52d68b,
      focusGlow2: _0x296f91
    };
    return _0x22b88f;
  }
  function _0x37d5aa(_0x3686d0, _0x2b5444) {
    if (_0x3686d0) {
      _0x3686d0.style.opacity = "1";
    }
    if (_0x2b5444) {
      _0x2b5444.style.opacity = "1";
    }
  }
  function _0x483c13(_0x372f7b, _0x10ef07) {
    if (_0x372f7b) {
      _0x372f7b.style.opacity = "0";
    }
    if (_0x10ef07) {
      _0x10ef07.style.opacity = "0";
    }
  }
  function _0x429d33() {
    if (_0x5c2b26) {
      return;
    }
    _0x5c2b26 = true;
    _0x304696.log("UI", "Log queue started");
    _0x231fec = setInterval(() => {
      if (_0x7ad4a5.length > 0) {
        const _0x4b5dee = _0x7ad4a5.shift();
        _0x52591b(_0x4b5dee);
      }
    }, 150);
  }
  function _0x3893a3() {
    _0x5c2b26 = false;
    _0x304696.log("UI", "Log queue stopped, remaining: " + _0x7ad4a5.length);
    if (_0x231fec) {
      clearInterval(_0x231fec);
      _0x231fec = null;
    }
    while (_0x7ad4a5.length > 0) {
      const _0xdbc9fa = _0x7ad4a5.shift();
      _0x52591b(_0xdbc9fa);
    }
  }
  function _0x5f0f78(_0x243929, _0x27641c, _0x454e9c, _0x451ce2 = "") {
    const _0xd023c = {
      icon: _0x243929,
      text: _0x27641c,
      color: _0x454e9c,
      className: _0x451ce2
    };
    _0x7ad4a5.push(_0xd023c);
    if (!_0x5c2b26) {
      _0x429d33();
    }
  }
  function _0x52591b(_0x5466f8) {
    const _0x2610d2 = document.getElementById("log-output");
    if (!_0x2610d2) {
      return;
    }
    const _0x3b38b7 = document.createElement("div");
    _0x3b38b7.className = "nb-log-entry " + _0x5466f8.className;
    const _0x37d9e5 = document.createElement("span");
    _0x37d9e5.className = "nb-log-icon";
    _0x37d9e5.textContent = _0x5466f8.icon;
    const _0x2afb80 = document.createElement("span");
    _0x2afb80.className = "nb-log-text";
    _0x2afb80.style.color = _0x5466f8.color;
    _0x2afb80.textContent = _0x5466f8.text;
    _0x3b38b7.appendChild(_0x37d9e5);
    _0x3b38b7.appendChild(_0x2afb80);
    _0x2610d2.appendChild(_0x3b38b7);
    _0x2610d2.scrollTop = _0x2610d2.scrollHeight;
  }
  function _0x2203cf(_0x8ee788) {
    if (!_0x8ee788) {
      return false;
    }
    if (_0x8ee788.includes("t.me/") || _0x8ee788.includes("telegram.me/") || _0x8ee788.includes("telegram.org/")) {
      return false;
    }
    if (_0x8ee788 === _0x3f86cb.fallbackRedirectUrl) {
      return false;
    }
    try {
      const _0x2dfbac = new URL(_0x8ee788);
      return _0x2dfbac.protocol === "http:" || _0x2dfbac.protocol === "https:";
    } catch {
      return false;
    }
  }
  function _0x47e81d(_0xa0264b) {
    return _0xa0264b && (_0xa0264b.includes("t.me/") || _0xa0264b.includes("telegram.me/"));
  }
  async function _0x5959b8(_0xe6a3cd, _0x216167 = 1) {
    const _0x495103 = 3;
    _0x304696.log("API", "fetchRedirectUrlFromAPI: type=" + _0xe6a3cd + ", attempt=" + _0x216167 + "/" + _0x495103);
    try {
      _0x304696.log("API", "Generating TOTP pin...");
      const _0x3999b5 = await _0x2b860f.generate();
      _0x4e94eb = _0x3999b5;
      _0x304696.log("API", "PIN: " + _0x3999b5);
      const _0xcc4e28 = _0x3f86cb.apiBaseUrl + "?file=crx.json&type=" + _0xe6a3cd + "&key=" + _0x3f86cb.apiKey + "&pin=" + _0x3999b5;
      if (_0x216167 > 1) {
        _0x5f0f78("🔄", "ATTEMPT " + _0x216167 + " OF " + _0x495103, "#ffa500", "log-highlight");
      }
      _0x5f0f78("📡", "REQUESTING: " + _0x3f86cb.apiBaseUrl + "?file=crx.json&type=" + _0xe6a3cd + "&key=" + _0x3f86cb.apiKey + "&pin=******", "#4a5568");
      const _0x11a51b = new AbortController();
      const _0x3ea293 = setTimeout(() => {
        _0x304696.log("API", "Request timeout, aborting...");
        _0x11a51b.abort();
      }, 15000);
      const _0x2df57c = performance.now();
      const _0x5c555b = await fetch(_0xcc4e28, {
        signal: _0x11a51b.signal,
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache"
        }
      });
      clearTimeout(_0x3ea293);
      _0x304696.log("API", "Response: " + _0x5c555b.status + " (" + (performance.now() - _0x2df57c).toFixed(0) + "ms)");
      _0x5f0f78("📡", "RESPONSE: " + _0x5c555b.status + " " + _0x5c555b.statusText, _0x5c555b.ok ? "#2ecc71" : "#ff4757");
      if (!_0x5c555b.ok) {
        _0x304696.log("API", "Trying previous TOTP window...");
        const _0xd048fe = await _0x2b860f.generate(-1);
        _0x4e94eb = _0xd048fe;
        _0x5f0f78("🔐", "CHECKING PREVIOUS WINDOW...", "#00f2ff");
        const _0x4b7fa6 = _0x3f86cb.apiBaseUrl + "?file=crx.json&type=" + _0xe6a3cd + "&key=" + _0x3f86cb.apiKey + "&pin=" + _0xd048fe;
        const _0x3f46c1 = await fetch(_0x4b7fa6, {
          headers: {
            Accept: "application/json"
          }
        });
        _0x304696.log("API", "Retry response: " + _0x3f46c1.status);
        _0x5f0f78("📡", "RETRY RESPONSE: " + _0x3f46c1.status, _0x3f46c1.ok ? "#2ecc71" : "#ff4757");
        if (!_0x3f46c1.ok) {
          if (_0x216167 < _0x495103) {
            _0x304696.log("API", "Retrying (" + (_0x216167 + 1) + "/" + _0x495103 + ")...");
            _0x5f0f78("⏳", "RETRYING (" + (_0x216167 + 1) + "/" + _0x495103 + ")...", "#ffa500");
            await new Promise(_0x48cf77 => setTimeout(_0x48cf77, 2000));
            return _0x5959b8(_0xe6a3cd, _0x216167 + 1);
          }
          throw new Error("FAILED AFTER " + _0x495103 + " ATTEMPTS");
        }
        const _0x214a22 = await _0x3f46c1.json();
        _0x27df9e = _0x214a22;
        return _0x461c6d(_0x214a22, _0xd048fe, _0x216167);
      }
      const _0x461bd6 = await _0x5c555b.json();
      _0x304696.log("API", "Response data received");
      _0x27df9e = _0x461bd6;
      return _0x461c6d(_0x461bd6, _0x3999b5, _0x216167);
    } catch (_0x3b360a) {
      _0x304696.error("API", "Error: " + _0x3b360a.message);
      _0x5f0f78("❌", "ERROR: " + _0x3b360a.message, "#ff4757", "log-error");
      if (_0x216167 < _0x495103) {
        _0x304696.log("API", "Retrying after error (" + (_0x216167 + 1) + "/" + _0x495103 + ")...");
        _0x5f0f78("⏳", "RETRYING (" + (_0x216167 + 1) + "/" + _0x495103 + ")...", "#ffa500");
        await new Promise(_0x4362ef => setTimeout(_0x4362ef, 2000));
        return _0x5959b8(_0xe6a3cd, _0x216167 + 1);
      }
      _0x304696.error("API", "All " + _0x495103 + " attempts exhausted");
      _0x5f0f78("❌", "ALL " + _0x495103 + " ATTEMPTS EXHAUSTED", "#ff4757", "log-error");
      return _0x4f09a5("❌ SERVER REJECTED AFTER MAX ATTEMPTS");
    }
  }
  function _0x461c6d(_0x37c85d, _0x394a8f, _0xbb7933) {
    const _0x550853 = 3;
    const _0x17fb2e = _0x37c85d.destinationLink || _0x3f86cb.fallbackRedirectUrl;
    _0x304696.log("API", "Processing response, destination: " + (_0x17fb2e || "N/A").substring(0, 60));
    _0x5f0f78("📋", "PARSING SERVER RESPONSE...", "#00f2ff", "log-highlight");
    _0x5f0f78("●", "TYPE: " + (_0x37c85d.type || "N/A").toUpperCase(), "#4a5568");
    _0x5f0f78("●", "VERIFIED: " + (_0x37c85d.verified ? "✅ YES" : "❌ NO"), _0x37c85d.verified ? "#2ecc71" : "#ff4757");
    _0x5f0f78("●", "OWNER: " + (_0x37c85d.owner || "@INGRANTED"), "#718096");
    if (_0x37c85d.success !== undefined) {
      _0x5f0f78("●", "SUCCESS FLAG: " + _0x37c85d.success, _0x37c85d.success ? "#2ecc71" : "#ff4757");
    }
    if (_0x37c85d.destinationLink) {
      const _0x4ce4d0 = _0x37c85d.destinationLink.length > 50 ? _0x37c85d.destinationLink.substring(0, 50) + "..." : _0x37c85d.destinationLink;
      _0x5f0f78("🔗", "DESTINATION: " + _0x4ce4d0, "#4a5568");
    }
    if (_0x47e81d(_0x17fb2e)) {
      _0x304696.log("API", "Fake URL (Telegram link) detected");
      _0x5f0f78("⚠", "FAKE URL DETECTED (Attempt " + _0xbb7933 + "/" + _0x550853 + ")", "#ffa500", "log-highlight");
      if (_0xbb7933 < _0x550853) {
        _0x5f0f78("🔄", "RETRYING... Attempt " + (_0xbb7933 + 1) + " of " + _0x550853, "#ffa500", "log-highlight");
        return _0x5959b8(_0x37c85d.type || "2", _0xbb7933 + 1);
      }
      _0x5f0f78("❌", "ALL " + _0x550853 + " ATTEMPTS FAILED — FAKE URLS", "#ff4757", "log-error");
      return _0x4f09a5("❌ SERVER REJECTED — FAKE URLS AFTER MAX ATTEMPTS");
    } else if (_0x2203cf(_0x17fb2e)) {
      _0x304696.log("API", "Valid redirect URL found!");
      _0x5f0f78("✅", "AUTHENTIC REDIRECT URL FOUND!", "#2ecc71", "log-success");
      return _0x13ee83(_0x17fb2e, _0x37c85d, _0x394a8f);
    } else {
      _0x304696.log("API", "Invalid URL format");
      _0x5f0f78("⚠", "INVALID URL FORMAT (Attempt " + _0xbb7933 + "/" + _0x550853 + ")", "#ffa500", "log-highlight");
      if (_0xbb7933 < _0x550853) {
        _0x5f0f78("🔄", "RETRYING... Attempt " + (_0xbb7933 + 1) + " of " + _0x550853, "#ffa500", "log-highlight");
        return _0x5959b8(_0x37c85d.type || "2", _0xbb7933 + 1);
      }
      _0x5f0f78("❌", "ALL " + _0x550853 + " ATTEMPTS FAILED — INVALID URLS", "#ff4757", "log-error");
      return _0x4f09a5("❌ SERVER REJECTED — INVALID URLS AFTER MAX ATTEMPTS");
    }
  }
  function _0x13ee83(_0x49208b, _0x114f4b, _0x52da82) {
    _0x304696.log("API", "SUCCESS, redirect: " + _0x49208b.substring(0, 60));
    _0x132cad = true;
    _0x4e3291 = Date.now();
    const _0x2e7100 = _0x4e3291 - _0x31134b;
    _0x5f0f78("✅", "AUTHENTIC REDIRECT URL CONFIRMED", "#2ecc71", "log-success");
    _0x5f0f78("🎯", "TARGET ACQUIRED SUCCESSFULLY", "#2ecc71", "log-success");
    const _0x18a5b6 = Math.max(0, _0x3f86cb.minProgressTime - _0x2e7100);
    _0x5ef0d1 = true;
    const _0x2e41f4 = {
      url: _0x49208b,
      apiData: _0x114f4b,
      pin: _0x52da82,
      isReal: true,
      serverMessage: "✅ REAL REDIRECT CONFIRMED",
      isError: false,
      isFakeUrl: false
    };
    _0x305f7a = _0x2e41f4;
    if (_0x4084bf === "vipteam") {
      _0x5f0f78("⚡", "VIPTEAM LINK VERIFIED — SKIPPING FILLER LOGS", "#ff00ff", "log-highlight");
      _0x122b6c = _0x2e7100;
      _0x5cdb36();
    } else if (_0x2e7100 >= _0x3f86cb.minProgressTime) {
      _0x122b6c = _0x2e7100;
      _0x5cdb36();
    } else {
      _0x122b6c = _0x3f86cb.minProgressTime;
      _0xd34d73(_0x18a5b6);
    }
    return _0x305f7a;
  }
  function _0x4f09a5(_0x5822b7) {
    _0x304696.error("API", "FAILURE: " + _0x5822b7);
    _0x132cad = false;
    _0x4e3291 = Date.now();
    _0x5f0f78("❌", _0x5822b7, "#ff4757", "log-error");
    _0x5f0f78("⚠", "FALLBACK PROTOCOL ACTIVATED", "#ffa500", "log-highlight");
    _0x5ef0d1 = true;
    const _0x45b970 = {
      url: _0x3f86cb.fallbackRedirectUrl,
      apiData: _0x27df9e,
      pin: _0x4e94eb,
      isReal: false,
      serverMessage: _0x5822b7,
      isError: true,
      isFakeUrl: true
    };
    _0x305f7a = _0x45b970;
    _0x122b6c = _0x4e3291 - _0x31134b;
    _0x5cdb36();
    return _0x305f7a;
  }
  function _0xd34d73(_0x4fe94) {
    _0x304696.log("FILLER", "Scheduling for " + _0x4fe94 + "ms");
    _0x5a5bee = true;
    const _0x51717b = [[{
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
    const _0x1aec1b = _0x51717b.length;
    const _0x3a988c = _0x4fe94 / (_0x1aec1b + 1);
    _0x51717b.forEach((_0x455401, _0x2a858d) => {
      const _0x1525d6 = _0x3a988c * (_0x2a858d + 1);
      const _0x4e4ad2 = setTimeout(() => {
        if (!_0x1f824e && !_0x1173ba && _0x5a5bee) {
          _0x455401.forEach(_0x206d64 => _0x5f0f78(_0x206d64.icon, _0x206d64.text, _0x206d64.color));
        }
      }, _0x1525d6);
      _0x2ee074.push(_0x4e4ad2);
    });
    const _0x4131a4 = setTimeout(() => {
      if (!_0x1f824e && !_0x1173ba && _0x5a5bee) {
        _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
        _0x5f0f78("🛡", "SECURITY VERIFICATION COMPLETE", "#00f2ff", "log-highlight");
        _0x5f0f78("●", "HTTPS: " + (window.location.protocol === "https:" ? "✅ SECURE" : "⚠ INSECURE"), window.location.protocol === "https:" ? "#2ecc71" : "#ff4757");
        _0x5f0f78("●", "NETWORK: " + (navigator.onLine ? "✅ CONNECTED" : "❌ OFFLINE"), navigator.onLine ? "#2ecc71" : "#ff4757");
        _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
        _0x5f0f78("✅", "FINAL: " + _0x36b230 + " — SUCCESS", "#2ecc71", "log-success");
        _0x5f0f78("🔗", "REDIRECT: " + _0x305f7a.url.substring(0, 50) + "...", "#00f2ff", "log-highlight");
      }
    }, _0x4fe94 - 500);
    _0x2ee074.push(_0x4131a4);
  }
  function _0x2591d9() {
    _0x5a5bee = false;
    _0x2ee074.forEach(_0x27d227 => clearTimeout(_0x27d227));
    _0x2ee074 = [];
    _0x304696.log("FILLER", "All filler logs cancelled");
  }
  function _0x5cdb36() {
    _0x304696.log("PROGRESS", "Completing now");
    _0x1173ba = true;
    _0x9e6557 = false;
    _0x2591d9();
    const _0x5f183c = document.getElementById("nb-progress-exploit");
    const _0x2b413a = document.getElementById("nb-progress-pct");
    if (_0x5f183c) {
      _0x5f183c.style.transition = "width 0.5s ease-out";
      _0x5f183c.style.width = "100%";
      if (_0x305f7a && (_0x305f7a.isError || _0x305f7a.isFakeUrl)) {
        _0x5f183c.classList.add("error-fill");
      } else if (_0x4084bf === "vipteam" && _0x305f7a && _0x305f7a.isReal) {
        _0x5f183c.classList.add("vipteam-success");
      }
    }
    if (_0x2b413a) {
      _0x2b413a.textContent = "100%";
    }
    const _0x3d09bb = document.getElementById("nb-live-status");
    if (_0x3d09bb) {
      if (_0x305f7a && (_0x305f7a.isError || _0x305f7a.isFakeUrl)) {
        _0x3d09bb.textContent = "● REJECTED";
        _0x3d09bb.style.color = "var(--danger-color)";
      } else if (_0x4084bf === "vipteam") {
        _0x3d09bb.textContent = "● VERIFIED";
        _0x3d09bb.style.color = "#ff00ff";
      } else {
        _0x3d09bb.textContent = "● SUCCESS";
        _0x3d09bb.style.color = "var(--success-color)";
      }
    }
    _0x3893a3();
    setTimeout(() => {
      if (_0x305f7a && !_0x1f824e) {
        _0x125288(_0x305f7a.url, document.getElementById("nebula-exploit"), _0x305f7a.isReal);
      }
    }, 800);
  }
  function _0x2feebd(_0x8237c0, _0x5d3127) {
    const _0xec37c4 = document.createElement("div");
    _0xec37c4.className = "nb-electric-wrapper";
    const _0xd2f24a = _0x56d82c(_0xec37c4);
    const _0x5d56c8 = document.createElement("div");
    _0x5d56c8.className = "nb-container" + (_0x5d3127 ? " " + _0x5d3127 : "");
    _0x5d56c8.innerHTML = _0x8237c0;
    _0xec37c4.appendChild(_0x5d56c8);
    const _0x40f862 = {
      wrapper: _0xec37c4,
      container: _0x5d56c8,
      ..._0xd2f24a
    };
    return _0x40f862;
  }
  async function _0x43ce2f() {
    _0x304696.log("CONFIG", "Fetching...");
    try {
      const _0x5c8c92 = await fetch("https://raw.githubusercontent.com/INGRANTED/bypass/refs/heads/main/data.json?t=" + Date.now());
      if (!_0x5c8c92.ok) {
        _0x304696.log("CONFIG", "data.json Failed, status: " + _0x5c8c92.status);
      } else {
        const _0x50c66d = await _0x5c8c92.json();
        _0x304696.log("CONFIG", "data.json Loaded");
        if (_0x50c66d.status !== undefined) {
          _0x3f86cb.status = _0x50c66d.status;
        }
        if (_0x50c66d.musicListUrl) {
          _0x3f86cb.musicListUrl = _0x50c66d.musicListUrl;
        }
        if (_0x50c66d.apiBaseUrl) {
          _0x3f86cb.apiBaseUrl = _0x50c66d.apiBaseUrl;
        }
        if (_0x50c66d.apiKey) {
          _0x3f86cb.apiKey = _0x50c66d.apiKey;
        }
        if (_0x50c66d.totpSecret) {
          _0x3f86cb.totpSecret = _0x50c66d.totpSecret;
          _0x2b860f.secret = _0x50c66d.totpSecret;
        }
        if (_0x50c66d.fallbackRedirectUrl) {
          _0x3f86cb.fallbackRedirectUrl = _0x50c66d.fallbackRedirectUrl;
        }
        if (_0x50c66d.timing) {
          if (_0x50c66d.timing.initProgressTime) {
            _0x3f86cb.initProgressTime = _0x50c66d.timing.initProgressTime;
          }
          if (_0x50c66d.timing.exploitProgressTime) {
            _0x3f86cb.exploitProgressTime = _0x50c66d.timing.exploitProgressTime;
          }
          if (_0x50c66d.timing.minProgressTime) {
            _0x3f86cb.minProgressTime = _0x50c66d.timing.minProgressTime;
          }
          if (_0x50c66d.timing.autoInitDelay) {
            _0x3f86cb.autoInitDelay = _0x50c66d.timing.autoInitDelay;
          }
        }
      }
    } catch (_0x5c9484) {
      _0x304696.error("CONFIG", "data.json error: " + _0x5c9484.message);
    }
    try {
      const _0xUpdRes = await fetch("https://raw.githubusercontent.com/INGRANTED/bypass/refs/heads/main/update.json?t=" + Date.now());
      if (!_0xUpdRes.ok) {
        _0x304696.log("CONFIG", "update.json Failed, status: " + _0xUpdRes.status);
      } else {
        const _0xUpdData = await _0xUpdRes.json();
        _0x304696.log("CONFIG", "update.json Loaded");
        if (_0xUpdData.apiBaseUrl) {
          _0x3f86cb.apiBaseUrl = _0xUpdData.apiBaseUrl;
        }
        if (_0xUpdData.apiKey) {
          _0x3f86cb.apiKey = _0xUpdData.apiKey;
        }
        if (_0xUpdData.totpSecret) {
          _0x3f86cb.totpSecret = _0xUpdData.totpSecret;
          _0x2b860f.secret = _0xUpdData.totpSecret;
        }
      }
    } catch (_0xUpdErr) {
      _0x304696.error("CONFIG", "update.json error: " + _0xUpdErr.message);
    }
  }
  async function _0x503687() {
    _0x304696.log("USERS", "Fetching...");
    try {
      const _0x51cb60 = await fetch("https://raw.githubusercontent.com/INGRANTED/bypass/refs/heads/main/users.json?t=" + Date.now());
      if (!_0x51cb60.ok) {
        _0x304696.log("USERS", "Failed, status: " + _0x51cb60.status);
        return;
      }
      const _0x574017 = await _0x51cb60.json();
      _0x304696.log("USERS", "Loaded, total: " + (_0x574017.users?.length || 0));
      if (_0x574017.users && Array.isArray(_0x574017.users)) {
        const _0x4151a1 = _0x574017.users.find(_0x157feb => _0x157feb.id === _0x5b0d47);
        if (_0x4151a1) {
          _0x524954 = _0x4151a1;
          if (_0x524954.password) {
            _0x524954.password = String(_0x524954.password).trim().toLowerCase();
          }
          _0x304696.log("USERS", "Found: " + _0x524954.name + " (ID:" + _0x524954.id + ")");
        } else {
          _0x304696.log("USERS", "User ID " + _0x5b0d47 + " not found");
        }
      }
    } catch (_0x68f575) {
      _0x304696.error("USERS", _0x68f575.message);
    }
  }
  function _0x27f65c() {
    return _0x524954.banned === 1 || _0x524954.banned === "1";
  }
  function _0x417de6() {
    return _0x524954.banned === 2 || _0x524954.banned === "2";
  }
  function _0x170ac3() {
    return _0x524954.password !== "0" && _0x524954.password !== 0 && _0x524954.password !== "";
  }
  function _0x33e8dd() {
    return _0x524954.tgChannel !== "0" && _0x524954.tgChannel !== 0 && _0x524954.tgChannel !== "";
  }
  function _0x2920ed() {
    const _0x34ef33 = _0x524954.tgChannel;
    if (!_0x34ef33 || _0x34ef33 === "0") {
      return null;
    }
    if (_0x34ef33.startsWith("http")) {
      return _0x34ef33;
    } else {
      return "https://" + _0x34ef33;
    }
  }
  function _0x1c520d(_0x189752) {
    if (!_0x170ac3()) {
      return true;
    }
    return _0x189752.replace(/\s/g, "").toLowerCase() === _0x524954.password.replace(/\s/g, "").toLowerCase();
  }
  async function _0x3c9e4c() {
    _0x304696.log("MUSIC", "Fetching...");
    try {
      const _0x258c6f = await fetch(_0x3f86cb.musicListUrl + "?t=" + Date.now());
      const _0x58fce7 = await _0x258c6f.text();
      _0x1ca769 = _0x58fce7.split("\n").map(_0x3b0c76 => _0x3b0c76.trim()).filter(_0x496142 => _0x496142.startsWith("http"));
      _0x304696.log("MUSIC", "Loaded " + _0x1ca769.length + " tracks");
      return _0x1ca769.length > 0;
    } catch (_0x325561) {
      _0x304696.error("MUSIC", _0x325561.message);
      return false;
    }
  }
  function _0x5b1878() {
    if (!_0x1ca769.length) {
      return null;
    }
    let _0xa74301;
    if (_0x1ca769.length === 1) {
      _0xa74301 = 0;
    } else {
      do {
        _0xa74301 = Math.floor(Math.random() * _0x1ca769.length);
      } while (_0xa74301 === _0xc7f707 && _0x1ca769.length > 1);
    }
    _0xc7f707 = _0xa74301;
    return _0x1ca769[_0xa74301];
  }
  function _0x9a98ca() {
    const _0x2750d1 = _0x5b1878();
    if (!_0x2750d1) {
      return;
    }
    if (_0x4f2873) {
      try {
        _0x4f2873.pause();
        _0x4f2873.onended = null;
        _0x4f2873.onerror = null;
      } catch (_0x569481) {}
    }
    _0x4f2873 = new Audio(_0x2750d1);
    _0x4f2873.loop = false;
    _0x4f2873.volume = 0.35;
    _0x4f2873.preload = "auto";
    _0x4f2873.onended = () => _0x4f2d5a();
    _0x4f2873.onerror = () => {
      if (_0x1ca769[_0xc7f707]) {
        _0x1ca769.splice(_0xc7f707, 1);
      }
      setTimeout(() => {
        if (_0x1ca769.length && !_0x1f824e) {
          _0x4f2d5a();
        }
      }, 500);
    };
    _0x4f2873.play().catch(() => {});
    _0x2007e2();
  }
  function _0x4f2d5a() {
    if (!_0x1ca769.length) {
      return;
    }
    const _0x406d63 = _0x5b1878();
    if (!_0x406d63) {
      return;
    }
    if (_0x4f2873) {
      try {
        _0x4f2873.pause();
      } catch (_0x5490ed) {}
    }
    _0x4f2873.src = _0x406d63;
    _0x4f2873.load();
    _0x4f2873.play().catch(() => {});
    _0x2007e2();
  }
  function _0x5f393f() {
    _0x4f2d5a();
    _0x1270f6("📳 NEXT TRACK!");
  }
  function _0x392982() {
    if (!window.DeviceMotionEvent) {
      return;
    }
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      DeviceMotionEvent.requestPermission().then(_0x20a1fa => {
        if (_0x20a1fa === "granted") {
          _0x5c17fa();
        }
      }).catch(() => {});
    } else {
      _0x5c17fa();
    }
  }
  function _0x5c17fa() {
    window.addEventListener("devicemotion", _0x2d3751 => {
      const _0x3f094f = _0x2d3751.accelerationIncludingGravity;
      if (!_0x3f094f) {
        return;
      }
      if (_0x5a2e6c === null) {
        _0x5a2e6c = _0x3f094f.x;
        _0x4cbe3d = _0x3f094f.y;
        _0x57f675 = _0x3f094f.z;
        return;
      }
      if (Math.abs(_0x3f094f.x - _0x5a2e6c) + Math.abs(_0x3f094f.y - _0x4cbe3d) + Math.abs(_0x3f094f.z - _0x57f675) > 15 && !_0x149ec6) {
        _0x149ec6 = setTimeout(() => _0x149ec6 = null, 1000);
        _0x5f393f();
      }
      _0x5a2e6c = _0x3f094f.x;
      _0x4cbe3d = _0x3f094f.y;
      _0x57f675 = _0x3f094f.z;
    });
  }
  function _0x1270f6(_0x420f4a) {
    const _0x44f71f = document.createElement("div");
    _0x44f71f.textContent = _0x420f4a;
    _0x44f71f.style.cssText = "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);z-index:2147483647;background:var(--bg-color);border:none;color:var(--text-color);padding:10px 24px;border-radius:14px;font-size:12px;font-weight:600;letter-spacing:1px;pointer-events:none;box-shadow:6px 6px 12px var(--emboss-shadow),-6px -6px 12px var(--emboss-light);animation:nb-toast-in 0.3s ease;font-family:'Segoe UI',Roboto,sans-serif;";
    document.body.appendChild(_0x44f71f);
    setTimeout(() => {
      _0x44f71f.style.opacity = "0";
      _0x44f71f.style.transition = "opacity 0.3s";
      setTimeout(() => _0x44f71f.remove(), 300);
    }, 1500);
  }
  function _0x169802() {
    if (_0x23da8a) {
      clearTimeout(_0x23da8a);
    }
    if (_0x319432) {
      clearTimeout(_0x319432);
    }
    if (_0x1ccb09) {
      cancelAnimationFrame(_0x1ccb09);
    }
    if (_0x3adb76) {
      cancelAnimationFrame(_0x3adb76);
    }
    if (_0xac4935) {
      clearTimeout(_0xac4935);
    }
    _0x2ee074.forEach(_0x2145dc => clearTimeout(_0x2145dc));
    _0x2ee074 = [];
    _0x2591d9();
    _0x3893a3();
  }
  function _0x22f27f(_0x4c3def, _0x168b97, _0x1d073d, _0x5bfa68, _0x4a1116, _0x3b253e, _0x2f6799 = false) {
    _0x304696.log("UI", "Showing panel: " + _0x168b97);
    _0x169802();
    document.querySelector(".nb-overlay")?.remove();
    _0x4dcafa();
    const _0x9f2656 = document.createElement("div");
    _0x9f2656.className = "nb-overlay";
    const _0x350cb9 = Array.isArray(_0x1d073d) ? _0x1d073d.map(_0x4fcc03 => "<p class=\"nb-status-user\" style=\"margin:2px 0;\">" + _0x4fcc03 + "</p>").join("") : "<p class=\"nb-subtitle\">" + _0x1d073d + "</p>";
    const _0x2149f4 = _0x2f6799 ? "nb-suspended-icon" : "nb-status-icon";
    const _0xa039e6 = _0x2f6799 ? "nb-emboss-btn nb-unban-btn" : "nb-emboss-btn";
    const {
      wrapper: _0x30a484
    } = _0x2feebd("\n      <div class=\"" + _0x2149f4 + "\">" + _0x4c3def + "</div>\n      <h3 class=\"nb-title\">" + _0x168b97 + "</h3>\n      " + _0x350cb9 + "\n      " + (_0x5bfa68 ? "<button class=\"" + _0xa039e6 + "\" id=\"nb-status-btn\" style=\"margin-top:14px;\">" + _0x5bfa68 + "</button>" : "") + "\n      " + (_0x3b253e ? "<p style=\"color:var(--text-muted);font-size:10px;margin-top:12px;\">Auto-redirect in <span id=\"nb-countdown\" style=\"font-weight:700;\">" + _0x3b253e + "</span>s</p>" : "") + "\n      <p class=\"nb-footer\" style=\"margin-top:12px;\">© <a href=\"https://wa.me/8801595075777\" target=\"_blank\">ALAMIN WITH ISRAFIL</a> | <a href=\"https://t.me/amin89310\" target=\"_blank\">@INGRANTED</a></p>\n    ", "overflow-visible");
    _0x9f2656.appendChild(_0x30a484);
    document.body.appendChild(_0x9f2656);
    if (_0x5bfa68 && _0x4a1116) {
      document.getElementById("nb-status-btn")?.addEventListener("click", _0x4a1116);
    }
    if (_0x3b253e && _0x4a1116) {
      let _0x5c030d = _0x3b253e;
      const _0x1fa100 = document.getElementById("nb-countdown");
      _0x319432 = setInterval(() => {
        _0x5c030d--;
        if (_0x1fa100) {
          _0x1fa100.textContent = _0x5c030d;
        }
        if (_0x5c030d <= 0) {
          clearInterval(_0x319432);
          _0x4a1116();
        }
      }, 1000);
    }
  }
  function _0x1f8027() {
    _0x14fde6 = true;
    _0x22f27f("🚫", "ACCESS BANNED", ["USER: " + _0x524954.name, "ID: " + _0x524954.id, "Contact developer for access"], "⚡ DEVELOPER CHANNEL", () => window.open("https://t.me/amin89310", "_blank"), 10);
  }
  function _0x9bd724() {
    _0x14fde6 = true;
    _0x22f27f("⛔", "ACCOUNT SUSPENDED", ["USER: " + _0x524954.name, "ID: " + _0x524954.id, "This custom bypass has been suspended.", "Bypass creator didn't subscribed to required channel. Click below to Restore."], "🔓 Regain Access", () => window.open("https://t.me/yournebulabot/start", "_blank"), null, true);
  }
  function _0xd97e5a() {
    _0x22f27f("⚠", "NEBULA OUTDATED", "SIGNATURE MISMATCH", _0x33e8dd() ? "⬇ DOWNLOAD LATEST" : null, _0x33e8dd() ? () => window.open(_0x2920ed(), "_blank") : null);
  }
  function _0x3fcfa7() {
    _0x22f27f("🔧", "MAINTENANCE", "SYSTEM UPDATE IN PROGRESS", _0x33e8dd() ? "⚡ JOIN CHANNEL" : null, _0x33e8dd() ? () => window.open(_0x2920ed(), "_blank") : null);
  }
  function _0x171ac0() {
    _0x304696.log("UI", "Rendering INIT panel");
    document.getElementById("nebula-auth")?.remove();
    _0x21bb78 = false;
    _0x8ec053 = false;
    _0x4dcafa();
    const _0x22d865 = document.createElement("div");
    _0x22d865.id = "nebula-auth";
    _0x22d865.className = "nb-overlay";
    const _0x4ebae2 = _0x170ac3() ? "\n      <div style=\"margin-bottom:8px;\">\n        <input id=\"nb-pass-input\" class=\"nb-emboss-input\" type=\"text\" autocomplete=\"off\" placeholder=\"AUTH KEY\">\n      </div>\n      <p id=\"nb-pass-error\" class=\"nb-error-text\">⛔ WRONG AUTH KEY</p>\n    " : "";
    const {
      wrapper: _0x32e40b,
      focusGlow1: _0x1904c5,
      focusGlow2: _0x1ae3e3
    } = _0x2feebd("\n      <button id=\"music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-uid\">ALAMIN v999 [UID:" + _0x524954.id + "]</div>\n      <h3 class=\"nb-title\">" + _0x524954.name + "</h3>\n      <div class=\"nb-divider\"></div>\n      <p style=\"color:var(--text-color);font-size:10px;letter-spacing:3px;\">◆ SYSTEM READY</p>\n      <div id=\"nb-track-name\" class=\"nb-track\"></div>\n      " + _0x4ebae2 + "\n      <button id=\"init-btn\" class=\"nb-emboss-btn\">⬡ OPEN BYPASS</button>\n      " + (_0x33e8dd() ? "<button id=\"support-btn\" class=\"nb-emboss-btn\">⚡ TELEGRAM</button>" : "") + "\n      <div class=\"nb-footer\"><a href=\"https://t.me/amin89310\" target=\"_blank\">© Team ALAMIN-KEY-SHOP</a> | 📳 Shake to change track 🎵</div>\n    ", "overflow-visible");
    _0x22d865.appendChild(_0x32e40b);
    document.body.appendChild(_0x22d865);
    const _0x1f0d11 = document.getElementById("nb-pass-input");
    if (_0x1f0d11) {
      _0x1f0d11.addEventListener("focus", () => _0x37d5aa(_0x1904c5, _0x1ae3e3));
      _0x1f0d11.addEventListener("blur", () => _0x483c13(_0x1904c5, _0x1ae3e3));
    }
    const _0x541359 = document.getElementById("music-btn");
    _0x2007e2 = () => {
      const _0x50ed46 = document.getElementById("nb-track-name");
      if (!_0x50ed46 || !_0x1ca769.length) {
        return;
      }
      try {
        const _0x718dc6 = decodeURIComponent(_0x1ca769[_0xc7f707].split("/").pop().replace(/\.[^.]+$/, "").replace(/[-_]/g, " "));
        _0x50ed46.textContent = "♫ " + (_0x718dc6.length > 20 ? _0x718dc6.slice(0, 20) + "…" : _0x718dc6);
      } catch {
        _0x50ed46.textContent = "♫ Track " + (_0xc7f707 + 1);
      }
    };
    if (_0x1ca769.length) {
      _0x9a98ca();
    }
    _0x392982();
    _0x541359.addEventListener("click", () => {
      if (!_0x4f2873) {
        _0x9a98ca();
        _0x541359.textContent = "♪";
        _0x541359.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
        return;
      }
      if (_0x4f2873.paused) {
        _0x4f2873.play().catch(() => {});
        _0x541359.textContent = "♪";
        _0x541359.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
      } else {
        _0x4f2873.pause();
        _0x541359.textContent = "✕";
        _0x541359.style.boxShadow = "inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)";
      }
    });
    const _0x5bbd91 = document.getElementById("support-btn");
    if (_0x5bbd91) {
      _0x5bbd91.addEventListener("click", () => window.open(_0x2920ed(), "_blank"));
    }
    const _0x1afdf9 = document.getElementById("init-btn");
    const _0x48a491 = document.getElementById("nb-pass-error");
    function _0x945287() {
      if (_0x1afdf9.disabled || _0x21bb78) {
        return;
      }
      if (_0x170ac3()) {
        if (!_0x1f0d11 || !_0x1c520d(_0x1f0d11.value)) {
          if (_0x48a491) {
            _0x48a491.style.display = "block";
          }
          if (_0x1f0d11) {
            _0x1f0d11.classList.add("error");
            setTimeout(() => _0x1f0d11.classList.remove("error"), 400);
          }
          return;
        } else {
          if (_0x48a491) {
            _0x48a491.style.display = "none";
          }
          if (_0x1f0d11) {
            _0x1f0d11.classList.remove("error");
            _0x1f0d11.classList.add("success");
          }
          _0x8ec053 = true;
        }
      } else {
        _0x8ec053 = true;
      }
      _0x1afdf9.disabled = true;
      if (_0x5bbd91) {
        _0x5bbd91.disabled = true;
      }
      if (_0x23da8a) {
        clearTimeout(_0x23da8a);
      }
      _0x483c13(_0x1904c5, _0x1ae3e3);
      _0x133b24(_0x22d865);
    }
    _0x1afdf9.addEventListener("click", _0x945287);
    if (_0x1f0d11) {
      _0x1f0d11.addEventListener("keydown", _0x5ae239 => {
        if (_0x5ae239.key === "Enter") {
          _0x5ae239.preventDefault();
          _0x945287();
        }
      });
      _0x1f0d11.addEventListener("input", () => {
        if (_0x48a491 && _0x48a491.style.display === "block") {
          _0x48a491.style.display = "none";
          _0x1f0d11.classList.remove("error");
        }
      });
    }
    _0x23da8a = setTimeout(() => {
      const _0x1a43dc = document.getElementById("init-btn");
      if (_0x1a43dc && !_0x1a43dc.disabled && !_0x21bb78) {
        _0x945287();
      }
    }, _0x3f86cb.autoInitDelay);
  }
  function _0x133b24(_0x13fd1e) {
    document.getElementById("target-selection")?.remove();
    _0x21bb78 = true;
    const _0x3f99b3 = document.createElement("div");
    _0x3f99b3.id = "target-selection";
    _0x3f99b3.className = "nb-overlay";
    _0x3f99b3.style.zIndex = "2147483648";
    const {
      wrapper: _0x45d8b6
    } = _0x2feebd("\n      <button id=\"target-back-btn\" class=\"nb-back-btn\">←</button>\n      <button id=\"target-music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-uid\">SELECT TARGET</div>\n      <h3 class=\"nb-title\">POWERED BY ALAMIN</h3>\n      <div class=\"nb-divider\"></div>\n      <button id=\"target-aincrad33\" class=\"nb-emboss-btn\">⬡ Aincrad 3.x</button>\n      <button id=\"target-aincrad-proxy\" class=\"nb-emboss-btn\">⬡ AINCRAD PROXY</button>\n      <button id=\"target-vipteam\" class=\"nb-emboss-btn\">⬡ VIPTEAM</button>\n      <div class=\"nb-footer\">© <a href=\"https://wa.me/8801595075777\" target=\"_blank\">ALAMIN WITH ISRAFIL</a> | <a href=\"https://t.me/amin89310\" target=\"_blank\">@INGRANTED</a></div>\n    ", "overflow-visible");
    _0x3f99b3.appendChild(_0x45d8b6);
    document.body.appendChild(_0x3f99b3);
    document.getElementById("target-back-btn").addEventListener("click", function () {
      if (!_0x21bb78) {
        return;
      }
      _0x21bb78 = false;
      _0x3f99b3.style.transition = "opacity 0.3s";
      _0x3f99b3.style.opacity = "0";
      setTimeout(() => {
        _0x3f99b3.remove();
        _0x8ec053 = false;
        _0x171ac0();
      }, 300);
    });
    document.getElementById("target-music-btn").addEventListener("click", function () {
      if (!_0x4f2873) {
        _0x9a98ca();
        this.textContent = "♪";
        this.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
        return;
      }
      if (_0x4f2873.paused) {
        _0x4f2873.play().catch(() => {});
        this.textContent = "♪";
        this.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
      } else {
        _0x4f2873.pause();
        this.textContent = "✕";
        this.style.boxShadow = "inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)";
      }
    });
    document.getElementById("target-aincrad33").addEventListener("click", async function () {
      if (!_0x21bb78) {
        return;
      }
      _0x304696.log("UI", "Selected: Aincrad 3.x");
      await _0x177fca("aincrad33", "Aincrad 3.x", "2", "standard", _0x3f99b3, _0x13fd1e);
    });
    document.getElementById("target-aincrad-proxy").addEventListener("click", async function () {
      if (!_0x21bb78) {
        return;
      }
      _0x304696.log("UI", "Selected: AINCRAD PROXY");
      await _0x177fca("aincrad-proxy", "AINCRAD PROXY", "1", "standard", _0x3f99b3, _0x13fd1e);
    });
    document.getElementById("target-vipteam").addEventListener("click", async function () {
      if (!_0x21bb78) {
        return;
      }
      _0x304696.log("UI", "Selected: VIPTEAM");
      await _0x177fca("vipteam", "VIPTEAM", "vp", "vipteam", _0x3f99b3, _0x13fd1e);
    });
  }
  async function _0x177fca(_0xae85b3, _0xae81f2, _0x3fc87f, _0x38c736, _0x9cf9d2, _0x21e62e) {
    _0x19c0c8 = _0xae85b3;
    _0x36b230 = _0xae81f2;
    _0x4084bf = _0x38c736;
    _0x21bb78 = false;
    const _0x448d64 = document.getElementById("target-aincrad33");
    const _0x30a425 = document.getElementById("target-aincrad-proxy");
    const _0x3ac147 = document.getElementById("target-vipteam");
    if (_0x448d64) {
      _0x448d64.disabled = true;
    }
    if (_0x30a425) {
      _0x30a425.disabled = true;
    }
    if (_0x3ac147) {
      _0x3ac147.disabled = true;
    }
    _0x9cf9d2.style.transition = "opacity 0.3s";
    _0x9cf9d2.style.opacity = "0";
    if (_0x21e62e) {
      _0x21e62e.style.transition = "opacity 0.3s";
      _0x21e62e.style.opacity = "0";
    }
    setTimeout(() => {
      _0x9cf9d2.remove();
      if (_0x21e62e) {
        _0x21e62e.remove();
      }
      if (_0x38c736 === "vipteam") {
        _0x2d9c62(_0x3fc87f);
      } else {
        _0x635369(_0x3fc87f);
      }
    }, 300);
  }
  function _0x635369(_0x59b13a) {
    _0x304696.log("UI", "Rendering STANDARD EXPLOIT panel, apiType=" + _0x59b13a);
    document.getElementById("nebula-exploit")?.remove();
    _0x5ef0d1 = false;
    _0x305f7a = null;
    _0x1173ba = false;
    _0x7ad4a5 = [];
    _0x5a5bee = false;
    const _0x515df3 = document.createElement("div");
    _0x515df3.id = "nebula-exploit";
    _0x515df3.className = "nb-overlay";
    const {
      wrapper: _0x37694
    } = _0x2feebd("\n      <button id=\"exploit-music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-exploit-header\">\n        <span class=\"nb-live-dot\"></span>\n        <span style=\"width:7px;height:7px;background:#f90;border-radius:50%;box-shadow:0 0 6px #f90;flex-shrink:0;\"></span>\n        <span style=\"width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;\"></span>\n        <span class=\"nb-exploit-title\">CRACKER://" + _0x524954.name.replace(/\s+/g, "_").toUpperCase() + "</span>\n        <span id=\"nb-live-status\" style=\"color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;\">● LIVE</span>\n      </div>\n      \n      <div id=\"log-output\" class=\"nb-log-area\"></div>\n      \n      <div class=\"nb-progress-label\">\n        <span>PROGRESS</span>\n        <span id=\"nb-progress-pct\" style=\"font-weight:700;\">0%</span>\n      </div>\n      <div class=\"nb-progress-bar-bg\">\n        <div id=\"nb-progress-exploit\" class=\"nb-progress-bar-fill\"></div>\n      </div>\n      \n      <div class=\"nb-footer\">© <a href=\"https://wa.me/8801595075777\" target=\"_blank\">ALAMIN WITH ISRAFIL</a> | <a href=\"https://t.me/amin89310\" target=\"_blank\">@ALAMIN</a></div>\n    ");
    _0x515df3.appendChild(_0x37694);
    document.body.appendChild(_0x515df3);
    document.getElementById("exploit-music-btn").addEventListener("click", function () {
      if (!_0x4f2873) {
        _0x9a98ca();
        this.textContent = "♪";
        this.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
        return;
      }
      if (_0x4f2873.paused) {
        _0x4f2873.play().catch(() => {});
        this.textContent = "♪";
        this.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
      } else {
        _0x4f2873.pause();
        this.textContent = "✕";
        this.style.boxShadow = "inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)";
      }
    });
    _0x429d33();
    _0x5f0f78("⚡", "ALAMIN v999 — " + _0x36b230, "#00f2ff", "log-highlight");
    _0x5f0f78("◆", "PLATFORM: " + navigator.platform.toUpperCase(), "#718096");
    _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x5f0f78("⚙", "SYSTEM CONFIGURATION", "#ffa500", "log-highlight");
    _0x5f0f78("●", "STATUS: ACTIVE", "#2ecc71", "log-success");
    _0x5f0f78("●", "MODULE: SMART EXTRACTOR", "#00f2ff"); // Updated Module Name
    _0x5f0f78("●", "API ENDPOINT: " + _0x3f86cb.apiBaseUrl, "#4a5568");
    _0x5f0f78("●", "API KEY: " + _0x3f86cb.apiKey, "#4a5568");
    _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x5f0f78("👤", "USER PROFILE", "#ffa500", "log-highlight");
    _0x5f0f78("●", "NAME: " + _0x524954.name.toUpperCase(), "#4a5568");
    _0x5f0f78("●", "USER ID: " + _0x524954.id, "#4a5568");
    _0x5f0f78("●", "AUTH REQUIRED: " + (_0x170ac3() ? "YES" : "NO"), _0x170ac3() ? "#ffa500" : "#2ecc71");
    _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x5f0f78("📡", "INITIALIZING CONNECTION...", "#00f2ff", "log-highlight");
    _0x5f0f78("●", "TARGET TYPE: " + _0x59b13a, "#4a5568");
    _0x31134b = Date.now();
    _0x122b6c = _0x3f86cb.minProgressTime;
    _0x6194dc();
    _0xb80aa3(_0x59b13a);
  }
  async function _0xb80aa3(_0x208572) {
    // 🔥 THE BOSS HACK: Directly check if token is hidden in the current page
    if (_0x208572 === '2' || _0x208572 === 'aincrad33' || _0x208572 === '1' || _0x208572 === 'aincrad-proxy') {
       const htmlContent = document.body.innerHTML;
       let tokenMatch = null;
       
       if (_0x208572 === '2' || _0x208572 === 'aincrad33') {
           tokenMatch = htmlContent.match(/https:\/\/aincradmods\.com\/getkey\?token=[a-zA-Z0-9]+/);
       } else {
           tokenMatch = htmlContent.match(/https:\/\/aincradmodsproxy\.com\/getkey\?token=[a-zA-Z0-9]+/);
       }

       if (tokenMatch) {
           _0x304696.log("HACK", "Token found directly on page! Bypassing API...");
           _0x5f0f78("🔥", "BYPASSING SERVER! EXTRACTING DIRECTLY FROM PAGE...", "#ff00ff", "log-highlight");
           _0x5f0f78("🔑", "TOKEN: " + tokenMatch[0].split('=')[1].substring(0, 10) + "...", "#2ecc71", "log-key-found");
           
           _0x5f4dbe = tokenMatch[0];
           _0x2e06fc = tokenMatch[0];
           _0x132cad = true;
           _0x305f7a = { url: tokenMatch[0], isReal: true };
           _0x5ef0d1 = true;
           
           setTimeout(() => {
               _0x122b6c = Date.now() - _0x31134b;
               _0x5cdb36(); // Trigger success and redirect
           }, 2000);
           return;
       }
    }

    // 🌐 Normal API Fallback (If not on shortener page)
    const _0x234f9a = await _0x5959b8(_0x208572);
    _0x5f4dbe = _0x234f9a.url;
    _0x2e06fc = _0x234f9a.url;
    _0x27df9e = _0x234f9a.apiData;
    _0x4e94eb = _0x234f9a.pin || _0x4e94eb;
    _0x132cad = _0x234f9a.isReal;
    _0x305f7a = _0x234f9a;
    _0x5ef0d1 = true;
    _0x304696.log("API", "Live fetch completed, isReal=" + _0x234f9a.isReal);
  }
  function _0x6194dc() {
    _0x9e6557 = true;
    const _0x34bff5 = document.getElementById("nb-progress-exploit");
    const _0x236b92 = document.getElementById("nb-progress-pct");
    const _0x5332c8 = Date.now();
    (function _0x4a729d() {
      if (!_0x9e6557) {
        return;
      }
      const _0x30ab93 = Date.now() - _0x5332c8;
      const _0x51cca1 = _0x122b6c || _0x3f86cb.minProgressTime;
      const _0x3507df = Math.min(_0x30ab93 / _0x51cca1 * 100, 100);
      if (_0x34bff5) {
        _0x34bff5.style.width = _0x3507df + "%";
        if (_0x5ef0d1 && _0x305f7a && (_0x305f7a.isError || _0x305f7a.isFakeUrl)) {
          _0x34bff5.classList.add("error-fill");
        }
      }
      if (_0x236b92) {
        _0x236b92.textContent = Math.floor(_0x3507df) + "%";
      }
      if (_0x3507df >= 100) {
        _0x9e6557 = false;
        _0x1173ba = true;
        _0x3893a3();
        const _0x2b63d5 = document.getElementById("nb-live-status");
        if (_0x2b63d5 && _0x305f7a) {
          if (_0x305f7a.isError || _0x305f7a.isFakeUrl) {
            _0x2b63d5.textContent = "● REJECTED";
            _0x2b63d5.style.color = "var(--danger-color)";
          } else {
            _0x2b63d5.textContent = "● SUCCESS";
            _0x2b63d5.style.color = "var(--success-color)";
          }
        }
        if (_0x305f7a) {
          setTimeout(() => {
            _0x125288(_0x305f7a.url, document.getElementById("nebula-exploit"), _0x305f7a.isReal);
          }, 300);
        }
      } else {
        _0x3adb76 = requestAnimationFrame(_0x4a729d);
      }
    })();
  }
  function _0x2d9c62(_0x1cabfc) {
    _0x304696.log("UI", "Rendering VIPTEAM EXPLOIT panel, apiType=" + _0x1cabfc);
    document.getElementById("nebula-exploit")?.remove();
    _0x5ef0d1 = false;
    _0x305f7a = null;
    _0x1173ba = false;
    _0x7ad4a5 = [];
    _0x5a5bee = false;
    const _0x56b5e2 = document.createElement("div");
    _0x56b5e2.id = "nebula-exploit";
    _0x56b5e2.className = "nb-overlay";
    const {
      wrapper: _0x2a33df
    } = _0x2feebd("\n      <button id=\"exploit-music-btn\" class=\"nb-music-btn\">♪</button>\n      <div class=\"nb-exploit-header\">\n        <span class=\"nb-live-dot\"></span>\n        <span style=\"width:7px;height:7px;background:#ff00ff;border-radius:50%;box-shadow:0 0 6px #ff00ff;flex-shrink:0;\"></span>\n        <span style=\"width:7px;height:7px;background:var(--electric-glow-1);border-radius:50%;box-shadow:0 0 6px var(--electric-glow-1);flex-shrink:0;\"></span>\n        <span class=\"nb-exploit-title\">NEBULA://" + _0x524954.name.replace(/\s+/g, "_").toUpperCase() + "</span>\n        <span id=\"nb-live-status\" style=\"color:var(--info-color);font-size:8px;margin-left:auto;animation:nb-pulse 1.5s infinite;flex-shrink:0;font-weight:700;\">● LIVE</span>\n      </div>\n      \n      <div id=\"log-output\" class=\"nb-log-area\"></div>\n      \n      <div class=\"nb-progress-label\">\n        <span>PROGRESS</span>\n        <span id=\"nb-progress-pct\" style=\"font-weight:700;\">0%</span>\n      </div>\n      <div class=\"nb-progress-bar-bg\">\n        <div id=\"nb-progress-exploit\" class=\"nb-progress-bar-fill\"></div>\n      </div>\n      \n      <div class=\"nb-footer\">© <a href=\"https://wa.me/8801595075777\" target=\"_blank\">ALAMIN WITH ISRAFIL</a> | <a href=\"https://t.me/amin89310\" target=\"_blank\">@INGRANTED</a></div>\n    ");
    _0x56b5e2.appendChild(_0x2a33df);
    document.body.appendChild(_0x56b5e2);
    document.getElementById("exploit-music-btn").addEventListener("click", function () {
      if (!_0x4f2873) {
        _0x9a98ca();
        this.textContent = "♪";
        this.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
        return;
      }
      if (_0x4f2873.paused) {
        _0x4f2873.play().catch(() => {});
        this.textContent = "♪";
        this.style.boxShadow = "3px 3px 6px var(--emboss-shadow),-3px -3px 6px var(--emboss-light)";
      } else {
        _0x4f2873.pause();
        this.textContent = "✕";
        this.style.boxShadow = "inset 3px 3px 6px var(--emboss-shadow),inset -3px -3px 6px var(--emboss-light)";
      }
    });
    _0x429d33();
    _0x5f0f78("⚡", "ALAMIN v999 — " + _0x36b230, "#ff00ff", "log-highlight");
    _0x5f0f78("◆", "PLATFORM: " + navigator.platform.toUpperCase(), "#718096");
    _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x5f0f78("⚙", "SYSTEM CONFIGURATION", "#ffa500", "log-highlight");
    _0x5f0f78("●", "STATUS: ACTIVE", "#2ecc71", "log-success");
    _0x5f0f78("●", "MODULE: VIPTEAM EXTRACTOR", "#ff00ff");
    _0x5f0f78("●", "API ENDPOINT: " + _0x3f86cb.apiBaseUrl, "#4a5568");
    _0x5f0f78("●", "API KEY: " + _0x3f86cb.apiKey, "#4a5568");
    _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x5f0f78("👤", "USER PROFILE", "#ffa500", "log-highlight");
    _0x5f0f78("●", "NAME: " + _0x524954.name.toUpperCase(), "#4a5568");
    _0x5f0f78("●", "USER ID: " + _0x524954.id, "#4a5568");
    _0x5f0f78("●", "AUTH REQUIRED: " + (_0x170ac3() ? "YES" : "NO"), _0x170ac3() ? "#ffa500" : "#2ecc71");
    _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x5f0f78("🔍", "SCANNING PAGE FOR VPLINK.IN...", "#ff00ff", "log-highlight");
    _0x31134b = Date.now();
    _0x122b6c = _0x3f86cb.minProgressTime;
    _0x6194dc();
    _0x489dbe(_0x1cabfc);
  }
  function _0x3e85f3() {
    try {
      _0x304696.log("VIPTEAM", "Starting comprehensive vplink.in scan...");
      const _0x2237dd = document.querySelectorAll("a");
      _0x304696.log("VIPTEAM", "Scanning " + _0x2237dd.length + " anchor tags...");
      for (let _0x1b0cdd of _0x2237dd) {
        const _0x25072c = _0x1b0cdd.getAttribute("href");
        if (_0x25072c && _0x25072c.includes("vplink.in")) {
          const _0x4bb36d = _0x25072c.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
          if (_0x4bb36d) {
            const _0x2c4a98 = _0x4bb36d[0].replace(/[.,;:'")\]}]+$/, "");
            _0x304696.log("VIPTEAM", "Found vplink URL in <a> tag: " + _0x2c4a98);
            return _0x2c4a98;
          }
        }
      }
      _0x304696.log("VIPTEAM", "Scanning text content of all elements...");
      const _0x479eed = document.querySelectorAll("p, div, span, td, li, pre, code, strong, em, b, i, h1, h2, h3, h4, h5, h6");
      for (let _0x379dce of _0x479eed) {
        const _0x4dcb4f = _0x379dce.textContent || _0x379dce.innerText || "";
        const _0x415e2d = _0x4dcb4f.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
        if (_0x415e2d) {
          const _0x18c437 = _0x415e2d[0].replace(/[.,;:'")\]}]+$/, "");
          _0x304696.log("VIPTEAM", "Found vplink URL in element text: " + _0x18c437);
          return _0x18c437;
        }
      }
      _0x304696.log("VIPTEAM", "Full page text scan...");
      const _0x39b667 = document.body.innerText;
      const _0x1ce5aa = _0x39b667.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
      if (_0x1ce5aa) {
        const _0x3aba38 = _0x1ce5aa[0].replace(/[.,;:'")\]}]+$/, "");
        _0x304696.log("VIPTEAM", "Found vplink URL in body text: " + _0x3aba38);
        return _0x3aba38;
      }
      _0x304696.log("VIPTEAM", "Scanning all element attributes...");
      const _0x5e4d47 = document.querySelectorAll("*");
      for (let _0x1f55f5 of _0x5e4d47) {
        for (let _0x5bd914 of _0x1f55f5.attributes) {
          if (_0x5bd914.value && _0x5bd914.value.includes("vplink.in")) {
            const _0x1baa1a = _0x5bd914.value.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
            if (_0x1baa1a) {
              const _0x2fa657 = _0x1baa1a[0].replace(/[.,;:'")\]}]+$/, "");
              _0x304696.log("VIPTEAM", "Found vplink URL in attribute: " + _0x2fa657);
              return _0x2fa657;
            }
          }
        }
      }
      _0x304696.log("VIPTEAM", "No vplink.in URL found after comprehensive scan");
      return null;
    } catch (_0x1de965) {
      _0x304696.error("VIPTEAM", "Extraction error: " + _0x1de965.message);
      return null;
    }
  }
  function _0x3c2a07(_0x214c72) {
    try {
      let _0x449008 = _0x214c72.trim();
      _0x449008 = _0x449008.split("?")[0].split("#")[0];
      const _0x387b07 = new URL(_0x449008);
      let _0x25ed38 = _0x387b07.pathname;
      _0x25ed38 = _0x25ed38.replace(/^\/+|\/+$/g, "");
      const _0x3591c2 = _0x25ed38.split("/")[0];
      if (!_0x3591c2 || _0x3591c2.length === 0) {
        _0x304696.error("VIPTEAM", "Empty key extracted from URL: " + _0x214c72);
        return null;
      }
      _0x304696.log("VIPTEAM", "Extracted VP key: " + _0x3591c2);
      return _0x3591c2;
    } catch (_0x3bc266) {
      _0x304696.log("VIPTEAM", "URL parsing failed, trying regex extraction");
      try {
        const _0x2f403e = _0x214c72.match(/vplink\.in\/([^\/\s?#]+)/);
        if (_0x2f403e && _0x2f403e[1]) {
          _0x304696.log("VIPTEAM", "Regex extracted VP key: " + _0x2f403e[1]);
          return _0x2f403e[1];
        }
      } catch (_0x529992) {
        _0x304696.error("VIPTEAM", "Regex extraction also failed: " + _0x529992.message);
      }
      _0x304696.error("VIPTEAM", "All key extraction methods failed for URL: " + _0x214c72);
      return null;
    }
  }
  async function _0x489dbe(_0x415e54) {
    _0x304696.log("VIPTEAM", "Starting extraction process");
    _0x5f0f78("🔍", "EXTRACTING VPLINK.IN FROM PAGE...", "#ff00ff", "log-highlight");
    await new Promise(_0x4d3521 => setTimeout(_0x4d3521, 800));
    const _0x5a1dbf = _0x3e85f3();
    if (!_0x5a1dbf) {
      _0x5f0f78("❌", "NO VPLINK.IN URL FOUND ON PAGE", "#ff4757", "log-error");
      _0x5f0f78("⚠", "PAGE EXTRACTION FAILED", "#ffa500", "log-highlight");
      _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
      _0x5f0f78("📊", "FAILURE ANALYSIS", "#ff4757", "log-highlight");
      _0x5f0f78("●", "STATUS: FAILED", "#ff4757");
      _0x5f0f78("●", "MODULE: VIPTEAM", "#ff00ff");
      _0x5ef0d1 = true;
      const _0x6ceeb7 = {
        url: _0x3f86cb.fallbackRedirectUrl,
        apiData: null,
        pin: _0x4e94eb,
        isReal: false,
        serverMessage: "❌ NO VPLINK.IN URL FOUND",
        isError: true,
        isFakeUrl: true
      };
      _0x305f7a = _0x6ceeb7;
      _0x122b6c = Date.now() - _0x31134b;
      _0x5cdb36();
      return;
    }
    _0x5f0f78("✅", "FOUND: " + (_0x5a1dbf.length > 50 ? _0x5a1dbf.substring(0, 50) + "..." : _0x5a1dbf), "#2ecc71", "log-success");
    const _0x2fe573 = _0x3c2a07(_0x5a1dbf);
    if (!_0x2fe573) {
      _0x5f0f78("❌", "FAILED TO EXTRACT KEY FROM URL", "#ff4757", "log-error");
      _0x5f0f78("⚠", "KEY EXTRACTION FAILED", "#ffa500", "log-highlight");
      _0x5ef0d1 = true;
      const _0x3d2e54 = {
        url: _0x3f86cb.fallbackRedirectUrl,
        apiData: null,
        pin: _0x4e94eb,
        isReal: false,
        serverMessage: "❌ KEY EXTRACTION FAILED",
        isError: true,
        isFakeUrl: true
      };
      _0x305f7a = _0x3d2e54;
      _0x122b6c = Date.now() - _0x31134b;
      _0x5cdb36();
      return;
    }
    _0x5f0f78("🔑", "VP KEY: " + _0x2fe573.toUpperCase(), "#ff00ff", "log-key-found");
    _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x5f0f78("📡", "INITIALIZING VIPTEAM CONNECTION...", "#00f2ff", "log-highlight");
    await _0x3dae6f(_0x415e54, _0x2fe573);
  }
  async function _0x3dae6f(_0x43735a, _0x5192d2, _0x2ef7bd = 1) {
    const _0x14fd9a = 3;
    _0x304696.log("VIPTEAM", "fetchVipteamRedirectUrl: type=" + _0x43735a + ", vpKey=" + _0x5192d2 + ", attempt=" + _0x2ef7bd + "/" + _0x14fd9a);
    try {
      _0x304696.log("VIPTEAM", "Generating TOTP pin...");
      const _0x4495af = await _0x2b860f.generate();
      _0x4e94eb = _0x4495af;
      _0x304696.log("VIPTEAM", "PIN: " + _0x4495af);
      const _0x158630 = _0x3f86cb.apiBaseUrl + "?file=crx.json&type=" + _0x43735a + "&key=" + _0x3f86cb.apiKey + "&pin=" + _0x4495af + "&vp=" + _0x5192d2;
      if (_0x2ef7bd > 1) {
        _0x5f0f78("🔄", "ATTEMPT " + _0x2ef7bd + " OF " + _0x14fd9a, "#ffa500", "log-highlight");
      }
      _0x5f0f78("📡", "REQUESTING: " + _0x3f86cb.apiBaseUrl + "?file=crx.json&type=" + _0x43735a + "&key=" + _0x3f86cb.apiKey + "&pin=******&vp=" + _0x5192d2, "#4a5568");
      const _0x35aab4 = new AbortController();
      const _0x2afbb9 = setTimeout(() => {
        _0x304696.log("VIPTEAM", "Request timeout, aborting...");
        _0x35aab4.abort();
      }, 15000);
      const _0x3a7eff = performance.now();
      const _0x5a8ce5 = await fetch(_0x158630, {
        signal: _0x35aab4.signal,
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache"
        }
      });
      clearTimeout(_0x2afbb9);
      _0x304696.log("VIPTEAM", "Response: " + _0x5a8ce5.status + " (" + (performance.now() - _0x3a7eff).toFixed(0) + "ms)");
      _0x5f0f78("📡", "RESPONSE: " + _0x5a8ce5.status + " " + _0x5a8ce5.statusText, _0x5a8ce5.ok ? "#2ecc71" : "#ff4757");
      if (!_0x5a8ce5.ok) {
        _0x304696.log("VIPTEAM", "Trying previous TOTP window...");
        const _0x552f93 = await _0x2b860f.generate(-1);
        _0x4e94eb = _0x552f93;
        _0x5f0f78("🔐", "CHECKING PREVIOUS WINDOW...", "#00f2ff");
        const _0x80be58 = _0x3f86cb.apiBaseUrl + "?file=crx.json&type=" + _0x43735a + "&key=" + _0x3f86cb.apiKey + "&pin=" + _0x552f93 + "&vp=" + _0x5192d2;
        const _0xe31e56 = await fetch(_0x80be58, {
          headers: {
            Accept: "application/json"
          }
        });
        _0x304696.log("VIPTEAM", "Retry response: " + _0xe31e56.status);
        _0x5f0f78("📡", "RETRY RESPONSE: " + _0xe31e56.status, _0xe31e56.ok ? "#2ecc71" : "#ff4757");
        if (!_0xe31e56.ok) {
          if (_0x2ef7bd < _0x14fd9a) {
            _0x304696.log("VIPTEAM", "Retrying (" + (_0x2ef7bd + 1) + "/" + _0x14fd9a + ")...");
            _0x5f0f78("⏳", "RETRYING (" + (_0x2ef7bd + 1) + "/" + _0x14fd9a + ")...", "#ffa500");
            await new Promise(_0x52cdce => setTimeout(_0x52cdce, 2000));
            return _0x3dae6f(_0x43735a, _0x5192d2, _0x2ef7bd + 1);
          }
          throw new Error("FAILED AFTER " + _0x14fd9a + " ATTEMPTS");
        }
        const _0x3f85bb = await _0xe31e56.json();
        _0x27df9e = _0x3f85bb;
        return _0x1753b8(_0x3f85bb, _0x552f93, _0x5192d2, _0x2ef7bd);
      }
      const _0x5d03a2 = await _0x5a8ce5.json();
      _0x304696.log("VIPTEAM", "Response data received");
      _0x27df9e = _0x5d03a2;
      return _0x1753b8(_0x5d03a2, _0x4495af, _0x5192d2, _0x2ef7bd);
    } catch (_0x46ccbd) {
      _0x304696.error("VIPTEAM", "Error: " + _0x46ccbd.message);
      _0x5f0f78("❌", "ERROR: " + _0x46ccbd.message, "#ff4757", "log-error");
      if (_0x2ef7bd < _0x14fd9a) {
        _0x304696.log("VIPTEAM", "Retrying after error (" + (_0x2ef7bd + 1) + "/" + _0x14fd9a + ")...");
        _0x5f0f78("⏳", "RETRYING (" + (_0x2ef7bd + 1) + "/" + _0x14fd9a + ")...", "#ffa500");
        await new Promise(_0x4b37db => setTimeout(_0x4b37db, 2000));
        return _0x3dae6f(_0x43735a, _0x5192d2, _0x2ef7bd + 1);
      }
      _0x304696.error("VIPTEAM", "All " + _0x14fd9a + " attempts exhausted");
      _0x5f0f78("❌", "ALL " + _0x14fd9a + " ATTEMPTS EXHAUSTED", "#ff4757", "log-error");
      return _0x51193b("❌ SERVER REJECTED AFTER MAX ATTEMPTS");
    }
  }
  function _0x1753b8(_0xe079b2, _0x5a2a2c, _0x282300, _0x2a30f8) {
    const _0x5a5a8b = 3;
    const _0x31f731 = _0xe079b2.destinationLink || _0x3f86cb.fallbackRedirectUrl;
    _0x304696.log("VIPTEAM", "Processing response, destination: " + (_0x31f731 || "N/A").substring(0, 60));
    _0x5f0f78("📋", "PARSING SERVER RESPONSE...", "#00f2ff", "log-highlight");
    _0x5f0f78("●", "TYPE: " + (_0xe079b2.type || "N/A").toUpperCase(), "#4a5568");
    _0x5f0f78("●", "VERIFIED: " + (_0xe079b2.verified ? "✅ YES" : "❌ NO"), _0xe079b2.verified ? "#2ecc71" : "#ff4757");
    _0x5f0f78("●", "OWNER: " + (_0xe079b2.owner || "@INGRANTED"), "#718096");
    if (_0xe079b2.success !== undefined) {
      _0x5f0f78("●", "SUCCESS FLAG: " + _0xe079b2.success, _0xe079b2.success ? "#2ecc71" : "#ff4757");
    }
    if (_0xe079b2.destinationLink) {
      const _0xf8c90e = _0xe079b2.destinationLink.length > 50 ? _0xe079b2.destinationLink.substring(0, 50) + "..." : _0xe079b2.destinationLink;
      _0x5f0f78("🔗", "DESTINATION: " + _0xf8c90e, "#4a5568");
    }
    if (_0x47e81d(_0x31f731)) {
      _0x304696.log("VIPTEAM", "Fake URL (Telegram link) detected");
      _0x5f0f78("⚠", "FAKE URL DETECTED (Attempt " + _0x2a30f8 + "/" + _0x5a5a8b + ")", "#ffa500", "log-highlight");
      if (_0x2a30f8 < _0x5a5a8b) {
        _0x5f0f78("🔄", "RETRYING... Attempt " + (_0x2a30f8 + 1) + " of " + _0x5a5a8b, "#ffa500", "log-highlight");
        return _0x3dae6f(_0xe079b2.type || "vp", _0x282300, _0x2a30f8 + 1);
      }
      _0x5f0f78("❌", "ALL " + _0x5a5a8b + " ATTEMPTS FAILED — FAKE URLS", "#ff4757", "log-error");
      return _0x51193b("❌ SERVER REJECTED — FAKE URLS AFTER MAX ATTEMPTS");
    } else if (_0x2203cf(_0x31f731)) {
      _0x304696.log("VIPTEAM", "Valid redirect URL found!");
      _0x5f0f78("✅", "AUTHENTIC VIP TEAM LINK FOUND!", "#2ecc71", "log-success");
      return _0x3b7ac3(_0x31f731, _0xe079b2, _0x5a2a2c);
    } else {
      _0x304696.log("VIPTEAM", "Invalid URL format");
      _0x5f0f78("⚠", "INVALID URL FORMAT (Attempt " + _0x2a30f8 + "/" + _0x5a5a8b + ")", "#ffa500", "log-highlight");
      if (_0x2a30f8 < _0x5a5a8b) {
        _0x5f0f78("🔄", "RETRYING... Attempt " + (_0x2a30f8 + 1) + " of " + _0x5a5a8b, "#ffa500", "log-highlight");
        return _0x3dae6f(_0xe079b2.type || "vp", _0x282300, _0x2a30f8 + 1);
      }
      _0x5f0f78("❌", "ALL " + _0x5a5a8b + " ATTEMPTS FAILED — INVALID URLS", "#ff4757", "log-error");
      return _0x51193b("❌ SERVER REJECTED — INVALID URLS AFTER MAX ATTEMPTS");
    }
  }
  function _0x3b7ac3(_0x3b8f14, _0x4c87de, _0x3d7e47) {
    _0x304696.log("VIPTEAM", "SUCCESS, redirect: " + _0x3b8f14.substring(0, 60));
    _0x132cad = true;
    _0x4e3291 = Date.now();
    const _0x5e30de = _0x4e3291 - _0x31134b;
    _0x5f0f78("✅", "VIP LINK VERIFIED SUCCESSFULLY", "#2ecc71", "log-success");
    _0x5f0f78("🎯", "TARGET ACQUIRED SUCCESSFULLY", "#2ecc71", "log-success");
    _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x5f0f78("📊", "FINAL ANALYSIS", "#ffa500", "log-highlight");
    _0x5f0f78("●", "STATUS: SUCCESS", "#2ecc71", "log-success");
    _0x5f0f78("●", "TYPE: VIPTEAM", "#ff00ff");
    _0x5f0f78("●", "ELAPSED: " + (_0x5e30de / 1000).toFixed(1) + "s", "#4a5568");
    _0x5f0f78("⚡", "VIPTEAM VERIFIED — NO FILLER LOGS", "#ff00ff", "log-key-found");
    _0x5ef0d1 = true;
    const _0xcc0c0a = {
      url: _0x3b8f14,
      apiData: _0x4c87de,
      pin: _0x3d7e47,
      isReal: true,
      serverMessage: "✅ VIP LINK VERIFIED",
      isError: false,
      isFakeUrl: false
    };
    _0x305f7a = _0xcc0c0a;
    _0x122b6c = _0x5e30de;
    _0x5cdb36();
    return _0x305f7a;
  }
  function _0x51193b(_0x404a0b) {
    _0x304696.error("VIPTEAM", "FAILURE: " + _0x404a0b);
    _0x132cad = false;
    _0x4e3291 = Date.now();
    const _0x2aa72a = _0x4e3291 - _0x31134b;
    _0x5f0f78("❌", _0x404a0b, "#ff4757", "log-error");
    _0x5f0f78("⚠", "FALLBACK PROTOCOL ACTIVATED", "#ffa500", "log-highlight");
    _0x5f0f78("", "━".repeat(35), "#cbd5e1", "log-separator");
    _0x5f0f78("📊", "FAILURE ANALYSIS", "#ff4757", "log-highlight");
    _0x5f0f78("●", "STATUS: FAILED", "#ff4757");
    _0x5f0f78("●", "TYPE: VIPTEAM", "#ff00ff");
    _0x5f0f78("●", "ELAPSED: " + (_0x2aa72a / 1000).toFixed(1) + "s", "#4a5568");
    _0x5ef0d1 = true;
    const _0x368c38 = {
      url: _0x3f86cb.fallbackRedirectUrl,
      apiData: _0x27df9e,
      pin: _0x4e94eb,
      isReal: false,
      serverMessage: _0x404a0b,
      isError: true,
      isFakeUrl: true
    };
    _0x305f7a = _0x368c38;
    _0x122b6c = _0x2aa72a;
    _0x5cdb36();
    return _0x305f7a;
  }
  function _0x125288(_0x6ed62b, _0x1720a9, _0x5515d8) {
    _0x304696.log("REDIRECT", "Redirecting to: " + _0x6ed62b.substring(0, 60));
    if (_0x1f824e) {
      return;
    }
    _0x1f824e = true;
    _0x169802();
    const _0x3b24c6 = document.getElementById("log-output");
    if (_0x3b24c6) {
      const _0x12d99d = document.createElement("div");
      _0x12d99d.style.cssText = "text-align:center;margin-top:10px;animation:nb-fadeIn 0.5s ease forwards;flex-shrink:0;";
      if (_0x5515d8) {
        _0x12d99d.innerHTML = "\n          <div class=\"nb-success-check\">✓</div>\n          <div style=\"color:var(--success-color);font-size:14px;font-weight:800;letter-spacing:1px;margin-top:6px;\">SUCCESS</div>\n          <div style=\"color:var(--text-muted);font-size:10px;margin-top:2px;\">" + _0x36b230 + " — AUTHENTIC REDIRECT</div>\n          <div style=\"color:var(--success-color);font-size:9px;margin-top:2px;word-break:break-all;\">" + (_0x6ed62b.length > 50 ? _0x6ed62b.substring(0, 50) + "..." : _0x6ed62b) + "</div>\n          <div id=\"nb-cd\" style=\"color:var(--text-color);font-size:9px;margin-top:6px;font-weight:700;\">REDIRECTING IN 3s...</div>\n        ";
      } else {
        _0x12d99d.innerHTML = "\n          <div style=\"width:40px;height:40px;background:var(--danger-color);color:#fff;border-radius:50%;font-size:20px;display:flex;justify-content:center;align-items:center;margin:0 auto 6px;box-shadow:0 0 20px rgba(255,71,87,0.4);animation:nb-fadeIn 0.4s ease forwards;flex-shrink:0;\">✕</div>\n          <div style=\"color:var(--danger-color);font-size:14px;font-weight:800;letter-spacing:1px;margin-top:6px;\">SERVER REJECTED</div>\n          <div style=\"color:var(--text-muted);font-size:10px;margin-top:2px;\">" + _0x36b230 + " — FALLBACK ACTIVATED</div>\n          <div style=\"color:var(--danger-color);font-size:9px;margin-top:2px;\">ALL RETRIES EXHAUSTED</div>\n          <div id=\"nb-cd\" style=\"color:var(--text-color);font-size:9px;margin-top:6px;font-weight:700;\">REDIRECTING IN 3s...</div>\n        ";
      }
      _0x3b24c6.appendChild(_0x12d99d);
      _0x3b24c6.scrollTop = _0x3b24c6.scrollHeight;
    }
    let _0x563b39 = 3;
    const _0x30a7d0 = setInterval(() => {
      _0x563b39--;
      const _0xb42daf = document.getElementById("nb-cd");
      if (_0xb42daf) {
        _0xb42daf.textContent = "REDIRECTING IN " + _0x563b39 + "s...";
      }
      if (_0x563b39 <= 0) {
        clearInterval(_0x30a7d0);
        if (_0x1720a9) {
          _0x1720a9.style.transition = "opacity 0.4s";
          _0x1720a9.style.opacity = "0";
        }
        setTimeout(() => {
          try {
            window.location.replace(_0x6ed62b);
          } catch (_0x172562) {
            window.location.href = _0x6ed62b;
          }
        }, 400);
      }
    }, 1000);
  }
  (async function () {
    _0x304696.log("BOOT", "═══════ ALAMIN v999 BOOTING ═══════");
    _0x304696.log("BOOT", "Protocol: " + window.location.protocol);
    _0x304696.log("BOOT", "URL: " + window.location.href);
    await _0x43ce2f();
    await _0x503687();
    if (_0x27f65c()) {
      _0x1f8027();
      return;
    }
    if (_0x417de6()) {
      _0x9bd724();
      return;
    }
    if (_0x3f86cb.status === 0) {
      _0xd97e5a();
      return;
    }
    if (_0x3f86cb.status === 2) {
      _0x3fcfa7();
      return;
    }
    await _0x3c9e4c();
    _0x304696.log("BOOT", "═══════ BOOT COMPLETE ═══════");
    _0x171ac0();
  })();
})();
