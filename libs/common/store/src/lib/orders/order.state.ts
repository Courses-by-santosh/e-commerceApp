import { createFeature, createReducer, on } from "@ngrx/store";
import { orderAction } from "./order.action";
import { Order } from "./order.interface";


interface OrderState {
    orders: Order[];
    error: string;
}

const initialState: OrderState = {
    orders: [],
    error: ''
}

const orderReducer = createReducer(
    initialState,
    on(orderAction.placeOrder, (state, action) => ({
        ...state,
        orders: [...state.orders, action.order]
    })),
);

export const orderFeature = createFeature({
    name: 'order',
    reducer: orderReducer,
    extraSelectors: ({ selectOrders, selectError }) => ({
        selectOrders,
        selectError,
     }),
})