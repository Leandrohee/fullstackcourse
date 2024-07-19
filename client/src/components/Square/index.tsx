import { ReactNode } from "react";

interface SquareProps{
    children?: ReactNode,                                            //O ? deixa o children opcional
    className?: string;                                              //Somente pode escolher essas opcoes de string
}

export function Square({children,className}: SquareProps){

    let classNameI = `
        h-[60vh] w-[45vw]
        bg-blue-200 mx-auto
        rounded-3xl my-auto 
        shadow-2xl p-5 flex
    `
    classNameI = className  ? classNameI + className : classNameI 

    return(
    <section
        className= {classNameI}
    >
        {children}
    </section>
    );
};
