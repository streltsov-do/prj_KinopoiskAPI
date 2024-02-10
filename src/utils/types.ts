export interface IntCountry {
    country: string;
}

export interface IntGenre {
    genre: string;
}

export function isGenre(
    data: IntGenre[] | IntCountry[] | string,
): data is IntGenre[] {
    return (data as IntGenre[])[0].genre !== undefined;
}

export function isCountry(
    data: IntGenre[] | IntCountry[] | string,
): data is IntCountry[] {
    return (data as IntCountry[])[0].country !== undefined;
}

export interface IntFilm {
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
    countries: IntCountry[];
    genres: IntGenre[];
    startYear: number;
    endYear: number;
    serial: boolean;
    shortFilm: boolean;
    completed: boolean;
}

export interface IntPremier {
    kinopoiskId: number;
    nameRu: string;
    nameEn: string;
    year: number;
    posterUrl: string;
    posterUrlPreview: string;
    countries: IntCountry[];
    genres: IntGenre[];
    duration: number;
    premiereRu: string;
}

export interface IntPremiers {
    total: number;
    items: IntPremier;
}
