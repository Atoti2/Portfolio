import {motion} from "framer-motion"
const Contact = () => {
    return(
        <>  
            <motion.div
                initial={{opacity: 0}}
                animate= {{opacity: 1}}
                exit={{opacity: 0}}
                className="bg-rose-600 m-6 rounded-md p-12 text-slate-100 font-mono">
                <div className="flex flex-col sm:flex-row sm:gap-20 gap-5">
                    <div>
                        <h3 className="text-2xl font-bold mb-3 italic">&#60;Közösség/&#62;</h3>
                        <ul className="leading-relaxed text-lg">
                            <li className="hover:text-slate-900 transition-all"><a href="#">Facebook</a></li>
                            <li className="hover:text-slate-900 transition-all"><a href="#">Instagram</a></li>
                            <li className="hover:text-slate-900 transition-all"><a href="#">Twitter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-3 italic">&#60;Információk/&#62;</h3>
                        <ul className="leading-relaxed text-lg">
                            <li>+36303053302</li>
                            <li>john.wick@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <p className="text-center mt-12">&copy; 2024 Tóth Kristóf</p>
            </motion.div>
        </>

    )
}

export default Contact