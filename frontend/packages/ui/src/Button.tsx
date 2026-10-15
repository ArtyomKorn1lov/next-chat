'use client';

import * as React from "react";
import { FormatHelper } from "@repo/shared";

type ButtonProps = {
    children: React.ReactNode;
};

const Button = ({children}: ButtonProps) => {
    const onClick = () => {
        console.log(FormatHelper.normalizePhone('+ 7 999 999 99 99'));
    }

    return (
        <button
            style={{display: 'inline-flex', backgroundColor: 'red'}}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
