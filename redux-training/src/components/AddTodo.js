import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    
    <form onSubmit={addTodoHandler} >
        <input 
        type='text'
        className='border'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button type='submit'
        className='bg-blue-500 p-2 rounded-sm'>Add Todo</button>

    </form>
    
  )
}

export default AddTodo