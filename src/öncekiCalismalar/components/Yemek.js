// YEMEK COMPONENTİ
//PROPS KULLANIMI
const Yemek = (props) => {

    const adiniDegiştir = () => {
       //  CHİLD PARENTDA DEĞİŞİKLİK YAPAMAYIZ. HATA VERİR.
    }

    return(
      <div style={{border:'2px solid', width:'200px', margin:'10px'}}>
        <h3>{props.adi}</h3>
        <p>{props.aciklama}</p>
        <span>{props.ucret}</span>


        <div>
           <button onClick={() => props.adiniDegistir()} style={{marginBottom:'10px'}}>Adını Değiştir</button>


        </div>
      </div>
    )
}
export default Yemek; // DEFAULT EXPORT

const pi = 3.14;
let count = 10;
export {pi,count};
//NAMED EXPORT


