import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import { Div, FormRequest } from "./style/PagePremieres";

export const PagePremieres = () => {
    // export const FormRequest = () => {

    const [year, setYear] = useState(2024);

    const dispatch = useAppDispatch();
    const X_API_KEY = useAppSelector((state: RootState) => state.auth);

    // const handleRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json",
    //             "X-API-KEY": X_API_KEY,
    //         },
    //     }).then((response) => {
    //         return response.json().then((data) => {
    //             console.log(data);

    //             // const dataConverted = data as IntFilm;
    //             dispatch(ADD(data));
    //             return;
    //         });
    //     });
    // };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    };

    return (
        <Div>
            <FormRequest>
                <Button onClick={handleClick} type="submit">
                    Slow
                </Button>
            </FormRequest>
        </Div>
    );
};
