import { NewArticle } from "./NewArticle"

export const NewContainer = () => {
  return (
    <aside className="bg-VeryDarkBlue text-OffWhite py-[28px] px-[20px] flex-none mb-[60px] md:w-[350px] md:mb-0 ">
      <h1 className="text-SoftOrange text-4xl font-bold">New</h1>
      <h2>lo sabias?</h2>

        <NewArticle 
          title='Nokcaunt  es: '
          text='un triunfo que se consigue al derribar y dejar inconsciente al adversario por un tiempo determinado'
        />

        <NewArticle 
          title='Victoria por decision Unanime'
          text=': Los tres jueces dan vencedor al boxeador que mejor combate tuvo al transcurso de la pelea'
        />

        <NewArticle 
          title='Rounds'
          text='cada una de las partes o tiempos de que consta un combate dividido en tres minutos'
        />

<NewArticle 
          title='Estilo de pelea'
          text=' la manera particular en la que un boxeador se enfrenta a sus oponentes para ganar el combate'
        />
    </aside>
  )
}