import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { ADD, CLEAR, IntStateData } from "../../redux/sliceData";
// import { getConfig, X_API_KEY } from "../../utils/config";
import { Button } from "../Button/Button";
import { Form, Span, TextInput } from "./style/FormRequest";

const X_API_KEY = process.env.REACT_APP_X_API_KEY || "";

export const FormRequest = () => {
    // const {getInfo} = props;
    const [id, setId] = useState(301);

    const dispatch = useAppDispatch();

    const handleRequest = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // const X_API_KEY = getConfig().X_API_KEY || "";
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                // "Content-Type": "application/json",
                "X-API-KEY": X_API_KEY,
            },
        }).then((response) => {
            return response.json().then((data) => {
                console.log(data);

                // const dataConverted = data as IntStateData;
                dispatch(ADD(data));
                return;
            });
        });
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setId(+e.target.value);
    };
    
    const handleClear = (e:  React.MouseEvent<HTMLButtonElement>) => {
        dispatch(CLEAR());
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
