import { Modal, Button, Row, Col } from 'react-bootstrap'
import './CardModal.css'
import { Order } from '../../orders';

interface Props {

    order: Order;

    show: boolean;

    onHide: () => void;
}


export const CardModal = (props: Props) => {
    return (
        <Modal show={props.show} onHide={props.onHide} size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>{props.order.name ? props.order.name : 'Описание отсутствует'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <img alt={props.order.name} src={props.order.imgSrc ? props.order.imgSrc : '/logo192.png'} className='card-img' />
                    </Col>
                    <Col>
                        <p>Описание проекта:</p>
                        <p>{props.order.description ? props.order.description : 'отсутствует'}</p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};