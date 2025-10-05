import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[--color-primary] to-[--color-secondary] rounded"></div>
            <span className="text-xl font-bold text-[--color-text]">TREASURE HUNT</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#inicio" className="hover:text-[--color-text] transition-colors">Inicio</a>
            <a href="https://ill1.li/ml" target="_blank" rel="noopener noreferrer" className="hover:text-[--color-text] transition-colors">Catálogo</a>
            <a href="https://www.facebook.com/trhunts" target="_blank" rel="noopener noreferrer" className="hover:text-[--color-text] transition-colors">Redes</a>
            <a href="#contacto" className="hover:text-[--color-text] transition-colors">Contacto</a>
          </div>
          <a
            href="https://ill1.li/ml"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Ver tienda
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl w-full mx-auto">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden p-8 md:p-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-8">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Descubre Nuevas
                  <span className="block text-gray-400">→</span>
                  <span className="block">Dimensiones de</span>
                  <span className="block bg-gradient-to-r from-[--color-primary] to-[--color-secondary] bg-clip-text text-transparent">
                    Colección Real
                  </span>
                </h1>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/trhunts" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-[--color-primary] transition-colors">
                    <span className="text-xl">👥</span>
                  </a>
                  <a href="https://wa.me/522381031983" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-[--color-primary] transition-colors">
                    <span className="text-xl">📱</span>
                  </a>
                  <a href="https://maps.app.goo.gl/ECScuKvWqGrsJ48n6" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-[--color-primary] transition-colors">
                    <span className="text-xl">📍</span>
                  </a>
                </div>

                {/* CTA Button */}
                <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
                  <a href="https://ill1.li/ml" target="_blank" rel="noopener noreferrer">
                    Ir a la tienda
                  </a>
                </button>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                  Sumérgete en mundos inmersivos elaborados con detalles impresionantes, donde la tecnología y la creatividad se fusionan en experiencias de colección ilimitadas.
                </p>

                {/* Stats */}
                <div className="pt-8">
                  <div className="text-5xl font-bold text-[--color-text]">122k+</div>
                  <div className="text-sm text-gray-500">Para soñadores, coleccionistas y creadores</div>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-xl">
                  <Image
                    src="/maverick.png"
                    alt="Maverick - Treasure Hunt Store"
                    fill
                    priority
                    className="object-contain p-8"
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl px-6 py-4 shadow-lg">
                  <div className="text-3xl font-bold text-[--color-text]">80%</div>
                  <div className="text-xs text-gray-500">Ventas en incremento</div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-6 py-4 shadow-lg">
                  <div className="text-3xl font-bold text-[--color-text]">84%</div>
                  <div className="text-xs text-gray-500">Nivel de satisfacción</div>
                </div>

                {/* Play Button Circle */}
                <div className="absolute bottom-12 right-12 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <button className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
                    ▶
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-[--color-text]">Contáctanos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://wa.me/522381031983" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <div className="font-bold text-lg mb-2">WhatsApp</div>
              <div className="text-sm text-gray-600">238 103 1983</div>
            </a>
            <a href="https://www.facebook.com/trhunts" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">👥</div>
              <div className="font-bold text-lg mb-2">Facebook</div>
              <div className="text-sm text-gray-600">@trhunts</div>
            </a>
            <a href="https://maps.app.goo.gl/ECScuKvWqGrsJ48n6" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📍</div>
              <div className="font-bold text-lg mb-2">Ubicación</div>
              <div className="text-sm text-gray-600">Tehuacán, México</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
