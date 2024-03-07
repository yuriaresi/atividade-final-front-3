import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Paginacao } from "../../models/Paginacao.models";


const initialState: Paginacao = {
    paginaAtual: 1,
    itensPorPagina: 20,
    count: 0
}

const paginacaoSlice = createSlice({
    name: "paginacao",
    initialState: initialState as Paginacao,
    reducers: {
        setCount: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                count: action.payload
            }
        },
        setPagina: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                paginaAtual: action.payload
            }
        }
    },

}
);


export default paginacaoSlice.reducer

export const { setCount, setPagina } = paginacaoSlice.actions