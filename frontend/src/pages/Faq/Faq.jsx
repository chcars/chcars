import { useMemo, useState } from "react";
import Loader from "../../components/common/Loader";
import QuestionItem from "../../components/faq/QuestionItem";
import useFetch from "../../hooks/useFetch";
import { getQuestions } from "../../services/questionService";
import "./Faq.css";

function Faq() {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, loading, error } = useFetch(getQuestions);

    const groupedQuestions = useMemo(() => {
        if (!Array.isArray(data)) {
            return [];
        }

        const normalizedSearchTerm = searchTerm.toLowerCase().trim();

        const filteredQuestions = data.filter((item) =>
            item.question.toLowerCase().includes(normalizedSearchTerm)
        );

        const groups = filteredQuestions.reduce((accumulator, item) => {
            const category = item.category ?? "Sin categoría";

            if (!accumulator[category]) {
                accumulator[category] = [];
            }

            accumulator[category].push(item);

            return accumulator;
        }, {});

        return Object.entries(groups);
    }, [data, searchTerm]);

    const hasResults = groupedQuestions.length > 0;

    return (
        <section className="faq-page">
            <header className="faq-page__header">
                <h1>Preguntas Frecuentes</h1>

                <input
                    className="faq-page__search"
                    type="text"
                    placeholder="Buscar una pregunta..."
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </header>

            {loading ? <Loader /> : null}

            {error ? <p>No se pudieron cargar las preguntas frecuentes</p> : null}

            {!loading && !error && Array.isArray(data) && !hasResults ? (
                <p>No se encontraron preguntas con ese término</p>
            ) : null}

            {!loading && !error && hasResults ? (
                <div className="faq-page__groups">
                    {groupedQuestions.map(([category, questions]) => (
                        <section key={category} className="faq-page__group">
                            <h2>{category}</h2>

                            <div className="faq-page__list">
                                {questions.map((item) => (
                                    <QuestionItem
                                        key={item.question_id}
                                        question={item.question}
                                        answer={item.answer}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            ) : null}
        </section>
    );
}

export default Faq;
