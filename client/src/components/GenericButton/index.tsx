import { ReactNode } from "react"

interface GenericButtonProps{
    children?: ReactNode,
    className?: string,
}

export function GenericButton({className,children}: GenericButtonProps){
    
    let classNameI = `
        bg-green-600 hover:bg-green-700
        p-2 my-2 rounded-md hover:shadow-xl
        shadow-lg w-[8vw] text-black
        text-transform: uppercase tracking-tighter
        mx-auto
    `

    classNameI = className ? classNameI + className : classNameI

    return(
        <button
            className={classNameI}
            type={"submit"}
        >
            {children}
        </button>
    )
}
