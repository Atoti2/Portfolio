import Project from "../components/Project"
import fetchData from "../assets/fetch"
import { useEffect, useState } from "react"
import {motion} from "framer-motion"
const Projects = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData(setData)
    }, [])
    console.log(data);
    return (
        <motion.div
        initial={{opacity: 0}}
        animate= {{opacity: 1}}
        exit={{opacity: 0}}
         className="flex flex-col md:flex-row gap-10 m-5">
            {data.map(project => (
                <Project
                    key={project.id}
                    info={project}
                />
            ))}         
        </motion.div>
    )
}

export default Projects