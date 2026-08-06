import "./QuestionItem.css";

function QuestionItem({ question, answer, open = false }) {
  return (
    <details className="question-item" open={open}>
      <summary className="question-item__summary">
        <span className="question-item__question">{question}</span>
        <span className="question-item__icon" aria-hidden="true" />
      </summary>
      <div className="question-item__answer">
        <span className="question-item__divider" />
        <p>{answer}</p>
      </div>
    </details>
  )
}

export default QuestionItem
