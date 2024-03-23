import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    textColor: string;
    bgColor: string;
    label: string;
    id?: string;
    px?: string;
}

const Button: React.FC<ButtonProps> = ({ textColor, bgColor, label, id, px, ...props }) => {
    return (
        <button id={id} style={{ fontFamily: '"Gilroy-Bold", sans-serif' }} className={`p-4 rounded-sm ${px} ${textColor} ${bgColor}`}>{label}</button>
    )
}

export default Button;
