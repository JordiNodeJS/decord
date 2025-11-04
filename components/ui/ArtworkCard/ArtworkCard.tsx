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
      <div className={styles.artworkCard__imageWrapper}>
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className={styles.artworkCard__image}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={styles.artworkCard__overlay}>
          <div className={styles.artworkCard__plusIcon}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="16"
                y1="8"
                x2="16"
                y2="24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <line
                x1="8"
                y1="16"
                x2="24"
                y2="16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className={styles.artworkCard__info}>
            <h3 className={styles.artworkCard__title}>{artwork.title}</h3>
            <p className={styles.artworkCard__artist}>
              {artwork.artist}, {artwork.year}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
