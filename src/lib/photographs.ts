import { allPhotographs } from "@/generated/photographs";

export interface Photograph {
  slug: string;
  title: string;
  src: string;
  fileName: string;
  size: number;
  updatedAt: string;
}

export const getAllPhotographs = (): Photograph[] => {
  return [...allPhotographs];
};
