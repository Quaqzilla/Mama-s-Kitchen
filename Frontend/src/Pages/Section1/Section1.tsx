import bg from './../../assets/bg.webp'

export function Section1(){
    return(
        <div className="flex flex-row justify-evenly
        items-center align-middle bg-cover bg-center h-125 p-6"
        style={{backgroundImage: "url()"}}
        >
            <div className="m-3 lg:flex flex-col gap-3">
                <div>
                  <h1 className="text-6xl font-bold leading-snug">Name of Mama's <br/>Business</h1> 
                  <p className="text-3xl font-light">Slogan</p>
                </div>

                <div>
                    <button 
                    className="bg-amber-400 p-3 mt-2 rounded-xl text-xl cursor-pointer"
                    >Place Your Order</button>
                </div>
            </div>

            <div className="hidden w-170 lg:flex">
                <img src={bg} alt="Burger-Icon" />
            </div>
        </div>
    )
}