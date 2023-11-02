import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  const [dashboard, setCourseToList] = useState([]);
  const [courseCredit, setCredit] = useState(0);
  const [remainingCredit, setRemCredit] = useState(20);
  const [courcePrice, setPrice] = useState(0);
  const [disButton, btnDisabled] = useState(false);

  // Add course to cartlist

  const addCourseToList = card => {
    const newCourse = [...dashboard, card];
    setCourseToList(newCourse);
  }

  // set credit hour and remaining credit

  const addCredit = credithr => {
    const totalCredit = courseCredit + credithr;
    const newRemCredit = remainingCredit - credithr;
    if (totalCredit <= 20) {
      setCredit(totalCredit);
    }
    else {
      btnDisabled(true);
      alert('Course credit Limit : 20 Hours');
    }
    if (newRemCredit >= 0) {
      setRemCredit(newRemCredit);
    }
  }

  const addCoursePrice = price => {
    let totalPrice = courcePrice + price;
    setPrice(totalPrice);
  }

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Cards addCourseToList={addCourseToList} addCredit={addCredit} addCoursePrice={addCoursePrice} disButton={disButton} ></Cards>

        <Dashboard dashboard={dashboard} courseCredit={courseCredit} remainingCredit={remainingCredit} courcePrice={courcePrice}></Dashboard>
      </div>

    </>
  )
}

export default App
