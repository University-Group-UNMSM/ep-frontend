import { User } from '../model/auth.model.types';
import { AuthResult } from './auth.dao.types';

export class AuthDao {
  private static instance: AuthDao;

  private constructor() {
    if (AuthDao.instance) {
      throw new Error('AuthDao is a Singleton Pattern class. Use AuthDao.getInstance()');
    }
  }

  public static getInstance(): AuthDao {
    if (!AuthDao.instance) {
      AuthDao.instance = new AuthDao();
    }
    return AuthDao.instance;
  }

  public async login(data: { email: string; password: string }): Promise<AuthResult> {
    const response = await fetch('https://31pmac34g6.execute-api.us-east-1.amazonaws.com/v1/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json() as Promise<AuthResult>;
  }

  public async getUserData(token: string): Promise<AuthResult> {
    const response = await fetch('https://31pmac34g6.execute-api.us-east-1.amazonaws.com/v1/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Enviar el token en el encabezado Authorization
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos del usuario');
    }

    return response.json() as Promise<AuthResult>; // Devolver los datos del usuario
  }

  public async register(data: {
    email: string;
    password: string;
    name: string;
    lastName: string;
    role: string | null;
  }): Promise<AuthResult> {
    const response = await fetch('https://31pmac34g6.execute-api.us-east-1.amazonaws.com/v1/sign-up', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json() as Promise<AuthResult>;
  }
}
