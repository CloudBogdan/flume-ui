import React, { ButtonHTMLAttributes } from "react";

export interface IButton {
    children?: any

    fill?: "outline" | "default" | "transparent" | "clear" | "grey"
    concentration?: boolean | string
    priority?: boolean | string
    size_to?: "small"
    color?: "blue" | "puple" | "red" | "default"
    hidden?: boolean | string
};

function createButtonClass(props: React.PropsWithChildren<IButton>): string {

    
    const classes: string[] = [
        "concentration",
        "priority",
        "hidden"
    ];
    let class_result: string = "";
    
    classes.map(cl=>
        class_result += (props as any)[cl] ? (cl + " ") : ""
    );
        
    return class_result;

}

export const Button: React.FC<IButton & ButtonHTMLAttributes<HTMLButtonElement>> = props=> (
    // @ts-ignore
    <button className={ createButtonClass(props) } fill={ props.fill || "default" } { ...props }>
        { props.children }
    </button>
);

export const FabButton: React.FC<IButton & ButtonHTMLAttributes<HTMLButtonElement>> = props=> (
    // @ts-ignore
    <button className={ `fab-button ${ createButtonClass(props) }` } fill={ props.fill || "default" } { ...props }>
        { props.children }
    </button>
);