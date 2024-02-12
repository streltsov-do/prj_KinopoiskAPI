import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import { LOGOUT } from "../../redux/sliceAuth";
import { Button } from "../Button/Button";
import { Div, DivExit, Flex, Modal, Span } from "./style/ModalLogout";

interface TypeProps {
    close: () => void;
    title?: string;
}

export const ModalLogout = (props: TypeProps) => {
    const { close, title } = props;

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleNo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        close();
    };

    const handleYes = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate("/");
        dispatch(LOGOUT());
        close();
    };

    return (
        <Div>
            <Modal>
                <Span error={Boolean(title)}>{title || "Вы точно хотите выйти?"}</Span>
                <DivExit>{title && "Выйти?"}</DivExit>
                <Flex>
                    <Button onClick={handleNo}>Нет</Button>
                    <Button onClick={handleYes}>Да</Button>
                </Flex>
            </Modal>
        </Div>
    );
};
