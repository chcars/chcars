import { Link } from "react-router-dom";
import QuestionItem from "../faq/QuestionItem";
import Loader from "../common/Loader";
import useFetch from "../../hooks/useFetch";
import { getQuestions } from "../../services/questionService";
import "./MiniFaq.css";

function MiniFaq() {
    const { data, loading, error } = useFetch(getQuestions, true);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>No se pudieron cargar las preguntas frecuentes</p>;
    }

    if (!data) {
        return null;
    }

    const questions = [...data].sort((firstQuestion, secondQuestion) => {
        return Number(firstQuestion.display_order ?? 0) - Number(secondQuestion.display_order ?? 0);
    });

    return (
        <section className="mini-faq">
            <header className="mini-faq__header">
                <div className="mini-faq__badge">
                    <span className="mini-faq__badge-line"></span>
                    <span className="mini-faq__badge-text">PREGUNTAS FRECUENTES</span>
                </div>

                <h2>Dudas resueltas antes de que las tengas</h2>

                <p>
                    Las consultas más comunes sobre presupuestos, seguros y garantías,
                    para que decidas con toda la información.
                </p>
            </header>

            <div className="mini-faq__list">
                {questions.map((item) => (
                    <div key={item.question_id} className="mini-faq__item">
                        <QuestionItem question={item.question} answer={item.answer} />
                    </div>
                ))}
            </div>

            <Link className="mini-faq__link" to="/faq">
                Ver todas las preguntas →
            </Link>
        </section>
    );
}

export default MiniFaq;