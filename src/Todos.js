import React from 'react';
import Todo from "./Todo";

function Todos(props) {
    return (
        <div className="todos">
                <Todo todos={props.todos} deleteTodo={props.deleteTodo} makeFavorite={props.makeFavorite}/>
        </div>
    );
}

export default Todos;