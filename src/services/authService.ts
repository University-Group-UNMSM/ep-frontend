export async function loginUser(email: string, password: string) {
  const res = await fetch('https://uyf9ihqyt9.execute-api.us-east-1.amazonaws.com/auth/login', {
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

export const registerUser = async (name: string, email: string, password: string, phone: string, type: string) => {
  const response = await fetch('https://uyf9ihqyt9.execute-api.us-east-1.amazonaws.com/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password, phone, type }),
  });

  if (!response.ok) {
    throw new Error('Error al registrar el usuario');
  }

  return response.json();
};
