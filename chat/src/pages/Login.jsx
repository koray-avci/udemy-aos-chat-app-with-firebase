import { useState } from "react";
import Add from "../img/fileAdd.png";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [hata,setHata]=useState(false)
  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault();


    const email = e.target[0].value
    const parola = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth,email,parola);
      navigate('/')
    } catch (error) {
      setHata(true)
    }

  }


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">AOS Chat Uygulaması</span>
        <span className="title">Giriş Sayfası</span>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="E-Maliniz" />
          <input required type="password" placeholder="Parolanız" />
          <button>Giriş Yap</button>
          {hata && <span>Bir Hata Oluştu</span>}
        </form>
        <p>
          Üyeliğiniz bulunmuyorsa <Link to="/register">Üye Olunuz</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
