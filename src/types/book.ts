export interface BookSummary {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
  edition_count?: number;
  ia?: string[];
}

export interface TrendingResponse {
  works: BookSummary[];
}

export type DescriptionLike = string | { type?: string; value: string } | undefined;

export interface AuthorRef {
  author?: { key: string };
  type?: { key: string };
}

export interface WorkDetail {
  key: string;
  title: string;
  description?: DescriptionLike;
  covers?: number[];
  subjects?: string[];
  subject_places?: string[];
  subject_people?: string[];
  first_publish_date?: string;
  authors?: AuthorRef[];
}

export interface AuthorDetail {
  key: string;
  name: string;
  bio?: DescriptionLike;
}

export function extractDescription(desc: DescriptionLike): string | undefined {
  if (!desc) return undefined;
  if (typeof desc === "string") return desc;
  return desc.value;
}

export function workIdFromKey(key: string): string {
  return key.replace(/^\/works\//, "");
}
