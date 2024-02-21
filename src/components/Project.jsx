const Project = ({info}) => {
    const {name, descr, mainImg, gitHub } = info
    return(
        <>
            <div className="hover:scale-105 transition-all p-8 bg-gradient-to-tr shadow-xl from-slate-100 to-slate-200 rounded-md cursor-pointer" onClick={() => window.open(gitHub)}>
                <h3 className="text-xl font-bold text-center mb-5">&#60;{name}/&#62;</h3>
                <img className="bg-center rounded-md h-auto max-w-[400px] m-auto" src={mainImg} alt={name}/>
                <p className="text-center mt-3 text-lg">{descr}</p>

            </div>
        </>
    )
}

export default Project