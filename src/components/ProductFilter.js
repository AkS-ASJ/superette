import {useDispatch, useSelector} from "react-redux";
import {filtering} from "../reducers/filterReducer";


const ProductFilter = () => {
    const input = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const handleChange = (event) => {
        const inputUpdate = event.target.value
        dispatch(filtering(inputUpdate))
        console.log(input)
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            <input type={"text"} value={input} placeholder={"Search"} onChange={handleChange}/>
        </div>
    )
}


export default ProductFilter