"use client";
import { FaHeart, FaCode, FaLightbulb, FaSmile } from "react-icons/fa";

export default function AboutProject() {
  const features = [
    {
      icon: <FaHeart className="text-4xl text-rose-600" />,
      title: "Motivación",
      description:
        "Creé este proyecto como un tributo a nuestro amor, una forma moderna de expresar todo lo que siento y atesorar nuestros momentos especiales en un solo lugar.",
    },
    {
      icon: <FaCode className="text-4xl text-rose-600" />,
      title: "Tecnología",
      description:
        "Usé Next.js y TypeScript para construir algo duradero y de alto rendimiento, porque nuestro amor merece la mejor tecnología disponible.",
    },
    {
      icon: <FaLightbulb className="text-4xl text-rose-600" />,
      title: "Inspiración",
      description:
        "Cada sección está inspirada en momentos que hemos compartido, cosas que te gustan y detalles que hacen única nuestra relación.",
    },
    {
      icon: <FaSmile className="text-4xl text-rose-600" />,
      title: "Propósito",
      description:
        "Más que un simple regalo, es un espacio vivo que puede crecer con nosotros, añadiendo nuevos capítulos a nuestra historia.",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif font-bold text-rose-800 mb-6">
            Sobre Este Proyecto
          </h1>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-6"></div>
          <p className="text-xl text-rose-600 max-w-3xl mx-auto">
            "No es solo código y diseño, es mi corazón convertido en algo
            tangible"
          </p>
          <p className="text-xl text-rose-600 max-w-3xl mx-auto">
            "Feliz medio aniversario"
          </p>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Texto inspiracional */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-serif font-bold text-rose-800 mb-6">
                ¿Por qué crear esto?
              </h2>

              <p className="text-lg text-gray-700 mb-6">
                En un mundo lleno de regalos convencionales, quería darte algo
                que reflejara el esfuerzo, dedicación y creatividad que pongo en
                nuestra relación cada día.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Este proyecto representa cómo veo el amor: constante evolución,
                atención a los detalles y la voluntad de crear cosas hermosas
                solo por verte sonreír.
              </p>

              <p className="text-lg text-gray-700">
                Cada línea de código, cada diseño y cada funcionalidad fue
                pensada con cariño, como una metáfora de lo que significa
                construir una relación sólida y hermosa.
              </p>

              <div className="mt-10 p-6 bg-rose-50 rounded-lg border border-rose-100">
                <p className="text-rose-800 italic">
                  "Espero que cuando mires este proyecto, veas más que una
                  página web - veas el tiempo, pensamiento y amor que invertí
                  para crear algo único para ti."
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="lg:w-1/2">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-rose-50"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-rose-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Nota técnica */}
            <div className="mt-12 bg-rose-800 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <FaCode className="mr-2" /> Detalle Técnico
              </h3>
              <p className="mb-4">
                Este sitio fue construido con Next.js, TypeScript y Tailwind
                CSS, combinando lo mejor en desarrollo web moderno para crear
                una experiencia rápida, segura y memorable.
              </p>
              <p>
                El código está escrito con la misma atención y cuidado que pongo
                en cada detalle de nuestra relación.
              </p>
            </div>
          </div>
        </div>

        {/* Mensaje final */}
        <div className="mt-20 text-center">
          <p className="text-2xl text-rose-700 italic max-w-3xl mx-auto">
            "Gracias por ser mi inspiración en este proyecto y en la vida. Cada
            día a tu lado es un nuevo motivo para crear cosas hermosas."
          </p>
        </div>
      </div>
    </section>
  );
}
