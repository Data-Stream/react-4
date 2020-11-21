import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style.css";
import {Provider} from "react-redux";
import {createStore} from "redux";

const todos = [
    {
        text: "Убить дракона",
        favorite: false
    },
    {
        text: "Убить годзилу",
        favorite: false
    },
    {
        text: "Убить акулу",
        favorite: false
    }
]

const reducer = (state = todos, action) => {
    switch (action.type) {
        case "delete" :
            return state.filter((_, index) => {
                if(index === action.payload) {
                    return false;
                }
                return true;
            });
        case "favorite" :
            return (
                state.map((todo, index) =>{
                    if(action.payload === index) {
                        return {
                            ...todo,
                            favorite: !todo.favorite
                        }
                    }
                    return todo;
                })
            )

        default:
          return state;
    }
}
const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
        <App todos={todos}/>
    </Provider>,
  document.getElementById('root')
);


