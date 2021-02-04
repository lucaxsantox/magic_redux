import React from 'react'
import { Provider } from "react-redux";
import store from './store'
import Feed from './components/Feed'
import CarShop from './components/CarShop'
import Footer from './components/Footer'
import CarFrase from './components/CarFrase'


const App = () => {
  return (
    <div>
      <Provider store={ store }>
            
          
           <Feed />
           <CarShop />
           <Footer/>
           <CarFrase/>
           
      </Provider>
    </div>
  )
}

export default App
