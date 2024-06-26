import missionControl from '../assets/missionControl.jpg';

export default function GetAJobPage() {
    return (
        <div id="employmentForm">
            <div className='h-[48vh] lg:mt-0 mt-5 flex flex-col justify-center'>
                <h1 className='text-4xl text-center text-white font-poppins lg:text-7xl md:text-5xl'>Hae töihin!</h1>
                <p className='w-4/5 mx-auto mt-4 text-base font-light text-center text-white lg:w-1/2 lg:mt-10 font-poppins lg:text-3xl md:text-2xl'>
                    Sunny Harbor Consulting tarjoaa oivan mahdollisuuden päästä kehittämään omaa osaamistaan ja työskentelemään mielenkiintoisten projektien parissa.
                </p>
                <img src={missionControl} className='absolute top-0 z-[-1] h-[48vh] w-full object-cover brightness-50'></img>
            </div>
            <div className="mx-3 mb-10 md:flex lg:mt-10 lg:mx-0 md:mt-4 lg:pb-20">
                <p className='text-base font-light font-poppins lg:text-3xl md:text-xl md:w-8/12 md:px-4 lg:px-20 lg:w-1/2'>
                Tarvitsemme seuraavaa osaamista tällä hetkellä:<br/>
                - Backend ohjelmointi (Golang, NodeJS)<br/>
                - Frotend ohjelmointi (TypeScript, JavaScript, HTML/CSS)<br/>
                - Moobiili ohjelmointi (Java, Kotlin, Swift)<br/>
                - Graafinen suunnittelu<br/>
                <br/>
                Jos sinulta löytyy tarvitsemaamme osaamista tai muuta osaamista, jota uskot, että voisimme käyttää, ota yhteyttä! 
                </p>
                <div className='flex justify-center mx-auto my-5 md:w-3/5 lg:w-6/12 lg:px-32 md:mt-0'>
                    <div className='flex flex-col w-full font-light font-poppins'>
                        <div className='flex flex-col'>
                            <label className='text-lg text-black font-poppins md:text-2xl'>Nimi</label>
                            <input className='font-mono text-lg text-black border-2 border-black border-solid md:text-lg' type='text'></input>
                        </div>
                        <div className='flex flex-col mt-5'>
                            <label className='text-lg text-black font-poppins md:text-2xl'>Sähköposti</label>
                            <input className='font-mono text-lg text-black border-2 border-black border-solid md:text-lg' type='text'></input>
                        </div>
                        <div className='flex flex-col mt-5'>
                            <label className='text-lg text-black font-poppins md:text-2xl'>Viesti</label>
                            <textarea className='text-black font-mono p-2 text-xl border-solid border-2 border-black min-h-[100px] max-h-56' type='text'></textarea>
                        </div>
                        <button className='mt-6 text-2xl text-center text-black font-poppins md:text-left'>Lähetä</button>
                    </div>
                </div>
            </div>
        </div>
    );
}