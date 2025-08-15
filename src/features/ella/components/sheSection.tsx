"use client";
import { useState } from "react";
import Image from "next/image";

export default function SheSection() {
  const [currentReason, setCurrentReason] = useState(0);

  const reasons = [
    {
      title: "Su Sonrisa Ilumina Mi Vida",
      description:
        "Hay algo en su sonrisa que hace que todo parezca mejor. Es mi fuente de alegría en los días grises y mi motivo para sonreír cada mañana.",
    },
    {
      title: "Su Corazón Generoso",
      description:
        "Nadie en este mundo tiene un corazón tan grande como el suyo. Su capacidad para amar y cuidar de los demás es simplemente inspiradora.",
    },
    {
      title: "Su Inteligencia y Sabiduría",
      description:
        "Cada conversación con ella es un aprendizaje. Su forma de ver el mundo y analizar las situaciones me hace admirarla más cada día.",
    },
    {
      title: "Su Fortaleza Interior",
      description:
        "Por cómo enfrenta los desafíos con una determinación que asombra. Su resiliencia es una lección constante de lo que significa ser fuerte.",
    },
    {
      title: "Su Pasión por la Vida",
      description:
        "La manera en que disfruta cada pequeño momento, convirtiendo lo ordinario en extraordinario, es algo que admiro profundamente.",
    },
  ];

  const nextReason = () => {
    setCurrentReason((prev) => (prev + 1) % reasons.length);
  };

  const prevReason = () => {
    setCurrentReason((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-rose-50 to-rose-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-rose-800 mb-4">
            Por Qué Ella
          </h1>
          <p className="text-xl text-rose-600 max-w-2xl mx-auto">
            Las razones por las que es la persona más especial en mi vida
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Razones - Lado izquierdo */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-xl relative h-full">
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-rose-800 mb-4">
                  {reasons[currentReason].title}
                </h2>
                <p className="text-lg text-gray-700">
                  {reasons[currentReason].description}
                </p>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={prevReason}
                  className="bg-rose-600 hover:bg-rose-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Razón anterior"
                >
                  &lt;
                </button>
                <div className="flex space-x-2">
                  {reasons.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReason(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentReason
                          ? "bg-rose-600 w-6"
                          : "bg-rose-300"
                      }`}
                      aria-label={`Ir a razón ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextReason}
                  className="bg-rose-600 hover:bg-rose-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Siguiente razón"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Imagen - Lado derecho */}
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-rose-200 rounded-3xl -rotate-3 scale-95"></div>
              <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl h-full">
                <Image
                  src="/img/she-bg.jpeg" // Reemplaza con la ruta correcta
                  alt="La mujer más especial"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="text-center mt-8">
              <h3 className="text-2xl font-bold text-rose-800">
                Mi Persona Favorita
              </h3>
              <p className="text-rose-600">El amor de mi vida</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-rose-700 italic text-xl">
            "Entre todas las personas del mundo, ella es mi elección siempre y
            para siempre"
          </p>
        </div>
      </div>
    </section>
  );
}
