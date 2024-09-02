import { AiFillGoogleCircle } from 'react-icons/ai';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from '../../../firebase';
import { setCredentials } from '../../../slices/client/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


// const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [loginError, setLoginError] = useState('');

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [login, { isLoading }] = useLoginMutation();

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userData = { email, password };
  //     const response = await login(userData).unwrap();
  //     dispatch(setCredentials(response));
  //     navigate('/dashboard');
  //   } catch (err) {
  //     setLoginError('Failed to login. Please check your email and password.');
  //   }
  // };

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
    const handleGoogle = async () => {
       const auth = getAuth(app);
       const provider = new GoogleAuthProvider();
       provider.setCustomParameters({ prompt: 'select_account' });
       try {
        const result = await signInWithPopup(auth, provider);
        const res = await fetch('http://localhost:5000/api/users/google', {
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
          dispatch(setCredentials(data));
          navigate('/dashboard');
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
