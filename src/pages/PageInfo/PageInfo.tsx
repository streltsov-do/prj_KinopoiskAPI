import { Card } from "../../components/Card/Card";
import { FormRequest } from "../../components/FormRequest/FormRequest";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import { Cards, Div } from "./style/PageInfo";

export const PageInfo = () => {
    const data = useAppSelector((state: RootState) => state.data);
    const films = data.films;

    return (
        <Div>
            <FormRequest />
            <Cards>
                {films.map((val, idx) => (
                    <Card key={idx} info={val} />
                ))}
            </Cards>
        </Div>
    );
};
