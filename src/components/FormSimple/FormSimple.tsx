import { Button } from "../Button/Button";
import { LabeledInput } from "../Input/LabeledInput";
import { ErrorDesc, Flex, Form, Span } from "./style/FormSimple";

interface TypeProps {
    title: string;
    data: string | number | readonly string[];
    changeData: (val: string | number | readonly string[]) => void;
    inputText?: string;
    inputWidthLabel?: string;
    inputWidth?: string;
    inputType?: string;
    submitText: string;
    onSubmit: () => void;
    cancelEn?: boolean;
    cancelText?: string;
    onCancel?: () => void;
    errorMessage?: string;
    extInputs?: React.ReactNode;
}

export const FormSimple = (props: TypeProps) => {
    const {
        title,
        data,
        changeData,
        inputText,
        inputWidthLabel,
        inputWidth,
        inputType,
        onSubmit,
        submitText,
        cancelEn,
        onCancel,
        errorMessage,
        extInputs,
    } = props;

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        changeData(e.target.value);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSubmit();
    };

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onCancel && onCancel();
    };

    return (
        <Form name="FormSimple">
            <Span>{title}</Span>
            <LabeledInput
                label={inputText || ""}
                type={inputType || "text"}
                value={data}
                onChange={handleInput}
                widthLabel={inputWidthLabel}
                widthInput={inputWidth}
            />
            {extInputs}
            <Flex>
                {errorMessage && <ErrorDesc>ERROR: {errorMessage}!</ErrorDesc>}

                <Button form="FormSimple" type="submit" onClick={handleSubmit}>
                    {submitText}
                </Button>

                {cancelEn && (
                    <Button form="FormSimple" onClick={handleClear}>
                        Стереть данные
                    </Button>
                )}
            </Flex>
        </Form>
    );
};
