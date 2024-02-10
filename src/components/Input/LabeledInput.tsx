import { Input, Label } from "./style/LabeledInput";

interface TypeProps {
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string | number | readonly string[] | undefined;
    type?: React.HTMLInputTypeAttribute;
    $width?: string;
}

export const LabeledInput = (props: TypeProps) => {
    const { label, onChange, type, value, $width } = props;

    return (
        <Label>
            {label}
            <Input
                type={type}
                onChange={onChange}
                value={value}
                $width={$width}
            />
        </Label>
    );
};
