import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export function PageLayout({ children, title, subtitle, backgroundImage }) {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section for each page */}
      <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden sm:mt-10">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          {backgroundImage ? (
            <img
              src={backgroundImage}
              alt={title}
              className="w-full h-full object-cover object-center sm:object-center md:object-center"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-black" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 sm:from-black/70 sm:via-black/50 sm:to-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 sm:mb-6 tracking-tight text-balance">
            <span className="font-semibold">{title}</span>
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 font-light font-serif max-w-3xl mx-auto leading-relaxed px-2">
              {subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Page Content */}
      <div className="relative z-10">{children}</div>

      <Footer />
    </main>
  );
}
