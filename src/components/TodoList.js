/**
 * Created by sxj on 2017/7/2.
 */
import React ,{Component} from 'react'
import PropTypes from 'prop-types'

import Todo from './Todo'
export default  class TodoList extends Component{
    render(){
        return (
            <ul>
                {this.props.todos.map((todo,index)=>{
                    return <Todo text={todo.text} completed={todo.completed}
                          key={index} onClick={()=>this.props.onTodoClick(index)}
                    />
                })}
            </ul>
        )
    }
}
TodoList.propTypes = {
    onTodoClick : PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
}