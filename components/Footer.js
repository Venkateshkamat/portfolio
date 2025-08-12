import { HandMetal, Heart, Star } from "lucide-react"

const Footer = () =>{

    return (
        <div>
            <div className="m-2">Design inpsired from 
            <a className="font-semibold text-slate-50 p-1.5  hover:text-teal-300 focus-visible:text-teal-300"
                href="https://brittanychiang.com/"
                target="_blank"
            >
                Brittany Chiang&apos;s
            </a>
             website </div>
            <div className="flex m-2">Made with Nextjs, Tailwind and a lot of prompting <Heart className="p-0.5 mt-0.5 ml-1"/> </div>
        </div>
    )
}

export default Footer