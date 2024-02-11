import { IntCountry, IntGenre, isGenre } from "../../utils/types";
import { Div, Title, Desc } from "./style/DataDiv";

interface TypeProps {
    title: string;
    data: string | number | IntCountry[] | IntGenre[];
    titleVars?: string[];
    mini?: boolean;
}

export const DataDiv = (props: TypeProps) => {
    const { title, data, titleVars, mini } = props;

    const titleFinal = (function getTitle() {
        if (Array.isArray(data) && titleVars) {
            if (data.length > 1) {
                return title + titleVars[1];
            }
            return title + titleVars[0];
        }
        return title;
    })();

    const desc = (function getDesc() {
        if (typeof data === "string" || typeof data === "number") {
            return data;
        } else if (isGenre(data)) {
            return data.map((val, idx) => (
                <span key={idx}>
                    {val.genre}
                    {idx === data.length - 1 ? "" : ", "}
                </span>
            ));
        } else {
            return data.map((val, idx) => (
                <span key={idx}>
                    {val.country}
                    {idx === data.length - 1 ? "" : ", "}
                </span>
            ));
        }
    })();

    return (
        <Div mini={mini}>
            <Title mini={mini}>{titleFinal}</Title>
            <Desc mini={mini}>{desc}</Desc>
        </Div>
    );
};
