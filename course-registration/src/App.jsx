import './App.css'
import Cards from './Components/Cards/Cards'
import Header from './Components/Header/Header'
import List from './Components/List/List'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Cards></Cards>
        <List></List>
      </div>

    </>
  )
}

export default App
