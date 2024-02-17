
import './page.css'

import Header from './components/header/header'
import Rightb from './components/right-bar/rightb'

import Productlist from './components/productlist/productlist'
import CartChop from './components/cartChop/cartChop'

export default function page(){
  return(
    <div className='maincoffe'>
      <Header/>
      <div className="mainsec">
      <Rightb/>
      <Productlist/>
      <CartChop/>
      </div>
    </div>
  )}