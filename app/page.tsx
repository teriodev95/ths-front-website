export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center p-6 md:p-12 bg-[--color-primary] border-b-8 border-[--color-text]">
        <div className="max-w-5xl w-full">
          {/* Decorative border element */}
          <div className="border-8 border-[--color-text] p-8 md:p-12 bg-[--color-secondary] shadow-[12px_12px_0px_0px_rgba(79,32,13,1)]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
              TREASURE<br/>HUNT<br/>STORE
            </h1>
            <div className="border-t-4 border-[--color-text] pt-6 mb-8">
              <p className="text-2xl md:text-3xl font-bold uppercase mb-4">
                🎯 CAZA DE TESOROS PARA VERDADEROS COLECCIONISTAS
              </p>
              <p className="text-lg md:text-xl font-medium mb-6 max-w-2xl">
                Especialistas en coleccionables vintage, figuras de acción clásicas, autos a escala y juguetes retro.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://ill1.li/ml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[--color-text] text-[--color-background] px-10 py-5 text-xl md:text-2xl font-black uppercase border-4 border-[--color-text] hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[6px_6px_0px_0px_rgba(79,32,13,1)] transition-all"
              >
                VER CATÁLOGO →
              </a>
              <a
                href="https://wa.me/522381031983"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[--color-background] text-[--color-text] px-10 py-5 text-xl md:text-2xl font-black uppercase border-4 border-[--color-text] hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[6px_6px_0px_0px_rgba(79,32,13,1)] transition-all"
              >
                📱 CONTACTAR
              </a>
            </div>
          </div>

          {/* Floating accent */}
          <div className="hidden md:block absolute top-8 right-8 border-4 border-[--color-text] bg-[--color-primary] px-6 py-3 rotate-3 shadow-[8px_8px_0px_0px_rgba(79,32,13,1)]">
            <p className="text-sm font-black uppercase">¡NUEVO STOCK SEMANAL!</p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-[--color-background] p-6 md:p-12">
        <div className="max-w-5xl mx-auto">
          <div className="border-8 border-[--color-text] p-8 md:p-12 bg-[--color-primary] shadow-[16px_16px_0px_0px_rgba(79,32,13,1)]">
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-tight">
              ¿NO ENCUENTRAS<br/>LO QUE BUSCAS?
            </h2>
            <p className="text-xl md:text-2xl font-bold mb-6 max-w-3xl">
              Si no encuentras una pieza en nuestro catálogo, <span className="bg-[--color-text] text-[--color-background] px-2 py-1">PUEDES PREGUNTAR</span> y te ayudaremos a conseguirla.
            </p>
            <p className="text-lg md:text-xl font-medium border-l-8 border-[--color-text] pl-6">
              Nos apasiona la caza de tesoros para verdaderos coleccionistas. Tu búsqueda es nuestra misión.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-[--color-secondary] p-6 md:p-12 border-y-8 border-[--color-text]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-center border-8 border-[--color-text] bg-[--color-primary] p-6 shadow-[12px_12px_0px_0px_rgba(79,32,13,1)]">
            NUESTRAS CATEGORÍAS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-6 border-[--color-text] p-6 md:p-8 bg-[--color-background] hover:-translate-y-2 transition-transform group">
              <div className="border-b-4 border-[--color-text] pb-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-black uppercase">🏎️ AUTOS A ESCALA</h3>
              </div>
              <ul className="space-y-2 text-base md:text-lg font-bold">
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Hot Wheels RLC México</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Hot Wheels Premium edición limitada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Autos de colección escala 1:64</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Ferrari 250 Le Mans</span>
                </li>
              </ul>
            </div>

            <div className="border-6 border-[--color-text] p-6 md:p-8 bg-[--color-background] hover:-translate-y-2 transition-transform group">
              <div className="border-b-4 border-[--color-text] pb-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-black uppercase">🦸 FIGURAS MARVEL & DC</h3>
              </div>
              <ul className="space-y-2 text-base md:text-lg font-bold">
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Marvel Legends</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>DC Multiverse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>McFarlane Toys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Figuras exclusivas Comic Con</span>
                </li>
              </ul>
            </div>

            <div className="border-6 border-[--color-text] p-6 md:p-8 bg-[--color-background] hover:-translate-y-2 transition-transform group">
              <div className="border-b-4 border-[--color-text] pb-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-black uppercase">🎮 FUNKO POP & MÁS</h3>
              </div>
              <ul className="space-y-2 text-base md:text-lg font-bold">
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Funko Pop originales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Ediciones exclusivas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Star Wars</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Barbie edición especial</span>
                </li>
              </ul>
            </div>

            <div className="border-6 border-[--color-text] p-6 md:p-8 bg-[--color-background] hover:-translate-y-2 transition-transform group">
              <div className="border-b-4 border-[--color-text] pb-4 mb-4">
                <h3 className="text-2xl md:text-3xl font-black uppercase">⚔️ FIGURAS VINTAGE</h3>
              </div>
              <ul className="space-y-2 text-base md:text-lg font-bold">
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Caballeros del Zodiaco Bandai</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Thundercats Super7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Figuras Hasbro originales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[--color-secondary] mr-2">▶</span>
                  <span>Juguetes de los 80 y 90</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[--color-primary] p-6 md:p-12 border-t-8 border-[--color-text]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-center">
            CONTÁCTANOS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://wa.me/522381031983"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-6 border-[--color-text] p-6 md:p-8 bg-[--color-background] hover:bg-[--color-text] hover:text-[--color-background] transition-all hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(79,32,13,1)] hover:shadow-none"
            >
              <div className="text-4xl mb-4">📱</div>
              <p className="font-black text-xl uppercase mb-2">WHATSAPP</p>
              <p className="font-bold text-lg">238 103 1983</p>
              <p className="text-sm font-medium mt-2">Respuesta inmediata</p>
            </a>

            <a
              href="https://www.facebook.com/trhunts"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-6 border-[--color-text] p-6 md:p-8 bg-[--color-background] hover:bg-[--color-text] hover:text-[--color-background] transition-all hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(79,32,13,1)] hover:shadow-none"
            >
              <div className="text-4xl mb-4">👥</div>
              <p className="font-black text-xl uppercase mb-2">FACEBOOK</p>
              <p className="font-bold text-lg">@trhunts</p>
              <p className="text-sm font-medium mt-2">Síguenos para novedades</p>
            </a>

            <a
              href="https://maps.app.goo.gl/ECScuKvWqGrsJ48n6"
              target="_blank"
              rel="noopener noreferrer"
              className="block border-6 border-[--color-text] p-6 md:p-8 bg-[--color-background] hover:bg-[--color-text] hover:text-[--color-background] transition-all hover:-translate-y-2 shadow-[8px_8px_0px_0px_rgba(79,32,13,1)] hover:shadow-none"
            >
              <div className="text-4xl mb-4">📍</div>
              <p className="font-black text-xl uppercase mb-2">UBICACIÓN</p>
              <p className="font-bold text-base">
                Calle 3 Poniente #1103<br />
                Col. Arcadia<br />
                Tehuacán, México
              </p>
            </a>
          </div>

          {/* Final CTA */}
          <div className="mt-12 border-8 border-[--color-text] p-8 md:p-12 bg-[--color-secondary] text-center shadow-[16px_16px_0px_0px_rgba(79,32,13,1)]">
            <h3 className="text-3xl md:text-5xl font-black uppercase mb-6">
              ¿LISTO PARA COMENZAR TU BÚSQUEDA?
            </h3>
            <a
              href="https://ill1.li/ml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[--color-text] text-[--color-background] px-12 py-6 text-2xl md:text-3xl font-black uppercase border-4 border-[--color-text] hover:translate-x-2 hover:translate-y-2 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(79,32,13,1)] transition-all"
            >
              VER CATÁLOGO COMPLETO →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[--color-text] text-[--color-background] p-8 md:p-12 border-t-8 border-[--color-text]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-black uppercase mb-4">
            TREASURE HUNT STORE
          </p>
          <p className="text-base md:text-lg font-bold mb-6">
            Tienda de coleccionables vintage • Figuras de acción • Autos a escala • Juguetes retro
          </p>
          <div className="border-t-4 border-[--color-primary] pt-4">
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} Treasure Hunt Store. Tehuacán, México.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
