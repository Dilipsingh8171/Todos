import React, { useState, useEffect } from 'react'

const SimpleTodo = () => {
    const [Input, setInput] = useState('')
    const [todos, settodos] = useState([])


    const addtodo = (e) => {
        e.preventDefault()
        if (Input !== '') {
            settodos([...todos, { text: Input, id: Date.now() }])
            setInput('')
            settodos('')
        }
    }

    const removetodo = (index) => {
        const updatetodos = todos.filter((v, i) => i !== index)
        settodos(updatetodos)
        alert("removed", updatetodos)

    }

    return (
        <div className='container-fluid m-2'>

            <div >
                <label>Name</label>
                <input type='text' placeholder='Enter Name'
                    onChange={(e) => setInput(e.target.value)} />
                <button onClick={addtodo}>Add</button>

            </div>

            <div>
                {todos.map((item, i) =>
                    <ul key={i}>
                        <li>{item.text}  {item.id} </li>
                        <li> <button onClick={() => removetodo(todos.indexOf(item))}>Remove</button></li>

                    </ul>
                )}


            </div>

        </div>
    )
}

export default SimpleTodo
