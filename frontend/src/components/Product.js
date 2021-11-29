import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
    return (
        <Card classNama='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}> 
                <Card.Img src ={product.image} varient ='top' />
            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'><strong>{product.name}</strong>
                </Card.Title>
            </Link>


            <Card.Text as='h4'>{product.brand} </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Product
