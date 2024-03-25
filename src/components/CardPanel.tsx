'use client'
import { useReducer } from "react"
import Card from "./Card"
import Link from "next/link";
// import { ClassNames } from "@emotion/react";
import { useRef } from "react";


export default function CardPanel() {

    const countRef = useRef(0)
    const inputRef = useRef<HTMLInputElement>(null)

    const showRatingReducer = (ratingList: Map<string, number>, action: { type: string; coWorkName: string; ratings: number }) => {
        switch (action.type) {
            case 'add': {
                ratingList.set(action.coWorkName, action.ratings)
                return new Map(ratingList);
            }
            case 'remove': {
                ratingList.delete(action.coWorkName);
                return new Map(ratingList);
            }
            default: return ratingList
        }
    }

    const [ratingList, dispatchCompare] = useReducer(showRatingReducer, new Map<string, number>([['', 5], ['', 5], ['', 5]]))

    /**
     * Mock Data for Demonstration only
     */

    const mockCoWorkRepo = [
        { hid: "001", name: "Co-working space 1", image: "/img/space1.jpg" },
        { hid: "002", name: "Co-working space 2", image: "/img/space5.jpg" },
        { hid: "003", name: "Co-working space 3", image: "/img/space12.jpg" },
        { hid: "004", name: "Co-working space 4", image: "/img/space18.jpg" }
    ]

    return (
        <div data-testid="card-panel">
            <div style={{ margin: "20px", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around" }}>

                {
                    mockCoWorkRepo.map((CoWork) => (
                        <Link href={`/cowork/${CoWork.hid}`} className="w-1/5">
                            <Card coWorkName={CoWork.name} imgSrc={CoWork.image}
                                onCompare={(cowork: string, rating: number) => dispatchCompare({ type: 'add', coWorkName: cowork, ratings: rating })} rating={ratingList.get('Co-working space 2') || 0}
                                data-testid={CoWork.name} />
                        </Link>
                    ))
                }

            </div>
            <div className='w-full text-xl font-medium'>Compare List: {ratingList.size}</div>
            {
                Array.from(ratingList).map(([cowork, rating]) => <div key={cowork}
                    onClick={() => dispatchCompare({ type: 'remove', coWorkName: cowork, ratings: rating })} data-testid={`${cowork}`}>
                    {cowork} Rating: {rating}
                </div>)
            }

            <button className="block round-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
                onClick={() => { countRef.current = countRef.current + 1; alert(countRef.current) }}>
                Count with Ref object
            </button>

            <input type="text" placeholder="Please fill" className="block text-gray-900 text-sm round-lg p-2 m-2 bg-purple-50 ring-1 ring-inset ring-purple-400 focus:outline-none focus:bg-purple-200 focus:ring-2" ref={inputRef} />
            <button className="block round-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
                onClick={() => { if (inputRef.current != null) inputRef.current.focus() }}>
                Focus Input
            </button>

        </div >
    )
}
