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
    time: "18:00 - 21:00",
    location: "Sala Principal",
  },
  {
    id: 2,
    title: "Charla: El Arte del Surrealismo",
    description:
      "Conferencia magistral sobre las técnicas y filosofía del movimiento surrealista moderno, con invitados especiales.",
    date: "22",
    month: "ENE",
    time: "19:00 - 20:30",
    location: "Auditorio",
  },
  {
    id: 3,
    title: "Workshop: Técnicas Mixtas",
    description:
      "Taller práctico de técnicas de arte contemporáneo con materiales diversos. Cupos limitados.",
    date: "28",
    month: "ENE",
    time: "10:00 - 14:00",
    location: "Estudio Creativo",
  },
  {
    id: 4,
    title: "Noche de Gala: Colección Anual",
    description:
      "Evento exclusivo para presentar las nuevas adquisiciones de nuestra colección permanente con cóctel incluido.",
    date: "05",
    month: "FEB",
    time: "20:00 - 23:00",
    location: "Sala Principal",
  },
  {
    id: 5,
    title: "Exposición: Geometría Abstracta",
    description:
      "Retrospectiva de 20 años de arte abstracto geométrico, con obras de artistas nacionales e internacionales.",
    date: "12",
    month: "FEB",
    time: "10:00 - 20:00",
    location: "Sala 2",
  },
  {
    id: 6,
    title: "Encuentro con Artistas",
    description:
      "Sesión abierta de diálogo con artistas contemporáneos sobre sus procesos creativos y fuentes de inspiración.",
    date: "18",
    month: "FEB",
    time: "17:00 - 19:00",
    location: "Auditorio",
  },
];

export default function EventsPage() {
  return (
    <div className={styles.eventsPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__container}>
          <ScrollReveal>
            <span className={styles.hero__label}>EVENTOS</span>
            <h1 className={styles.hero__title}>
              Próximos Eventos
              <br />y Exposiciones
            </h1>
            <p className={styles.hero__description}>
              Únete a nosotros en experiencias artísticas únicas que conectan a
              creadores y amantes del arte
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Events Section */}
      <section className={styles.events}>
        <div className={styles.events__container}>
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
