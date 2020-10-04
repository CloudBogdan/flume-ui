import React, { InputHTMLAttributes } from "react";
import { CheckmarkIcon } from "./Icons";

type InputType = {
    concentration?: boolean,
    need?: boolean
}

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