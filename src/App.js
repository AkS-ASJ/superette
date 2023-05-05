import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {initializeProducts} from "./reducers/productReducer";
import {
    BrowserRouter as Router,
    Routes, Route, Link
} from 'react-router-dom'
import './app.css';
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(initializeProducts())
  }, [dispatch])

  return (
    <div className={"container"}>
        <h2>Superette</h2>
        <Router>
            <div>
                <Link to={"/"}>Accueil</Link>{' '}
                <Link to={"/admin"}>Admin</Link>
            </div>
            <Routes>
                <Route exact path="/" element={<ProductList/>} />
                <Route exact path="/admin" element={<ProductForm/>} />
            </Routes>
        </Router>
    </div>
  )
}

export default App