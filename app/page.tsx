import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[--color-background]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 bg-[--color-primary] border-b-8 border-[--color-text]">
        <div className="max-w-7xl w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              <Image
                src="/maverick.png"
                alt="Maverick - Treasure Hunt Store"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 md:order-2">
            <div className="border-8 border-[--color-text] p-8 md:p-12 bg-[--color-secondary] shadow-[16px_16px_0px_0px_rgba(79,32,13,1)]">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none mb-6">
                TREASURE<br/>HUNT<br/>STORE
              </h1>

              <div className="border-t-4 border-[--color-text] pt-6 mb-8">
                <p className="text-xl md:text-2xl font-bold uppercase mb-4">
                  🎯 Caza de tesoros para verdaderos coleccionistas
                </p>
                <p className="text-base md:text-lg font-medium mb-6">
                  Especialistas en coleccionables vintage, figuras de acción clásicas, autos a escala y juguetes retro.
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="https://ill1.li/ml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[--color-text] text-[--color-background] px-10 py-5 text-xl md:text-2xl font-black uppercase border-4 border-[--color-text] hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[8px_8px_0px_0px_rgba(79,32,13,1)] transition-all mb-6"
              >
                IR A LA TIENDA →
              </a>

              {/* Links */}
              <div className="border-t-4 border-[--color-text] pt-6 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/522381031983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base md:text-lg font-bold hover:underline"
                >
                  <span className="text-2xl">📱</span>
                  WhatsApp
                </a>
                <a
                  href="https://www.facebook.com/trhunts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base md:text-lg font-bold hover:underline"
                >
                  <span className="text-2xl">👥</span>
                  Facebook
                </a>
                <a
                  href="https://maps.app.goo.gl/ECScuKvWqGrsJ48n6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base md:text-lg font-bold hover:underline"
                >
                  <span className="text-2xl">📍</span>
                  Ubicación
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
