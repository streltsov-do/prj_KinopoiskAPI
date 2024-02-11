import React from "react";
import { useState } from "react";
import { TypeMonth } from "../../utils/types";
import { ArrowDown } from "../ArrowDown/ArrowDown";
import { Btn, Div, DivArrow, DivDrop, DivDropItem } from "./style/DropDown";

export const DropDown = (props: {
    items: string[];
    val: number;
    setVal: (idx: number) => void;
}) => {
    const { items, val, setVal } = props;

    const [showDrops, setShowDrops] = useState(false);

    function handleDrops(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setShowDrops(!showDrops);
    }

    function handleChoose(idx: number) {
        setShowDrops(false);
        setVal(idx);
        // setTone(idx);
    }

    return (
        <Div>
            <DivArrow>
                <Btn onClick={handleDrops}>
                    {items[val]}
                    <ArrowDown $rotate={showDrops} />
                </Btn>
            </DivArrow>
            {showDrops && (
                <DivDrop items={items.length}>
                    {items.map((item, index) => (
                        <DivDropItem key={index} index={index}>
                            <Btn
                                onClick={(
                                    e: React.MouseEvent<HTMLButtonElement>,
                                ) => handleChoose(index)}
                            >
                                {item}
                            </Btn>
                        </DivDropItem>
                    ))}
                    ;
                </DivDrop>
            )}
        </Div>
    );
};
