function QuestionItem({ question, answer, open = false }) {
  return (
    <details className="question-item" open={open}>
      <summary>{question}</summary>
      <div className="question-item__answer">{answer}</div>
    </details>
  )
}

export default QuestionItem