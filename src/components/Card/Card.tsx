import './Card.css'
import { Card as ButCard, Button } from 'react-bootstrap'
import { CardModal } from './CardModal';
import { useState } from 'react'
import { Order } from '../../orders';


interface Props {
    
    order: Order;
}


export const Card = ({ order }: Props) => {
    
    const [confirm, setConfirm] = useState<boolean>(false);
    
    const [openModal, setOpenModal] = useState<boolean>(false);
    return (
        <>
            <CardModal order={order} show={openModal} onHide={() => setOpenModal(false)} />
            <ButCard border="info" style={{ minWidth: '300px'}}> 
                <ButCard.Img variant='top' src={order.imgSrc ? order.imgSrc : '/logo192.png'} style={{ width: "100%", margin: 'auto'}}  />
                <ButCard.Body>
                    <ButCard.Title>
                        {order.name ? order.name : 'Проект'}
                    </ButCard.Title>
                    <ButCard.Text>
                        {order.description ? order.description : 'Описание отсутствует'}
                    </ButCard.Text>
                    <div className='buttons'>
                        <Button size='sm' style={{ background: 'BlueViolet'}} variant={confirm ? 'light' : 'primary'} onClick={() => setConfirm((prev) => !prev)}>{confirm ? 'Выйти' : 'Посмотреть'}</Button>
                        <Button size='sm' variant='light' onClick={() => setOpenModal(true)} >Подробнее</Button>
                    </div>
                </ButCard.Body>
            </ButCard>
         
        </>
    );
};