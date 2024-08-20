import { AiFillGoogleCircle } from 'react-icons/ai';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../../firebase';

const OAuth = () => {
    const handleGoogle = async () => {
       const auth = getAuth(app);
       const provider = new GoogleAuthProvider();
       provider.setCustomParameters({ prompt: 'select_account' });
       try {
        const result = await signInWithPopup(auth, provider);
        const res = await fetch('/api/auth/google', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            googlePhotoUrl: result.user.photoURL,

          })
        })
        const data = await res.json();
        if(res.ok) {
          console.log('User logged in:', data);
          // Handle successful login
        }
        
       } catch (error) {
         console.error(error);
        
       } 
    }
  return (
    <div>
      <button onClick={handleGoogle}>
        <AiFillGoogleCircle />
        continue with Google
      </button>
    </div>
  )
}

export default OAuth
