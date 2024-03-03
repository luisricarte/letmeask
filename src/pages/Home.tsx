import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss';

export function Home() {
    return (
    <div id= "page-auth">
    <aside>
        <img src={illustrationImg} alt="Ilustração principal" />
        <strong> Crie salas de Q&A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
    </aside>
    <main>
        <div>
            <img src={logoImg} alt="LetMeAsk" />
            <button>
                <img src={googleIconImg} alt="Logo google" />
                Crie sula Sala com o Google
            </button>
            <div> ou entre em uma sala</div>
            <form action="">
                <input type="text" placeholder='Digite o código da sala' />
                <button type='submit'>Entrar na sala</button>
            </form>
        </div>
    </main>
    </div>
    )
}