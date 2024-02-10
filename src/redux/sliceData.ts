import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IntFilm, IntPremiers } from "../utils/types";

interface IntStateData {
    films: IntFilm[];
    premiers: IntPremiers[];
}

const initialState: IntStateData = {
    films: [],
    premiers: [],
};

const sliceData = createSlice({
    name: "data",
    initialState,
    reducers: {
        ADD_FILM(state, action: PayloadAction<IntFilm>) {
            return { ...state, films: [...state.films, action.payload] };
        },
        CLEAR_FILMS(state) {
            return { ...state, films: [] };
        },
    },
});

export const { ADD_FILM, CLEAR_FILMS } = sliceData.actions;
export default sliceData.reducer;
