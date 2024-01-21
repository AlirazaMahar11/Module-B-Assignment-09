import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import { Home } from '../Components/Home'
import { SignIn } from '../Components/SignIn'
import { SignUp } from '../Components/SignUp'


const React_router_dom = () => {
  return (
    <BrowserRouter>
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
        </Routes>
        </BrowserRouter>
  )
}

export {React_router_dom};

