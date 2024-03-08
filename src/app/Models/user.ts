export class User {
  id?: string;
  constructor(public username: string, public password: string, id: string) {
    this.id = id;
  }
}
