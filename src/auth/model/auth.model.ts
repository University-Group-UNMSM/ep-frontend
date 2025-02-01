// auth.model.ts
import { AuthModel } from './auth.model.types';

export class Auth implements AuthModel {
  id: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  password?: string;

  public constructor(data: AuthModel) {
    this.id = data.id;
    this.email = data.email;
    this.name = data.name;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.role = data.role;
    this.password = data.password;
  }
}
