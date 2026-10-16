import type { TanuloSzobaTipus } from "../adatok"
import './css/Kartya.css'

interface KartyaProps{
    elem: TanuloSzobaTipus
    ,index: number
    ,setFoglaltHelyek:(index:number) => void
}



function Kartya({elem, index, setFoglaltHelyek}:KartyaProps) {

  return (
    <div className="kartya">
        <h1>{elem.szoba_nev}</h1>
        <span><p>ID</p><p>{elem.id}</p></span>
        <span><p>Szobatípus</p><p>{elem.szobatipus}</p></span>
        <span><p>Emelet</p><p>{elem.emelet}</p></span>
        <span><p>Férőhely</p><p>{elem.ferohely}</p></span>
        <span><p>Foglalt helyek</p><p>{elem.foglalt_helyek}</p></span>
        <button onClick={()=>setFoglaltHelyek(index)} key="Helyet foglalok">Helyet foglalok!</button>
    </div>
  )
}

export default Kartya