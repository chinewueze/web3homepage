import classNames from 'classnames';
export default function Main({ isDarkMode}) {
    return(
        <main className=" flex  basis-0  mx-auto lg:mt-9 lg:flex-row sm:flex-col">
            <section className="w-3/5 shrink-0 mt-7" >
                <img src="./assets/Images/image-web-3-desktop.jpg" className=" lg:flex sm:hidden  lg:w-auto lg:mx-6"/>  
                <img src="./assets/Images/image-web-3-mobile.jpg" className="  lg:hidden sm:block sm:max-w-md sm:mx-2 " />  
                <div className="flex basis-0 shrink-0 xl:flex-row lg:flex-row sm:flex-col shrink-0 lg:mx-8 sm:ml-4">
                    <h1 className={`${isDarkMode ? 'text-white' : 'text-primary-100'} text-justify text-4xl font-bold shrink-0 lg:flex sm:hidden`}>
                        The Bright <br/> Future of <br/> Web 3.0?
                    </h1>
                    <h1 className={`${isDarkMode ? 'text-white' : 'text-primary-100'}  text-4xl font-bold lg:hidden sm:block sm:w-88 sm:m-3.5`}>
                        The Bright <br/> Future of Web 3.0?
                    </h1>
                    <p className={classNames('lg:ml-12',"lg:text-justify", "shrink-0", "sm:w-96", "sm:m-2.5", { 'text-primary-100' : !isDarkMode, 'text-white': isDarkMode  })}>
                        We dive into the next evolution of the web that <br/> claims to put the power of the platforms back <br/> into the hands of the people. 
                        But is it really <br/>fulfilling its promise? <br/> <br/> 
                        <span> <a href="#" className="bg-primary-100 text-white p-2 hover:bg-orange-700"> READ MORE </a>  </span>
                    </p>
                </div>
            </section> 
            <section className="bg-primary-100 text-white lg:mx-auto lg:w-1/3 sm:mx-auto sm:w-96 sm:mt-6 p-5  ">
                <h1 className="text-amber-400 text-5xl font-bold mb-5"> New </h1>  
                <p className="my-7"> 
                <a href="#" className="hover:text-amber-400">
                    <h2 className="font-bold text-lg"> Hydrogen VS Electric Cars</h2>
                </a>
                    Will hydrogen-fueled cars ever catch up to EVs
                </p>
                <hr/>
                <p className="my-7"> 
                    <h2>
                        <a href="#" className="hover:text-amber-400 font-bold text-lg">
                        The Downsides of AI Artistry 
                        </a>
                    </h2> 
                    What are the possible adverse effects of on-demand AI image generation?
                </p>               
                <hr/>
                <p className="my-7">
                    <a href="#" className="hover:text-amber-400 font-bold text-lg">
                        <h2> Is VC Funding Drying Up? </h2>  
                    </a> 
                     Private funding by VC firms is down 50% YOY. We take a look at what that means.
                </p>
            </section>
        </main>
    )
}




