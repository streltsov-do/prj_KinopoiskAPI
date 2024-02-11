import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IntFilm, IntPremieres, PremieresInit } from "../utils/types";

interface IntStateData {
    films: IntFilm[];
    premieres: IntPremieres;
}

const initialState: IntStateData = {
    films: [],
    premieres: PremieresInit,
};

const sliceData = createSlice({
    name: "data",
    initialState,
    reducers: {
        ADD_FILM(state, action: PayloadAction<IntFilm>) {
            return (state = {
                ...state,
                films: [...state.films, action.payload],
            });
        },
        CLEAR_FILMS(state) {
            return (state = { ...state, films: [] });
        },
        SET_PREMIERES(state, action: PayloadAction<IntPremieres>) {
            return (state = {
                ...state,
                premieres: {
                    ...state.premieres,
                    total: action.payload.total,
                    items: action.payload.items,
                },
            });
        },
    },
});

export const { ADD_FILM, CLEAR_FILMS, SET_PREMIERES } = sliceData.actions;
export default sliceData.reducer;
