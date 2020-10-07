import React, { HTMLAttributes, InputHTMLAttributes, useEffect, useState } from "react";
import { Button, IButton } from "./Buttons";
import { ArrowDownIcon, CheckmarkIcon } from "./Icons";

type InputType = {
    concentration?: boolean | string,
    need?: boolean | string
}

type OptionType = {
    title: string
    value: any
    disabled?: boolean
    color?: IButton["color"]
};
type SelectType = {
    options: OptionType[]
    default: null | number
    setSelect?: (value: string)=> void
    fill?: IButton["fill"]
};

function createInputClass(props: React.PropsWithChildren<InputType>): string {

    return props.concentration ? "concentration" : "";

}

export const TextInput: React.FC<InputType & InputHTMLAttributes<HTMLInputElement>> = props=> (
    <input
        type={ props.type ? props.type : "text" }
        className={ createInputClass(props) + " " + (props.className || "") }
        { ...props }
    />
);

export const Checkbox: React.FC<InputType & InputHTMLAttributes<HTMLInputElement>> = props=> (
    <div className={ `checkbox-input ${ createInputClass(props) } ${ props.className || "" }` }>
        <label>
            <input
                type="checkbox"
                { ...props }
            />
            <div className="inner">
                <CheckmarkIcon />
            </div>
        </label>
    </div>
);

export const Radio: React.FC<InputType & InputHTMLAttributes<HTMLInputElement>> = props=> (
    <div className={ `radio-input ${ createInputClass(props) } ${ props.className || "" }` }>
        <label>
            <input
                type="radio"
                { ...props }
            />
            <div className="inner" />
        </label>
    </div>
);

export const Range: React.FC<InputHTMLAttributes<HTMLInputElement>> = props=> (
    <input
        type="range"
        { ...props }
    />
);

export const Select: React.FC<SelectType & HTMLAttributes<HTMLElement>> = props=> {

    const
        [active, setActive] = useState<boolean>(false),
        [selected, setSelected] = useState<OptionType | null>((props.default !== null && props.default !== undefined) ? props.options[props.default] : null);
    
    return (
        <div className={ `select ${ active ? "active" : "" } ${props.className || ""}` }>
            <Button fill={ props.fill || "default" } onClick={ ()=> setActive(!active) }>
                { selected ? (selected.color ? <span className={ "select-selected-color " + selected.color }>{ selected.title }</span> : selected.title) : <span className="select-default-null">null</span> }
                <ArrowDownIcon />
            </Button>
            <div className="options">
                {
                    props.options.map((option, index)=> (
                        <Button
                            fill="transparent"
                            disabled={ option.disabled }
                            color={ option.color }
                            className="option"
                            key={ index }
                            onClick={ ()=> {
                                setSelected(option);
                                setActive(false);
                                if (props.setSelect)
                                    props.setSelect(option.value);
                            } }
                        >
                            { option.title }
                        </Button>
                    ))
                }
            </div>
        </div>
    );
};