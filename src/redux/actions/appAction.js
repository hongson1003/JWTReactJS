const addTodo = text => {
    return {
        type: 'todos/todoAdded',
        payload: text
    }
}