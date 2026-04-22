
const NAV_LINKS = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Terapia TCC', href: '#tcc' },
  { label: 'Servicios', href: '#services' },
  { label: 'Publicaciones', href: '#publications' },
  { label: 'Contacto', href: '#contact' },
];

function Nav({ activeSection }) {
  const [scrolled, setScrolled] = React.useState(false);
  const mobile = useIsMobile();
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(247,244,238,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(226,221,212,0.6)' : 'none',
      transition: 'all 300ms cubic-bezier(0.4,0,0.2,1)',
      padding: mobile ? '0 20px' : '0 40px', height: 72,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      overflow: 'hidden',
    }}>
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
        <img src={window.__resources.logoImg} style={{ height: 34, width: 'auto' }} alt="Logo" />
        <div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600, fontSize: mobile ? 11 : 13, color: '#1B2E5E', letterSpacing: '0.04em', textTransform: 'uppercase', lineHeight: 1.2 }}>Alejandro Salazar</div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400, fontSize: 10, color: '#6B7280', letterSpacing: '0.04em' }}>Psiquiatra · Maestro en TCC</div>
        </div>
      </a>
      {mobile ? (
        <a href="https://www.doctoralia.com.mx/alejandro-salazar-rodriguez/psiquiatra/ciudad-de-mexico"
          target="_blank"
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500, background: '#1B2E5E', color: 'white', padding: '8px 16px', borderRadius: 6, textDecoration: 'none', flexShrink: 0 }}>
          Agendar
        </a>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 400, color: activeSection === l.href.slice(1) ? '#1B2E5E' : '#6B7280', textDecoration: 'none', transition: 'color 200ms' }}
              onMouseEnter={e => e.target.style.color = '#1B2E5E'}
              onMouseLeave={e => e.target.style.color = activeSection === l.href.slice(1) ? '#1B2E5E' : '#6B7280'}
            >{l.label}</a>
          ))}
          <a href="https://www.doctoralia.com.mx/alejandro-salazar-rodriguez/psiquiatra/ciudad-de-mexico"
            target="_blank"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, background: '#1B2E5E', color: 'white', padding: '9px 22px', borderRadius: 6, textDecoration: 'none' }}
            onMouseEnter={e => e.target.style.background = '#2a3f78'}
            onMouseLeave={e => e.target.style.background = '#1B2E5E'}
          >Agendar cita</a>
        </div>
      )}
    </nav>
  );
}

function useIsMobile() {
  const [mobile, setMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return mobile;
}

function Hero() {
  const mobile = useIsMobile();
  return (
    <section id="hero" data-screen-label="01 Hero" style={{
      minHeight: '100vh', background: '#F7F4EE', paddingTop: 72,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Photo — full width on mobile, positioned on desktop */}
      {mobile ? (
        <div style={{ width: '100%', height: 320, overflow: 'hidden', flexShrink: 0 }}>
          <img src={window.__resources.fotoPerfilImg} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} alt="Dr. Alejandro Salazar" />
        </div>
      ) : null}

      <div style={{
        display: mobile ? 'block' : 'grid',
        gridTemplateColumns: mobile ? undefined : '1fr 1fr',
        flex: 1,
      }}>
        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: mobile ? '48px 28px 60px' : '80px 60px 80px 80px' }}>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8A882', marginBottom: 20 }}>
            Ciudad de México · Consulta presencial y en línea
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: mobile ? 44 : 58, fontWeight: 400, color: '#1B2E5E', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 20 }}>
            Recupera tu<br /><em style={{ fontStyle: 'italic' }}>bienestar</em><br />emocional.
          </h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: mobile ? 16 : 18, fontWeight: 300, color: '#374151', lineHeight: 1.7, maxWidth: 480, marginBottom: 36 }}>
            Psiquiatra con Maestría en Terapia Cognitivo-Conductual. Un espacio seguro, profesional y sin juicios, con herramientas basadas en evidencia para tu vida diaria.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://www.doctoralia.com.mx/alejandro-salazar-rodriguez/psiquiatra/ciudad-de-mexico"
              target="_blank"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 15, background: '#1B2E5E', color: 'white', padding: '14px 28px', borderRadius: 6, textDecoration: 'none' }}>
              Agenda tu cita
            </a>
            <a href="https://wa.me/5215548687128"
              target="_blank"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 15, background: 'transparent', color: '#1B2E5E', padding: '14px 24px', borderRadius: 6, border: '1.5px solid #1B2E5E', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1B2E5E"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp
            </a>
          </div>
          <div style={{ marginTop: 40, display: 'flex', gap: mobile ? 28 : 40 }}>
            {[['42', 'opiniones verificadas'], ['10+', 'años de formación'], ['2', 'especialidades']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: mobile ? 26 : 32, color: '#1B2E5E', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#6B7280', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Right: photo (desktop only) */}
        {!mobile && (
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img src={window.__resources.fotoPerfilImg} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} alt="Dr. Alejandro Salazar" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(247,244,238,0.15) 0%, transparent 30%)' }} />
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, { Nav, Hero, NAV_LINKS });
