import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { Modal } from "reactstrap";
import { useCreateTodoMutation } from '../features/todoAPI';

function Create() {

    const [modalOpen, setModalOpen] = useState(false);
    const [createTodoMut] = useCreateTodoMutation()
    const createTodo = async (event) => {
        event.preventDefault()
        const todo = {
          todo: event.target.todo.value,
          status: event.target.status.value,
        }
        createTodoMut(todo)
        setModalOpen(!modalOpen)
      };
    return (
        <div>
            <div style={{marginRight:80, alignItems:"right", marginBottom:10, position:"relative", float:"right"}}><button onClick={() => setModalOpen(!modalOpen)}><FaPlusCircle/> Create</button> </div>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div>
                    <span className="close"  onClick={() => setModalOpen(!modalOpen)}>×</span>
                    <div className='inner'>
                        <form onSubmit={createTodo}>
                            <h2>Create New Todo</h2>
                            <label >To Do</label><br />
                            <textarea style={{margin:10}} id="todo"></textarea>
                            <label htmlFor="lname">Status</label><br />
                            <input className='email' type="text" id="status" defaultValue="" /><br /><br />
                            <button type='submit'>Create</button>
                        </form>
                    </div>
                </div>
            </Modal>
           
        </div>
    );
}

export default Create;