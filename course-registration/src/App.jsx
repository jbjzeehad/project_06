import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  const [dashboard, setCourseToList] = useState([]);

  const addCourseToList = card => {
    const newCourse = [...dashboard, card];
    setCourseToList(newCourse);
  }

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Cards addCourseToList={addCourseToList} ></Cards>
        <Dashboard dashboard={dashboard} ></Dashboard>
      </div>

    </>
  )
}

export default App
