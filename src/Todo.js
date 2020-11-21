import React from 'react';
import {useDispatch, useSelector} from "react-redux";


function Todo(props) {
    const todos = useSelector((state) => state);
    const dispatch = useDispatch();

    const deleteTodo = (index) => {
        dispatch({
            type: "delete",
            payload: index
        })
    }

    const makeFavorite = (index) => {
        dispatch({
            type: "favorite",
            payload: index
        })
    }

    return (
        <div>
            {todos.map((todo, index) => {
                return (
                    <div className={`todo ${todo.favorite ? "selected" :""}`}>
                        <div className="favorite">
                            <button onClick={() => makeFavorite(index)}><i className="fa fa-star" aria-hidden="true"></i></button>
                        </div>
                        <div className="todo__text">
                            {todo.text}
                        </div>
                        <div className="actions">
                            <button onClick={() => deleteTodo(index)}><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Todo;