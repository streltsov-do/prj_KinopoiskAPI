import { Flex, Input, Label } from "./style/LabeledInput";

interface TypeProps {
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: string | number | readonly string[] | undefined;
    type?: React.HTMLInputTypeAttribute;
    widthLabel?: string;
    widthInput?: string;
}

export const LabeledInput = (props: TypeProps) => {
    const { label, onChange, type, value, widthLabel, widthInput } = props;

    return (
        <Flex>
            <Label $width={widthLabel}>{label}</Label>
            <Input
                type={type}
                onChange={onChange}
                value={value}
                $width={widthInput}
            />
        </Flex>
    );
};
