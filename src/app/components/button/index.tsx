import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    textColor: string;
    bgColor: string;
    label: string;
    id?: string;
    px?: string;
    display?: string;
}

const Button: React.FC<ButtonProps> = ({ textColor, bgColor, label, id, px, display, ...props }) => {
    return (
        <button id={id} style={{ fontFamily: '"Gilroy-Bold", sans-serif' }} className={`p-4 rounded-sm ${display} ${px} ${textColor} ${bgColor}`}>{label}</button>
    )
}

export default Button;
