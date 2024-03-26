import Image from 'next/image';
import styles from './card.module.css'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({ coWorkName, rating, imgSrc, price }: { coWorkName: string, rating?: number, imgSrc: string, price: number }) {
    return (
        <InteractiveCard contentName={coWorkName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} 
                alt='card picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className={styles.cardtext}>
                <div>{coWorkName}</div>
                <div className={styles.price}>cost: {price}</div>
            </div>
            
                {
                    rating?
                    <Rating
                        data-testid={coWorkName + ' Rating'}
                        id={coWorkName + ' Rating'}
                        name={coWorkName + ' Rating'}
                        value={rating}
                    />:null
                }
        </InteractiveCard>
    );
}
