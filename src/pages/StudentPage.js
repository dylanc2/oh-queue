import React from 'react';
import Button from 'react-bootstrap/Button';
import { ListGroup, FormControl, ButtonToolbar} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import QueueItem from '../components/QueueItem'
import "../index.css";

export default function StudentPage(props) {

    let inputText = '';

    function handleSubmit() {
        props.addItem(inputText);
        return
    }

    function handleChange(e) {
        inputText = e.target.value;
        return
    }

    function handleDelete(key) {
        props.deleteItem(key)
    }

    return (
        <div>
            <h3>Logged in as student</h3>
            <Link to='/'>
                <Button>Logout</Button>
            </Link>

            {props.access ? <h3>Queue is open</h3> : <h3>Queue is closed</h3>}

            {props.access ? 
            <div>
            <h3>Submit a help request</h3>
            <InputGroup className="mb-3" onChange={handleChange}>
                <FormControl
                placeholder="Assignment name"
                />
                <InputGroup.Append>
                <Button variant="outline-secondary" onClick={handleSubmit}>Submit</Button>
                </InputGroup.Append>
            </InputGroup>
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
            : null
            }
        </div>
    )
}
