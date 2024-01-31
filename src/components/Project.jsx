const Project = (info) => {
    let title = info.title
    let img = info.url
    let desc = info.desc
    
    return(
        <>
            <div className="hover:scale-105 transition-all h-80 w-80 bg-slate-100 rounded-md cursor-pointer">
                <h3 className="text-xl font-bold text-center mb-5">{title}</h3>
                <img className="bg-cover rounded-md h-52 w-52 m-auto" src={img} alt={title}/>
                <p className="text-center mt-3">{desc}</p>
            </div>
            
        </>
    )
}

export default Project