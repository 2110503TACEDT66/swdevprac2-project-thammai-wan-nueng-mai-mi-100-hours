'use server'
import registerUser from "@/libs/registerUser";
import { redirect } from "next/navigation";

export default async function Register(registerForm: FormData) {
    const name = registerForm.get("name")?.toString() || 'no data'
    const tel_number = registerForm.get("tel")?.toString() || 'no data'
    const email = registerForm.get("email")?.toString() || 'no data'
    const password = registerForm.get("password")?.toString() || 'no data'
    const role = "user"

    await registerUser(name, tel_number, email, password, role);
    // alert('successfully register');
    // await new Promise( (resolve)=>setTimeout(resolve, 2000));
    redirect('/');
}