import Aboutus from './Aboutus';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Banner from './Banner';
import FoodItemList from "./FoodItemList";
import Footer from './Footer';
import Login from './Login';
import Productscreen from './Productscreen';
import AddressDetails from './AddressDetails';
import SoupItemList from './SoupItemList';
import DrinkDesertItemList from './DrinkDesertItemList';
function App() {
  return (
    <>
      <Banner/>

      <Switch>
      <Route exact path="/restaurant/" component={FoodItemList}/>
      <Route exact path="/login/" component={Login}/>
      <Route exact path="/Aboutus/" component={Aboutus}/>
      <Route exact path="/product/:id" component={Productscreen}/>
      <Route exact path="/address/" component={AddressDetails}/>
      <Route exact path="/soupsalad/" component={SoupItemList}/>
      <Route exact path="/desertdrink/" component={DrinkDesertItemList}/>
      </Switch>
      
      <Footer/>
    </>
  );
}

export default App;
