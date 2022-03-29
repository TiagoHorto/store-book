
import Home from './pages/Home';
import BookDetail from './pages/BookDetailPage';
import ShoppingCart from './pages/ShoppingCart';
import WishList from './pages/WishListPage';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/cart" element={ <ShoppingCart /> }/>
        <Route path="/bookDetail/:bookId" element={ <BookDetail /> }/>
        <Route path="/wishList" element={ <WishList /> }/>
      </Routes>
    </Router>
  );
}

export default App;
