import './App.css'
import { Landing } from './Components/Landing'
import { Admin } from './Components/Admin'
import { Account } from './Components/Account'
import { PastOrders } from './Components/PastOrders'
import { LoginPage } from './Components/LoginPage'
import { Selected } from './Components/Selected'
import { CheckOut } from './Components/CheckOut'
import {BrowserRouter, Routes, Route} from 'react-router'

function App() {

  return (
    <BrowserRouter>
      {/*Where there is 'user' replace that with the user's name from the firebase database*/}
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/admin?' element={<Admin/>}/>
          <Route path='/userAccount' element={<Account/>}/>
          <Route path='/user-previous-orders' element={<PastOrders/>}/>
          <Route path='/loginPage' element={<LoginPage/>}/>
          <Route path='/viewCategory' element={<Selected/>}/>
          <Route path='/user-checkout' element={<CheckOut/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
