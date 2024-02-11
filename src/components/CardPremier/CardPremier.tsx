import { IntPremier } from "../../utils/types";
import { DataDiv } from "../DataDiv/DataDiv";
import { Data, Div, Img, Title } from "./style/CardPremier";

interface TypeProps {
    info: IntPremier;
}

export const CardPremier = (props: TypeProps) => {
    const { info } = props;

    const {
        kinopoiskId,
        nameRu,
        nameEn,
        year,
        posterUrl,
        posterUrlPreview,
        countries,
        genres,
        duration,
        premiereRu,
    } = info;

    const ARR_DATA = [
        {
            title: "Год",
            desc: year,
        },
        {
            title: "Стран",
            desc: countries[0] && countries,
            titleVars: ["а", "ы"],
        },
        {
            title: "Жанр",
            desc: genres[0] && genres,
            titleVars: ["", "ы"],
        },
        {
            title: "Длительность",
            desc: duration
                ? `${duration} мин. (${(duration / 60).toFixed(0)}:${duration % 60}`
                : "",
        },
        {
            title: "Премьера",
            desc: premiereRu,
        },
    ];

    return (
        <Div>
            <Img src={posterUrl} alt="nameEn" />
            <Data>
                <Title>{nameRu}</Title>
                {ARR_DATA.map(
                    (val, idx) =>
                        val.desc && (
                            <DataDiv
                                key={idx}
                                title={val.title}
                                data={val.desc}
                                titleVars={val.titleVars}
                                mini={true}
                            />
                        ),
                )}
            </Data>
        </Div>
    );
};
