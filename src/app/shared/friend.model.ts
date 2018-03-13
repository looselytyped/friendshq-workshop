import { Gender } from "./gender.enum";

export class Friend {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public gender: Gender,
    public fav: boolean
  ) { }
}
