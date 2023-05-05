
import {useDispatch, useSelector} from "react-redux";
import {createProduct, updateProduct} from "../reducers/productReducer";
import {connexion} from "../reducers/userReducer";
import {setNotification} from "../reducers/notifReducer";
import Notification from "./Notification";
const ProductForm = () => {
    const user = useSelector(state => state.user)
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    const addProduct = async (event) => {
        event.preventDefault()
        const double = products.find(p => p.name.toLowerCase() === event.target.name.value.toLowerCase())
        if (!double){
            dispatch(createProduct({
                name: event.target.name.value,
                price: event.target.price.value,
                picture: event.target.picture.value,
                description: event.target.description.value,
                quantity: event.target.quantity.value,
            }))
            dispatch(setNotification(`${event.target.name.value} a été ajouté à la liste!`, 3000))
        } else {
            dispatch(updateProduct({
                name: event.target.name.value,
                price: event.target.price.value,
                picture: event.target.picture.value,
                description: event.target.description.value,
                quantity: event.target.quantity.value,
                id: double.id
            }))
            dispatch(setNotification(`${event.target.name.value} a été mis à jour!`, 3000))
        }
        event.target.name.value = ''
        event.target.price.value = ''
        event.target.picture.value = ''
        event.target.description.value = ''
        event.target.quantity.value = ''
    }

    const log = async (event) => {
        event.preventDefault()
        if (event.target.email.value === "supermarket@supermarket.com" && event.target.password.value === "supermarket"){
            dispatch(connexion({
                email: event.target.email.value,
                password: event.target.password.value
            }))
        } else {
            dispatch(setNotification("Mot de passe incorrect", 3000))
        }
        event.target.email.value = ''
        event.target.password.value = ''
    }

    return (
        <div>
            {user && <div>
                <h2>Veuillez entrer les informations requises</h2>
                <Notification/>
                <form onSubmit={addProduct}>
                    <div><input name="name" /></div>
                    <div><input name="price" /></div>
                    <div><input name="picture" /></div>
                    <div><input name="description" /></div>
                    <div><input name="quantity" /></div>
                    <button type={"submit"}>Ajouter</button>
                </form>
            </div>}
            {!user && <div>
                <Notification/>
                <form onSubmit={log}>
                    <div><input name="email" placeholder={"Email"}/></div>
                    <div><input type={"password"} name="password" placeholder={"Password"}/></div>
                    <button type={"submit"}>Login</button>
                </form>
            </div>}

        </div>
    )
}

export default ProductForm