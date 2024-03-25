'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import styles from './banner.module.css'
import { useSession } from 'next-auth/react';
import React from 'react';

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
    const { data: session } = useSession()
    console.log(session)

    return (
        <div className={styles.banner} onClick={() => setIndex(index + 1)}>
            <Image src={covers[index % 3]}
                alt='cover'
                fill={true}
                priority
                objectFit='cover' />
            <div className={styles.bannerText}>
                <h1 className='font-sans text-6xl m-2'>The Best Co-working Spaces</h1>
                <h3 className='font-serif text-4xl mx-[25px]'>Selected for You</h3>
            </div>
            {
                session ? <div className='z-30 absolute top-5 right-10 font-semibold text-white text-2xl mt-4'>Welcome {session.user?.name}</div>
                    : null
            }
            <button className='bg-white text-blue-400 border border-blue-400 font-semibold py-2 px-2 mx-7 my-5 rounded z-30 absolute bottom-0 right-0
            hover:bg-blue-400 hover:text-white hover:border-transparent text-xl'
                onClick={(e) => { e.stopPropagation(); router.push('/coworkingspace') }}>View all Co-working Spaces</button>
        </div>

    );
}