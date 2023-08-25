import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { DataLocalStorage } from '../../service/localstorage/Localstorage'
import Mystor from '../context/Mystor'
import "./FormAdd.css"

const FormAdd = () => {
    const { ListTodo, setListTodo } = useContext(Mystor)
    const formik = useFormik({
        initialValues: {
            txt: "",
            stylebox: false
        },
        onSubmit: (values) => {
            if (values.txt) {
                console.log(values);
                const valuesFull = { ...values, id: uuidv4() }
                const UpdateListTodo = [...ListTodo, valuesFull]
                DataLocalStorage(UpdateListTodo)
                setListTodo(UpdateListTodo)
                resetForm()

            }
        }
    })
    const { handleChange, handleSubmit, values, resetForm } = formik

    return (
        <form className='box-Add' onSubmit={handleSubmit}>
            <input className='Add' type="text"
                name='txt'
                value={values.txt}
                onChange={handleChange}
            />
            <button className='btnAdd' type="submit">Add</button>
        </form>
    )
}

export default FormAdd