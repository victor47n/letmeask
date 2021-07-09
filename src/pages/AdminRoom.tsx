import { useHistory, useParams } from 'react-router-dom';

import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
import emptyQuestion from '../assets/images/empty-questions.svg';

import { Button } from '../components/Button';
import { Logo } from '../components/Logo';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { ToggleSwitch } from '../components/ToggleSwitch';

import { Container } from '../styles/room';

import { useRoom } from '../hooks/useRoom';

import { database } from '../services/firebase';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const { title, questions } = useRoom(roomId);

    async function handleCloseRoom() {
        await database.ref(`rooms/${roomId}`).update({
            closedAt: new Date(),
        });

        history.push('/');
    }

    async function handleCheckAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true
        });
    }

    async function handleHighlightQuestion(questionId: string, highlighted: boolean) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted: !highlighted
        });
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return (
        <Container>
            <div id="page-room">
                <header>
                    <div className="content">
                        <Logo />
                        <div>
                            <RoomCode code={roomId} />
                            <Button isOutlined onClick={handleCloseRoom}>Encerrar sala</Button>
                        </div>
                    </div>
                    <ToggleSwitch class="toggle-theme" />
                </header>

                <main>
                    <div className="room-title">
                        <h1>Sala {title}</h1>
                        {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                    </div>

                    <div className="question-list">
                        {questions.length > 0 ? (
                            questions.map(question => {
                                return (
                                    <Question
                                        key={question.id}
                                        content={question.content}
                                        author={question.author}
                                        isAnswered={question.isAnswered}
                                        isHighlighted={question.isHighlighted}
                                    >
                                        {!question.isAnswered && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={() => handleCheckAsAnswered(question.id)}
                                                >
                                                    <img src={checkImg} alt="Marcar pergunta como respondida" />
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => handleHighlightQuestion(question.id, question.isHighlighted)}
                                                >
                                                    <img src={answerImg} alt="Dar destaque à pergunta" />
                                                </button>
                                            </>
                                        )}

                                        <button
                                            type="button"
                                            onClick={() => handleDeleteQuestion(question.id)}
                                        >
                                            <img src={deleteImg} alt="Remover pergunta" />
                                        </button>
                                    </Question>
                                );
                            })
                        ) : (
                            <div className="empty-question">
                                <img src={emptyQuestion} alt="Sem perguntas" />

                                <div>
                                    <p>Nenhuma pergunta por aqui...</p>
                                    <span>
                                        Envie o código desta sala para seus amigos
                                        e comece a responder perguntas!
                                    </span>
                                </div>
                            </div>
                        )
                        }
                    </div>
                </main>
            </div>
        </Container>
    );
}