import { User } from '../model/auth.model.types';

export interface AuthResult {
  message: string;
  token?: string; // El token se incluye solo en el login
  userId?: string; // El userId se incluye solo en el registro
  data?: User; // Información del usuario cuando se obtiene con el token
}
