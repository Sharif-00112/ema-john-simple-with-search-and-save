import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview'
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path = '/' element={<Shop/>}/>
          <Route exact path = '/home' element={<Shop/>}/>
          <Route exact path = '/shop' element={<Shop/>}/>
          <Route exact path = '/review' element={<OrderReview/>}/>
          <Route exact path = '/inventory' element={<Inventory/>}/>
          <Route exact path = '/placeorder' element={<PlaceOrder/>}/>
          <Route exact path = '*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
