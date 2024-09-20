import { useState } from 'react'

import Card from './components/Card'
import UserInput from './components/UserInput'
import Complete from './components/Complete'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    card: '',
    month: '',
    year: '',
    cvc: '',
  })
  console.log(formData)
  return (
    <div className='overflow-x-hidden'>
      <Card user={formData}/>
      <UserInput user={formData} setter={setFormData}/>
      {/* <Complete/> */}
    </div>
  )
}

export default App
// #TODO:validation, space out the inputs, desktop version