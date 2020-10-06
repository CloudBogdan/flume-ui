import React, { useEffect, useState } from "react";
import { Button, FabButton } from "./Buttons";
import { CrossIcon } from "./Icons";

type AlertButtonType = {
    text: string
    role?: "dismiss" | "destructive" | "close"
    handle?: ()=> void
    name?: any
};
type AlertType = {
    is_open: boolean
    setIsOpen?: (value: boolean)=> any
    title: string
    className?: string
    buttons?: AlertButtonType[] 
};
type SideAlertType = {
    is_open: boolean
    setIsOpen?: (value: boolean)=> any
    timeout?: number
    className?: string
    swipeable?: boolean | string
    horizontal?: "start" | "center" | "end"
    vertical?: "top" | "center" | "bottom"
    type?: "success" | "error" | "default" | string
};

export const Alert: React.FC<AlertType> = ({ className, is_open, setIsOpen, title, children, buttons })=> {
    
    const [mouse_in, setMouseIn] = useState<boolean>(false);

    function createAlertButtonRole(button: AlertButtonType): any {
        
        const roles: any[] = [
            ["dismiss", "blue"],
            ["destructive", "red"],
            ["close", "default"],
        ];

        if (button.role)
            for (let i = 0; i < roles.length; i ++)
                if (button.role === roles[i][0])
                    return roles[i][1];

        return "default";
        
    }

    return (
        <div onClick={ ()=> !mouse_in ? (setIsOpen ? setIsOpen(false) : "") : "" } className={ "alert-box " + (is_open ? "active " : "") + (className || "")  }>
            <div
                className="alert"
                onMouseOut={ ()=> setMouseIn(false) }
                onMouseOver={ ()=> setMouseIn(true) }
            >
                <header className="alert-header">
                    <span className="alert-title">
                        { title }
                    </span>
                    <FabButton
                        onClick={ ()=> setIsOpen ? setIsOpen(false) : "" }
                        size_to="small"
                        color="red"
                        fill="transparent"
                        hidden
                    >
                        <CrossIcon />
                    </FabButton>
                </header>
                <hr />
                <main className="alert-content">
                    { children }
                </main>
                {
                    buttons ?
                        <footer className="alert-buttons">
                            {
                                buttons.map((button, index)=>
                                    <Button
                                        key={ index }
                                        onClick={ ()=> {

                                            if (button.role && setIsOpen) 
                                                setIsOpen(false);

                                            if (button.handle)
                                                button.handle();
                                            
                                        } }
                                        color={ createAlertButtonRole(button) }
                                        fill="transparent"
                                    >
                                        { button.text }
                                    </Button>
                                )
                            }
                        </footer>
                    : ""
                }
            </div>
        </div>
    );
};
export const SideAlert: React.FC<SideAlertType> = ({ children, className, is_open, setIsOpen, horizontal, vertical, type, timeout })=> {

    function timeoutClose() {

        if (!is_open) return;

        if (!timeout || timeout === 0) return;

        let t = setTimeout(()=> {

            if (setIsOpen) {

                setIsOpen(false);
                clearTimeout(t);

            }

        }, timeout);

    };
    timeoutClose();

    return (
        <div
            className={ `side-alert ${ className || "" } ${ is_open ? "active" : "" }`  }
            // @ts-ignore
            horizontal={ horizontal }
            vertical={ vertical }
            type={ type ? type : "default" }
        >
            <main className="side-alert-content">
                { children }
            </main>
            <aside className="side-alert-buttons">
                <FabButton
                    color={
                        type === "default" ? "default" : ( type === "error" ? "red" : ( type === "success" ? "blue" : "default" ) )
                    }
                    fill="transparent" onClick={ ()=> setIsOpen ? setIsOpen(false) : "" }
                    size_to="small"
                    hidden
                >
                    <CrossIcon />
                </FabButton>
            </aside>
        </div>
    )
};