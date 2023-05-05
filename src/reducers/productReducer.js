import {createSlice} from "@reduxjs/toolkit";
import productService from "../services/products";

const productSLice = createSlice({
    name: 'productList',
    initialState: [],
    reducers: {
        update(state, action){
            return state.map(product =>
                product.id !== action.payload.id ? product : action.payload
            )
        },
        appendProduct(state, action){
            state.push(action.payload)
        },
        setProduct(state, action){
            return action.payload
        },
        deleteOne(state, action){
            return state.filter(product =>
                product.id !== action.payload.id)
        }
    },

})

export const {deleteOne, update, appendProduct, setProduct} = productSLice.actions

export const initializeProducts = () => {
    return async dispatch => {
        const productList = await productService.getAll()
        dispatch(setProduct(productList))
    }
}
export const createProduct = content => {
    return async dispatch => {
        const newProduct = await productService.createNew(content)
        dispatch(appendProduct(newProduct))
    }
}
export const updateProduct = content => {
    return async dispatch => {
        const productToUpdate = await productService.update(content.id, content)
        dispatch(update(productToUpdate))
    }
}

export const deleteProduct = id => {
    return async dispatch => {
        await productService.deleteIt(id)
        dispatch(deleteOne(id))
    }
}
export default productSLice.reducer