// src/app/model/user.model.ts
export class User {
  constructor(
    public username: string,
    public password: string,
    public token?: string  // Aquí puedes agregar un campo token cuando el backend esté listo
  ) {}
}
