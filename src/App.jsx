import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import Shop from './pages/Shop'
import SingleProduct from './pages/SingleProduct'
import Error from './pages/Error'
import { BudgetProvider } from './context/BudgetContext'
function App() {
  return (
    <>
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout></DefaultLayout>}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="/shop/:id" element={<SingleProduct />}> </Route>
            <Route path="/error" element={<Error></Error>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider> 
    </>
  )
}
export default App
