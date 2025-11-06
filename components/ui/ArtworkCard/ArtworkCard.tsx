import Image from "next/image";
import styles from "./ArtworkCard.module.css";

interface ArtworkCardProps {
  artwork: {
    id: number;
    title: string;
    artist: string;
    year: string;
    category: string;
    image: string;
  };
  onClick?: () => void;
}

export default function ArtworkCard({ artwork, onClick }: ArtworkCardProps) {
  return (
    <article className={styles.artworkCard}>
      <button
        onClick={onClick}
        className={styles.artworkCard__media}
        aria-label={`Ver ${artwork.title}`}
      >
        <span className={styles.artworkCard__plus}>+</span>
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className={styles.artworkCard__image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </button>
      <div className={styles.artworkCard__content}>
        <h6 className={styles.artworkCard__title}>
          <a href="#">{artwork.title}</a>
        </h6>
        <div className={styles.artworkCard__meta}>
          {artwork.artist}, {artwork.year}
        </div>
      </div>
    </article>
  );
}
