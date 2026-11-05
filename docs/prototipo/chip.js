/* Chip, la mascota del Club NiOT (sprite pixel art de 16 bits, 29x31 px).
   Cada <canvas class="chip" width="29" height="31"> se anima solo.
   Atributos opcionales: data-mode="auto|neutral|happy|surprised|wink|blink" */
(function () {
  var O = '#1E0F3D', B = '#8A4FD6', BL = '#A874F0', BS = '#7B3FC4', BD = '#6E37B8',
      GL = '#D9B8FF', PL = '#C79BFF', PH = '#E4CCFF', PD = '#8E6BC9', CK = '#F06FC8', W = '#FFFFFF';
  var CM = { K: O, L: PL, H: PH, D: PD };

  function inB(x, y) {
    if (x < 6 || x > 22 || y < 6 || y > 22) return false;
    var cx = x < 10 ? 10 : (x > 18 ? 18 : x), cy = y < 10 ? 10 : (y > 18 ? 18 : y);
    return (x - cx) * (x - cx) + (y - cy) * (y - cy) <= 17;
  }
  function isE(x, y) {
    return inB(x, y) && (!inB(x - 1, y) || !inB(x + 1, y) || !inB(x, y - 1) || !inB(x, y + 1));
  }

  var PT = ['.KKK.', 'KHLDK', 'KHLDK'], PB = ['KHLDK', 'KHLDK', '.KKK.'], PBS = ['KHLDK', '.KKK.'];
  var PLF = ['.KK', 'KHH', 'KLL', 'KDD', '.KK'], PR = ['KK.', 'HHK', 'LLK', 'DDK', 'KK.'];

  function draw(ctx, t, expr) {
    ctx.clearRect(0, 0, 29, 31);
    var R = function (x, y, w, h, c) { ctx.fillStyle = c; ctx.fillRect(x, y, w, h); };
    var oy = Math.floor(t / 5) % 2 === 0 ? 0 : -1;
    var A = function (x, y, w, h, c) { R(x, y + oy, w, h, c); };
    var P = function (x, y, c) { A(x, y, 1, 1, c); };
    var stamp = function (x0, y0, rows) {
      for (var r = 0; r < rows.length; r++)
        for (var c = 0; c < rows[r].length; c++) {
          var ch = rows[r][c];
          if (ch !== '.') P(x0 + c, y0 + r, CM[ch]);
        }
    };

    // sombra en el piso
    var sw = 15 + 2 * oy;
    R(14 - (sw >> 1), 28, sw, 1, 'rgba(30,15,61,.22)');
    var s2 = sw - 6;
    R(14 - (s2 >> 1), 29, s2, 1, 'rgba(30,15,61,.22)');

    // pines (los de abajo se turnan, como pasitos)
    var f = Math.floor(t / 6) % 2;
    [9, 15].forEach(function (x0, i) { stamp(x0, 3, PT); stamp(x0, 23, (f === i) ? PBS : PB); });
    [9, 15].forEach(function (y0) { stamp(3, y0, PLF); stamp(23, y0, PR); });

    // cuerpo
    for (var y = 6; y <= 22; y++)
      for (var x = 6; x <= 22; x++) {
        if (!inB(x, y)) continue;
        if (isE(x, y)) { P(x, y, O); continue; }
        var rim = isE(x - 1, y) || isE(x + 1, y) || isE(x, y - 1) || isE(x, y + 1), c = B;
        if (rim) c = (x <= 14 && y <= 14) ? BL : ((x >= 14 && y >= 14) ? BD : B);
        else if ((x - 14) + (y - 14) >= 9) c = BS;
        P(x, y, c);
      }

    // brillo, pin 1 y detalles de circuito
    [[8, 9], [9, 8]].forEach(function (g) { if (inB(g[0], g[1]) && !isE(g[0], g[1])) P(g[0], g[1], GL); });
    A(9, 9, 2, 2, BD);
    A(9, 20, 3, 1, BL); A(17, 20, 3, 1, BL); P(9, 19, BL); P(19, 19, BL);
    A(9, 15, 2, 1, CK); A(18, 15, 2, 1, CK);

    // cara
    var eye = function (x) { A(x, 11, 2, 3, O); P(x, 11, W); };
    var line = function (x) { A(x, 13, 2, 1, O); };
    if (expr === 'blink') { line(11); line(16); }
    else if (expr === 'wink') { line(11); eye(16); }
    else if (expr === 'happy') { [10, 16].forEach(function (x) { P(x, 13, O); P(x + 1, 12, O); P(x + 2, 13, O); }); }
    else if (expr === 'surprised') { A(10, 10, 4, 4, W); A(15, 10, 4, 4, W); A(11, 11, 2, 2, O); A(16, 11, 2, 2, O); }
    else { eye(11); eye(16); }

    if (expr === 'happy') { A(12, 16, 5, 1, O); A(13, 17, 3, 1, O); P(14, 17, CK); }
    else if (expr === 'surprised') { A(13, 16, 3, 2, O); }
    else { P(12, 16, O); A(13, 17, 3, 1, O); P(16, 16, O); }
  }

  function auto(t) {
    var k = t % 60;
    if (k === 20) return 'blink';
    if (k >= 32 && k <= 43) return 'happy';
    if (k === 44) return 'wink';
    if (k >= 52 && k <= 56) return 'surprised';
    return 'neutral';
  }

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = [].slice.call(document.querySelectorAll('canvas.chip')).map(function (cv, i) {
    return { cv: cv, ctx: cv.getContext('2d'), mode: cv.getAttribute('data-mode') || 'auto', off: i * 9 };
  });

  var t = 0;
  function frame() {
    items.forEach(function (s) {
      var tt = reduce ? 0 : t + s.off;
      var e = s.mode === 'auto' ? (reduce ? 'neutral' : auto(tt)) : s.mode;
      draw(s.ctx, tt, e);
    });
  }
  frame();
  if (!reduce) setInterval(function () { t++; frame(); }, 160);

  // Chip del hero: al pulsarlo cambia de expresión
  var stage = document.querySelector('[data-stage]');
  if (stage) {
    var mine = items.filter(function (s) { return stage.contains(s.cv); })[0];
    var seq = ['auto', 'happy', 'surprised', 'wink'], idx = 0;
    stage.addEventListener('click', function () {
      idx = (idx + 1) % seq.length;
      if (mine) mine.mode = seq[idx];
      frame();
    });
  }

  // menú móvil
  var btn = document.querySelector('.nav-toggle'), menu = document.getElementById('menu');
  if (btn && menu) {
    var setOpen = function (open) {
      btn.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
    };
    btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') setOpen(false); });
  }
})();
