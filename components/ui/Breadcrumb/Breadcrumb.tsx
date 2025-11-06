import Link from "next/link";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <div className={styles.breadcrumb__container}>
        <ul className={styles.breadcrumb__list}>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className={styles.breadcrumb__item}>
                {item.href && !isLast ? (
                  <Link href={item.href} className={styles.breadcrumb__link}>
                    {item.label}
                  </Link>
                ) : (
                  <span className={styles.breadcrumb__current}>
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
