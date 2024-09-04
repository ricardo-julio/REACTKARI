import imageMobile from '../assets/images/portada.jpg'
import imageDesktop from '../assets/images/portada.jpg'

export const MainArticle = () => {
  return (
    <section className='mb-12 md:mb-0'>
      <picture>
        <source media='(max-width: 640px)' srcSet={imageMobile} />
        <source media='(min-width: 641px)' srcSet={imageDesktop} />
        <img src={imageMobile} alt="image" />
      </picture>
      <div className='sm:flex'>
        <div className='flex-1 py-6'>
          <h2 className='text-[40px] leading-none font-bold sm:text-[58px]'>que es el boxeo?</h2>
        </div>
        <div className='pt-9 '>El boxeo, también conocido como pugilismo, es un deporte de combate y un arte marcial en el que dos contrincantes se enfrentan utilizando únicamente sus puños con guantes, golpeándose de la cintura hacia arriba dentro de un cuadrilátero.
          <p>trayendo consigo beneficios como: <br />Aumenta la fuerza, la resistencia, la coordinación y la agilidad. <br />El boxeo fomenta valores como la disciplina, el respeto y el autocontrol.</p>
        </div>

        <div className='flex-1  pt-9 px-4'>
          <p className='mb-10 text-[13px] sm:text-[15px] '>para mas informacion visita nuestro logos principales de como ser un buen boxeador</p>
          <button className='bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue ' >Read more</button>
        </div>
        
      </div>
    </section>
  )
}