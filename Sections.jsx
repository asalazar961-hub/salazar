
const SERVICES = [
  { name: 'Primera consulta', price: '$1,800', desc: 'Evaluación integral: diagnóstico, plan de tratamiento y orientación terapéutica.', mode: 'Presencial / En línea' },
  { name: 'Terapia Cognitivo-Conductual', price: '$1,300', desc: 'Sesiones de TCC individuales con herramientas prácticas para la vida diaria.', mode: 'Presencial / En línea' },
  { name: 'Consulta de seguimiento', price: '$1,300', desc: 'Revisión de avances, ajuste farmacológico y continuidad terapéutica.', mode: 'Presencial / En línea' },
  { name: 'Consulta en inglés', price: '$2,000', desc: 'Psychiatric consultation fully conducted in English.', mode: 'Presencial / En línea' },
  { name: 'Visita domiciliaria', price: 'desde $4,000', desc: 'Atención personalizada en el hogar para casos que lo requieran.', mode: 'CDMX' },
];

const TESTIMONIALS = [
  { text: 'Las sesiones son excelentes. Tiene mucha paciencia y explica con detalle, te ofrece distintas opciones y recursos para trabajar.', name: 'Pilar', service: 'TCC en línea' },
  { text: 'Es la persona más gentil. Su trato es cordial y genera confianza. Es el mejor psiquiatra que me ha atendido.', name: 'Adriana E.', service: 'Consulta presencial' },
  { text: 'Profesional, ético y con calidez humana. Lo recomiendo ampliamente.', name: 'Fernanda', service: 'Primera consulta' },
];

const CONDITIONS = ['Ansiedad', 'Depresión', 'Fobia social', 'Insomnio', 'TOC', 'TDAH', 'PTSD', 'Trastorno bipolar', 'Trastornos de personalidad', 'Crisis suicida', 'Adicciones', 'Psicosis'];

function useIsMobile2() {
  const [mobile, setMobile] = React.useState(window.innerWidth < 768);
  React.useEffect(() => {
    const fn = () => setMobile(window.innerWidth < 768);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return mobile;
}

function AboutSection() {
  const mobile = useIsMobile2();
  return (
    <section id="about" data-screen-label="02 About" style={{ padding: mobile ? '60px 24px' : '100px 80px', background: '#1B2E5E', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 40 : 80, alignItems: 'center' }}>
      <div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8A882', marginBottom: 20 }}>Sobre el doctor</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: mobile ? 32 : 44, fontWeight: 400, color: 'white', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 28 }}>
          Formación integral para una atención completa
        </h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 20 }}>
          Soy médico psiquiatra egresado del Centro Médico Nacional "20 de Noviembre" ISSSTE, con alta especialidad en <strong style={{color:'white',fontWeight:500}}>Psiquiatría de Enlace</strong> y Maestría en <strong style={{color:'white',fontWeight:500}}>Terapia Cognitivo-Conductual (TCC)</strong>.
        </p>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 300, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 32 }}>
          Trabajo de forma integral: evaluación médica, tratamiento farmacológico cuando es necesario, y psicoterapia basada en evidencia. Cada paciente recibe un plan personalizado con herramientas aplicables en su vida diaria.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            ['Licenciatura en Medicina', 'UNAM · Facultad de Medicina'],
            ['Especialidad en Psiquiatría', 'UNAM / CMN 20 de Noviembre'],
            ['Alta Especialidad: Psiquiatría de Enlace', 'UNAM / CMN 2025–2026'],
            ['Maestría en TCC', 'Centro de Psicoterapia Cognitiva · En curso'],
          ].map(([title, sub]) => (
            <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#B8A882', marginTop: 7, flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: 'white' }}>{title}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '28px 32px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B8A882', marginBottom: 16 }}>Enfoques terapéuticos</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['TCC', 'Mindfulness', 'ACT', 'Terapia de esquemas', 'Análisis funcional', 'Terapia de pareja'].map(t => (
              <span key={t} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, padding: '5px 14px', borderRadius: 9999, border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, padding: '28px 32px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B8A882', marginBottom: 16 }}>Condiciones que atiendo</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {Conditions.map(c => (
              <span key={c} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{c} ·</span>
            ))}
          </div>
        </div>
        <div style={{ background: 'rgba(184,168,130,0.15)', borderRadius: 16, padding: '24px 32px', border: '1px solid rgba(184,168,130,0.3)' }}>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 300, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontStyle: 'italic' }}>
            "Dar el primer paso para buscar ayuda en salud mental no es fácil. Mi compromiso es ofrecerte un espacio seguro, profesional y sin juicios."
          </div>
          <div style={{ marginTop: 12, fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 500, color: '#B8A882' }}>— Dr. Alejandro Salazar Rodríguez</div>
        </div>
      </div>
    </section>
  );
}

const Conditions = CONDITIONS;

function TCCSection() {
  const mobile = useIsMobile2();
  return (
    <section id="tcc" data-screen-label="03 TCC" style={{ padding: mobile ? '60px 24px' : '100px 80px', background: '#F7F4EE' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 40 : 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8A882', marginBottom: 20 }}>Terapia Cognitivo-Conductual</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: mobile ? 32 : 44, fontWeight: 400, color: '#1B2E5E', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 28 }}>
              Herramientas reales para cambios reales
            </h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 300, color: '#374151', lineHeight: 1.75, marginBottom: 20 }}>
              La <strong>Terapia Cognitivo-Conductual</strong> es el tratamiento psicológico con mayor respaldo científico para ansiedad y depresión. Trabaja identificando y transformando los patrones de pensamiento y comportamiento que mantienen el malestar.
            </p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 300, color: '#374151', lineHeight: 1.75, marginBottom: 36 }}>
              Mi maestría en TCC me permite integrarlo con evaluación psiquiátrica completa: el resultado es un plan de tratamiento que va más allá del medicamento.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['Evaluación inicial completa', 'Diagnóstico estructurado con anamnesis profunda y escalas validadas.'],
                ['Plan personalizado', 'Objetivos claros, herramientas específicas para tu caso.'],
                ['Seguimiento continuo', 'Sesiones de revisión para ajustar estrategias según tu progreso.'],
              ].map(([t, d]) => (
                <div key={t} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, background: '#EEF3F8', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3A6B9F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#1B2E5E' }}>{t}</div>
                    <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#6B7280', marginTop: 2 }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[['Ansiedad y ataques de pánico', '★★★★★', 'Alta efectividad comprobada'], ['Depresión', '★★★★★', 'Primera línea de tratamiento'], ['TOC', '★★★★☆', 'Protocolo ERP + TCC'], ['Fobia social', '★★★★★', 'Exposición gradual + reestructuración'], ['Insomnio', '★★★★☆', 'TCC-I protocolo especializado']].map(([cond, stars, note]) => (
              <div key={cond} style={{ background: 'white', borderRadius: 12, padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500, color: '#1B2E5E' }}>{cond}</div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#6B7280', marginTop: 2 }}>{note}</div>
                </div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#B8A882' }}>{stars}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const mobile = useIsMobile2();
  return (
    <section id="services" data-screen-label="04 Services" style={{ padding: mobile ? '60px 24px' : '100px 80px', background: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8A882', marginBottom: 16 }}>Servicios</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 44, fontWeight: 400, color: '#1B2E5E', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Consultas y tarifas</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {SERVICES.slice(0, 3).map(s => (
            <div key={s.name} style={{ background: '#F7F4EE', borderRadius: 16, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, color: '#1B2E5E', lineHeight: 1.3, marginBottom: 12 }}>{s.name}</div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#6B7280', lineHeight: 1.65, flexGrow: 1, marginBottom: 20 }}>{s.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: '#1B2E5E' }}>{s.price} <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, fontWeight: 400, color: '#6B7280' }}>MXN</span></div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, color: '#A09890' }}>{s.mode}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: 16 }}>
          {SERVICES.slice(3).map(s => (
            <div key={s.name} style={{ background: '#F7F4EE', borderRadius: 16, padding: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 18, color: '#1B2E5E', marginBottom: 6 }}>{s.name}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#6B7280' }}>{s.mode}</div>
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, color: '#1B2E5E', textAlign: 'right' }}>
                {s.price}<div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, fontWeight: 400, color: '#6B7280' }}>MXN</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, background: '#1B2E5E', borderRadius: 16, padding: mobile ? '32px 24px' : '40px 48px', display: 'flex', flexDirection: mobile ? 'column' : 'row', gap: mobile ? 24 : 0, justifyContent: 'space-between', alignItems: mobile ? 'flex-start' : 'center' }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 28, color: 'white', marginBottom: 8 }}>¿Listo para dar el primer paso?</div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.65)', fontWeight: 300 }}>Agenda en línea o escríbeme directamente por WhatsApp.</div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
            <a href="https://www.doctoralia.com.mx/alejandro-salazar-rodriguez/psiquiatra/ciudad-de-mexico" target="_blank"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 14, background: 'white', color: '#1B2E5E', padding: '12px 24px', borderRadius: 6, textDecoration: 'none' }}>
              Doctoralia
            </a>
            <a href="https://wa.me/5215548687128" target="_blank"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 14, background: '#25D366', color: 'white', padding: '12px 24px', borderRadius: 6, textDecoration: 'none' }}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const mobile = useIsMobile2();
  return (
    <section id="testimonials" data-screen-label="05 Testimonials" style={{ padding: mobile ? '60px 24px' : '100px 80px', background: '#F7F4EE' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: mobile ? 36 : 56, display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: mobile ? 'flex-start' : 'flex-end', gap: 16 }}>
          <div>
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8A882', marginBottom: 16 }}>Opiniones</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 44, fontWeight: 400, color: '#1B2E5E', lineHeight: 1.15, letterSpacing: '-0.02em' }}>Lo que dicen<br /><em>los pacientes</em></h2>
          </div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#6B7280' }}>42 opiniones verificadas en Doctoralia</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: mobile ? '1fr' : 'repeat(3,1fr)', gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: 'white', borderRadius: 16, padding: '36px 32px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 48, color: '#B8A882', lineHeight: 0.8, marginBottom: 20 }}>"</div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 300, color: '#374151', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 28 }}>{t.text}</p>
              <div style={{ borderTop: '1px solid #E2DDD4', paddingTop: 16 }}>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, fontWeight: 500, color: '#1B2E5E' }}>{t.name}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#A09890' }}>{t.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const mobile = useIsMobile2();
  return (
    <section id="contact" data-screen-label="06 Contact" style={{ padding: mobile ? '60px 24px' : '100px 80px', background: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: mobile ? '1fr' : '1fr 1fr', gap: mobile ? 40 : 80 }}>
        <div>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#B8A882', marginBottom: 20 }}>Contacto</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: mobile ? 32 : 44, fontWeight: 400, color: '#1B2E5E', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 28 }}>Agenda tu<br />primera consulta</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 17, fontWeight: 300, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            Juntos podemos diseñar un plan claro y realista para recuperar tu bienestar emocional.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              ['Teléfono / WhatsApp', '+52 55 4868 7128'],
              ['Correo', 'asalazar961@gmail.com'],
              ['Consultorio', 'Manuel López Cotilla 812, Col. Del Valle Centro, CDMX'],
              ['Videoconsulta', 'Disponible para todo México'],
            ].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 40, height: 40, background: '#F7F4EE', borderRadius: 8, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: '#A09890', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{l}</div>
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: '#1B2E5E', marginTop: 2 }}>{v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#F7F4EE', borderRadius: 20, padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20 }}>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#1B2E5E', marginBottom: 8 }}>Elige cómo agendar</div>
          <a href="https://www.doctoralia.com.mx/alejandro-salazar-rodriguez/psiquiatra/ciudad-de-mexico" target="_blank"
            style={{ display: 'block', background: '#1B2E5E', color: 'white', padding: '18px 28px', borderRadius: 10, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500, textAlign: 'center' }}>
            Agendar en Doctoralia
          </a>
          <a href="https://wa.me/5215548687128?text=Hola%20Doctor%20Salazar%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta" target="_blank"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#25D366', color: 'white', padding: '18px 28px', borderRadius: 10, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontSize: 15, fontWeight: 500 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Escribir por WhatsApp
          </a>
          <div style={{ textAlign: 'center', fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: '#A09890', marginTop: 8 }}>
            Tiempo de respuesta: menos de 24 horas
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const mobile = useIsMobile2();
  return (
    <footer style={{ background: '#1B2E5E', padding: mobile ? '48px 24px 32px' : '56px 80px 40px', color: 'rgba(255,255,255,0.5)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: mobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: mobile ? 36 : 0, marginBottom: 40, paddingBottom: 36, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <img src={window.__resources.logoImg} style={{ height: 48, filter: 'brightness(0) invert(1)', opacity: 0.8, marginBottom: 16 }} alt="Logo" />
            <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8 }}>
              Dr. Alejandro Salazar Rodríguez<br/>
              Médico Psiquiatra · Maestro en TCC<br/>
              Cédula: 15145882 / 12195155
            </div>
          </div>
          <div style={{ display: 'flex', gap: mobile ? 40 : 64, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Servicios</div>
              {['TCC', 'Primera consulta', 'Seguimiento', 'En línea'].map(l => (
                <div key={l} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>{l}</div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>Contacto</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>+52 55 4868 7128</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>asalazar961@gmail.com</div>
              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.4)', maxWidth: 200, lineHeight: 1.6 }}>Manuel López Cotilla 812, Col. Del Valle Centro, CDMX</div>
            </div>
          </div>
        </div>
        <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.3)', display: 'flex', justifyContent: 'space-between' }}>
          <span>© 2025 Alejandro Salazar Rodríguez. Todos los derechos reservados.</span>
          <span>Psiquiatría · TCC · CDMX</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { AboutSection, TCCSection, ServicesSection, TestimonialsSection, ContactSection, Footer });
