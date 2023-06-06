export default function Footer ({isDarkMode}){
    return(
      <footer className="lg:flex mt-20 sm:mx-20 py-3">
        <div className="sm:flex">
        <img src="./assets/Images/image-retro-pcs.jpg" className="w-40 h-40 mx-2.5 lg:mt-6"/>
        <article className="my-6">           
            <h1 className="text-zinc-500 text-4xl font-bold"> 01 </h1>
            <h2 className={`text-lg font-bold hover:text-orange-700  ${isDarkMode ? 'text-white' : 'text-primary-100'}`}> <a href="#"> Reviving Retro PCs </a> </h2>
            <p className={`text-xs lg:mx-4  ${isDarkMode ? 'text-white' : 'text-primary-100'}`}> 
                What happens when old PCs are given modern upgrades?
            </p>
        </article>
        </div>
        <div className="sm:flex">
        <img src="./assets/Images/image-top-laptops.jpg" className="w-40 h-40 mx-2.5 sm:mt-6"/>
        <article className="my-5 ">
            <h1 className="text-zinc-500 text-4xl font-bold"> 02 </h1>
            <h2 className={`text-lg font-bold hover:text-orange-700  ${isDarkMode ? 'text-white' : 'text-primary-100'}`}> <a href="#"> Top 10 Laptops of 2022 </a> </h2>
            <p className={`text-xs lg:mx-3.5 ${isDarkMode ? 'text-white' : 'text-primary-100'}`}> 
                Our best picks for various needs and budgets.
            </p>
        </article>
        </div>
        <div className="sm:flex">
            <img src="./assets/Images/image-gaming-growth.jpg" className="w-56 h-40 mx-2.5 sm:mt-6"/>
            <article className="my-6">
                <h1 className="text-zinc-500 text-4xl font-bold"> 03 </h1>
                <h2 className={`text-lg font-bold hover:text-orange-700  ${isDarkMode ? 'text-white' : 'text-primary-100'}`}> <a href="#"> The Growth of Gaming </a> </h2>
                <p className={`text-xs lg:mx-4  ${isDarkMode ? 'text-white' : 'text-primary-100'}`}>  
                    How the pandemic has sparked fresh opportunities
                </p>
            </article>
            </div>
      </footer>
    )
}