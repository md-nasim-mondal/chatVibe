import { useState, useEffect } from "react";

interface User {
  _id: string;
  emailAddresses: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  imageUrl?: string;
}

interface UseGetOneUserReturn {
  user?: User; // 'user' is now optional
  loading: boolean;
  error: string | null;
}

const useGetOneUser = (id: string): UseGetOneUserReturn => {
  const [user, setUser] = useState<User >();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the user when the component mounts or ID changes
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user/oneUser?id=${id}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();
        setUser(data); // Assuming the API returns the user object
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  return { user, loading, error };
};

export default useGetOneUser;
