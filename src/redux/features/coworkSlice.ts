// import { createSlice } from "@reduxjs/toolkit";
// import { ReservationItem} from "../../../interfaces";
// import { PayloadAction } from "@reduxjs/toolkit";

// type CoworkState = {
//     coworkItems: ReservationItem[]
// }

// const initialState: CoworkState = { coworkItems: []}

// export const coworkSlice = createSlice({
//     name: "cowork",
//     initialState,
//     reducers: {
//         addBooking: (state, action:PayloadAction<ReservationItem>)=> {
//             const remain = state.coworkItems.filter( obj => {
//                 return ((obj.id !== action.payload.id));
//             })
//             state.coworkItems = remain;
//             state.coworkItems.push(action.payload);
//         },
//         removeBooking: (state, action: PayloadAction<string>)=> {
//             const remainItems = state.coworkItems.filter(obj => {
//                 return obj.id !== action.payload;
//             });
//             state.coworkItems = remainItems;
//         }
//     }
// })
// export const { addBooking , removeBooking} = coworkSlice.actions
// export default coworkSlice.reducer