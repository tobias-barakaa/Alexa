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
        console.log('why',result);
        
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
