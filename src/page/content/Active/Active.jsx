import React, { useContext } from 'react'
import Mystor from '../../context/Mystor'
import FormAdd from '../../formAdd/FormAdd'
import LisstFrameNotDlt from '../ListFrame/ListFrameNotDlt/LisstFrameNotDlt'
import "./Active.css"

const Active = () => {
    const { ListTodo } = useContext(Mystor)
    const TodoActive = ListTodo.filter((item) => item.stylebox === false)
    const list = TodoActive.map((item) => <LisstFrameNotDlt
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

export default Active