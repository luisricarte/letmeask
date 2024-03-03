import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';
import {Button} from '../components/Button';
import { useHistory } from "react-router-dom";
import { firebase, auth } from '../services/firebase';

export function Home() {
    let navigate = useHistory();

    function handleCreateRoom(){
        var provider = new firebase.auth.GoogleAuthProvider()
       auth.signInWithPopup(provider);
        //navigate("/room/new");
    }
    return (
    <div id= "page-auth">
    <aside>
        <img src={illustrationImg} alt="Ilustração principal" />
        <strong> Crie salas de Q&A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
    </aside>
    <main>
        <div className="main-content">
            <img src={logoImg} alt="LetMeAsk" />
            <button onClick={handleCreateRoom} className="create-room">
                <img src={googleIconImg} alt="Logo google" />
                Crie sua sala com o Google
            </button>
            <div className="separator"> ou entre em uma sala</div>
            <form action="">
                <input type="text" placeholder='Digite o código da sala' />
                <Button> Entrar na sala </Button>
            </form>
        </div>
    </main>
    </div>
    )
}