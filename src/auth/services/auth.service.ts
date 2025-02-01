import { AuthDao } from '../data/auth.dao';
import { AuthResult } from '../data/auth.dao.types';
import { User } from '../model/auth.model.types';

export class AuthService {
  private dao: AuthDao;

  public constructor() {
    this.dao = AuthDao.getInstance();
  }

  // Métodos de login y registro actualizados para manejar AuthModel
  public async login(email: string, password: string): Promise<AuthResult> {
    const result = await this.dao.login({ email, password });
    if (result.token) {
      this.saveToken(result.token);
    }
    return result;
  }

  // Nueva función getUserData para obtener los datos del usuario usando el token
  public async getUserData(): Promise<User> {
    const token = this.getToken(); // Recuperamos el token desde localStorage
    if (!token) {
      return {
        id: '',
        email: '',
        name: '',
      };
    }

    try {
      const user = await this.dao.getUserData(token); // Obtener los datos del usuario con el token
      return user.data || { id: '', email: '', name: '' };
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      return {
        id: '',
        email: '',
        name: '',
      };
    }
  }

  public async register(
    email: string,
    password: string,
    name: string,
    lastName: string,
    role: string | null,
  ): Promise<AuthResult> {
    const result = await this.dao.register({ email, password, name, lastName, role });
    return result;
  }

  private saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  public logout(): void {
    localStorage.removeItem('authToken');
  }
}
