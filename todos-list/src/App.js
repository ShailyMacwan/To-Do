import './App.css';
import { AddToDo } from './MyComponents/AddToDo';
import { Footer } from './MyComponents/Footer';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { About } from './MyComponents/About';

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo;

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I am deleting to-do item", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sNo;
    if (todos.length === 0) {
      sNo = 0;
    }
    else {
      sNo = todos[todos.length - 1].sNo + 1;

    }
    const myTodo = {
      sNo: sNo,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);


  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  return (
    <Router>
      <Header title="My ToDo App" searchBar={false} />

      <Switch>
        <Route path="/" render={() => {
          return (<>
            <AddToDo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </>)
        }}>
        </Route>
        <Route path="/about">
          <About />
        </Route>


      </Switch>
      <Footer />



    </Router>
  );
}

export default App;
