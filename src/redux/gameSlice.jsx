import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    coin : 5000,
    amount : 0,
    inventory :{
    sword: 0,
    diamond : 0,
    ball : 0
}
}
export const gameSlice = createSlice({
    name : "game",
    initialState,
    reducers : {
  
        buyitem : (state,action)=>{
            const {cost , type} = action.payload
            if (state.coin >= cost){
                state.coin -= cost
                state.inventory[type] += 1
                state.amount += 1
            }
        },
          sellitem : (state,action)=>{
            const {cost , type} = action.payload
            if (state.inventory[type] >= 1){
                state.coin += cost
                state.inventory[type] -= 1
                state.amount -= 1
            }
        },
         coinplus : (state,action)=>{
            
            
                state.coin += 50
                

            }
        }
    }
)
export const { buyitem , sellitem, coinplus } = gameSlice.actions;

export default gameSlice.reducer