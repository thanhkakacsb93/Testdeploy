import React, { useContext, useState } from 'react'
import { DataLocalStorage } from '../../../../service/localstorage/Localstorage'
import Mystor from '../../../context/Mystor'
import "./LisstFrameNotDlt.css"

const LisstFrameNotDlt = (props) => {
    const { txt, stylebox, id } = props
    const { ListTodo, setListTodo } = useContext(Mystor)
    const [check, setCheck] = useState(stylebox)
    const handleCheckked = () => {
        setCheck(!check)
        const inx = ListTodo.findIndex((item) => item.id === id)
        ListTodo[inx].stylebox = !check
        const newListTodo = [...ListTodo]
        DataLocalStorage(newListTodo)
        setListTodo(newListTodo)
    }
    let content = ""
    if (check === true) {
        content = "content"
    }
    else {
        content = ""
    }
    return (
        <>
            <div className='box-Content'>
                <div className='left-Content'>
                    <input type="checkbox" checked={check} onChange={handleCheckked} />
                    <p className={content}>{txt}</p>
                </div>
            </div>
        </>
    )
}

export default LisstFrameNotDlt