import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { ListGroup, ButtonToolbar} from 'react-bootstrap';
import QueueItem from '../components/QueueItem'


export default function AdminPage(props) {

    function handleDelete(key) {
        props.deleteItem(key)
    }

    return (
        <div>
            <h3>admin page</h3>
            <Link to='/'>
                <Button>Logout</Button>
            </Link>
            <h3>The queue is currently <b>{props.access ? 'open' : 'closed'}</b></h3>
            <Button onClick={props.toggleAccess}>{props.access ? 'Close' : 'Open'} queue</Button>
            <h3>Queue</h3>
            <ListGroup>
                {props.itemsArray.map((item) => (
                    <ButtonToolbar>
                        <QueueItem time={item.time} title={item.title} key={item.key}/>
                        <Button onClick={() => handleDelete(item.key)} variant='danger'>Delete</Button>
                    </ButtonToolbar>
                ))}
            </ListGroup>
        </div>
    )
}
