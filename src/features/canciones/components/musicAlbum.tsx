"use client";
import { useState } from "react";
import { FaSpotify, FaHeart, FaMusic } from "react-icons/fa";

interface Song {
  id: string;
  title: string;
  artist: string;
  description?: string;
  spotifyUrl: string;
}

export default function MusicAlbum() {
  const [activeSong, setActiveSong] = useState<string | null>(null);

  const songs: Song[] = [
    {
      id: "1",
      title: "ADMV",
      artist: "Maluma",
      description:
        "Cuando nos falle la memoria y solo queden las fotografías, que se me olvide todo, menos que eres mía",
      spotifyUrl:
        "https://open.spotify.com/track/3eJMSq78dDaFb7VvhNFnq6?si=9037ec7430bf4e16",
    },
    {
      id: "2",
      title: "Es por ti",
      artist: "Juanes",
      description:
        "Y cada vez que yo te busco y no te puedo aún hallar me siento un vagabundo, perdido por el mundo desordenado si no estás, como mueves tu mi felicidad y todo lo que esta de mas",
      spotifyUrl:
        "https://open.spotify.com/track/3b1IQflSLrgzYQPGFzI9cl?si=99ffeec4e1734ff5",
    },
    {
      id: "3",
      title: "Te entrego mi corazon",
      artist: "Andres Cepeda, Fonseca",
      description:
        "Te entrego mi corazón Igual que se entrega el mar en una orilla",
      spotifyUrl:
        "https://open.spotify.com/track/3SERd5fATotVlTyUGptcqZ?si=e0b8a6c309e14e3d",
    },
    {
      id: "4",
      title: "Mi otra mitad",
      artist: "Manuel Medrano",
      description: "Tu haces que en la vida brille todo",
      spotifyUrl:
        "https://open.spotify.com/track/5lLArVpMg2z8l3qggp7zmD?si=72b6033bc0924447",
    },
    {
      id: "5",
      title: "Cuando te veo",
      artist: "Chucho Rivas",
      description:
        "Tengo que encontrar una forma de cómo pagarte todo lo que das",
      spotifyUrl:
        "https://open.spotify.com/track/4BT8JGrwOj34Qvsf81RtJB?si=8b5ee432cef04398",
    },
    {
      id: "6",
      title: "Si no te tengo",
      artist: "Green Valley",
      description:
        "Y es que la vida se me pasa con una sonrisa con cada beso tu mirada siempre me acaricia",
      spotifyUrl:
        "https://open.spotify.com/track/1LCgOcsRa87qeCZRojmQ7d?si=00dea403722d49cd",
    },
    {
      id: "7",
      title: "Cien Años",
      artist: "Pedro Infante",
      description: "Y si vivo cien años, cien años pienso en ti",
      spotifyUrl:
        "https://open.spotify.com/track/760r2LXNtMaHDKMQ5wkXbi?si=e374ca1427984a4b",
    },
    {
      id: "8",
      title: "Mi persona favorita",
      artist: "Alejandro Sanz, Camila Cabello",
      description: "Se me corta por ti la respiracion por ti, lo siento bebe",
      spotifyUrl:
        "https://open.spotify.com/track/3eB9M6owEHwk4nNrZRNUwd?si=2bfb963d318947cd",
    },
    {
      id: "9",
      title: "Me estoy enamorando",
      artist: "La mafia",
      description: "Yo no me lo esperaba, pero te amo cada dia mas",
      spotifyUrl:
        "https://open.spotify.com/track/5lLArVpMg2z8l3qggp7zmD?si=72b6033bc0924447",
    },
    {
      id: "10",
      title: "La mujer perfecta (Alejandra Pulido)",
      artist: "Kurt",
      description:
        "Esta cancion es mas que especial, porque toda la cancion me recuerda a lo que eres tu y a ese amor tan inmenso que me das y la razon de por la cual estoy enamorado de ti",
      spotifyUrl:
        "https://open.spotify.com/track/5XR1WyZ0uOSHRNhP85QxT4?si=254e0a0e12c24dea",
    },
    // Agrega más canciones aquí
  ];

  const handleSongClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleDescription = (id: string) => {
    setActiveSong(activeSong === id ? null : id);
  };

  return (
    <section className="bg-rose-50 py-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-rose-100 p-4 rounded-full mb-4">
            <FaMusic className="text-rose-600 text-3xl" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-rose-800 mb-2">
            Nuestra Banda Sonora
          </h1>
          <p className="text-xl text-rose-600">
            Las canciones que pienso en ti cuando las escucho
          </p>
        </div>

        <div className="space-y-4">
          {songs.map((song) => (
            <div
              key={song.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <div
                className="p-5 cursor-pointer"
                onClick={() => handleSongClick(song.spotifyUrl)}
              >
                <div className="flex items-start">
                  <div className="bg-rose-100 p-3 rounded-lg mr-4">
                    <FaSpotify className="text-green-500 text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-rose-800">
                      {song.title}
                    </h3>
                    <p className="text-rose-600">{song.artist}</p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDescription(song.id);
                    }}
                    className="text-rose-500 hover:text-rose-700 ml-2"
                    aria-label={
                      activeSong === song.id
                        ? "Ocultar detalles"
                        : "Mostrar detalles"
                    }
                  >
                    {activeSong === song.id ? (
                      <span className="text-sm">▲</span>
                    ) : (
                      <span className="text-sm">▼</span>
                    )}
                  </button>
                </div>
              </div>

              {activeSong === song.id && (
                <div className="px-5 pb-5 pt-2 bg-rose-50 border-t border-rose-100">
                  <p className="text-rose-700 mb-4">{song.description}</p>
                  <button
                    onClick={() => handleSongClick(song.spotifyUrl)}
                    className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors"
                  >
                    <FaSpotify className="mr-2" />
                    Reproducir en Spotify
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center text-rose-700 italic">
            <FaHeart className="mr-2 text-rose-500" />
            <p>
              "Cada nota musical nos recuerda lo especial que es nuestro amor"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
