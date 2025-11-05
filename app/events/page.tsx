import Link from "next/link";
import EventCard from "@/components/ui/EventCard/EventCard";
import ScrollReveal from "@/components/animations/ScrollReveal/ScrollReveal";
import styles from "./events.module.css";

const eventsData = [
  {
    id: 1,
    title: "Exposición: Nuevas Realidades",
    description:
      "Una exploración del fotorrealismo contemporáneo a través de obras de artistas emergentes que desafían la percepción de lo real.",
    date: "15",
    month: "ENE",
    dateRange: "15 ENE - 28 ENE",
    time: "18:00 - 21:00",
    reception: "Recepción de apertura",
  },
  {
    id: 2,
    title: "Charla: El Arte del Surrealismo",
    description:
      "Conferencia magistral sobre las técnicas y filosofía del movimiento surrealista moderno, con invitados especiales.",
    date: "22",
    month: "ENE",
    dateRange: "22 ENE",
    time: "19:00 - 20:30",
    reception: "Entrada gratuita",
  },
  {
    id: 3,
    title: "Workshop: Técnicas Mixtas",
    description:
      "Taller práctico de técnicas de arte contemporáneo con materiales diversos. Cupos limitados.",
    date: "28",
    month: "ENE",
    dateRange: "28 ENE",
    time: "10:00 - 14:00",
    reception: "Inscripción requerida",
  },
  {
    id: 4,
    title: "Noche de Gala: Colección Anual",
    description:
      "Evento exclusivo para presentar las nuevas adquisiciones de nuestra colección permanente con cóctel incluido.",
    date: "05",
    month: "FEB",
    dateRange: "05 FEB",
    time: "20:00 - 23:00",
    reception: "Solo invitados",
  },
  {
    id: 5,
    title: "Exposición: Geometría Abstracta",
    description:
      "Retrospectiva de 20 años de arte abstracto geométrico, con obras de artistas nacionales e internacionales.",
    date: "12",
    month: "FEB",
    dateRange: "12 FEB - 15 MAR",
    time: "10:00 - 20:00",
    reception: "Recepción de apertura",
  },
  {
    id: 6,
    title: "Encuentro con Artistas",
    description:
      "Sesión abierta de diálogo con artistas contemporáneos sobre sus procesos creativos y fuentes de inspiración.",
    date: "18",
    month: "FEB",
    dateRange: "18 FEB",
    time: "17:00 - 19:00",
    reception: "Entrada libre",
  },
];

export default function EventsPage() {
  return (
    <div className={styles.eventsPage}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumb__container}>
          <Link href="/" className={styles.breadcrumb__link}>
            INICIO
          </Link>
          <span className={styles.breadcrumb__separator}>|</span>
          <Link href="#" className={styles.breadcrumb__link}>
            PÁGINAS
          </Link>
          <span className={styles.breadcrumb__separator}>|</span>
          <span className={styles.breadcrumb__current}>EVENTOS</span>
        </div>
      </div>

      {/* Events Section */}
      <section className={styles.events}>
        <div className={styles.events__container}>
          <ScrollReveal>
            <h3 className={styles.events__title}>
              <span className={styles.textLine}>EVENTOS</span>
            </h3>
          </ScrollReveal>

          <div className={styles.events__grid}>
            {eventsData.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 100}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
