import React, { FormHTMLAttributes, HTMLAttributes } from "react";

interface IGridness {
    row?: boolean | string
};
interface IForm {
    width?: string
    align?: "horizontal" | "vertical" | "all"
}

export const Form: React.FC<FormHTMLAttributes<HTMLFormElement> & IGridness & IForm> = props=> (
    <form 
        className={ (props.row ? " row" : "") + (props.className || "") }
        { ...props }
        style={ {
            width: props.width ? props.width : "initial",
            margin: props.align ? ( props.align === "horizontal" ? "0 auto" : ( props.align === "vertical" ? "auto 0" : (props.align === "all" ? "auto" : "") ) ) : "initial"
        } }
    >
        { props.children }
    </form>
);
export const FormTitle: React.FC<HTMLAttributes<HTMLElement>> = props=> (
    <h2 { ...props } className={ "form-title " + (props.className || "") }>
        { props.children }
    </h2>
)

export const Item: React.FC<HTMLAttributes<HTMLElement> & IGridness> = props=> (
    <div { ...props } className={ "item " + (props.row ? "row " : "") + (props.className || "") }>
        { props.children }
    </div>
);
export const ItemInputsGroup: React.FC<HTMLAttributes<HTMLElement>> = props=> (
    <div { ...props } className={ "item-inputs-group " + (props.className || "") }>
        { props.children }
    </div>
)