import Link from "next/link";

export default function TopMenuItem( {title, pageRef} : {title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className="px-4 h-full text-center my-auto font-sans text-zinc-500 hover:bg-slate-200 flex">
            <div className="m-auto">{title}</div>
        </Link>
    );
}