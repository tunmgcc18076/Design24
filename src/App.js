import React, {Fragment} from 'react';
import { BrowserRouter , Route, Switch } from'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Products from './components/Products'
import About from './components/About'
import './App.css';
import Desgin from './components/Design';
import HomeScreens from "./screens/Home/screens/HomeScreens"
import DetailsPage from './screens/Details/screens/DetailsPage';
import Footer from './components/Footer';


const App = () => {
return (
  <BrowserRouter>

   <Navigation/>
   <Switch>
   <Route exact path="/" component={HomeScreens} />
   <Route exact path="/details/:slug" render={(props) => ( <DetailsPage{...props}/>)}/>
   </Switch>
   <Footer></Footer>
   {/* <Home/>
   <Desgin/>
   <Products/> */}
   {/* <About/> */}

   </BrowserRouter>
)
}
export default App
