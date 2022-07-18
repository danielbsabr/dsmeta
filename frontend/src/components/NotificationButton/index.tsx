import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';

import './styles.css';

type Props = {
    saleID: number;

}

function handeClick(id : number){
    axios (`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
    toast.success("SMS Enviado com sucesso")   
        
    });

}

function NotificationButton({saleID} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => {handeClick(saleID)}}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;