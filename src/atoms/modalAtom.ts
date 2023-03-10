import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { Movie } from "typing";

export const modalState = atom({
  key: "modelState",
  default: false,
});

export const movieState = atom<Movie | DocumentData | null>({
  key: "movieState",
  default: null,
});
