import { useState, useEffect } from "react";
//FONKSİYONEL COMPONENTTE STATE KULLANIMI
const Counter = () => {

     const [count,setCount] = useState(0);
     const [countValue,setCountValue] = useState();

     //useEffect( () => {
     //   console.log('Count değer' + count);
     // });
     //PARAMETRE VERMEDİĞİMİZDE HER STATE DEĞİŞİMİNDE ÇALIŞIR.

      //useEffect( () => {
     //   console.log('Count değer' + count);
     // }, []);
     // BOŞ PARAMETRE VERDİĞİMİZDE SADECE 1 KERE ÇALIŞIR.

       useEffect( () => {
          console.log('Count değer' + count);
        }, [countValue]);
      // VERİLEN PARAMETRENİN DEĞİŞİKLİĞİNİ İZLER. DEĞİŞİNCE ÇALIŞIR.


    return(
        <div>
            <h1>Merhaba Counter</h1>
            <p>Count : {count}</p>
                            {/** Fonksiyon şeklinde yazmassak eğer detloopa giriyor.Çünkü fonksiyon şeklinde
                             * yazmazsak direk setcount fonk. çağırıyor ve devamlı render ediyor.
                             */}
            <button onClick={() => setCount(count + 1)} style={{marginRight:'10px'}} >Artır++</button>
            <button onClick={() => setCount(count - 1)}  >Azalt--</button>

            <br/>
            <br/>
            
            <input
             type="text"
             value={countValue} 
             onChange={(e) => setCountValue(Number(e.target.value))}
             placeholder="Sayı giriniz"
             style={{marginLeft: "10px"}}>
            </input>

            <br/>
            <br/>

            <button onClick={() => setCount(count + countValue)} style={{marginRight:'10px'}} >Artır++</button>
            <button onClick={() => setCount(count - countValue)} >Azalt--</button>
           
        </div>
    )
}
export default Counter;