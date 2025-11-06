"use client";

import styles from "./gallery.module.css";
import Breadcrumb from "@/components/ui/Breadcrumb/Breadcrumb";
import Gallery from "@/components/sections/Gallery/Gallery";

export default function GalleryPage() {
  return (
    <div className={styles.galleryPage}>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: "INICIO", href: "/" }, { label: "GALERÍA" }]}
      />

      {/* Gallery Component */}
      <Gallery variant="full" showFilters={true} />
    </div>
  );
}
