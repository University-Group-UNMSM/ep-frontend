import { useEffect, useState } from 'react';

import { User } from '../model/auth.model.types';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export default function useUser() {
  const [user, setUser] = useState<User>();
  const [loadingUser, setLoadingUser] = useState<boolean>(true);

  const fetchUser = async () => {
    try {
      const userResult = await authService.getUserData();
      setUser(userResult);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loadingUser };
}
