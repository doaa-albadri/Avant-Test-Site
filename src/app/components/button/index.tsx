import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    textColor: string;
    bgColor: string;
    label: string;
    id?: string;
}

const Button: React.FC<ButtonProps> = ({ textColor, bgColor, label, id, ...props }) => {
    return (
        <button id={id} className={`p-4 rounded-sm ${textColor} ${bgColor}`}>{label}</button>
    )
}

export default Button;
