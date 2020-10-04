import React, { useState } from "react";
import { Button, FabButton } from "./Buttons";
import { CrossIcon } from "./Icons";

type AlertButtonType = {
    text: string
    role?: "dismiss" | "destructive" | "close",
    handle?: ()=> void,
    type?: any
}
type AlertType = {
    is_open: boolean
    setIsOpen?: (value: boolean)=> any
    title: string
    className?: string
    buttons?: AlertButtonType[] 
}


export const Alert: React.FC<AlertType> = ({ className, is_open, setIsOpen, title, children, buttons })=> {
    
    const [mouse_in, setMouseIn] = useState<boolean>(false);

    function createAlertButtonRole(button: AlertButtonType): any {
        
        const roles: any[] = [
            ["dismiss", "blue"],
            ["destructive", "red"],
            ["close", "default"],
        ]
        
        if (button.role)
            return roles.map(role=>
                button.role === role[0] ? role[1] : "default"
            )[0];
        else
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
                    <FabButton onClick={ ()=> setIsOpen ? setIsOpen(false) : "" } size="small" color="grey" fill="transparent">
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
                                buttons.map(button=>
                                    <Button
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