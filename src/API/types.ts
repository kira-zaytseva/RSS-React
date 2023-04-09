export interface Request {
  url: string;
  method?: string;
  body?: object;
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export type Errors = string[];

export interface Response<T> {
  result: boolean;
  errors: Errors | null;
  config: ConfigData;
  data: T;
  pagination: PaginationData;
}

export interface ArtWork {
  id: number;
  title: string;
  image_id: string;
  artist_title: string;
  place_of_origin: string;
  department_title: string;
  date_end: string;
}

interface ConfigData {
  iiif_url: string;
  website_url: string;
}

interface PaginationData {
  current_page: number;
  limit: number;
  next_url: string;
  offset: number;
  total: number;
  total_pages: number;
}

// export interface DataInfo {
//   license_links: string[];
//   license_text: string;
//   version: string;
// }
