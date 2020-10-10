import React, { HTMLAttributes } from "react";

type CardType = {
    color?: "transparent" | "success" | "error" | "default"
    width?: string
};

export const Card: React.FC<HTMLAttributes<HTMLDivElement> & CardType> = props=> (
    // @ts-ignore
    <div className="card" style={ { width: props.width || "initial" } } { ...props } color={ props.color || "default" }>
        { props.children }
    </div>
);

// Card contents
export const CardHeader: React.FC<HTMLAttributes<HTMLDivElement>> = props=> (
    <header className="card-header" { ...props }>
        { props.children }
    </header>
);
export const CardContent: React.FC<HTMLAttributes<HTMLDivElement>> = props=> (
    <main className="card-content" { ...props }>
        { props.children }
    </main>
);

// Card typography
export const CardTitle: React.FC<HTMLAttributes<HTMLDivElement>> = props=> (
    <h3 className="card-title" { ...props }>
        { props.children }
    </h3>
);
export const CardSubtitle: React.FC<HTMLAttributes<HTMLDivElement>> = props=> (
    <span className="card-subtitle" { ...props }>
        { props.children }
    </span>
);