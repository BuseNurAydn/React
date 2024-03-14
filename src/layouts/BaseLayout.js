
import { Container, Row, Col } from 'react-bootstrap'
import Navigation from '../components/Navigation';
import { Outlet } from 'react-router-dom';

//BASELAYOUT COMPONENTİ
const BaseLayout = () => {

    return (
        <Container>
            <Row>
                <Col>
                    {/*Menü kısmı */}
                    <Navigation />
                </Col>
            </Row>
            <Row>
                <Col>
                    {/*İçerik kısmı*/}
                    <Outlet />
                </Col>
            </Row>
            <Row>
                <Col>
                    {/**Varsa footer kısmı */}
                </Col>
            </Row>
        </Container>

    )


}
export default BaseLayout;