import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { Modal } from "reactstrap";
import { useUpdateTodoMutation } from '../features/todoAPI';

function Edit({item}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [updateTodoMut] = useUpdateTodoMutation()
    
    const editTodo = async (event) => {
        event.preventDefault()
        const todo = {
            todo: event.target.todo.value,
            status: event.target.status.value,
        }
        console.log(todo)
        updateTodoMut({id:item._id, ...todo} )
        setModalOpen(!modalOpen)
      };

    return (
        <div>
            <FaEdit  onClick={() => setModalOpen(!modalOpen)}/>
            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                <div>
                    <span className="close"  onClick={() => setModalOpen(!modalOpen)}>×</span>
                    <div className='inner'>
                        <form onSubmit={editTodo}>
                            <h2>Edit Todo</h2>
                            <label >To Do</label><br />
                            <textarea style={{margin:10}} id="todo" defaultValue={item.todo}></textarea>
                            <label htmlFor="lname">Status</label><br />
                            <input className='email' type="text" id="status" name="lname" defaultValue={item.status} /><br /><br />
                            <button type="submit" >Edit</button>
                        </form>
                    </div>
                </div>
            </Modal>
           
        </div>
    );
}

export default Edit;