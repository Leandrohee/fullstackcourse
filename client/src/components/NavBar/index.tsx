import { Link } from "react-router-dom";

export function NavBar(){
    return(
        <nav 
            className={`
            left-0 shadow-inner
            h-screen w-[20vw] bg-green-200
            flex flex-col items-start justify-start
            p-5
            `}
        >
            <Link 
                className={`
                    bg-red-300 hover:bg-red-400
                    p-2 my-2 rounded-md hover:shadow-xl
                    shadow-lg text-black text center
                    text-transform: uppercase tracking-tighter
                    mx-auto font-medium
                `}
                to="/"
                children={"home"}        
            />
            <Link 
                className={`
                    bg-blue-300 hover:bg-blue-400
                    p-2 my-2 rounded-md hover:shadow-xl
                    shadow-lg text-black text center
                    text-transform: uppercase tracking-tighter
                    mx-auto font-medium
                `}
                to="/add"
                children={"Add dados"}        
            />
            <Link 
                className={`
                    bg-yellow-300 hover:bg-yellow-400
                    p-2 my-2 rounded-md hover:shadow-xl
                    shadow-lg text-black text center
                    text-transform: uppercase tracking-tighter
                    mx-auto font-medium
                `}
                to="/visualizar1"
                children={"Visualizar tabela 1"}        
            />
            <Link 
                className={`
                    bg-yellow-300 hover:bg-yellow-400
                    p-2 my-2 rounded-md hover:shadow-xl
                    shadow-lg text-black text center
                    text-transform: uppercase tracking-tighter
                    mx-auto font-medium
                `}
                to="/visualizar2"
                children={"Visualizar tabela 2"}        
            />
            <Link 
                className={`
                    bg-yellow-300 hover:bg-yellow-400
                    p-2 my-2 rounded-md hover:shadow-xl
                    shadow-lg text-black text center
                    text-transform: uppercase tracking-tighter
                    mx-auto font-medium
                `}
                to="/visualizar3"
                children={"Visualizar tabela 3"}        
            />
        </nav>
    );
}