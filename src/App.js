import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const { waiting, loading, checkAnswer, questions,nextQuestion, index, correct } = useGlobalContext()

  if (waiting) {
    return <SetupForm></SetupForm>
  }

  if (loading) {
    return <Loading></Loading>
  }
  console.log(correct)

  // console.log(questions[0])
  
  const {question,incorrect_answers,correct_answer} = questions[index]
  // const answers = [...incorrect_answers,correct_answer]

  let answers = [...incorrect_answers]
  const templateIndex=Math.floor(Math.random() *4 )

  if(templateIndex ===3){
    answers.push(correct_answer)
  } else{
     answers.push(answers[templateIndex])
     answers[templateIndex] =correct_answer
  }
  console.log(answers)

  return <main>
  <Modal></Modal>
    <section className="quiz">
      <p className="correct-answers">
        correct answers : {correct}/{index}

      </p>
      <article className='container'>
        <h2 dangerouslySetInnerHTML={{__html:question}}/>
        <div className="btn-container">
          {answers.map((answer, index)=>{
            return (
              < button 
              key={index}
              className="answer-btn"
              onClick={()=> checkAnswer(correct_answer === answer) }
               dangerouslySetInnerHTML={{__html:answer}}
              
             />
            )
          })}
        </div>

      </article>
      <button onClick={nextQuestion} className="next-question">
        next question
      </button>

    </section>

  </main>

}

export default App
