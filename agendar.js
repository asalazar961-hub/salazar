/* Botón "Agendar cita" fijo + medición de clics de contacto en Google Analytics. */
(function () {
  var DOCTORALIA = 'https://www.doctoralia.com.mx/perfil/alejandro-salazar-rodriguez';
  var WHATSAPP = 'https://wa.me/525548687128?text=' + encodeURIComponent('Hola, quiero agendar una consulta con el Dr. Salazar.');
  var en = (document.documentElement.lang || '').indexOf('en') === 0;

  var t = en ? {
    btn: 'Book an appointment',
    title: 'Book your appointment',
    online: 'Book online (Doctoralia)',
    onlineSub: 'In-person or video · see real-time availability',
    wa: 'Message on WhatsApp',
    waSub: 'If you prefer to book by message',
    tip: 'On Doctoralia choose “Visita presencial” (in person) or “Consulta en línea” (video) and tap a highlighted time. Crossed-out times are already taken.',
    close: 'Close'
  } : {
    btn: 'Agendar cita',
    title: 'Agenda tu cita',
    online: 'Agendar en línea (Doctoralia)',
    onlineSub: 'Presencial o videoconsulta · horarios en tiempo real',
    wa: 'Escribir por WhatsApp',
    waSub: 'Si prefieres agendar por mensaje',
    tip: 'En Doctoralia elige “Visita presencial” o “Consulta en línea” y toca un horario en color. Los horarios tachados ya están ocupados.',
    close: 'Cerrar'
  };

  function track(method, label) {
    try {
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', { method: method, link_text: label || '', page_path: location.pathname });
      }
    } catch (e) {}
  }

  // Medir cualquier clic hacia Doctoralia, WhatsApp, teléfono o correo en todo el sitio.
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a[href]');
    if (!a) return;
    var h = a.getAttribute('href');
    var label = (a.textContent || '').trim().slice(0, 60);
    if (h.indexOf('doctoralia.com.mx') > -1) track('doctoralia', label);
    else if (h.indexOf('wa.me') > -1) track('whatsapp', label);
    else if (h.indexOf('tel:') === 0) track('telefono', label);
    else if (h.indexOf('mailto:') === 0) track('correo', label);
  }, true);

  var css = '' +
    '.ag-fab{position:fixed;right:20px;bottom:20px;z-index:9998;display:flex;align-items:center;gap:8px;background:#1B2A52;color:#fff;border:0;border-radius:999px;padding:14px 22px;font:500 15px/1 "DM Sans",system-ui,sans-serif;box-shadow:0 8px 24px rgba(27,42,82,.28);cursor:pointer;transition:transform .2s,opacity .3s}' +
    '.ag-fab:hover{transform:translateY(-2px)}' +
    '.ag-fab.ag-hide{opacity:0;pointer-events:none}' +
    '.ag-ov{position:fixed;inset:0;z-index:9999;background:rgba(27,42,82,.45);display:none;align-items:flex-end;justify-content:center}' +
    '.ag-ov.ag-open{display:flex}' +
    '.ag-sh{background:#F5F0E8;color:#2D3142;width:100%;max-width:440px;border-radius:18px 18px 0 0;padding:22px 20px 26px;font-family:"DM Sans",system-ui,sans-serif;box-shadow:0 -10px 40px rgba(0,0,0,.2)}' +
    '@media(min-width:700px){.ag-ov{align-items:center}.ag-sh{border-radius:18px}}' +
    '.ag-hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}' +
    '.ag-hd strong{font:400 23px/1.2 "Playfair Display",Georgia,serif;color:#1B2A52}' +
    '.ag-x{background:none;border:0;font-size:26px;line-height:1;color:#6B7280;cursor:pointer;padding:4px 8px}' +
    '.ag-op{display:block;background:#fff;border:1px solid rgba(27,42,82,.12);border-radius:12px;padding:15px 16px;margin-bottom:10px;text-decoration:none;color:#1B2A52;transition:border-color .2s}' +
    '.ag-op:hover{border-color:#B8A47A}' +
    '.ag-op b{display:block;font-size:16px;font-weight:600;margin-bottom:3px}' +
    '.ag-op span{font-size:13px;color:#6B7280}' +
    '.ag-op.ag-wa b{color:#128C7E}' +
    '.ag-tip{font-size:12.5px;color:#6B7280;line-height:1.55;margin-top:12px;padding-top:12px;border-top:1px solid rgba(27,42,82,.1)}' +
    '@media(max-width:600px){.ag-fab{left:16px;right:16px;bottom:14px;justify-content:center}}';

  function build() {
    if (document.querySelector('.ag-fab')) return;
    var st = document.createElement('style');
    st.textContent = css;
    document.head.appendChild(st);

    var fab = document.createElement('button');
    fab.type = 'button';
    fab.className = 'ag-fab';
    fab.setAttribute('aria-haspopup', 'dialog');
    fab.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>' + t.btn;

    var ov = document.createElement('div');
    ov.className = 'ag-ov';
    ov.setAttribute('role', 'dialog');
    ov.setAttribute('aria-modal', 'true');
    ov.setAttribute('aria-label', t.title);
    ov.innerHTML =
      '<div class="ag-sh">' +
        '<div class="ag-hd"><strong>' + t.title + '</strong><button type="button" class="ag-x" aria-label="' + t.close + '">×</button></div>' +
        '<a class="ag-op" href="' + DOCTORALIA + '" target="_blank" rel="noopener"><b>📅 ' + t.online + '</b><span>' + t.onlineSub + '</span></a>' +
        '<a class="ag-op ag-wa" href="' + WHATSAPP + '" target="_blank" rel="noopener"><b>💬 ' + t.wa + '</b><span>' + t.waSub + '</span></a>' +
        '<p class="ag-tip">' + t.tip + '</p>' +
      '</div>';

    function open() { ov.classList.add('ag-open'); track('abrir_agendar', t.btn); }
    function close() { ov.classList.remove('ag-open'); }
    fab.addEventListener('click', open);
    ov.addEventListener('click', function (e) { if (e.target === ov || e.target.closest('.ag-x') || e.target.closest('.ag-op')) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

    document.body.appendChild(fab);
    document.body.appendChild(ov);

    // Ocultar el botón flotante cuando ya se ve la sección de contacto/CTA para no tapar los otros botones.
    var targets = document.querySelectorAll('#contacto, .cta, footer');
    if ('IntersectionObserver' in window && targets.length) {
      var visible = new Set();
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (x) { if (x.isIntersecting) visible.add(x.target); else visible.delete(x.target); });
        fab.classList.toggle('ag-hide', visible.size > 0);
      }, { threshold: 0.15 });
      targets.forEach(function (el) { io.observe(el); });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
