import React, { HTMLAttributes } from 'react'
import './styles.css'
import Button from '../button'

interface PlainCardProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    textColor: string;
    btnBg: string;
    cardBg: string;
    cardBorder?: string;
    title: string;
    text: string;
    btnTextColor: string;
}
const PlainCard: React.FC<PlainCardProps> = ({ label, btnTextColor, title, text, cardBg, btnBg, cardBorder, textColor, ...props }) => {
    return (
        <div className={`card-container flex flex-col items-start gap-5 ${cardBorder} ${cardBg}`}>
            <h3 className={textColor}>{title}</h3>
            <h6 className={`${textColor} mb-10`}>{text}</h6>
            <Button bgColor={btnBg} textColor={btnTextColor} label={label} />
        </div>
    )
}

export default PlainCard