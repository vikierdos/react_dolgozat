import type { TanuloSzobaTipus } from "../adatok"


interface KartyaProps{
    elem: TanuloSzobaTipus
    ,index: number
    ,setFoglaltHelyek: void
}



function Kartya({elem, index, setFoglaltHelyek}:KartyaProps) {

  return (
    <div className="kartya">
        <h1>{elem.szoba_nev}</h1>
        <p>{elem.szobatipus}</p>
        <p>{elem.id}</p>
        <p>{elem.emelet}</p>
        <p>{elem.ferohely}</p>
        <p>{elem.foglalt_helyek}</p>
        <button onClick={setFoglaltHelyek}>Helyet foglalok!</button>
    </div>
  )
}

export default Kartya