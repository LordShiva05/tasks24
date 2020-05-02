import React,{Component} from 'react';
import { 
          AppHeader, 
          Title,
          Desc,
          AppMain, 
          TodoForm,
          TodoList,
          AppFooter
        } 
        
        from './components'; 

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this);
    this.isComplete = this.isComplete.bind(this);
  }

  addTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  isComplete(){
    console.log("Hi From isComplete");
  }

  render(){
    return(
      <>
        {/* App Header */}
        <AppHeader>
          <Title element="h1">Tasks24</Title>
        </AppHeader>

        {/* App Main */}
        <AppMain>
          <TodoForm onSubmit={this.addTodo} />
          <TodoList todoList={this.state.todos} onClick={this.isComplete} />
        </AppMain>

        {/* App Footer */}
        <AppFooter>
          <Desc element="p">@copyright 2020 demoapp.com</Desc>
        </AppFooter>
      </>  
    )
  }
}
