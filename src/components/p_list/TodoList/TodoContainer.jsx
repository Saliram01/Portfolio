import React, { useState } from 'react';
import TodoTitle from './TodoTitle';
import AddTodo from './AddTodo';
import TodoItems from './TodoItems';

function TodoContainer() {
    const [litems, setItems] = useState([]);

    function addList(list) {
        setItems((pre) => [...pre,list]);
    }

    function handleDelete(el) {
        setItems(() => litems.filter((list) => list !== el));
    }

    return <div className='flex items-center flex-col px-1 h-[550px] border'>
        <TodoTitle title="Todo_List"/>
        <div className="shadow-md border p-4 rounded-lg">
            <AddTodo addList={addList}/>
            {litems.map((el,i) => <TodoItems key={i} el={el} handleDelete={handleDelete}/>)}
        </div>
    </div>
}

export default TodoContainer;