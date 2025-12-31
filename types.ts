export interface Book {
  id: number;
  title: string;
  author: string;
  cover?: string;
  image?: string;
  category?: string;
  status?: string;
  progress?: number;
  rating?: string;
  priority?: string;
  goodreadsUrl?: string;
  amazonUrl?: string;
  quote?: string;
}

export interface Film {
  id: number;
  title: string;
  director: string;
  year: string;
  quote: string;
  image: string;
  imdbUrl?: string;
}