import { Todo } from "./todo.class";

export class TodoList {

    constructor (){

        // this.Todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo (todo){
        this.Todos.push (todo);
       this.guardarLocalStorage();
    
    }

    eliminarTodo (id){
       this.Todos = this.Todos.filter( todo => todo.id != id )
       this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for (const todo of this.Todos) {
            
            if ( todo.id == id ){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();

                break;
            }

        }
    }

    eliminarCompletados(){

        this.Todos = this.Todos.filter( todo => !todo.completado)
        this.guardarLocalStorage();

        
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.Todos));
    }

    cargarLocalStorage(){
        this.Todos= (localStorage.getItem('todo')) ? JSON.parse (localStorage.getItem('todo')) : [];

        this.Todos = this.Todos.map( obj => Todo.fromJson ( obj ));

    }
}