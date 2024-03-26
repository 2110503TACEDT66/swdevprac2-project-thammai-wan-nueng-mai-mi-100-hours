import React from 'react';
import { revalidatePath } from 'next/cache';
import RemoveReservation from '@/action/removeReservation';

export default function RemoveButton({id, token}:{id:string, token:string}) {

  return (
    <div>
        <form action={RemoveReservation} className="flex flex-col items-center my-5">
            <div>
                <input type="hidden" readOnly id="id" name="id" value={id}/>
                <input type="hidden" readOnly id="token" name="token" value={token}/>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 
                px-3 py-1 text-white shadow-sm" type='submit'>Remove a Reservation</button>
            </div>
        </form>
    </div>
  );
}



