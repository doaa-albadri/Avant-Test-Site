import React, { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    textColor: string;
    bgColor: string;
    label: string;
}

const Button: React.FC<ButtonProps> = ({ textColor, bgColor, label, ...props }) => {
    return (
        <button className={`p-4 rounded-sm ${textColor} ${bgColor}`}>{label}</button>
    )
}

export default Button;
