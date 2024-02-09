const Project = ({info}) => {
    const {name, descr, mainImg, gitHub } = info
    console.log(info);

    return(
        <>
            <div className="hover:scale-105 transition-all h-80 w-80 bg-slate-100 rounded-md cursor-pointer" onClick={() => window.open(gitHub)}>
                <h3 className="text-xl font-bold text-center mb-5">{name}</h3>
                <img className="bg-cover rounded-md h-52 w-52 m-auto" src={mainImg} alt={name}/>
                <p className="text-center mt-3">{descr}</p>

            </div>
        </>
    )
}

export default Project