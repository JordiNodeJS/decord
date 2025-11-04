import styles from "./EventCard.module.css";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    description: string;
    date: string;
    month: string;
    dateRange: string;
    time: string;
    reception: string;
  };
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className={styles.eventCard}>
      <div className={styles.eventCard__dateBox}>
        <span className={styles.eventCard__dateNumber}>{event.date}</span>
        <span className={styles.eventCard__dateMonth}>
          /{event.month.substring(0, 2)}
        </span>
      </div>
      <div className={styles.eventCard__content}>
        <h3 className={styles.eventCard__title}>{event.title}</h3>
        <div className={styles.eventCard__meta}>
          <span>
            {event.dateRange}, {event.time}
          </span>
          <span className={styles.eventCard__reception}>{event.reception}</span>
        </div>
        <p className={styles.eventCard__description}>{event.description}</p>
        <button className={styles.eventCard__button}>OBTENER ENTRADAS</button>
      </div>
    </article>
  );
}
