import logo from './logo.svg';
import './App.css';
import Yemek from './components/Yemek';
import Counter from './pages/Counter';
import { useState } from 'react';



function App() {

  const[adi , setAdi] = useState("Döner");



  const menuListesi = () => {
    const yemekler = [
      {
        adi: "Döner",
        aciklama: "Tavuk döner",
        ucret: "50tl",
      },
      {
        adi : "Pizza",
        aciklama : "Mantarlı pizza",
        ucret : "80tl",
      }
    ];

    let yemekListesi = null;
    yemekListesi = yemekler.map((yemek,index) => {
      return <Yemek adi = {yemek.adi} aciklama = {yemek.aciklama} ucret = {yemek.ucret}/>
    })
    return yemekListesi;
  }
  

  const adiniDegistir = () => {
      setAdi('Payidar');
  }


  return (
    <div className="App">
      <Yemek adi={adi} aciklama="Tavuk" ucret="60tl" adiniDegistir={adiniDegistir} />
      <Yemek adi="Çorba" aciklama="Ezogelin" ucret="30tl" />
      <Yemek adi="Salata" aciklama="Mevsim" ucret="20tl" />
      <Yemek adi="İcecek" aciklama="Cola" ucret="10tl" />

      {/*menuListesi()*/}

      <Counter/>

    </div>
  );
}

export default App;









