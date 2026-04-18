export default function BernardiConstruccionesWeb() {
  const services = [
    {
      title: 'Urbanizaciones y Obras Civiles',
      text: 'Desarrollamos proyectos integrales de urbanización, movimiento de suelos, infraestructura de servicios y obras civiles de diversa envergadura, con foco en calidad, seguridad y cumplimiento normativo.',
    },
    {
      title: 'Obras Hidráulicas y Viales',
      text: 'Ejecutamos obras de infraestructura crítica, saneamiento, drenajes, pavimentos y trabajos viales, integrando planificación técnica, ejecución y control de obra.',
    },
    {
      title: 'Minería y Canteras',
      text: 'Contamos con capacidad técnica para operaciones vinculadas a canteras y movimientos de gran escala, aplicando estándares exigentes de seguridad y productividad.',
    },
    {
      title: 'Gasoductos y Oleoductos',
      text: 'Participamos en proyectos de ingeniería y construcción para infraestructura energética, desde el diseño conceptual hasta la puesta en marcha.',
    },
  ];

  const clients = [
    'Municipalidad de Ituzaingó',
    'Dirección General de Cultura y Educación',
    'Municipalidad de Moreno',
    'Nestlé Waters S.A.',
    'Mech Maderas S.R.L.',
  ];

  const references = [
    {
      title: 'Banco Patagonia S.A.',
      text: 'Relación comercial que respalda nuestras operaciones y refleja confiabilidad y solvencia empresarial.',
    },
    {
      title: 'SMG Seguros / Exavial S.A.',
      text: 'Coberturas integrales, maquinaria y servicios especializados para proyectos de gran envergadura.',
    },
    {
      title: 'Jordan Maderas S.R.L. / Rent Aire S.R.L.',
      text: 'Provisión de materiales, equipos y herramientas para asegurar calidad y continuidad operativa.',
    },
  ];

  const projects = [
    'Entubado de efluentes para Nestlé Waters S.A.',
    'Cañería de desagüe pluvial para el Ministerio de Planificación',
    'Bacheo de hormigón para la Municipalidad de Ituzaingó',
    'Playones deportivos en Polideportivo La Torcaza',
    'Obras en complejo polideportivo PROSEDE',
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_left,rgba(148,163,184,0.18),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-blue-300">Bernardi Construcciones S.R.L.</div>
              <div className="mt-2 text-2xl font-semibold lg:text-3xl">Ingeniería, Construcción y Gerenciamiento de Proyectos</div>
            </div>
            <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
              <a href="#empresa" className="transition hover:text-white">Empresa</a>
              <a href="#servicios" className="transition hover:text-white">Servicios</a>
              <a href="#clientes" className="transition hover:text-white">Clientes</a>
              <a href="#proyectos" className="transition hover:text-white">Proyectos</a>
              <a href="#contacto" className="transition hover:text-white">Contacto</a>
            </nav>
          </div>

          <div className="grid gap-10 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                Ingeniería, suministro, construcción, operación y gestión integral
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Soluciones de ingeniería y construcción con enfoque técnico, normativo y operativo.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Gestionamos con conocimiento, experiencia y seguridad. Focalizados en los resultados, administramos todas las variables brindando confianza y tranquilidad a nuestros clientes.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contacto" className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Solicitar contacto
                </a>
                <a href="#proyectos" className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                  Ver antecedentes
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.25em] text-blue-300">Fundación</div>
                <div className="mt-3 text-3xl font-bold">2010</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Continuación de Bernardi Ingeniería, con una base sólida de experiencia técnica y conocimiento aplicado al sector público y privado.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.25em] text-blue-300">Experiencia</div>
                <div className="mt-3 text-3xl font-bold">Multisectorial</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Construcción civil, hidráulica, vial, movimiento de suelos, obras sanitarias e infraestructura de servicios e industria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="empresa" className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Sobre la empresa</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Compromiso con la excelencia técnica y el desarrollo responsable</h2>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-base leading-8 text-slate-700">
              Bernardi Construcciones S.R.L. ofrece servicios integrales en ingeniería, suministro, construcción, operación y gerenciamiento de proyectos. La empresa se distingue por una sólida experiencia técnica y un profundo conocimiento de las regulaciones locales, garantizando cumplimiento normativo en cada intervención.
            </p>
            <p className="mt-5 text-base leading-8 text-slate-700">
              Cada proyecto refleja una visión orientada a la calidad, la sostenibilidad ambiental y el bienestar de las comunidades donde se trabaja, integrando planificación, ejecución y control con criterios de responsabilidad y eficiencia.
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-slate-50 py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Servicios y capacidades</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Capacidad operativa para proyectos de distinta escala y complejidad</h2>
            </div>
            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Ejecutamos el ciclo completo del proyecto, desde la etapa conceptual hasta la puesta en marcha, con criterios de calidad, seguridad y cumplimiento técnico.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {references.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 p-7 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-700">Referencias comerciales</div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="clientes" className="bg-slate-950 py-18 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Nuestros clientes</div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Trayectoria con organismos públicos y empresas privadas</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {clients.map((client) => (
              <div key={client} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center text-sm font-medium text-slate-100 backdrop-blur">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-7xl px-6 py-18 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Proyectos realizados</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Experiencia aplicada en infraestructura y obra pública</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Nuestra experiencia incluye proyectos de alto impacto vinculados a saneamiento, desagües, pavimentos y equipamiento deportivo, siempre con foco en la calidad de ejecución y el cumplimiento de plazos.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div key={project} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="text-sm leading-7 text-slate-700">{project}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-18">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Equipamiento y personal</div>
              <h3 className="mt-4 text-2xl font-bold">Recursos para ejecutar proyectos de gran escala</h3>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Contamos con maquinaria, equipos y recursos técnicos para obras civiles, hidráulicas y viales, incluyendo excavadoras, retroexcavadoras, camiones volcadores y equipamiento específico para ejecución y apoyo operativo.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Nuestro equipo multidisciplinario está conformado por ingenieros, técnicos y operarios capacitados, con enfoque permanente en seguridad, calidad y cumplimiento técnico.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Nuestro compromiso</div>
              <h3 className="mt-4 text-2xl font-bold">Calidad, sostenibilidad y confianza</h3>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Aplicamos metodologías probadas y conocimientos técnicos avanzados para asegurar resultados consistentes, sostenibles y alineados con las exigencias de cada cliente.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Respetamos el medio ambiente, cuidamos el impacto de nuestras operaciones y trabajamos en armonía con las leyes, normas y regulaciones locales vigentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-900 py-18 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">Contacto</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Hablemos de su próximo proyecto</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
                Estamos a disposición para consultas sobre proyectos de ingeniería, construcción y gerenciamiento. Atendemos requerimientos con enfoque técnico, seriedad y visión integral.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-blue-300">Dirección</div>
                <p className="mt-4 text-lg font-semibold">Balbastro Nº 1930</p>
                <p className="mt-2 text-slate-300">CP 1714, Ituzaingó, Buenos Aires, Argentina</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-blue-300">Teléfono</div>
                <p className="mt-4 text-lg font-semibold">4977-9649</p>
                <p className="mt-2 text-slate-300">Atención para consultas y proyectos</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:col-span-2">
                <div className="text-sm uppercase tracking-[0.25em] text-blue-300">Sitio</div>
                <p className="mt-4 text-lg font-semibold">www.bernardiconstrucciones.com</p>
                <p className="mt-2 text-slate-300">Bernardi Construcciones S.R.L. · Ingeniería y Construcción Corporativa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
