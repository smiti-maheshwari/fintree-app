import './App.css';
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/layout/Home';
import LoginSignUp from './components/User/LoginSignUp';
// import Loader from './components/layout/loader/Loader';
import GrowPlants from './components/growPlants/GrowPlants';
import ProductDetails from './components/product/ProductDetails.js';
import Products from './components/product/Products';
import Search from './components/product/Search';
import Profile from './components/User/Profile';
import UpdateProfile from './components/User/UpdateProfile';
import UpdatePassword from './components/User/UpdatePassword';
import ForgotPassword from './components/User/ForgotPassword';
import ResetPassword from './components/User/ResetPassword';
import Cart from './components/cart/Cart';
import store from './store';
import { loadUser } from './actions/userAction';
import { useEffect } from 'react';
import UserOptions from './components/layout/header/UserOptions';
import { useSelector } from "react-redux";
import ProtectedRoute from './components/route/ProtectedRoute';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';

function App() {

   const {isAuthenticated, user} = useSelector(state => state.user);

   useEffect(() => {
      store.dispatch(loadUser());
   }, []);

  return (
    
      <BrowserRouter>
        <div>
        
        {isAuthenticated && <UserOptions user={user} />}
     <Routes>
      
     <Route path="/" element={<Home />} />
     <Route path="/home" element={<Home />} />
     <Route exact path='/loginGrowPlants' element={<LoginSignUp/>}/>
     <Route exact path='/growPlants' element={<GrowPlants/>}/>
     <Route exact path='/treeProduct/:id' element={<ProductDetails/>}/>
     <Route exact path='/products' element={<Products/>} />
     <Route path='/products/:keyword' element={<Products/>} />
     <Route exact path='/search' element={<Search/>} />
     <Route exact path='/account' element={<ProtectedRoute/>}>
         <Route exact path='/account' element={<Profile/>}/>
      </Route>
      <Route exact path='/me/update' element={<ProtectedRoute/>}>
         <Route exact path='/me/update' element={<UpdateProfile/>}/>
      </Route>
      <Route exact path='/password/update' element={<ProtectedRoute/>}>
         <Route exact path='/password/update' element={<UpdatePassword/>}/>
      </Route>
      <Route exact path='/password/forgot' element={<ForgotPassword/>}/>
      <Route exact path='/password/reset/:token' element={<ResetPassword/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      {/* <Route exact path='/shipping' element={<ProtectedRoute/>}>
         <Route exact path='/shipping' element={<Shipping/>}/>
      </Route> */}
      <Route exact path='/order/confirm' element={<ProtectedRoute/>}>
         <Route exact path='/order/confirm' element={<ConfirmOrder/>}/>
      </Route>
     {/* <Route exact path='/account' element={<ProtectedRoute Profile></ProtectedRoute>} /> */}
     {/* <Route exact path='/login' element={<LoginSignUp/>} /> */}
        {/* <Route path="*" element={<Home />} /> */}
     </Routes>
     </div>
     </BrowserRouter>
    
  );
}

export default App;
