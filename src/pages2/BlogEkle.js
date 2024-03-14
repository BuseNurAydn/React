import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
 //REDUX İÇİN
import { increment } from "../store/counterSlice";
import { useDispatch } from 'react-redux'

const BlogEkle = () => {

     // const[baslik, setBaslik] = useState('Baslik');
     // const[detay, setDetay]= useState('Detay');
     const dispatch = useDispatch();

     const [form, setForm] = useState({
          //JSON OBJE
          //id , detay için ekledik
          id: '',
          baslik: '',
          detay: '',
          kategori: '',
          resim: ''
     })

     const formKaydet = () => {
          alert('Kaydediliyor...')
          //alert(form.baslik);
          //LOCAL STORAGEDEN BLOK KAYITLARINI VER NULL İSE BOŞ BİR ARRAY VER
          //STRİNGİ ESKİ HALİNE ARRAY'E DÖNÜŞTÜRÜR !!!
          const blogKayitlari = JSON.parse(localStorage.getItem('blogs')) || []
          //STRİNGE ÇEVİRDİK !!
          localStorage.setItem('blogs', JSON.stringify([...blogKayitlari, { ...form, id: Date.now() }]));

          //FORMDAKİ İNPUT ALANLARI YAZILIP KAYDEDİLDİKTEN SONRA İNPUT ALANLARI BOŞALIR
          setForm(
               {
                    baslik: '',
                    detay: '',
                    kategori: '',
                    resim: ''
               }
          )
     }
     return (
          <div>
               <Form style={{ margin: '30px' }}>
                    <Form.Group className="mb-3">
                         <Form.Label>Blog Başlık</Form.Label>
                         <Form.Control type="text"
                              value={form.baslik}
                              onChange={(e) => setForm({ ...form, baslik: e.target.value })}>
                         </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                         <Form.Label>Blog Detay</Form.Label>
                         <Form.Control as="textarea" rows={3}
                              value={form.detay}
                              onChange={(e) => setForm({ ...form, detay: e.target.value })}>
                         </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                         <Form.Label >Kategori</Form.Label>
                         <Form.Select
                              value={form.kategori}
                              onChange={(e) => setForm({ ...form, kategori: e.target.value })}>
                              <option>Seçiniz</option>
                              <option value="B">Bilgisayar</option>
                              <option value="K">Kitap</option>
                              <option value="P">Programlama</option>
                         </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" style={{ margin: '30px' }}>
                         <Form.Label>Blog Resmi</Form.Label>
                         <Form.Control type="text"
                              value={form.resim}
                              onChange={(e) => setForm({ ...form, resim: e.target.value })}>
                         </Form.Control>
                    </Form.Group>
                    <Button onClick={() => formKaydet()} style={{ backgroundColor: 'darkGreen', border: 'darkGreen' }}>Kaydet</Button>
               </Form>

               <Button onClick={() => dispatch(increment())}>Counter'ı Arttır</Button>
          </div>


     )


}
export default BlogEkle;