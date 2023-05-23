import React from 'react';
import { AppUI } from './App.UI';
import { useLocalStorage } from './useLocalStorage';
 


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed:true },
//   { text: 'Tomar el Curso de Intro', completed:false },
//   { text: 'Llorar con la llorona', completed:false },
//   { text: 'Comer', completed:true },
//   { text: 'Usar estados derivados', completed:true },
// ];

// localStorage.setItem('TODOS_V1',  JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');


function App() {
  const [todos, saveTodos] =  useLocalStorage( 'TODOS_V1', []);
  const [searchValue, setSearchValue] 
  = React.useState(''); 

  const completedTodos =
   todos.filter
   (todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  ); 


const completeTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex =  newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos[todoIndex].completed = true;
   saveTodos(newTodos);
}


const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex =  newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos.splice(todoIndex, 1);
   saveTodos(newTodos);
}

 return (
  <AppUI
    completedTodos = {completedTodos}
    totalTodos = {totalTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    deleteTodo = {deleteTodo}
    completeTodo = {completeTodo}
    searchedTodos = {searchedTodos}
  />
 )
}


export default App;
