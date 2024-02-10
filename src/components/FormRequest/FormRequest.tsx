import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/reducers";
import { ADD_FILM, CLEAR_FILMS } from "../../redux/sliceData";
// import { X_API_KEY } from "../../utils/config";
import { Button } from "../Button/Button";
import { Form, Span, TextInput } from "./style/FormRequest";

// const X_API_KEY = process.env.REACT_APP_X_API_KEY || "";

export const FormRequest = () => {
    // const {getInfo} = props;
    const [id, setId] = useState(301);

    const dispatch = useAppDispatch();
    const X_API_KEY = useAppSelector((state: RootState) => state.auth);

    const handleRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "X-API-KEY": X_API_KEY,
            },
        }).then((response) => {
            return response.json().then((data) => {
                console.log(data);

                // const dataConverted = data as IntFilm;
                dispatch(ADD_FILM(data));
                return;
            });
        });
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setId(+e.target.value);
    };

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(CLEAR_FILMS());
    };

    return (
        <Form name="formRequest">
            <Span>Введите ID фильма</Span>
            <TextInput
                name=""
                type="number"
                form="formRequest"
                onChange={handleInput}
                value={id}
            />
            <Button form="formRequest" type="submit" onClick={handleRequest}>
                Получить данные
            </Button>

            <Button form="formRequest" onClick={handleClear}>
                Стереть данные
            </Button>
        </Form>
    );
};
