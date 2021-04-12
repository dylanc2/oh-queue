import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to='/student'>
                <Button variant="primary">Login as Student</Button>{' '}
            </Link>
            <Link to='admin'>
                <Button variant="primary">Login as Admin</Button>
            </Link>
        </div>
    )
}
