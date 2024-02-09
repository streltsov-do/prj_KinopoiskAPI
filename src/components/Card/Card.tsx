import { Link } from "react-router-dom";
import { IntStateData } from "../../redux/sliceData";
import {
    Data,
    Genres,
    Div,
    Poster,
    Img,
    Slogan,
    Title,
    Genre,
    Year,
    Desc,
} from "./style/Card";

interface TypeProps {
    info: IntStateData;
}

export const Card = (props: TypeProps) => {
    const {
        kinopoiskId,
        kinopoiskHDId,
        imdbId,
        nameRu,
        nameEn,
        nameOriginal,
        posterUrl,
        posterUrlPreview,
        coverUrl,
        logoUrl,
        reviewsCount,
        ratingGoodReview,
        ratingGoodReviewVoteCount,
        ratingKinopoisk,
        ratingKinopoiskVoteCount,
        ratingImdb,
        ratingImdbVoteCount,
        ratingFilmCritics,
        ratingFilmCriticsVoteCount,
        ratingAwait,
        ratingAwaitCount,
        ratingRfCritics,
        ratingRfCriticsVoteCount,
        webUrl,
        year,
        filmLength,
        slogan,
        description,
        shortDescription,
        editorAnnotation,
        isTicketsAvailable,
        productionStatus,
        type,
        ratingMpaa,
        ratingAgeLimits,
        hasImax,
        has3D,
        lastSync,
        countries,
        genres,
        startYear,
        endYear,
        serial,
        shortFilm,
        completed,
    } = props.info;

    return (
        <Div>
            <Poster>
                <Img src={posterUrl} alt={nameRu} />
                <Title>
                    <Link to={webUrl} target="_blank">
                        {nameRu}
                    </Link>
                </Title>
                <Slogan>{slogan}</Slogan>
            </Poster>
            <Data>
                <Year>Год выхода: {year}</Year>
                <Genres>
                    Жанр:{" "}
                    {genres.map((val, idx) => (
                        <Genre>
                            {val.genre}
                            {idx === genres.length - 1 ? "" : ", "}
                        </Genre>
                    ))}
                </Genres>
                <Desc>Описание: {description}</Desc>
            </Data>
        </Div>
    );
};
