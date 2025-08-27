import { createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
     name:"cart",
    initialState :{
        item:[]
    },
     reducers:{
        addToCart(state,action){

         let product=action.payload
          let existingProduct=state.item.find((item)=>item.id==product.id)

            if (existingProduct){
                alert("Product already existing")
            }
            else{
                state.item.push({...product,quantity:1,totalPrice:product.price})
                console.log(product);
                
                alert("product added to Cart")
            }

        },

        removeFromCart(state,action){

         let productId=action.payload
          return {...state,item:state.item.filter((data)=>data.id!==productId)}

        },
        incrementCart(state,action){
            let product=action.payload

            let existingProduct=state.item.find((item)=>item.id==product.id)

            if (existingProduct){
               existingProduct.quantity+=1
               existingProduct.totalPrice+=existingProduct.price
            }
           

        },
        decrementCart(state,action){
            let product=action.payload

            let existingProduct=state.item.find((item)=>item.id==product.id)

            if (existingProduct && existingProduct.quantity>1){
               existingProduct.quantity-=1
               existingProduct.totalPrice-=existingProduct.price
            }
           

        },
        clerChart(state){
            state.item=[]
        }
     }

})

export const{addToCart,removeFromCart,incrementCart,decrementCart,clerChart}=cartSlice.actions

export default cartSlice.reducer