import {useDispatch, useSelector} from "react-redux";
import {deleteProduct} from "../reducers/productReducer";
import ProductFilter from "./ProductFilter";
import {setNotification} from "../reducers/notifReducer";
import Notification from "./Notification";

const ProductList = () => {
    const user = useSelector(state => state.user)
    const products = useSelector(state => state.products)
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch();
    const deleting = (id) => {
        dispatch(deleteProduct(id))
        dispatch(setNotification(`Product deleted`, 3000))
    }

    return (
        <div>
            <ProductFilter/>
            <Notification/>
            {!user &&
                <div>
                    {products.filter(x => x.name.toLowerCase().includes(filter))
                        .map(product =>
                            <div className={"list"} key={product.id}>
                                <div>
                                    {product.name}
                                </div>
                                <div><img src={product.picture} className={"pics"} alt={"ProductPicture"}/></div>
                                <div>
                                    Prix: {product.price} €
                                </div>
                                <div>
                                    Quantité: {product.quantity}
                                </div>
                            </div>
                        )}
                </div>}
            {user &&
                <div>
                    {products.filter(x => x.name.toLowerCase().includes(filter))
                        .map(product =>
                            <div key={product.id}>
                                <div>
                                    {product.name}
                                </div>
                                <div><img src={product.picture} alt={"ProductPicture"}/></div>
                                <div>
                                    Prix {product.price} €
                                </div>
                                <div>
                                    Quantité {product.quantity}
                                </div>
                                <div>
                                    <button onClick={() => deleting(product.id)}>Delete</button>
                                </div>
                            </div>
                        )}
                </div>}
        </div>
    )
}

export default ProductList