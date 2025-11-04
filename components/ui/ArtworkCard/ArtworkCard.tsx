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
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <article className={styles.artworkCard}>
      <a href="#" className={styles.artworkCard__media}>
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className={styles.artworkCard__image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </a>
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
