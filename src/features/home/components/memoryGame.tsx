"use client";
import { useState, useEffect, useCallback } from "react";

interface Card {
  id: number;
  emoji: string;
  matched: boolean;
}

const emojis = ["❤️", "🌹", "🎶", "📸", "🍽️", "✈️"];

export default function MemoryGame() {
  const [cards, setCards] = useState<Card[]>(() => {
    const initialCards = [
      ...emojis.map((emoji, index) => ({
        id: index + 1,
        emoji,
        matched: false,
      })),
      ...emojis.map((emoji, index) => ({
        id: index + emojis.length + 1,
        emoji,
        matched: false,
      })),
    ];
    return initialCards.sort(() => Math.random() - 0.5);
  });

  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);

  const checkWin = useCallback(() => {
    const allMatched = cards
      .filter((card) => card.id <= emojis.length)
      .every((card) => card.matched);
    if (allMatched) {
      setGameWon(true);
    }
  }, [cards]);

  const resetGame = () => {
    const newCards = [
      ...emojis.map((emoji, index) => ({
        id: index + 1,
        emoji,
        matched: false,
      })),
      ...emojis.map((emoji, index) => ({
        id: index + emojis.length + 1,
        emoji,
        matched: false,
      })),
    ].sort(() => Math.random() - 0.5);

    setCards(newCards);
    setFlipped([]);
    setMoves(0);
    setGameWon(false);
    setDisabled(false);
  };

  const handleClick = useCallback(
    (index: number) => {
      if (
        disabled ||
        flipped.includes(index) ||
        cards[index].matched ||
        flipped.length >= 2
      ) {
        return;
      }

      const newFlipped = [...flipped, index];
      setFlipped(newFlipped);

      if (newFlipped.length === 2) {
        setDisabled(true);
        setMoves((prev) => prev + 1);

        const [firstIndex, secondIndex] = newFlipped;
        const doMatch = cards[firstIndex].emoji === cards[secondIndex].emoji;

        if (doMatch) {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === cards[firstIndex].id ||
              card.id === cards[secondIndex].id
                ? { ...card, matched: true }
                : card
            )
          );
        }

        setTimeout(() => {
          setFlipped([]);
          setDisabled(false);
          if (doMatch) {
            checkWin();
          }
        }, 1000);
      }
    },
    [cards, disabled, flipped, checkWin]
  );

  return (
    <section className="bg-rose-100 p-6 rounded-xl max-w-md mx-auto my-12">
      <h2 className="text-2xl font-serif font-bold text-rose-800 mb-4 text-center">
        Juego de Memoria de Nuestros Momentos
      </h2>

      <div className="grid grid-cols-4 gap-3 mb-6">
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => handleClick(index)}
            disabled={disabled || card.matched}
            className={`h-16 flex items-center justify-center text-3xl rounded-lg transition-all duration-300 focus:outline-none ${
              flipped.includes(index) || card.matched
                ? "bg-white transform rotate-y-180 cursor-default"
                : "bg-rose-400 hover:bg-rose-500 cursor-pointer"
            }`}
            aria-label={
              flipped.includes(index) || card.matched
                ? `Carta ${card.emoji}`
                : "Carta oculta"
            }
          >
            {flipped.includes(index) || card.matched ? card.emoji : "?"}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="text-rose-700">Movimientos: {moves}</p>
        <button
          onClick={resetGame}
          className="bg-rose-600 hover:bg-rose-700 text-white py-1 px-3 rounded transition-colors"
          aria-label="Reiniciar juego"
        >
          Reiniciar
        </button>
      </div>

      {gameWon && (
        <div className="text-center py-4 bg-rose-200 rounded-lg animate-fade-in">
          <p className="text-xl font-bold text-rose-800">
            ¡Ganaste en {moves} movimientos! 🎉
          </p>
          <p className="mt-2">
            Eres tan bueno recordando nuestros momentos como yo recordando lo
            especial que eres ❤️
          </p>
        </div>
      )}
    </section>
  );
}
