import { Btn } from "./style/Button";

interface TypeProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    type?: "submit" | "reset" | "button";
    form?: string;
    children: React.ReactNode;
}

export const Button = (props: TypeProps) => {
    const { onClick, type, form, children } = props;

    return (
        <Btn onClick={onClick} type={type} form={form}>
            {children}
        </Btn>
    );
};
