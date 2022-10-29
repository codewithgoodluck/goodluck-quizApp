import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSuubmit, error } = useGlobalContext()
  return <main>
    <section className='quiz quiz-small'>
      <form className='setup-form'>
        <h2>setup quiz</h2>
        <div className='form-control'>
          <label htmlFor="amount">number of questions</label>
          <input type="number" name='amount' className='form-input' min={1} max={50} id='amount' value={quiz.amount} onChange={handleChange} />

        </div>
        {/* category */}
        <div className="form-control">
          <label htmlFor="category">Select Category</label>
          <select className='form-input' name="category" value={quiz.category} onChange={handleChange} id="category">
            <option value="sports">sports</option>
            <option value="sports">history</option>
            <option value="sports">politics</option>
          </select>
        </div>
           {/* difficulty */}
        <div className="form-control">
          <label htmlFor="difficulty">Select Difficulty</label>
          <select name="difficulty" className='form-input' value={quiz.category} onChange={handleChange} id="category">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        {error && (<p className='error'>cant generate questions, please try diffrent options</p>)}
        <button type='submit' className='submit-btn' onClick={handleSuubmit}>start</button>
      </form>

    </section>
  </main>
}

export default SetupForm
