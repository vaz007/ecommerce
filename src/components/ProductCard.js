import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, ButtonGroup } from '@mui/material';
import { AddCircle, RemoveCircle, ShoppingCart } from '@mui/icons-material';
import { connect } from "react-redux";
import {
    deleteItem,
    addItem,
    decrement,
} from "../redux-helpers/actions/cartAction";

function ProductCard({ cartItems, item, addItem, decrement, deleteItem }) {

    const [qty, setQty] = useState(null);
    useEffect(() => {
        let productQty = cartItems.filter(product => product.id === item.id);
        if (productQty.length !== 0) {
            console.log('productQty : ',productQty)
            setQty(() => productQty[0].qty); 
        }
      //  console.log(item, "QTY : ", qty);
    }, [cartItems, qty, item])

    const increment = () => {
        console.log(cartItems.length);
        addItem(item);
    };
    const deleteItemsFromCart = () => {

        console.log(cartItems.length);
        let x = cartItems.filter(product => product.id === item.id);
        console.log("X", x)
        if (x.length !== 0) {
            if (x[0].qty > 1) {
                //       console.log("DECREMENT ")
                decrement(item);
                setQty(qty -1);
            } else {
                //     console.log("DELETE ITEM ")
                setQty(null);
                deleteItem(item.id)
            }
        }

    };
    return (
        <Card sx={{ maxWidth: 240, height: 350 }}>
            <CardActionArea onClick={() => console.log('card clicked')}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.thumbnail}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {item.title.slice(0, 20)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description.slice(0, 50)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price : {item.price}
                    </Typography>

                    {
                        qty !== null ? (<Typography variant="body2" color="text.secondary">
                            In Bag : {qty}
                        </Typography>) : ''
                    }

                </CardContent>

            </CardActionArea>

            <CardActions style={{ justifyContent: 'center' }}>
                <ButtonGroup
                    size="small" aria-label="small button group"
                >
                    <Button variant="contained"
                        endIcon={<AddCircle />}
                        onClick={increment}
                    >
                        Add
                    </Button>
                    <Button variant="contained"
                        endIcon={<RemoveCircle />}
                        onClick={deleteItemsFromCart}
                    >
                        Remove
                    </Button>
                </ButtonGroup>
                {/*  */}
            </CardActions>

        </Card>
    );
}
const mapStateToProps = (state) => {
    // console.log(state.cart.cartItems)
    return {
        cartItems: state.cart.cartItems
    }
}
export default connect(mapStateToProps, { deleteItem, addItem, decrement })(ProductCard);