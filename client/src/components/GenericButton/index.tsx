import { ReactNode } from "react"

interface GenericButtonProps{
    children?: ReactNode,
    className?: string
}

export function GenericButton({className,children}: GenericButtonProps){
    
    let style = `
        bg-green-600 hover:bg-green-700
        p-2 my-2 rounded-md hover:shadow-xl
        shadow-lg w-[8vw] text-black
        text-transform: uppercase tracking-tighter
        mx-auto
    `
    if (className) {
        style = style + className
    }

    console.log(style)


    return(
        <button
            className={style}
        >
            {children}
        </button>
    )
}
