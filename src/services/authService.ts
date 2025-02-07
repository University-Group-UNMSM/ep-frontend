export async function loginUser(email: string, password: string) {
  const res = await fetch('https://31pmac34g6.execute-api.us-east-1.amazonaws.com/v1/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Error en la autenticación');
  }

  return res.json();
}

export const registerUser = async (name: string, email: string, password: string, phone: string, role: string) => {
  const response = await fetch('https://8ymxnoacwg.execute-api.us-east-1.amazonaws.com/test/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, phone, role }),
  });

  if (!response.ok) {
    throw new Error('Error al registrar el usuario');
  }

  return response.json();
};
