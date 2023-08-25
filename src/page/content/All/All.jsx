import React, { useContext } from 'react'
import { handleArrange } from '../../../service/localstorage/Localstorage'
import Mystor from '../../context/Mystor'
import FormAdd from '../../formAdd/FormAdd'
import LisstFrameNotDlt from '../ListFrame/ListFrameNotDlt/LisstFrameNotDlt'
import "./All.css"

const All = () => {
    const { ListTodo } = useContext(Mystor)
    handleArrange(ListTodo)
    console.log("ListTodo", ListTodo);
    const list = ListTodo.map((item) => <LisstFrameNotDlt
        key={item.id}
        id={item.id}
        stylebox={item.stylebox}
        txt={item.txt}
    />)
    return (
        <>
            <FormAdd />
            {list}
        </>

    )
}

export default All