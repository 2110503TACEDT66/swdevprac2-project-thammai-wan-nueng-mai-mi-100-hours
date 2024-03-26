import Image from 'next/image';
import styles from './card.module.css'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({ coWorkName, rating, imgSrc, onCompare }: { coWorkName: string, rating?: number, imgSrc: string, onCompare?: Function }) {
    return (
        <InteractiveCard contentName={coWorkName}>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc} 
                alt='card picture'
                fill={true}
                className='object-cover rounded-t-lg'
                />
            </div>
            <div className={styles.cardtext}>{coWorkName}</div>
                {
                    rating?
                    <Rating
                        data-testid={coWorkName + ' Rating'}
                        id={coWorkName + ' Rating'}
                        name={coWorkName + ' Rating'}
                        value={rating}
                        onChange={(e, newValue) => {
                            e.stopPropagation();
                            if (onCompare) {
                                onCompare(coWorkName, newValue || 0);

                            }
                        }
                        }

                        onClick={(e) => {
                            e.stopPropagation(); e.preventDefault;
                            if (onCompare) {
                                onCompare(coWorkName)
                            }
                        }
                        }
                    />:null
                }
        </InteractiveCard>
    );
}
