"use client";
import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaBookmark,
  FaRegBookmark,
  FaEllipsisH,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

interface GalleryPost {
  id: string;
  imageUrl: string;
  caption: string;
  date: string;
  likes: number;
  comments: number;
  liked: boolean;
  saved: boolean;
}

export default function InstagramGallery() {
  const [posts, setPosts] = useState<GalleryPost[]>([
    {
      id: "1",
      imageUrl: "/img/gallery/img1.jpeg",
      caption: "Tu primer cumpleaños juntos ❤️ #Cumpleaños",
      date: "29 MAY 2025",
      likes: 124,
      comments: 23,
      liked: false,
      saved: false,
    },
    {
      id: "2",
      imageUrl: "/img/gallery/img2.jpeg",
      caption: "Nuestro primer viaje juntos 💕 #Recuerdos",
      date: "01 JUN 2025",
      likes: 215,
      comments: 42,
      liked: true,
      saved: true,
    },
    {
      id: "3",
      imageUrl: "/img/gallery/img3.jpeg",
      caption: "El día que me dijiste que si ☺️ #Felicidad",
      date: "14 MAR 2025",
      likes: 187,
      comments: 31,
      liked: false,
      saved: false,
    },
    {
      id: "4",
      imageUrl: "/img/gallery/img4.jpeg",
      caption: "Mi foto favorita ❤️❤️❤️ #Enamorado",
      date: "12 MAR 2023",
      likes: 124,
      comments: 23,
      liked: false,
      saved: false,
    },
    {
      id: "5",
      imageUrl: "/img/gallery/img5.jpeg",
      caption: "Nuestra primer cita 💕💕 #PrimeraCita",
      date: "28 FEB 2025",
      likes: 215,
      comments: 42,
      liked: true,
      saved: true,
    },
    {
      id: "6",
      imageUrl: "/img/gallery/img6.jpeg",
      caption: "Nuestra primer comida hecha  #Cocineros",
      date: "7 MAR 2025",
      likes: 187,
      comments: 31,
      liked: false,
      saved: false,
    },
    // Agrega más posts según necesites
  ]);

  const [expandedComments, setExpandedComments] = useState<string | null>(null);

  const toggleLike = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  const toggleSave = (postId: string) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            saved: !post.saved,
          };
        }
        return post;
      })
    );
  };

  const toggleComments = (postId: string) => {
    setExpandedComments(expandedComments === postId ? null : postId);
  };

  return (
    <section className="bg-gray-50 py-12 px-4 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-rose-800 mb-2">
            Nuestra Galería
          </h1>
          <p className="text-xl text-rose-600">
            Momentos capturados, recuerdos eternizados
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Encabezado del post */}
              <div className="flex items-center p-4 border-b">
                <div className="w-10 h-10 rounded-full bg-rose-200 flex items-center justify-center mr-3">
                  <span className="text-rose-600 font-bold">Tú</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-black">usma_oscar</p>
                </div>
                <button className="text-gray-500">
                  <FaEllipsisH />
                </button>
              </div>

              {/* Imagen */}
              <div className="aspect-square bg-gray-100 relative">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Acciones */}
              <div className="p-4">
                <div className="flex justify-between mb-3">
                  <div className="flex space-x-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="text-2xl focus:outline-none"
                      aria-label={post.liked ? "Quitar like" : "Dar like"}
                    >
                      {post.liked ? (
                        <FaHeart className="text-rose-600" />
                      ) : (
                        <FaRegHeart className="text-gray-700" />
                      )}
                    </button>
                    <button
                      onClick={() => toggleComments(post.id)}
                      className="text-2xl text-gray-700 focus:outline-none"
                      aria-label="Mostrar comentarios"
                    >
                      <FaComment />
                    </button>
                    <button
                      className="text-2xl text-gray-700 focus:outline-none"
                      aria-label="Compartir"
                    >
                      <FiSend />
                    </button>
                  </div>
                  <button
                    onClick={() => toggleSave(post.id)}
                    className="text-2xl focus:outline-none"
                    aria-label={
                      post.saved ? "Quitar de guardados" : "Guardar post"
                    }
                  >
                    {post.saved ? (
                      <FaBookmark className="text-rose-600" />
                    ) : (
                      <FaRegBookmark className="text-gray-700" />
                    )}
                  </button>
                </div>

                {/* Likes */}
                <p className="font-semibold mb-1 text-black">
                  {post.likes} me gusta
                </p>

                {/* Caption */}
                <p className="mb-2 text-gray-600">
                  <span className="font-semibold mr-2 text-black">
                    usma_oscar
                  </span>
                  {post.caption}
                </p>

                {/* Fecha */}
                <p className="text-gray-600 text-xs uppercase mb-3 ">
                  {post.date}
                </p>

                {/* Comentarios (expandible) */}
                {expandedComments === post.id && (
                  <div className="border-t pt-3 mt-3">
                    <div className="mb-3">
                      <p className="text-gray-500">
                        Los comentarios están desactivados.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="text"
                        placeholder="Añade un comentario..."
                        className="flex-1 border-none focus:ring-0 px-0 text-sm"
                        disabled
                      />
                      <button
                        className="text-rose-500 font-semibold text-sm disabled:opacity-50"
                        disabled
                      >
                        Publicar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-rose-700 italic">
            "Una imagen vale más que mil palabras, pero ninguna es suficiente
            para describir lo que siento por ti"
          </p>
        </div>
      </div>
    </section>
  );
}
