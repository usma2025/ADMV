"use client";
import { useState, useEffect } from "react";

interface TimeTogether {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function TimeTogetherCounter() {
  const [timeTogether, setTimeTogether] = useState<TimeTogether>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Fecha de inicio - 14 de marzo de 2025
    const startDate = new Date("2025-03-14T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      let diff = now.getTime() - startDate.getTime();

      // Si la fecha actual es anterior a la fecha de inicio
      if (diff <= 0) {
        setTimeTogether({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      // Calcular meses completos
      let months = 0;
      let tempDate = new Date(startDate);

      while (true) {
        tempDate.setMonth(tempDate.getMonth() + 1);
        if (tempDate > now) {
          tempDate.setMonth(tempDate.getMonth() - 1);
          break;
        }
        months++;
      }

      // Calcular días restantes después de los meses completos
      const daysDiff = Math.floor(
        (now.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      // Calcular horas, minutos y segundos del día actual
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setTimeTogether({
        months,
        days: daysDiff,
        hours,
        minutes,
        seconds,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Formatear números para mostrar siempre 2 dígitos
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  // Función para mostrar el tiempo en formato legible
  const getTimeString = (): string => {
    const { months, days, hours, minutes, seconds } = timeTogether;
    const parts = [];

    if (months > 0) parts.push(`${months} mes${months !== 1 ? "es" : ""}`);
    if (days > 0) parts.push(`${days} día${days !== 1 ? "s" : ""}`);
    if (hours > 0) parts.push(`${hours} hora${hours !== 1 ? "s" : ""}`);
    if (minutes > 0) parts.push(`${minutes} minuto${minutes !== 1 ? "s" : ""}`);
    if (seconds > 0 || parts.length === 0)
      parts.push(`${seconds} segundo${seconds !== 1 ? "s" : ""}`);

    return parts.join(", ");
  };

  return (
    <section className="bg-gradient-to-br from-rose-500 to-rose-700 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto my-12 text-white">
      <h2 className="text-4xl font-serif font-bold mb-8 text-center">
        Nuestro Tiempo Juntos
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
        <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
          <p className="text-5xl font-bold">
            {formatNumber(timeTogether.months)}
          </p>
          <p className="text-lg mt-2 font-medium">Meses</p>
        </div>

        <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
          <p className="text-5xl font-bold">
            {formatNumber(timeTogether.days)}
          </p>
          <p className="text-lg mt-2 font-medium">Días</p>
        </div>

        <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
          <p className="text-5xl font-bold">
            {formatNumber(timeTogether.hours)}
          </p>
          <p className="text-lg mt-2 font-medium">Horas</p>
        </div>

        <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
          <p className="text-5xl font-bold">
            {formatNumber(timeTogether.minutes)}
          </p>
          <p className="text-lg mt-2 font-medium">Minutos</p>
        </div>

        <div className="bg-white/20 p-4 rounded-xl backdrop-blur-sm">
          <p className="text-5xl font-bold">
            {formatNumber(timeTogether.seconds)}
          </p>
          <p className="text-lg mt-2 font-medium">Segundos</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-xl italic">Desde el 14 de marzo de 2025</p>
        <p className="text-2xl font-medium mt-4">
          {new Date() < new Date("2025-03-14") ? (
            "¡Pronto comenzará nuestra aventura juntos!"
          ) : (
            <>
              Llevamos <span className="font-bold">{getTimeString()}</span>{" "}
              compartiendo amor
            </>
          )}
        </p>
      </div>
    </section>
  );
}
