
import {Col , Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const BlogCard = (props) => {
    
    const navigate = useNavigate();

    return (
        <Col>
            <Card style={{ width: '18rem', margin: '20px', float: 'left' }}>
                <Card.Body>
                    <Card.Title>{props.item.baslik}</Card.Title>
                    <Card.Text>
                        {props.item.detay}
                    </Card.Text>
                    <Button variant="success" onClick={
                        //NAVİGATE KULLANIMI               OPTİONS.STATE KULLANIMI      OBJE         
                        () => {
                            navigate('/blogDetay/' + props.item.id, {
                                state: {
                                    'name': 'buse',
                                    adress: { 'city': 'Ankara' }
                                }
                            })
                        }}>Devamını Oku..</Button>
                </Card.Body>
            </Card>
        </Col>



    )
}
export default BlogCard;