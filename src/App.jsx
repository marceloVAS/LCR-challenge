import { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'
import OrderSummary from './components/OrderSummary'
import './App.css'


function App() {
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <>
      <h2>Get your rewards faster. Buy, Gift or Transfer Miles today!</h2>
      <div className='row'>
        <Card selectedPlanHandler={setSelectedPlan} />
      </div>
      <div className='row'>
        <Form/>
        <OrderSummary selectedPlan={selectedPlan}/>
      </div>
    </>
  )
}

export default App
