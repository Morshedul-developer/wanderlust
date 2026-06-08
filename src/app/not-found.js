import Link from "next/link";
import { Compass, Home, MapPinned } from "lucide-react";

const NotFoundPage = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative text-center max-w-3xl">
        {/* Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
          <Compass size={48} className="animate-spin [animation-duration:8s]" />
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-[180px] font-black leading-none bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-5xl font-bold">
          Lost In The Journey?
        </h2>

        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          The destination you're looking for seems to have disappeared from the
          map. Let's help you find your way back.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300"
          >
            <Home size={18} />
            Back Home
          </Link>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 font-medium hover:bg-accent transition-all duration-300"
          >
            <MapPinned size={18} />
            Explore Destinations
          </Link>
        </div>

        {/* Decorative Text */}
        <p className="mt-12 text-sm tracking-[0.4em] uppercase text-muted-foreground">
          Wanderlust • Explore • Discover
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;