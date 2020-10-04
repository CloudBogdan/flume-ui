import React, { ButtonHTMLAttributes } from "react";

type ButtonType = {
    children?: any

    fill?: "outline" | "default" | "transparent" | "clear" | "grey"
    concentration?: boolean | string
    priority?: boolean | string
    size?: "small"
    color?: "grey" | "blue" | "puple" | "red" | "default"
};

function createButtonClass(props: React.PropsWithChildren<ButtonType>): string {

    
    const classes: string[] = [
        "concentration",
        "priority"
    ];
    let class_result: string = "";
    
    classes.map(cl=>
        class_result += (props as any)[cl] ? (cl + " ") : ""
    );
        
    return class_result;

}

export const Button: React.FC<ButtonType & ButtonHTMLAttributes<HTMLButtonElement>> = props=> (
    // @ts-ignore
    <button className={ createButtonClass(props) } fill={ props.fill || "default" } { ...props }>
        { props.children }
    </button>
);

export const FabButton: React.FC<ButtonType & ButtonHTMLAttributes<HTMLButtonElement>> = props=> (
    // @ts-ignore
    <button className={ `fab-button ${ createButtonClass(props) }` } fill={ props.fill || "default" } { ...props }>
        { props.children }
    </button>
);