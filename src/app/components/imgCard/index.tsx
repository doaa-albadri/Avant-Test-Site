import Image from 'next/image';
import React, { HTMLAttributes } from 'react'

import './styles.css'
import card_img from '../../../../public/images/card_img.png'

interface ImageCardProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    text: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ title, text, ...props }) => {
    return (
        <div className='img-card bg-white flex flex-col justify-start gap-5 p-10 '>
            <Image alt='icon' src={card_img} />
            <h4 className='text-textDark'>{title}</h4>
            <h6 className='text-textDark'>{text}</h6>
        </div>
    )
}

export default ImageCard;
