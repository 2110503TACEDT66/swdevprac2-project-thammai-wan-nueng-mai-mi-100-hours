import Image from 'next/image';
import styles from './card.module.css'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({ coWorkName, rating, imgSrc, onCompare }: { coWorkName: string, rating?: number, imgSrc: string, onCompare?: Function }) {
    return (
        <InteractiveCard contentName={coWorkName}>
            <div className={styles.card}>
                <div className={styles.cardimg}>
                    <Image src={imgSrc}
                        alt='Product Picture'
                        fill={true}
                        objectFit='cover'
                    />
                </div>
                <div className={styles.cardtext}>{coWorkName}</div>
                {
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
                    />
                }

            </div>


        </InteractiveCard>
    );
}
