import { useUser } from '@clerk/nextjs';
import axios from 'axios';
function saveUserApi() {
    const { isLoaded, isSignedIn, user } = useUser()
    const { emailAddresses, firstName, lastName, fullName, imageUrl } = user || {};
    console.log(user)
        const saveUserToDB = async () => {
          if (user) {
            const userData = {
              emailAddresses,
              firstName,
              lastName,
              fullName,
              imageUrl,
            };
            console.log(user)
            try {
              const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/save-user`, userData);
    
              if (res.status === 201) {
                console.log("User saved to MongoDB");
              }
            } catch (error) {
              console.error("Error saving user to DB", error);
            }
          }
        };
    
        if (isLoaded && user) {
          saveUserToDB();
        }
      
    
}

export default saveUserApi
