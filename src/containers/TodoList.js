import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'
import {initItems, deleteItems} from '../reducers/items'

// 一个 Smart 组件，负责评论列表数据的加载、初始化、删除评论
class TodoListContainer extends Component {
    static propTypes = {
        items:PropTypes.array,
        initTodos:PropTypes.func,
        onDeleteTodo:PropTypes.func,
    }
    componentWillMount(){
        this. _loadListItem()
    }
    _loadListItem(){
       let items = localStorage.getItem('items')
       items = items?JSON.parse(items):[]
       this.props.initItems(items)
    }
    handleDeleteItem(index){
        const {items} = this.props
        const newItems = [
            ...comments.slice(0, index),
            ...comments.slice(index + 1)
        ]
        localStorage.setItem('items', JSON.stringify(newItems))
        if(this.props.onDeleteItem){
            this.props.onDeleteItem(item)
        }   
    }

    render() {
        return (
            <TodoList items = {this.props.items} onDeleteItem = {this.handleDeleteItem.bind(this)} />
       
        );
    }
}

const  mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initItems: (items) => {
            dispatch(initItems(items))
        },
        onDeleteItem: (index) => {
            dispatch(deleteItems(index))
        },

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoListContainer);