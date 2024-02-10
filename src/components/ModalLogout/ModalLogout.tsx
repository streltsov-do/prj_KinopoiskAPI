import { useNavigate } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import { LOGOUT } from "../../redux/sliceAuth";
import { Button } from "../Button/Button";
import { Div, Flex, Modal } from "./style/ModalLogout";

interface TypeProps {
    close: () => void;
}

export const ModalLogout = (props: TypeProps) => {
    const { close } = props;

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
                <span>Вы точно хотите выйти?</span>
                <Flex>
                    <Button onClick={handleNo}>Нет</Button>
                    <Button onClick={handleYes}>Да</Button>
                </Flex>
            </Modal>
        </Div>
    );
};
