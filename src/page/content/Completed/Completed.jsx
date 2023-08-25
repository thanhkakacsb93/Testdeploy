import React, { useContext } from 'react'
import { DataLocalStorage } from '../../../service/localstorage/Localstorage'
import Mystor from '../../context/Mystor'
import LisstFrameYesDlt from '../ListFrame/ListFrameYesDlt/LisstFrameYesDlt'
import "./Completed.css"

const Completed = () => {
    const { ListTodo, setListTodo } = useContext(Mystor)
    let list = ""
    let btn = ""
    const TodoCompleted = ListTodo.filter((item) => item.stylebox === true)
    console.log("TodoCompleted", TodoCompleted);
    if (TodoCompleted.length == 0) {
        console.log('không có');
    }
    else {
        list = TodoCompleted.map((item) => <LisstFrameYesDlt
            key={item.id}
            id={item.id}
            stylebox={item.stylebox}
            txt={item.txt}
        />)
        btn = <button className='deletaAll'>xoá tất cả</button>
    }
    const handleDeleteAll = () => {
        if (confirm('chắc chắn muốn xoá tất cả')) {
            const ThelastTodoLisi = ListTodo.filter((item) =>
                !TodoCompleted.some((element) => element.txt === item.txt))
            console.log("ThelastTodoLisi", ThelastTodoLisi);
            DataLocalStorage(ThelastTodoLisi)
            setListTodo(ThelastTodoLisi)
        }

    }
    return (
        <>
            {list}
            <div className='box-deletaAll' onClick={handleDeleteAll}>{btn}</div>
        </>

    )
}

export default Completed