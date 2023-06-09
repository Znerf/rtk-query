import React from 'react';
import Create from '../components/create';
import Edit from '../components/edit';
import { FaTrash } from 'react-icons/fa';
import { useDeleteTodoMutation, useGetAllTodosQuery } from '../features/todoAPI';

function Home() {
    const {data:todo, isloading}= useGetAllTodosQuery()
    const [deleteTodoMut]= useDeleteTodoMutation()
    const deleteData =  (id) => {
        deleteTodoMut(id)
    };
    return (
        <div className='home'>
            <h1>Dashboard</h1>
            <Create></Create>
            <table className="styled-table">
                <thead>
                        <tr>
                            <th className="id">id</th>
                            <th className="todo">Todo</th>
                            <th className="status">Status</th>
                            <th className="ch">Change</th>
                        </tr>
                    
                </thead>
                <tbody>  
                     { (!isloading && todo) ? todo.map((item, _) => (
                  
                        <tr>
                            <th className="id">{item._id}</th>
                            <th className="todo">{item.todo}</th>
                            <th className="status">{item.status}</th>
                            <th className="ch">
                                <div style={{display: 'flex'}}>
                                    <div style={{marginLeft:'10px'}}><Edit item={item}></Edit></div>
                                    <div style={{marginLeft:'10px'}}><FaTrash onClick={()=>{deleteData(item._id)}}/></div>
                                </div>
                            </th>
                            
                        </tr>
                    )): ()=>("error")} 

                
                </tbody>
            </table>
           
        </div>
    );
}

export default Home;