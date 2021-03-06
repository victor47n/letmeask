import { useHistory } from 'react-router-dom'
import { FormEvent, useState} from 'react';

import illustrationImg from '../assets/images/illustration.svg'
import { Logo } from '../components/Logo';
import googleIconImg from '../assets/images/google-icon.svg';

import { Container } from '../styles/auth';

import { Button } from '../components/Button';
import { ToggleSwitch } from '../components/ToggleSwitch';

import { database } from '../services/firebase';

import { useAuth } from '../hooks/useAuth';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exists.');
            return;
        }

        if (roomRef.val().closedAt) {
            alert('Room already closed.');
            return;
        }

        history.push(`rooms/${roomCode}`)
    }

    return (
        <Container>
            <div id="page-auth">
                <aside>
                    <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                    <strong>Toda pergunta tem uma resposta</strong>
                    <p>Aprenda e compartilhe conhecimento com outras pessoas.</p>
                </aside>
                <main>
                    <ToggleSwitch class="toggle-theme" />
                    <div className="main-content">
                        <div>
                            <Logo />
                            <button className="create-room" onClick={handleCreateRoom}>
                                <img src={googleIconImg} alt="Logo do Google" />
                                Crie sua sala com o Google
                            </button>
                            <div className="separator">ou entre em um sala</div>
                            <form onSubmit={handleJoinRoom}>
                                <input
                                    type="text"
                                    placeholder="Digite o código da sala"
                                    onChange={event => setRoomCode(event.target.value)}
                                    value={roomCode}
                                />
                                <Button type="submit">
                                    Entrar na sala
                                </Button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </Container>
    )
}