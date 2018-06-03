import { Gender } from "./gender.enum";

export interface Friend {
  id: number;
  firstName: string;
  lastName: string;
  gender: Gender;
  fav: boolean;
}
