import './styles.css';
import { Todo } from './classes/todo.class'
import { TodoList } from './classes/todo-list.class.js';
import { crearTodoHtml } from './js/componentes.js';

export const todoList = new TodoList();

todoList.Todos.forEach(crearTodoHtml);
// const tarea = new Todo ('Aprender Javascript');

// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml ( tarea );

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');