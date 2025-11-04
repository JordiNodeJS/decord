import EventCard from "@/components/ui/EventCard/EventCard";
import Link from "next/link";
import styles from "./EventsSection.module.css";

// Datos de ejemplo de eventos
const eventsData = [
  {
    id: 1,
    title: "EXPOSICIÓN INTERNACIONAL DE BELLAS ARTES",
    description:
      "La Exposición Internacional de Bellas Artes sirve como una oportunidad para que creativos únicos de todo el mundo demuestren sus talentos. Este año proporciona narrativas poderosas para complementar el arte innovador.",
    date: "21",
    month: "02",
    dateRange: "Febrero 21 - Febrero 26",
    time: "10 AM-8 PM",
    reception: "Recepción",
  },
  {
    id: 2,
    title: "LAS GENERACIONES DEL ARTE",
    description:
      "Esta próxima exposición es una oportunidad para que todas las edades compartan sus opiniones sobre el arte y echen un vistazo al increíble arte fino presentado por varios artistas de todo el mundo.",
    date: "27",
    month: "02",
    dateRange: "Febrero 26 - Marzo 08",
    time: "10 AM-8 PM",
    reception: "Recepción",
  },
  {
    id: 3,
    title: "PAISAJES DE ENSUEÑO",
    description:
      "Echa un vistazo a las obras de arte oníricas de artistas experimentados y de tendencia que comparten su visión de los paisajes primaverales a través del arte fino de varios géneros y estilos.",
    date: "09",
    month: "03",
    dateRange: "Marzo 09 - Marzo 15",
    time: "10 AM-8 PM",
    reception: "Recepción",
  },
];

export default function EventsSection() {
  return (
    <section className={styles.events}>
      <div className={styles.events__container}>
        <div className={styles.events__header}>
          <span className={styles.events__label}>EVENTOS</span>
        </div>

        <div className={styles.events__grid}>
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className={styles.events__cta}>
          <Link href="/events" className={styles.events__ctaButton}>
            MÁS EXPOSICIONES
          </Link>
        </div>
      </div>
    </section>
  );
}
