import React from "react";

interface Event {
  id: number;
  title: string;
  date: string; // ISO string
  duration: number; // minutos
}

const events: Event[] = [
  { id: 1, title: "Team Standup", date: "2025-07-14T09:00:00Z", duration: 30 },
  { id: 2, title: "Product Review", date: "2025-07-14T14:00:00Z", duration: 60 },
  { id: 3, title: "1:1 with Manager", date: "2025-07-15T11:00:00Z", duration: 45 },
];

export default function EventList() {
  return (
    <ul>
      {events.map((event) => {
        const d = new Date(event.date);
        // Formatação manual frágil e não internacionalizada
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        const hours = d.getHours();
        const minutes = d.getMinutes();
        const formatted = `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year} ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;

        const durationHours = Math.floor(event.duration / 60);
        const durationMins = event.duration % 60;
        const durationStr = durationHours > 0 ? `${durationHours}h ${durationMins}min` : `${durationMins}min`;

        return (
          <li key={event.id}>
            <strong>{event.title}</strong> — {formatted} ({durationStr})
          </li>
        );
      })}
    </ul>
  );
}
