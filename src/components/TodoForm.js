import React, { useState, useEffect, useRef} from 'react'

export default function TodoForm(props) {
  const [input, setInput] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  //Handles the page refreshing
  const handleSubmit = e => {
    e.preventDefault()

    //creating object where each task has an id.
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput('')
  }

  //Handles the text inside the input box
  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <form className='todo-form' onClick={handleSubmit}>
       {props.edit ? (
        <>
          <input
            placeholder='Update'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Type a task'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add Task
          </button>
        </>
      )}
    </form>
  )
}
