import { Button } from "@mui/material";
import { GenericButton } from "../GenericButton";
import { Link } from "react-router-dom";
import { GenericLink } from "../GenericLink";


export function NavBar(){
    return(
        <nav className={`
            left-0 shadow-inner
            h-screen w-[20vw] bg-green-200
            flex flex-col items-start justify-start
            p-5
        `}
        >
        <GenericLink 
            className={"bg-red-400 hover:bg-red-500"} 
            to={"/"}
            children={"home"}
        />
        <GenericLink
            className={"bg-blue-400 hover:bg-blue-500"}  
            to={"/add"} 
            children={"Add dados"}
        />
        <GenericLink
            className="bg-yellow-400 hover:bg-yellow-500" 
            to={"/visualizar"} 
            children={"Visualizar"}
        />
        </nav>
    );
}