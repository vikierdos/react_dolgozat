import type { TanuloSzobaTipus } from '../adatok'
import Kartya from './Kartya';

interface kartyakProps{
    lista: TanuloSzobaTipus[]
    ,setFoglaltHelyek: void 
}

function Kartyak({lista, setFoglaltHelyek}:kartyakProps){
    {lista.map((e,i)=>(<Kartya key={e.id} elem={e} index={i} setFoglaltHelyek={setFoglaltHelyek}/>))}
}
export default Kartyak;