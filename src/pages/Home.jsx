import logo from '../assets/profile_picture.png'
const Home = () => {
    return (
        <main>
        <div id="aboutMe" className="flex flex-col sm:flex-row items-center justify-center min-h-[88vh]">
            <div className="mb-5 ml-5">
                <img className="bg-rose-500 a" src={logo} alt="picture of me"/>
            </div>
    
            <div className="flex flex-col items-center justify-center m-auto">
                <h1 className="text-7xl font-mono text-center">Szia,<br/><span className="text-rose-500 font-semibold">Kristóf</span> vagyok</h1>
            </div>
            
        </div>
        <section id="about" className="text-center">
            <p className="text-2xl mb-10 font-mono"><span className="font-bold">Tóth Kristóf</span> vagyok <span className="font-bold">19</span> éves és az iskolában tanulok informatikát 4 éve bár szoktam magamtól is tanulni otthon webfejlesztést. <br/><span className="text-rose-500 font-bold">HTML5, CSS3 és Javascript</span>-ben kódolok.</p>
        </section>
    </main>
    )
}

export default Home