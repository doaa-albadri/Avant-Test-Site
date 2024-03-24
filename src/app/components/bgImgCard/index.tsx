import React, { HTMLAttributes } from 'react'

import './styles.css'

import Button from '../button'

interface BgImgCardProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    textColor: string;
    btnBg: string;
    cardBg: string;
    title: string;
    text: string;
    btnTextColor: string;
    bgImg?: string;
}

const BgImgCard: React.FC<BgImgCardProps> = ({ label, bgImg, btnTextColor, title, text, cardBg, btnBg, textColor, ...props }) => {
    return (
        <div className={`card-container flex flex-col items-start gap-5 ${cardBg} ${bgImg}`}>
            <h3 className={textColor}>{title}</h3>
            <h6 className={`${textColor} mb-2 md:mb-10`}>{text}</h6>
            <Button bgColor={btnBg} textColor={btnTextColor} label={label} />
        </div>
    )
}

export default BgImgCard