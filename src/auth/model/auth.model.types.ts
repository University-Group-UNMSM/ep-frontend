// auth.model.types.ts
export interface AuthModel {
  id: string;
  email: string;
  name: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  password?: string;
}

// auth.model.types.ts
export interface User {
  id: string;
  email: string;
  name: string;
  lastName?: string;
  role?: string; // Puede ser un rol como 'profesor'
  password?: string; // Aunque no sea necesario mostrar la contraseña, la incluimos si es necesario para la lógica
}
