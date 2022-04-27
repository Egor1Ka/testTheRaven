const ADD_ITEMS = 'ADD_ITEMS'
const CHENGE_TOTAL = 'CHENGE_TOTAL'
const DELETE_BY_TOTAL = 'DELETE_BY_TOTAL'
const CALCULATE_TOTAL_COST = 'CALCULATE_TOTAL_COST'

const defaultState = {
    totalCost: 0,
    items: []
}

const cartReduser = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_ITEMS:
            let repeatCheck = false
            state.items.forEach(element => {
                if (element.title === action.newItems.title) {
                    repeatCheck = true
                }
            })
           
            if (repeatCheck) {
                return state
            } return {
                ...state,
                items: [...state.items, {...action.newItems,total : 1},]
            }
        case CHENGE_TOTAL:
            return{
                ...state,
                items:state.items.map((item)=>{
                    if(item.title === action.item.title){
                        return {...item,total:action.newTotal}
                    }return item
                })
            }
        case DELETE_BY_TOTAL:
            return{
                ...state,
                items:state.items.filter(item=>{
                    if(action.item.title === item.title){
                        return false
                    }return true
                })
            }
        case CALCULATE_TOTAL_COST:
            let calculate = 0;
            state.items.forEach(i=>{
                const total = i.total
                calculate += i.cost * total
            })
            return{
                ...state,
                totalCost:calculate
            }
        default:
            return state
    }
}

export const calculateTotalCost = ()=> {
    return{
        type:CALCULATE_TOTAL_COST
    }
}

export const deleteByTotal = (item)=>{
    return{
        type:DELETE_BY_TOTAL,
        item,
    }
} 

export const addItem = (newItems) => {
    return {
        type: ADD_ITEMS,
        newItems
    }
}

export const chengeTotal = (item,newTotal)=>{
    return{
        type:CHENGE_TOTAL,
        item,
        newTotal
    }
}

export default cartReduser