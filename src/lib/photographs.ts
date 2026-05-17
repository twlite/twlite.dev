import { allPhotographs } from "@/generated/photographs";

export interface Photograph {
  slug: string;
  title: string;
  src: string;
  fileName: string;
  width: number;
  height: number;
  size: number;
  updatedAt: string;
}

export const getAllPhotographs = (): Photograph[] => {
  return [...allPhotographs];
};
