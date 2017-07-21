/**
 * Created by sxj on 2017/7/2.
 */
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../actions/index'
import AddTodo from '../components/AddTodo'
import Todo from '../components/Todo'
import TodoList from '../components/TodoList'
import Footer from "../components/Footer";

class App extends Component{
    render(){
        const {dispatch,visibleTodos,visibilityFilter}=this.props
        return (
            <div>
                <AddTodo onAddClick={(text)=>dispatch(addTodo(text))}/>
                <TodoList onTodoClick={(index)=>dispatch(completeTodo(index))} todos={visibleTodos}/>
                <Footer onFilterChange={(nextFilter)=>dispatch(setVisibilityFilter(nextFilter))} filter={visibilityFilter}/>
            </div>
        )
    }
}
App.propTypes= {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text:PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos,filter){
    console.log('begin selectTodos')
    console.log('use filter'+filter)
    console.log('use filter'+VisibilityFilters.SHOW_COMPLETED);
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            console.log(todos)
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:{


            console.log('after filter');
            console.log(todos.filter(todo=>{return todo.completed}))
            return todos.filter(todo=>{return todo.completed});
        }
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>{return !todo.completed})

    }
}

function select(state){
    return {
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}
export default connect(select)(App)