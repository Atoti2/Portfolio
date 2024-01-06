import { Link } from "react-router-dom"
const NotFound = () => {
    return(
        <>
        <div className="text-center">
            <h1 className="text-3xl text-red"> <span className="text-5xl">Ooops!</span> <br/> A keresett oldal nem elérhető! </h1>
            <li className="font-bold text-xl mt-10 m-auto list-none w-fit rounded-md hover:scale-105 cursor-pointer transition-all"><Link to="/">Kezdőlap</Link></li>
        </div>
           
        </>
    )
}

export default NotFound