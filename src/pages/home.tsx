import { useAuth } from "../hooks/useAuth"

import { BrowserRouter as Router, useNavigate } from "react-router-dom";


import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";


import "../styles/auth.scss";
import "../styles/global.scss";

export function Home() {
  const history = useNavigate();
  const { user, singWithGoogle } = useAuth();
  

  async function handleCreteRoom() {
      if (!user) { //se o usuario não estiver autenticado redirenciona para a autenticaçã0
        await singWithGoogle()
      }
      
      history("/new/room")
      
  }
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie Salas de Q&amp; ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Lermeask" />
          <button onClick={handleCreteRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie Sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>

          <form>
            <input type="text" 
            placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
  
}