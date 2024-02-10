import { Link } from "react-router-dom";
import { IntFilm } from "../../utils/types";
import { DataDiv } from "./DataDiv/DataDiv";
import {
    Data,
    Genres,
    Div,
    Poster,
    Img,
    Slogan,
    Name,
    Italic,
    Year,
    Desc,
    // Title,
    // Val,
    // Container,
} from "./style/Card";

interface TypeProps {
    info: IntFilm;
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

    const ARR_DATA = [
        {
            title: "Год выхода",
            desc: year,
        },
        {
            title: "Стран",
            desc: countries,
            titleVars: ["а", "ы"],
        },
        {
            title: "Жанр",
            desc: genres,
            titleVars: ["", "ы"],
        },
        {
            title: "Рейтинг",
            desc: ratingKinopoisk,
            // titleVars: ["","ы"],
        },
        {
            title: "Рейтинг IMDb",
            desc: ratingImdb,
            // titleVars: ["","ы"],
        },
        {
            title: "Возрастные ограничения",
            // desc: "от "+ratingAgeLimits.slice(3)+" лет",
            desc: ratingAgeLimits && ratingAgeLimits.slice(3) + "+",
            // titleVars: ["","ы"],
        },
        {
            title: "Длительность",
            desc: `${filmLength} мин. (${(filmLength / 60).toFixed(0)}:${filmLength % 60})`,
            // titleVars: ["","ы"],
        },
    ];

    return (
        <Div>
            <Poster>
                <Img src={posterUrl} alt={nameRu} />
            </Poster>
            <Data>
                <Name>
                    <Link to={webUrl} target="_blank">
                        {nameRu}
                    </Link>
                </Name>
                <Slogan>{slogan}</Slogan>
                {ARR_DATA.map(
                    (val, idx) =>
                        val.desc && (
                            <DataDiv
                                key={idx}
                                title={val.title}
                                data={val.desc}
                                titleVars={val.titleVars}
                            />
                        ),
                )}
                <Desc>Описание: {description}</Desc>
            </Data>
        </Div>
    );
};
