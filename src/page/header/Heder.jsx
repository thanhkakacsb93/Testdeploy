import React from 'react'
import { useState } from 'react'
import "./Heder.css"
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [stylebtnAll, setstylebtnAll] = useState('btn')
    const [stylebtnActive, setstylebtnActive] = useState('')
    const [stylebtnCompleted, setstylebtnCompleted] = useState('')
    const navigate = useNavigate()


    const handleAll = () => {
        setstylebtnAll("btn")
        setstylebtnActive('')
        setstylebtnCompleted('')
        navigate("/")
    }
    const handleActive = () => {

        setstylebtnAll("")
        setstylebtnActive('btn')
        setstylebtnCompleted('')
        navigate("Active")

    }
    const handleCompleted = () => {

        setstylebtnAll("")
        setstylebtnActive('')
        setstylebtnCompleted('btn')
        navigate("Completed")
    }


    return (
        <>
            <header>
                <div className={stylebtnAll} onClick={handleAll}><p className='box'>All</p></div>
                <div className={stylebtnActive} onClick={handleActive}><p className='box'>Active</p></div>
                <div className={stylebtnCompleted} onClick={handleCompleted}><p className='box'>Completed</p></div>
            </header>
        </>

    )
}

export default Header