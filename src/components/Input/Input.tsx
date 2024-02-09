interface TypeProps {
    label: string;
    type?: React.HTMLInputTypeAttribute;
}

export const Input = (props: TypeProps) => {
    const { label, type } = props;

    return (
        <label>
            {label}
            <input type={type}></input>
        </label>
    );
};
