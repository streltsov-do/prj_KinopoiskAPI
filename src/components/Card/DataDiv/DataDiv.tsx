import { IntCountry, IntGenre, isGenre } from "../../../utils/types";
import { Div, Title, Desc } from "./style/DataDiv";

interface TypeProps {
    title: string;
    data: string | number | IntCountry[] | IntGenre[];
    titleVars?: string[];
}

export const DataDiv = (props: TypeProps) => {
    const { title, data, titleVars } = props;

    console.log(title, data);
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
        <Div>
            <Title>{titleFinal}</Title>
            <Desc>{desc}</Desc>
        </Div>
    );
};
