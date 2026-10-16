import type { TanuloSzobaTipus } from '../adatok'
import Kartya from './Kartya';
import './css/Kartyak.css'

interface kartyakProps{
    lista: TanuloSzobaTipus[],
    setFoglaltHelyek:(index:number) => void
}

function Kartyak({lista, setFoglaltHelyek}:kartyakProps){
    return(
        <div className='kartyak'>
            {lista.map((e,i)=>(<Kartya key={e.id} elem={e} index={i} setFoglaltHelyek={setFoglaltHelyek}/>))}
        </div>
    )
}
export default Kartyak;