// Shared gallery data
export interface Artwork {
  id: number;
  title: string;
  artist: string;
  year: string;
  category: string;
  image: string;
}

export const categories = [
  "anamorfismo",
  "fotorrealismo",
  "surrealismo",
  "hiperrealismo",
  "obras abstractas",
  "todas las obras",
];

export const artworksData: Artwork[] = [
  {
    id: 1,
    title: "EL PODER DEL ÁTOMO",
    artist: "Frank Anderson",
    year: "2016",
    category: "anamorfismo",
    image: "/images/gallery/home-02.jpg",
  },
  {
    id: 2,
    title: "CUBOS",
    artist: "Emma Smith",
    year: "2018",
    category: "anamorfismo",
    image: "/images/gallery/home-03.jpg",
  },
  {
    id: 3,
    title: "ESCALERAS",
    artist: "Sam Turner",
    year: "2020",
    category: "fotorrealismo",
    image: "/images/gallery/home-05.jpg",
  },
  {
    id: 4,
    title: "CONFRONTACIÓN",
    artist: "Johnny Lee",
    year: "2019",
    category: "surrealismo",
    image: "/images/gallery/home-04.jpg",
  },
  {
    id: 5,
    title: "LÍNEAS Y ROMPECABEZAS",
    artist: "Kathleen Davis",
    year: "2021",
    category: "obras abstractas",
    image: "/images/gallery/home-06.jpg",
  },
];
