import { createSlice } from "@reduxjs/toolkit";

const shinySlice = createSlice({
    name: 'shiny',
    initialState: true,
    reducers: {
        mudarShiny: (state) => { return !state }
    }
})


export default shinySlice.reducer

export const { mudarShiny } = shinySlice.actions