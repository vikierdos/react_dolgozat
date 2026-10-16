import { useState } from 'react';
import './App.css'
import { TANULOSZOBAK, type TanuloSzobaTipus } from './adatok';
import Kartyak from './components/Kartyak';

function App() {
  const [lista,setLista]=useState<TanuloSzobaTipus[]>(TANULOSZOBAK)

  function setFoglaltHelyek(index:number){
    const ujLista:TanuloSzobaTipus[] = [...lista]
    ujLista[index].foglalt_helyek+=1
    setLista(ujLista)
  }

  return (
    <>
      <header>Tanulószobák neked! <span><p>Találd meg a számodra megfelelő tanulószobát</p></span></header>
      <article></article>
      <footer></footer>
      <div>
        <Kartyak lista={lista} setFoglaltHelyek={setFoglaltHelyek}/>
        <footer>Erdős Viktória</footer>
      </div>
    </>
  )
}

export default App
