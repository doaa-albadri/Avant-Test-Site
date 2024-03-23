import React, { HTMLAttributes } from 'react'

interface BorderButtonProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
}

const BorderButton: React.FC<BorderButtonProps> = ({ label, ...props }) => {
    return (
        <button style={{ fontFamily: '"Gilroy-Bold", sans-serif' }} className={`p-4 rounded-sm bg-secondary border-2 border-white text-white`}>{label}</button>
    )
}

export default BorderButton;
