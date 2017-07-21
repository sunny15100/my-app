/**
 * Created by sxj on 2017/7/2.
 */
import React ,{Component} from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {
    render() {
        console.log(this.props.text);
        console.log(this.props.complete);
        return (

            <li onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}>
                {this.props.text}
            </li>
        )
    }

}
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
}