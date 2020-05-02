import React, { Component } from 'react';
import Style from './TodoForm.module.css';

export class TodoForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: "",
            category: "Not Selected"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDropDown = this.handleDropDown.bind(this);
    }

    handleChange(e){
        this.setState({
            text: e.target.value 
        });
    }

    handleSubmit(e){
        this.props.onSubmit({
            id: Math.random().toString(36).slice(2),
            category: this.state.category,
            task: this.state.text,
            complete: false 
        });
        e.preventDefault();
    }

    handleDropDown(e){
        this.setState({
            category: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={Style.TodoForm}>
                <input type="text" placeholder="add todos...." onChange={this.handleChange} 
                    className={Style.InpTodoForm}
                />
                <select id="category-dropdown" onChange={this.handleDropDown} className={Style.DrdTodoForm}>
                    <option value="Select">Select</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Dating">Dating</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Sleeping">Sleeping</option>
                </select>
                <input type="Submit" value="add" className={Style.BtnTodoForm}/>
            </form>
        )
    }
}
