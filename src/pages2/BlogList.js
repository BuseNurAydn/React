import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigation } from "react-router-dom";
import BlogCard from "./BlogCard";


//FONKSİYONEL COMPONENT
const BlogList = () => {

    const [blogs1, setBlogs] = useState([]);
    //const navigate = useNavigate();


    //VERİLERİ ALMAK İÇİN
    useEffect(() => {
        const blogKayitlari = JSON.parse(localStorage.getItem('blogs')) || [] // BLOGS DİYE KAYDETMİŞTİK
        setBlogs(blogKayitlari);

    }, []);

    const blogsRender = () => {
        const bloglar = blogs1.map((item, index) => {
            return (

                <BlogCard item={item} />

            )
        })

        return bloglar;
    }

    {/*
                <Col>
                    <Card style={{ width: '18rem', margin: '20px', float: 'left' }}>
                        <Card.Body>
                            <Card.Title>{item.baslik}</Card.Title>
                            <Card.Text>
                                {item.detay}
                            </Card.Text>
                            <Button variant="success" onClick={
                                      //NAVİGATE KULLANIMI               OPTİONS.STATE KULLANIMI      OBJE         
                                () => { navigate('/blogDetay/' + item.id , {state: {'name' : 'buse',
                                 adress: {'city': 'Ankara'}}}) }}>Devamını Oku..</Button>
                        </Card.Body>
                    </Card>
                            */}

    return (

        <Container>
            <Row>
                <Col>
                    {blogsRender()}
                </Col>
            </Row>
        </Container>


    )
}
export default BlogList;




//GRİD YAPISI - BOOTSTRAP
{/*<Container >
         gerek kalmadı
            <Row>
                <Col>
                    <Navbar bg="dark" data-bs-theme="dark" style={{ marginTop: '10px' }}>
                        <Container>
                            <Navbar.Brand>React Blog</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Blog Listesi</Nav.Link>
                                <Nav.Link as={Link} to="/blogEkle">Blog Ekle</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            {/* <h1 style={{ margin: '10px' }}>Kitap Blog Yazıları</h1>}
            <Row>
                <Col>
                    <Card style={{ width: '18rem', margin: '20px', float: 'left' }}>
                        {/*<Card.Img variant="top" src="holder.js/100px180" />}
                        <Card.Body>
                            <Card.Title>Tutunamayanlar</Card.Title>
                            <Card.Text>
                                Ülkemizin en değerli yazarlarından biri olan Oğuz Atay’ın yazıldığı dönemde büyük tartışma konusu olmuş eseri 1972 yılında yayımlanmıştır.Tutunamayanlar, sadece birkaç dile çevrilebilmiştir.
                            </Card.Text>
                            <Button variant="success">Devamını Oku..</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
      */}
