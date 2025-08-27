import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState :{
        item:[]
    },
    reducers:{
        //add to wishlist 
        addToWishList(state,action){
            let product=action.payload

            let existingProduct=state.item.find((item)=>item.id==product.id)

            if (existingProduct){
                alert("Product already existing")
            }
            else{
                state.item.push(product)
                alert("product added to wishList")
            }

        },
        removeFromList(state,action){
            let productID=action.payload

            return {...state,item:state.item.filter((data)=>data.id!==productID)}

            

        },
         
    }

})

export const{addToWishList, removeFromList}=wishlistSlice.actions

export default wishlistSlice.reducer