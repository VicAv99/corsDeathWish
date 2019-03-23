export interface Artist {
  items: any[];
  artists: any;
  external_urls: { spotify: string };
  followers?: { href: string; total: number };
  genres?: string[];
  href: string;
  id: string;
  images?: string[];
  name: string;
  popularity?: number;
  type: string;
  uri: string;
  albums: Album[];
}

export interface Album {
  id: number;
  name: string;
  images: string;
  release_date: string;
  artists: string;
  external_urls: { spotify: string };
  tracks: { items: string };
}
