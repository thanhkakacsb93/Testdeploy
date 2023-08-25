import { useState } from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import './App.css'
import Active from './page/content/Active/Active'
import All from './page/content/All/All'
import Completed from './page/content/Completed/Completed'
import Mystor from './page/context/Mystor'
import Header from './page/header/Heder'

const Layout = () => {
  return (
    <>
      <h1>todo</h1>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>404 not found</h1>,
    children: [
      {
        index: true,
        element: <All />
      },
      {
        path: "Active",
        element: <Active />
      },
      {
        path: "Completed",
        element: <Completed />
      }
    ]
  },
]);




function App() {
  const [ListTodo, setListTodo] = useState(() => {
    const DataLocalStorage = JSON.parse(localStorage.getItem('datatodolist'))
    if (DataLocalStorage) {
      return DataLocalStorage
    }
    else {
      return []
    }
  })
  console.log(ListTodo);

  return (
    <>
      <Mystor.Provider
        value={{
          ListTodo: ListTodo,
          setListTodo

        }}>
        <RouterProvider router={router} />
      </Mystor.Provider>

    </>
  )
}

export default App
