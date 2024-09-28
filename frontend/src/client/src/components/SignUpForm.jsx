import './SignUp.css'; // Импортируем стили для формы регистрации

import facebook from '../assets/images/facebk.png'; 

import google from '../assets/images/googleimg.png'; 

import { CircleUserRound } from 'lucide-react'; 

const SignUpForm = () => { // Создаем компонент формы регистрации

  return (

    <div className="signup-container"> {/* Контейнер для формы регистрации */}

      <h3 className="signup-header">Logg inn eller lag en aID-bruker</h3> {/* Заголовок формы */}

      <div className="header-divider"></div> {/* Разделитель заголовка и тела формы */}

      <form className="signup-form"> {/* Начало формы */}

        <label htmlFor="username">Username</label> {/* Метка для поля имени пользователя */}

        <input type="text" id="username" placeholder="Enter your username" /> {/* Поле ввода для имени пользователя */}

        <label htmlFor="email">Email</label>

        <input type="email" id="email" placeholder="Enter your email" /> {/* Поле ввода для email */}

        <label htmlFor="password">Password</label>

        <input type="password" id="password" placeholder="Enter your password" /> {/* Поле ввода для пароля */}

        <div className="social-buttons"> {/* Кнопки социальных сетей */}

          <button type="button" className="social-button facebook-buttonn">

            <span style={{ color: "black" }}><img src={facebook} style={{ width: "20px", height: "20px", marginRight: "10px" }} />Facebook </span>

          </button>

          <button type="button" className="social-button google-buttonn">

            <span style={{ color: "black" }}><img src={google} style={{ width: "20px", height: "20px" }} /> Google</span>

          </button>

        </div>

        <button type="submit" className="signup-buttonn" style={{ backgroundColor: "#f5f5f5", color: "black" }}>

          <CircleUserRound color='grey' style={{ marginRight: "10px" }} />

          Sign Up</button> {/* Кнопка для регистрации */}

      </form>

      <div className="terms-and-conditions"> {/* Условия и положения */}

        <p>

          By signing up, you agree to our <span className="link">Terms and Conditions</span> and <span className="link">Privacy Policy</span>.

        </p>

      </div>

    </div>

  );

};

export default SignUpForm; // Экспортируем компонент

