import React from 'react'
import { ListGroup } from 'react-bootstrap';

//props: name, time created
export default function QueueItem(props) {
    return (
    <ListGroup.Item>{props.title + " " + props.time}</ListGroup.Item>
    )
}
