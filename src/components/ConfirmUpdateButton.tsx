import React from 'react';
import { revalidatePath } from 'next/cache';
import UpdateReservation from '@/action/updateReservation';

export default function ConfirmUpdateButton({id, token}:{id:string, token:string}) {

  return (
    <div>
        <form action={UpdateReservation} className="flex flex-col items-center my-5">
            <div>
                <input type="hidden" readOnly id="id" name="id" value={id}/>
                <input type="hidden" readOnly id="token" name="token" value={token}/>
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 
                px-3 py-1 text-white shadow-sm" type='submit'>Edit This Reservation</button>
            </div>
        </form>
    </div>
  );
}


