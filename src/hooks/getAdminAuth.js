import { useEffect, useState } from 'react';
import axios from 'axios';

// FETCH QUESTONS HOOK, SAVE TO REDUX STORE.
export const useGetAdminAuth = () => {
  const [adminAuth, setAdminAuth] = useState(null);
  const [adminAuthLoading, setAdminAuthLoading] = useState(true);
  const [adminAuthError, setAdminAuthError] = useState(null);

  useEffect(() => {
    const getQuizData = async () => {
      try {
        const response = await axios.get(
          'https://raw.githubusercontent.com/KareemAbo3id/sff-accounting-quiz/master/src/DB/auth.json'
        );
        setAdminAuth(response.data);
        setAdminAuthError(null);
        setAdminAuthLoading(false);
      } catch (err) {
        setAdminAuthError(err.message);
        setAdminAuth(null);
      } finally {
        setAdminAuthLoading(false);
      }
    };
    getQuizData();
  }, [adminAuthLoading]);

  return [adminAuth, adminAuthLoading, adminAuthError, setAdminAuth];
};
