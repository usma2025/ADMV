"use client";
import Link from "next/link";
import { FaHeart, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-rose-800 text-white py-8 px-4 mt-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sección de información */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-serif font-bold mb-4 flex items-center">
              Para el amor de mi vida <FaHeart className="ml-2 text-rose-300" />
            </h3>
            <p className="text-center md:text-left text-rose-100">
              Un espacio creado con todo mi cariño para recordar nuestros
              momentos especiales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Nuestras Secciones</h3>
            <ul className="space-y-2 text-center">
              <li>
                <Link
                  href="/Aleja/canciones"
                  className="hover:text-rose-300 transition-colors"
                >
                  Canciones
                </Link>
              </li>
              <li>
                <Link
                  href="/Aleja/galeria"
                  className="hover:text-rose-300 transition-colors"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/Aleja/notas"
                  className="hover:text-rose-300 transition-colors"
                >
                  Notas
                </Link>
              </li>
              <li>
                <Link
                  href="/Aleja/she"
                  className="hover:text-rose-300 transition-colors"
                >
                  She
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales/contacto */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-semibold mb-4">Conéctate</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/usma_oscar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-rose-300 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100076192604166"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-rose-300 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="mailto:usmaoscar1@gmail.com"
                className="text-2xl hover:text-rose-300 transition-colors"
                aria-label="Enviar email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-rose-700 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-rose-200 text-sm">
          <p>
            © {currentYear} Creado con amor para ti. Todos los derechos
            reservados.
          </p>
          <p className="mt-1">Hecho con Next.js, TypeScript y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
