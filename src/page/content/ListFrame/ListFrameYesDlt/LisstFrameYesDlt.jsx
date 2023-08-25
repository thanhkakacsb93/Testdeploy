import React, { useContext, useState } from 'react'
import { DataLocalStorage } from '../../../../service/localstorage/Localstorage'
import Mystor from '../../../context/Mystor'
import { MdOutlineDeleteOutline } from "react-icons/md";
import './LisstFrameYesDlt.css'

const LisstFrameYesDlt = (props) => {
    const { txt, id } = props
    const { ListTodo, setListTodo } = useContext(Mystor)
    const [check, setCheck] = useState(false)
    const handleCheckked = () => {
        setCheck(!check)
    }
    const DeleteList = () => {
        if (check === true) {
            if (confirm('bạn chắc chắn muốn xoá')) {
                const inx = ListTodo.findIndex((item) => item.id === id)
                ListTodo.splice(inx, 1)

                const newListTodo = [...ListTodo]
                DataLocalStorage(newListTodo)
                setListTodo(newListTodo)
            }
        }
    }

    return (
        <>
            <div className='box-Content'>
                <div className='left-Content' >
                    <input type="checkbox" checked={check} onChange={handleCheckked} />

                    <p className="content">{txt}</p>
                </div>
                <div>
                    <button className='iconsDlt' onClick={DeleteList}><MdOutlineDeleteOutline size={20} /></button>

                </div>
            </div>

        </>
    )
}


export default LisstFrameYesDlt