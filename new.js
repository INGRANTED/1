// ============================================
// NEBULA — CLEAN REBOOT (MODULAR)
// ============================================

;(function() {
  "use strict";

  // ============================================
  // VERSION & CONSTANTS
  // ============================================
  const VERSION = "NEBULA v24.2";
  const OWNER = "@A2MBD3";
  const TOTP_SECRET = "6ZQ4X3VPEK5XG2Q";

  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  const Util = {
    now: () => Date.now(),
    sleep: (ms) => new Promise(r => setTimeout(r, ms)),
    random: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    clamp: (v, min, max) => Math.min(Math.max(v, min), max),
    truncate: (str, len = 50) => str.length > len ? str.substring(0, len) + '…' : str,
    isMeteredConnection: () => {
      if (!navigator.connection) return false;
      const c = navigator.connection;
      if (c.type === 'cellular' || c.saveData) return true;
      if (c.effectiveType && ['slow-2g','2g','3g'].includes(c.effectiveType)) return true;
      return false;
    }
  };

  // ============================================
  // LOGGER (QUEUE SYSTEM)
  // ============================================
  class Logger {
    constructor(containerId = 'log-output') {
      this.queue = [];
      this.timer = null;
      this.containerId = containerId;
      this.maxLogs = 300;
    }

    _getContainer() {
      return document.getElementById(this.containerId);
    }

    _flush() {
      const container = this._getContainer();
      if (!container) {
        if (this.timer) clearInterval(this.timer);
        this.timer = null;
        return;
      }
      let count = 0;
      while (this.queue.length && count < 8) {
        const entry = this.queue.shift();
        const div = document.createElement('div');
        div.className = `log-entry ${entry.cls || ''}`;
        div.innerHTML = `<span style="color:${entry.color || '#8e92b5'}">${entry.icon || ''} ${entry.text || ''}</span>`;
        container.appendChild(div);
        count++;
      }
      if (this.queue.length === 0 && this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      container.scrollTop = container.scrollHeight;
    }

    log(icon, text, color = '#8e92b5', cls = '') {
      this.queue.push({ icon, text, color, cls });
      if (!this.timer) {
        this.timer = setInterval(() => this._flush(), 130);
      }
    }

    success(icon, text) {
      this.log(icon, text, '#4fd1c5', 'log-success');
    }

    error(icon, text) {
      this.log(icon, text, '#f56565', 'log-error');
    }

    warn(icon, text) {
      this.log(icon, text, '#ecc94b', 'log-warn');
    }

    info(icon, text) {
      this.log(icon, text, '#6c63ff', 'log-info');
    }

    clear() {
      const container = this._getContainer();
      if (container) container.innerHTML = '';
      this.queue = [];
      if (this.timer) clearInterval(this.timer);
      this.timer = null;
    }
  }

  // ============================================
  // ANIMATION SYSTEM (MODERN, SMOOTH)
  // ============================================
  const Anim = {
    fadeIn: (el, duration = 300) => {
      el.style.opacity = '0';
      el.style.transition = `opacity ${duration}ms cubic-bezier(0.23, 1, 0.32, 1)`;
      requestAnimationFrame(() => { el.style.opacity = '1'; });
    },
    fadeOut: (el, duration = 300) => {
      el.style.transition = `opacity ${duration}ms cubic-bezier(0.23, 1, 0.32, 1)`;
      el.style.opacity = '0';
      return new Promise(r => setTimeout(r, duration));
    },
    slideUp: (el, duration = 350) => {
      el.style.transform = 'translateY(20px)';
      el.style.opacity = '0';
      el.style.transition = `transform ${duration}ms cubic-bezier(0.23, 1, 0.32, 1), opacity ${duration}ms cubic-bezier(0.23, 1, 0.32, 1)`;
      requestAnimationFrame(() => {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
      });
    },
    pulse: (el, intensity = 0.6, duration = 1600) => {
      el.style.animation = `pulse-${intensity} ${duration}ms ease-in-out infinite`;
    },
    shimmer: (el, duration = 2000) => {
      el.style.background = 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)';
      el.style.backgroundSize = '200% 100%';
      el.style.animation = `shimmer ${duration}ms linear infinite`;
    }
  };

  // ============================================
  // CSS STYLES (MINIMAL + DARK)
  // ============================================
  const CSS = `
    :root {
      --bg-deep: #0b0d17;
      --bg-card: #161a2b;
      --bg-input: #1f243a;
      --border-light: #2a3050;
      --text-primary: #e4e7f5;
      --text-secondary: #8c91b4;
      --text-muted: #5a5f7f;
      --accent: #7c6df0;
      --accent-glow: rgba(124, 109, 240, 0.25);
      --success: #4fd1c5;
      --error: #f56565;
      --warning: #ecc94b;
      --radius: 20px;
      --radius-sm: 12px;
      --shadow: 0 25px 50px -12px rgba(0,0,0,0.8);
      --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    * { box-sizing: border-box; }
    .nebula-overlay {
      position: fixed;
      inset: 0;
      z-index: 2147483647;
      background: rgba(11, 13, 23, 0.85);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      display: grid;
      place-items: center;
      padding: 20px;
      font-family: var(--font);
      color: var(--text-primary);
    }
    .nebula-card {
      background: var(--bg-card);
      border-radius: var(--radius);
      padding: 28px 24px;
      width: 440px;
      max-width: 94vw;
      border: 1px solid var(--border-light);
      box-shadow: var(--shadow);
      position: relative;
      transition: all 0.25s ease;
    }
    .nebula-title {
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.5px;
      margin: 0 0 6px;
    }
    .nebula-sub {
      color: var(--text-secondary);
      font-size: 12px;
      letter-spacing: 1px;
      margin: 0 0 16px;
    }
    .nebula-input {
      width: 100%;
      padding: 14px 18px;
      background: var(--bg-input);
      border: 1px solid var(--border-light);
      border-radius: var(--radius-sm);
      color: var(--text-primary);
      font-size: 15px;
      outline: none;
      transition: border 0.2s, box-shadow 0.2s;
      font-family: inherit;
    }
    .nebula-input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-glow);
    }
    .nebula-input.error { border-color: var(--error); }
    .nebula-input.success { border-color: var(--success); }
    .nebula-btn {
      width: 100%;
      padding: 14px 18px;
      background: var(--bg-input);
      border: 1px solid var(--border-light);
      border-radius: var(--radius-sm);
      color: var(--text-primary);
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    }
    .nebula-btn:hover:not(:disabled) {
      background: var(--border-light);
      border-color: var(--accent);
    }
    .nebula-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
    .nebula-btn.primary {
      background: var(--accent);
      border-color: var(--accent);
      color: #fff;
    }
    .nebula-btn.primary:hover:not(:disabled) {
      background: #6a5dd0;
      border-color: #6a5dd0;
    }
    .nebula-log {
      background: var(--bg-input);
      border-radius: var(--radius-sm);
      padding: 14px;
      max-height: 200px;
      overflow-y: auto;
      font-size: 11px;
      line-height: 1.6;
      color: var(--text-secondary);
      border: 1px solid var(--border-light);
      margin: 12px 0;
    }
    .nebula-log::-webkit-scrollbar { width: 3px; }
    .nebula-log::-webkit-scrollbar-thumb { background: var(--border-light); border-radius: 10px; }
    .nebula-progress {
      height: 4px;
      background: var(--bg-input);
      border-radius: 10px;
      overflow: hidden;
      margin: 6px 0 10px;
    }
    .nebula-progress-fill {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, var(--accent), var(--success));
      transition: width 0.15s linear;
      border-radius: 10px;
    }
    .nebula-footer {
      font-size: 8px;
      color: var(--text-muted);
      letter-spacing: 1px;
      margin-top: 14px;
      text-align: center;
    }
    .nebula-footer a { color: var(--accent); text-decoration: none; }
    .log-entry { padding: 2px 0; }
    .log-success { color: var(--success); }
    .log-error { color: var(--error); }
    .log-warn { color: var(--warning); }
    .log-info { color: var(--accent); }
    @keyframes pulse-0.6 { 0%,100% { opacity: 0.6; } 50% { opacity: 0.2; } }
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
  `;

  function injectStyles() {
    if (document.getElementById('nebula-styles')) return;
    const style = document.createElement('style');
    style.id = 'nebula-styles';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  // ============================================
  // TOTP GENERATOR (PURE JS, SHA-1)
  // ============================================
  class TOTP {
    constructor(secret, digits = 6, step = 30) {
      this.secret = secret;
      this.digits = digits;
      this.step = step;
    }

    _base32ToHex(base32) {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
      let bits = '';
      base32 = base32.toUpperCase().replace(/\s/g, '').replace(/=+$/, '');
      for (let c of base32) {
        const val = alphabet.indexOf(c);
        if (val === -1) throw new Error('Invalid base32');
        bits += val.toString(2).padStart(5, '0');
      }
      let hex = '';
      for (let i = 0; i + 8 <= bits.length; i += 8) {
        hex += parseInt(bits.substr(i, 8), 2).toString(16).padStart(2, '0');
      }
      return hex;
    }

    _sha1(bytes) {
      function rotl(x, n) { return (x << n) | (x >>> (32 - n)); }
      let h0 = 0x67452301, h1 = 0xefcdab89, h2 = 0x98badcfe, h3 = 0x10325476, h4 = 0xc3d2e1f0;
      const ml = bytes.length * 8;
      bytes.push(0x80);
      while (bytes.length % 64 !== 56) bytes.push(0);
      bytes.push(0, 0, 0, 0);
      for (let i = 3; i >= 0; i--) bytes.push((ml >>> (i * 8)) & 0xff);
      for (let i = 0; i < bytes.length; i += 64) {
        const w = new Array(80);
        for (let j = 0; j < 16; j++) {
          w[j] = (bytes[i + j*4] << 24) | (bytes[i + j*4 + 1] << 16) | (bytes[i + j*4 + 2] << 8) | bytes[i + j*4 + 3];
        }
        for (let j = 16; j < 80; j++) {
          w[j] = rotl(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
        }
        let a = h0, b = h1, c = h2, d = h3, e = h4;
        for (let j = 0; j < 80; j++) {
          let f, k;
          if (j < 20) { f = (b & c) | (~b & d); k = 0x5a827999; }
          else if (j < 40) { f = b ^ c ^ d; k = 0x6ed9eba1; }
          else if (j < 60) { f = (b & c) | (b & d) | (c & d); k = 0x8f1bbcdc; }
          else { f = b ^ c ^ d; k = 0xca62c1d6; }
          const temp = (rotl(a, 5) + f + e + k + w[j]) >>> 0;
          e = d; d = c; c = rotl(b, 30); b = a; a = temp;
        }
        h0 = (h0 + a) >>> 0; h1 = (h1 + b) >>> 0; h2 = (h2 + c) >>> 0; h3 = (h3 + d) >>> 0; h4 = (h4 + e) >>> 0;
      }
      return [h0, h1, h2, h3, h4].flatMap(v => [v >>> 24, (v >>> 16) & 0xff, (v >>> 8) & 0xff, v & 0xff]);
    }

    _hmacSha1(key, msg) {
      const k = Array.from(key);
      const m = Array.from(new Uint8Array(msg));
      const block = 64;
      let kPad = k.length > block ? this._sha1(k) : k;
      while (kPad.length < block) kPad.push(0);
      const oPad = kPad.map(b => b ^ 0x5c);
      const iPad = kPad.map(b => b ^ 0x36);
      const inner = this._sha1([...iPad, ...m]);
      return new Uint8Array(this._sha1([...oPad, ...inner]));
    }

    generate(offset = 0) {
      const keyHex = this._base32ToHex(this.secret);
      const epoch = Math.floor(Date.now() / 1000);
      const time = Math.floor(epoch / this.step) + offset;
      const msg = new ArrayBuffer(8);
      const view = new DataView(msg);
      view.setUint32(4, time, false);
      const keyBytes = new Uint8Array(keyHex.match(/.{2}/g).map(b => parseInt(b, 16)));
      const hmac = this._hmacSha1(keyBytes, msg);
      const off = hmac[hmac.length - 1] & 0xf;
      const binary = ((hmac[off] & 0x7f) << 24) | (hmac[off+1] << 16) | (hmac[off+2] << 8) | hmac[off+3];
      const otp = binary % Math.pow(10, this.digits);
      return otp.toString().padStart(this.digits, '0');
    }
  }

  // ============================================
  // UI BUILDER (FACTORY)
  // ============================================
  function createCard(html, extraClass = '') {
    const overlay = document.createElement('div');
    overlay.className = 'nebula-overlay';
    const card = document.createElement('div');
    card.className = `nebula-card ${extraClass}`;
    card.innerHTML = html;
    overlay.appendChild(card);
    return { overlay, card };
  }

  function showCard(html, extraClass = '') {
    const { overlay, card } = createCard(html, extraClass);
    document.body.appendChild(overlay);
    Anim.fadeIn(overlay);
    Anim.slideUp(card);
    return overlay;
  }

  function removeOverlay(el, delay = 300) {
    Anim.fadeOut(el, delay).then(() => el.remove());
  }

  // ============================================
  // API CLIENT (with retry & fallback)
  // ============================================
  class APIClient {
    constructor(config) {
      this.base = config.base;
      this.key = config.key;
      this.totp = new TOTP(config.totpSecret);
    }

    async _fetch(url, retries = 3) {
      for (let i = 0; i < retries; i++) {
        try {
          const res = await fetch(url, { headers: { Accept: 'application/json', 'Cache-Control': 'no-cache' } });
          if (res.ok) return res;
          if (i < retries - 1) await Util.sleep(1200 + Util.random(100, 300));
        } catch (e) {
          if (i >= retries - 1) throw e;
          await Util.sleep(1000);
        }
      }
      throw new Error('MAX_RETRIES');
    }

    async getRedirect(type, vpKey = null) {
      const pin = this.totp.generate();
      let url = `${this.base}?file=crx.json&type=${type}&key=${this.key}&pin=${pin}`;
      if (vpKey) url += `&vp=${encodeURIComponent(vpKey)}`;

      const res = await this._fetch(url);
      const data = await res.json();
      return data;
    }
  }

  // ============================================
  // USER DATA (SIMPLIFIED)
  // ============================================
  const defaultUser = {
    id: 0,
    name: 'TEAM CRX OFFICIAL',
    password: 'crx',
    tgChannel: 't.me/HQcrx',
    banned: 0,
    creator: '@A2MBD3'
  };

  let user = { ...defaultUser };
  let userId = 0;
  let musicEnabled = true;
  let musicList = [];

  async function fetchUserData() {
    try {
      const url = `https://nebula-bot-8afg.onrender.com/?id=${userId}&key=crx`;
      const res = await fetch(url, { headers: { Accept: 'application/json' } });
      if (!res.ok) return false;
      const data = await res.json();
      if (data && data.id !== undefined) {
        user = {
          id: parseInt(data.id) || userId,
          name: data.name || defaultUser.name,
          tgChannel: data.tgChannel || defaultUser.tgChannel,
          password: data.password ? String(data.password).trim() : defaultUser.password,
          banned: parseInt(data.banned) || 0,
          creator: data.creator || defaultUser.creator
        };
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }

  // ============================================
  // MUSIC SYSTEM (SIMPLIFIED)
  // ============================================
  let audio = null;
  let trackIndex = -1;
  let musicCallback = null;

  async function loadMusicList() {
    try {
      const res = await fetch('https://raw.githubusercontent.com/A2MBD3/Aincrad/main/assets/music.txt?t=' + Date.now());
      const text = await res.text();
      musicList = text.split('\n').map(s => s.trim()).filter(s => s.startsWith('http'));
      return musicList.length > 0;
    } catch { return false; }
  }

  function playNext() {
    if (!musicEnabled || musicList.length === 0) return;
    if (Util.isMeteredConnection() && !musicEnabled) return;
    let idx;
    if (musicList.length === 1) idx = 0;
    else { do { idx = Math.floor(Math.random() * musicList.length); } while (idx === trackIndex && musicList.length > 1); }
    trackIndex = idx;
    const src = musicList[idx];
    if (audio) { audio.pause(); audio = null; }
    audio = new Audio(src);
    audio.volume = 0.35;
    audio.loop = false;
    audio.onended = playNext;
    audio.onerror = () => { musicList.splice(trackIndex, 1); setTimeout(playNext, 500); };
    audio.play().catch(() => {});
    if (musicCallback) musicCallback();
  }

  function toggleMusic() {
    if (Util.isMeteredConnection()) {
      musicEnabled = true;
      playNext();
    } else {
      if (audio && !audio.paused) { audio.pause(); }
      else if (audio && audio.paused) { audio.play().catch(() => {}); }
      else playNext();
    }
  }

  // ============================================
  // MAIN APPLICATION FLOW
  // ============================================
  const api = new APIClient({
    base: 'https://lol.amin89310.workers.dev',
    key: 'abdullah',
    totpSecret: TOTP_SECRET
  });

  const logger = new Logger();

  // ---------- PANELS ----------
  function showBanned() {
    const html = `
      <div style="text-align:center;">
        <div style="font-size:48px;margin-bottom:8px;">🚫</div>
        <h2 class="nebula-title">ACCESS BANNED</h2>
        <p class="nebula-sub">${user.name} (ID:${user.id})</p>
        <button class="nebula-btn primary" onclick="window.open('https://t.me/HQcrx','_blank')">⚡ CONTACT DEVELOPER</button>
      </div>
    `;
    showCard(html);
  }

  function showSuspended() {
    const html = `
      <div style="text-align:center;">
        <div style="font-size:48px;margin-bottom:8px;">⛔</div>
        <h2 class="nebula-title">ACCOUNT SUSPENDED</h2>
        <p class="nebula-sub">${user.name} (ID:${user.id})</p>
        <button class="nebula-btn primary" onclick="window.open('https://t.me/yournebulabot/start','_blank')">🔓 REGAIN ACCESS</button>
      </div>
    `;
    showCard(html);
  }

  function showAuth() {
    const html = `
      <div style="text-align:center;">
        <div style="font-size:40px;margin-bottom:4px;">⬡</div>
        <h2 class="nebula-title">${user.name}</h2>
        <p class="nebula-sub" style="margin-bottom:10px;">◆ SYSTEM READY</p>
        ${user.password !== '0' ? `
          <input id="auth-input" class="nebula-input" type="text" autocomplete="off" placeholder="AUTH KEY" style="margin-bottom:10px;">
          <p id="auth-error" style="color:var(--error);font-size:11px;display:none;margin:0 0 8px;">⛔ WRONG KEY</p>
        ` : ''}
        <button id="auth-btn" class="nebula-btn primary">⬡ START BYPASS</button>
        ${user.tgChannel && user.tgChannel !== '0' ? `<button id="tg-btn" class="nebula-btn" style="margin-top:8px;">⚡ TELEGRAM</button>` : ''}
        <div class="nebula-footer">© <a href="https://crxx.netlify.app" target="_blank">Team CRX</a> | ${VERSION}</div>
      </div>
    `;
    const overlay = showCard(html);
    const input = document.getElementById('auth-input');
    const error = document.getElementById('auth-error');
    const startBtn = document.getElementById('auth-btn');
    const tgBtn = document.getElementById('tg-btn');

    if (tgBtn) {
      tgBtn.addEventListener('click', () => window.open(user.tgChannel.startsWith('http') ? user.tgChannel : 'https://' + user.tgChannel, '_blank'));
    }

    const proceed = () => {
      if (user.password !== '0') {
        if (!input || input.value.trim().toLowerCase() !== user.password.toLowerCase()) {
          if (error) error.style.display = 'block';
          if (input) { input.classList.add('error'); setTimeout(() => input.classList.remove('error'), 400); }
          return;
        }
        if (error) error.style.display = 'none';
        if (input) input.classList.add('success');
      }
      removeOverlay(overlay, 300).then(() => showTargetSelect());
    };

    startBtn.addEventListener('click', proceed);
    if (input) {
      input.addEventListener('keydown', e => { if (e.key === 'Enter') proceed(); });
      input.addEventListener('input', () => { if (error) error.style.display = 'none'; if (input) input.classList.remove('error'); });
    }
  }

  function showTargetSelect() {
    const html = `
      <div style="text-align:center;">
        <h2 class="nebula-title">SELECT TARGET</h2>
        <div style="display:flex;flex-direction:column;gap:8px;margin:12px 0;">
          <button class="nebula-btn target-btn" data-type="2" data-name="Aincrad">⬡ Aincrad</button>
          <button class="nebula-btn target-btn" data-type="1" data-name="AINCRAD PROXY">⬡ AINCRAD PROXY</button>
          <button class="nebula-btn target-btn" data-type="vp" data-name="VIPTEAM">⬡ VIPTEAM</button>
          <button class="nebula-btn target-btn" data-type="vp" data-name="POWERCHEATS">⬡ POWERCHEATS</button>
          <button class="nebula-btn target-btn" data-type="vp" data-name="UNIVERSAL VPLINK">⬡ UNIVERSAL VPLINK</button>
        </div>
        <div class="nebula-footer">${VERSION} | 📳 Shake to change track 🎵</div>
      </div>
    `;
    const overlay = showCard(html);
    document.querySelectorAll('.target-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const type = btn.dataset.type;
        const name = btn.dataset.name;
        removeOverlay(overlay, 300).then(() => {
          if (name === 'VIPTEAM') showVipExploit(type, name);
          else if (name === 'POWERCHEATS') showPowerExploit(type, name);
          else if (name === 'UNIVERSAL VPLINK') showUniversalVplink(type, name);
          else showStandardExploit(type, name);
        });
      });
    });
  }

  // ---------- EXPLOIT PANELS ----------
  function showStandardExploit(type, name) {
    const html = `
      <div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;">
          <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--success);animation:pulse-0.6 1.5s infinite;"></span>
          <span style="font-size:10px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">${VERSION} // ${name}</span>
          <span style="margin-left:auto;font-size:8px;color:var(--accent);">● LIVE</span>
        </div>
        <div id="log-output" class="nebula-log"></div>
        <div class="nebula-progress"><div id="progress-fill" class="nebula-progress-fill"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-muted);">
          <span>PROGRESS</span>
          <span id="progress-pct">0%</span>
        </div>
        <div class="nebula-footer">${VERSION}</div>
      </div>
    `;
    const overlay = showCard(html);
    startExploit(overlay, type, name);
  }

  function showVipExploit(type, name) {
    showStandardExploit(type, name);
    // VIP logic: scan page for vplink.in
    setTimeout(() => {
      const vpUrl = extractVplinkFromPage();
      if (vpUrl) {
        const key = extractKey(vpUrl);
        if (key) fetchVpRedirect(type, key);
      } else {
        logger.error('❌', 'No vplink.in found');
      }
    }, 800);
  }

  function showPowerExploit(type, name) {
    showStandardExploit(type, name);
    setTimeout(() => {
      const vpUrl = extractPowerVplink();
      if (vpUrl) {
        const key = extractKey(vpUrl);
        if (key) fetchVpRedirect(type, key);
      } else {
        logger.error('❌', 'No vplink.in found (PowerCheats)');
      }
    }, 800);
  }

  function showUniversalVplink(type, name) {
    const html = `
      <div>
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;">
          <span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--success);animation:pulse-0.6 1.5s infinite;"></span>
          <span style="font-size:10px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">${VERSION} // ${name}</span>
          <span style="margin-left:auto;font-size:8px;color:var(--accent);">● LIVE</span>
        </div>
        <input id="vplink-input" class="nebula-input" type="text" placeholder="PASTE VPLINK.IN URL" style="margin-bottom:8px;">
        <button id="vplink-submit" class="nebula-btn primary" disabled>VERIFY & EXTRACT</button>
        <div id="log-output" class="nebula-log"></div>
        <div class="nebula-progress"><div id="progress-fill" class="nebula-progress-fill"></div></div>
        <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text-muted);">
          <span>PROGRESS</span>
          <span id="progress-pct">0%</span>
        </div>
        <div class="nebula-footer">${VERSION}</div>
      </div>
    `;
    const overlay = showCard(html);
    const input = document.getElementById('vplink-input');
    const submit = document.getElementById('vplink-submit');
    const errorEl = document.createElement('p');
    errorEl.style.cssText = 'color:var(--error);font-size:11px;display:none;margin:4px 0;';
    input.parentNode.insertBefore(errorEl, input.nextSibling);

    input.addEventListener('input', () => {
      const val = input.value.trim();
      errorEl.style.display = 'none';
      input.classList.remove('error','success');
      if (val.toLowerCase().includes('vplink.in')) {
        submit.disabled = false;
        input.classList.add('success');
      } else {
        submit.disabled = true;
      }
    });

    submit.addEventListener('click', async () => {
      let raw = input.value.trim();
      if (!raw.toLowerCase().includes('vplink.in')) {
        errorEl.style.display = 'block';
        input.classList.add('error');
        setTimeout(() => input.classList.remove('error'), 400);
        return;
      }
      if (!raw.startsWith('http')) raw = 'https://' + raw;
      submit.disabled = true;
      input.disabled = true;
      const key = extractKey(raw);
      if (key) await fetchVpRedirect(type, key);
      else logger.error('❌', 'Key extraction failed');
    });

    input.addEventListener('keydown', e => { if (e.key === 'Enter') submit.click(); });
    setTimeout(() => input.focus(), 300);
  }

  // ---------- EXPLOIT CORE ----------
  function startExploit(overlay, type, name) {
    logger.clear();
    logger.info('⚡', `${VERSION} — ${name}`);
    logger.info('◆', `PLATFORM: ${navigator.platform.toUpperCase()}`);
    logger.info('●', `API: ${api.base}`);
    logger.info('●', `USER: ${user.name} (ID:${user.id})`);
    logger.info('📡', 'INITIALIZING...');

    const startTime = Date.now();
    const fill = document.getElementById('progress-fill');
    const pct = document.getElementById('progress-pct');
    let progress = 0;
    let done = false;

    const updateProgress = () => {
      if (done) return;
      const elapsed = Date.now() - startTime;
      const target = 20000;
      progress = Util.clamp((elapsed / target) * 100, 0, 100);
      if (fill) fill.style.width = progress + '%';
      if (pct) pct.textContent = Math.floor(progress) + '%';
      if (progress >= 100) {
        done = true;
        if (fill) fill.style.width = '100%';
        if (pct) pct.textContent = '100%';
        // redirect or fallback
        const dest = window._nebulaDestination || 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/A2MBD3/Aincrad/main/index.html';
        setTimeout(() => {
          window.location.href = dest;
        }, 400);
      } else {
        requestAnimationFrame(updateProgress);
      }
    };
    requestAnimationFrame(updateProgress);

    // Trigger API
    (async () => {
      try {
        const data = await api.getRedirect(type);
        const link = data.destinationLink || null;
        if (link && link.startsWith('http') && !link.includes('t.me/')) {
          window._nebulaDestination = link;
          logger.success('✅', `REDIRECT: ${Util.truncate(link)}`);
        } else {
          logger.warn('⚠', 'Fake or invalid URL, using fallback');
          window._nebulaDestination = 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/A2MBD3/Aincrad/main/index.html';
        }
      } catch (e) {
        logger.error('❌', `API error: ${e.message}`);
        window._nebulaDestination = 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/A2MBD3/Aincrad/main/index.html';
      }
    })();
  }

  async function fetchVpRedirect(type, vpKey) {
    try {
      const data = await api.getRedirect(type, vpKey);
      const link = data.destinationLink || null;
      if (link && link.startsWith('http') && !link.includes('t.me/')) {
        logger.success('✅', `REDIRECT: ${Util.truncate(link)}`);
        window._nebulaDestination = link;
      } else {
        logger.warn('⚠', 'Fake URL, using fallback');
        window._nebulaDestination = 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/A2MBD3/Aincrad/main/index.html';
      }
    } catch (e) {
      logger.error('❌', `VP API error: ${e.message}`);
      window._nebulaDestination = 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/A2MBD3/Aincrad/main/index.html';
    }
  }

  // ---------- EXTRACTION HELPERS ----------
  function extractVplinkFromPage() {
    const anchors = document.querySelectorAll('a');
    for (let a of anchors) {
      const href = a.getAttribute('href');
      if (href && href.includes('vplink.in')) {
        const m = href.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
        if (m) return m[0].replace(/[.,;:'")\]}]+$/, '');
      }
    }
    const bodyText = document.body.innerText;
    const m = bodyText.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
    if (m) return m[0].replace(/[.,;:'")\]}]+$/, '');
    return null;
  }

  function extractPowerVplink() {
    const scripts = document.querySelectorAll('script');
    for (let s of scripts) {
      const content = s.textContent || s.innerText || '';
      const m = content.match(/window\.location\.href\s*=\s*["']([^"']+)["']/);
      if (m && m[1] && m[1].includes('vplink.in')) return m[1].replace(/[.,;:'")\]}]+$/, '');
    }
    const html = document.documentElement.innerHTML;
    const m = html.match(/https?:\/\/vplink\.in\/[^\s"'<>]+/);
    if (m) return m[0].replace(/[.,;:'")\]}]+$/, '');
    return null;
  }

  function extractKey(url) {
    try {
      const u = new URL(url);
      let path = u.pathname.replace(/^\/+|\/+$/g, '');
      if (path) return path.split('/')[0];
    } catch {}
    const m = url.match(/vplink\.in\/([^\/\s?#]+)/);
    if (m) return m[1];
    return null;
  }

  // ============================================
  // MUSIC TOGGLE (SHAKE)
  // ============================================
  let shakeTimer = null;
  let lastShake = { x: 0, y: 0, z: 0 };

  function enableShake() {
    if (window.DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission().then(p => { if (p === 'granted') setupShake(); }).catch(() => {});
    } else {
      setupShake();
    }
  }

  function setupShake() {
    window.addEventListener('devicemotion', e => {
      const acc = e.accelerationIncludingGravity;
      if (!acc) return;
      const dx = Math.abs(acc.x - lastShake.x);
      const dy = Math.abs(acc.y - lastShake.y);
      const dz = Math.abs(acc.z - lastShake.z);
      if (dx + dy + dz > 15 && !shakeTimer) {
        shakeTimer = setTimeout(() => { shakeTimer = null; }, 1000);
        if (musicList.length) playNext();
      }
      lastShake = { x: acc.x, y: acc.y, z: acc.z };
    });
  }

  // ============================================
  // BOOT
  // ============================================
  async function boot() {
    injectStyles();
    const isMetered = Util.isMeteredConnection();
    musicEnabled = !isMetered;

    // Load user data
    await fetchUserData();

    // Check ban/suspend
    if (user.banned === 1) { showBanned(); return; }
    if (user.banned === 2) { showSuspended(); return; }

    // Load music
    await loadMusicList();
    if (musicEnabled && musicList.length) playNext();
    enableShake();

    // Show auth
    showAuth();
  }

  // Boot when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();