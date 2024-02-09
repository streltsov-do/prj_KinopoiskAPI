import { Card } from "../../components/Card/Card";
import { FormRequest } from "../../components/FormRequest/FormRequest";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import { Cards, Div } from "./style/PageMain";

export const PageMain = () => {
    const data = useAppSelector((state: RootState) => state.data);

    return (
        <Div>
            <FormRequest />
            <Cards>
                {data.map((val, idx) => (
                    <Card key={idx} info={val} />
                ))}
            </Cards>
        </Div>
    );
};
