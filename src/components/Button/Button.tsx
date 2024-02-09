interface TypeProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    type?: "submit" | "reset" | "button";
    form?: string;
    children: React.ReactNode;
}

export const Button = (props: TypeProps) => {
    const { onClick, type, form, children } = props;

    return (
        <button onClick={onClick} type={type} form={form}>
            {children}
        </button>
    );
};
