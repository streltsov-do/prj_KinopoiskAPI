import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

interface IntCounties {
    Items: {
        country: string;
    }[];
}

interface IntGenre {
    genre: string;
}
// interface IntGenres {
//     IntGenre[];
// }

export interface IntStateData {
    kinopoiskId: number;
    kinopoiskHDId: string;
    imdbId: string;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl: string;
    logoUrl: string;
    reviewsCount: number;
    ratingGoodReview: number;
    ratingGoodReviewVoteCount: number;
    ratingKinopoisk: number;
    ratingKinopoiskVoteCount: number;
    ratingImdb: number;
    ratingImdbVoteCount: number;
    ratingFilmCritics: number;
    ratingFilmCriticsVoteCount: number;
    ratingAwait: number;
    ratingAwaitCount: number;
    ratingRfCritics: number;
    ratingRfCriticsVoteCount: number;
    webUrl: string;
    year: number;
    filmLength: number;
    slogan: string;
    description: string;
    shortDescription: string;
    editorAnnotation: string;
    isTicketsAvailable: boolean;
    productionStatus: string;
    type: string;
    ratingMpaa: string;
    ratingAgeLimits: string;
    hasImax: boolean;
    has3D: boolean;
    lastSync: string;
    countries: IntCounties;
    genres: IntGenre[];
    startYear: number;
    endYear: number;
    serial: boolean;
    shortFilm: boolean;
    completed: boolean;
}

const initialState: IntStateData[] = [];

const sliceData = createSlice({
    name: "data",
    initialState,
    reducers: {
        ADD(state, action: PayloadAction<IntStateData>) {
            return [...state, action.payload];
        },
        CLEAR() {
            return initialState;
        },
    },
});

export const { ADD, CLEAR } = sliceData.actions;

export default sliceData.reducer;
