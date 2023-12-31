import { Link } from 'react-router-dom'

export default function PartnersPage() {
    return (
    <div className='w-full lg:h-[50vw] bg-white relative z-[2]' id='Partners'>
        <h1 className='text-3xl italic font-semibold text-center text-black font-poppins md:text-6xl lg:pt-16 md:pt-12 py-7'>Asiakkaat</h1>
        <div className='block lg:flex lg:w-[90%] md:w-[45%] sm:w-[60%] w-[70%] lg:pt-[2%] md:pb-[0] pb-[2vw] lg:h-[70%] mx-auto justify-around'>
            <div className='lg:h-full md:h-[60vw] h-[83vw] lg:w-4/12 lg:pt-0 pt-[4vw] md:pb-0 pb-[3vw] lg:mb-0 mb-[5vw] w-full bg-black text-white'>
                <h2 className='ml-[5%] pl-[1%] lg:mt-[7%] lg:mb-[4%] mb-[4.8%] lg:text-[1.8vw] md:text-[3vw] sm:text-[4vw] text-[4.5vw] font-poppins md:border-l-4 border-l-2 italic'>Korjausvelkalaskuri.fi</h2>
                <p className='ml-[5%] w-[85%] lg:text-[1.6vw] md:text-[2.5vw] sm:text-[3.7vw] text-[3.9vw] lg:h-[22.5vw] md:h-[72%] sm:h-[78%] h-[73%] mb-[2%] font-poppins font-light'>
                    Korjausvelkalaskuri on web pohjainen työkalu jonka avulla pystytään arvioimaan kiinteistöjen korjausvelkaa. Projekti opetti tiimissä toimimisen taidot ja oli ensimmäinen merkki siitä, että olemme erinomainen ja toimiva tiimi yhdessä.
                </p>
                <Link className='ml-[5%] lg:text-[1.5vw] md:text-[2.5vw] sm:text-[3vw] text-[4vw] font-poppins font-medium border-2 lg:border-4 px-4 border-solid hover:cursor-pointer hover:text-white text-white border-white transition'>
                    Lue lisää <i className="fa fa-angle-right"></i>
                    </Link>
            </div>
            <div className='lg:h-full md:h-[60vw] h-[83vw] lg:w-4/12 lg:pt-0 pt-[4vw] md:pb-0 pb-[3vw] lg:mb-0 mb-[5vw] w-full bg-black text-white'>
                <h2 className='ml-[5%] pl-[1%] lg:mt-[7%] lg:mb-[4%] mb-[4.8%] lg:text-[1.8vw] md:text-[3vw] sm:text-[4vw] text-[4.5vw] font-poppins md:border-l-4 border-l-2 italic'>Syke Kotipalvelut</h2>
                <p className='ml-[5%] w-[85%] lg:text-[1.6vw] md:text-[2.5vw] sm:text-[3.7vw] text-[3.9vw] lg:h-[22.5vw] md:h-[72%] sm:h-[78%] h-[73%] mb-[2%] font-poppins font-light'>
                    Kehitimme Sykekotipalvelulle mobiili applikaation jonka kautta he voisivat jakaa työkeikkoja työntekijöilleen. Projekti osoitti SHC:n kykyä toteuttaa astetta monimutkaisempia ja laadukkaita digitaalisia ratkaisuja asiakkaillemme.
                </p>
                <Link className='ml-[5%] lg:text-[1.5vw] md:text-[2.5vw] sm:text-[3vw] text-[4vw] font-poppins font-medium border-2 lg:border-4 px-4 border-solid hover:cursor-pointer hover:text-white text-white border-white transition'>
                    Lue lisää <i className="fa fa-angle-right"></i>
                    </Link>
            </div>
        </div>
    </div>
    );
}

{/* <div className='block w-full px-5 overflow-hidden lg:flex lg:px-20'>
<div  href='/partners/sykekotipalvelut'
    className='w-full lg:w-1/2 lg:px-10 hover:cursor-pointer'> 
<div className=''>
    <h1 className='text-2xl italic font-bold text-center underline lg:text-6xl md:text-5xl font-poppins lg:mt-20 md:mt-8'>Syke Kotipalvelut</h1>
    <p className='px-3 mt-3 text-lg font-light text-center md:text-left font-poppins lg:mt-10 md:mt-6 lg:text-3xl md:text-2xl lg:px-0 md:px-20'> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
    </p>
</div>
<img className='object-contain w-1/2 mx-auto mt-3 mb-10 md:mt-7 md:w-2/5 lg:w-1/3 lg:mb-0 md:mb-20' alt="Partner Image" src='https://www.sykekotipalvelut.fi/wp-content/uploads/2020/11/SYKE_UUSI-LOGO-02.png'></img>
</div>
<div  href='/partners/sykekotipalvelut'
    className='w-full lg:w-1/2 lg:px-10 hover:cursor-pointer'> 
<div className=''>
    <h1 className='text-2xl italic font-bold text-center underline lg:text-6xl md:text-5xl font-poppins lg:mt-20 md:mt-8'>Korjausvelkalaskuri</h1>
    <p className='px-3 mt-3 text-lg font-light text-center md:text-left font-poppins lg:mt-10 md:mt-6 lg:text-3xl md:text-2xl lg:px-0 md:px-20'> 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illo corporis quidem amet quae possimus tempora asperiores non, corrupti iusto officia quo facere assumenda. Aliquam possimus temporibus asperiores consequatur enim.
    </p>
</div>
<img className='object-contain w-1/2 mx-auto mt-3 mb-10 md:mt-7 md:w-2/5 lg:w-1/3 lg:mb-0 md:mb-20' alt="Partner Image" src='https://korjausvelkalaskuri.fi/wp-content/uploads/2023/01/korjausvelkalaskuri-207x60px.png.webp'></img>
</div>
</div> */}