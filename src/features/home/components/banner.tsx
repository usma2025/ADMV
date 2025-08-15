"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Canciones",
    description:
      "Nuestra banda sonora especial, canciones que cuentan nuestra historia",
    bgImage: "/img/music-bg.jpg",
    path: "/canciones",
  },
  {
    id: 2,
    title: "Galería",
    description: "Capturas de momentos que atesoramos para siempre",
    bgImage: "/img/gallery-bg.jpeg",
    path: "/galeria",
  },
  {
    id: 3,
    title: "Notas",
    description: "Palabras y pensamientos que guardo para ti",
    bgImage: "/img/notes-bg.webp",
    path: "/notas",
  },
  {
    id: 4,
    title: "She",
    description: "El mundo a través de tus ojos, mi persona favorita",
    bgImage: "/img/she-bg.jpeg",
    path: "/she",
  },
  {
    id: 5,
    title: "Nuestro Proyecto",
    description: "Cómo y por qué creé este espacio solo para ti",
    bgImage: "/img/LogoHeader.png",
    path: "/about",
  },
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Auto-rotación del carrusel
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [hovered, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Imagen de fondo optimizada */}
          <div className="absolute inset-0">
            <Image
              src={slide.bgImage}
              alt={`Fondo ${slide.title}`}
              fill
              className="object-cover object-center"
              quality={90}
              priority={index === 0}
            />
          </div>

          {/* Overlay con gradiente para mejor legibilidad */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 transition-opacity duration-300 ${
              hovered ? "opacity-100" : "opacity-90"
            }`}
          ></div>

          {/* Contenido del slide */}
          <div
            className={`relative z-10 text-white text-center p-6 max-w-2xl transition-all duration-500 ${
              hovered ? "transform scale-105" : ""
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-serif drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg md:text-xl mb-6 drop-shadow-md">
              {slide.description}
            </p>
            <Link
              href={slide.path}
              className="inline-block px-6 py-2 bg-rose-500 hover:bg-rose-600 rounded-full font-medium transition-colors shadow-lg"
            >
              Ver más
            </Link>
          </div>
        </div>
      ))}

      {/* Controles de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        &gt;
      </button>

      {/* Indicadores de posición */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-rose-500 w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
