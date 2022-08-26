import React from 'react'
import { connect } from 'react-redux'
import { Typography, Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, ButtonGroup } from '@mui/material';
import { AddCircle, RemoveCircle, ShoppingCart } from '@mui/icons-material';
const renderCartList = (cartItems, total) => {
    if (cartItems.length === 0) {
        return (
            <div>
                <Typography gutterBottom variant="h6" component="div">
                    Your Cart looks empty
                </Typography>

            </div>
        )
    } else {
        return (
            <Grid container>
                <Grid item lg={7} xl={7} style={{ marginRight: '5%', marginLeft: '5%' }}>
                    {
                        cartItems.map(item => (
                            <>
                                <Card sx={{ display: 'flex' }} style={{ marginBottom: '1rem' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 151 }}
                                        image={item.thumbnail}
                                        alt=""
                                    />
                                      <CardContent style={{justifyContent:"flex-start" ,flex: '1',}}>
                                            <Typography component="div" variant="h5">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                                {item.description}
                                            </Typography>
                                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                                Quantity {item.qty}
                                            </Typography>
                                        </CardContent>
                                      
                                    <Box sx={{ display: 'flex', flex: '1', flexDirection: 'row' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                            {/* <ButtonGroup
                                    size="small" aria-label="small button group"
                                >
                                    <Button variant="contained"
                                        endIcon={<AddCircle />}
                                        onClick={() =>  console.log('')}
                                    >
                                        Add
                                    </Button>
                                    <Button variant="contained"
                                        endIcon={<RemoveCircle />}
                                        onClick={()=> console.log('')}
                                    >
                                        Remove
                                    </Button>
                                </ButtonGroup> */}

                                        </Box>
                                    </Box>

                                </Card>
                            </>
                        ))
                    }

                </Grid>
                <Grid item lg={3} xl={3} style={{ justifyContent: 'flex-end' }}>
                    <Card sx={{ display: 'flex' }}>
                        <List >
                            <ListItem>
                                <ListItemText
                                    primary="Total"
                                    secondary={total}
                                />
                            </ListItem>

                        </List>
                    </Card>
                </Grid>
            </Grid>

        )
    }

}
const Cart = ({ cartItems, total }) => {
    return (
        <div>{renderCartList(cartItems, total)}</div>
    )
}
const mapStateToProps = (state) => {
    // console.log(state.cart.cartItems)
    return {
        cartItems: state.cart.cartItems,
        total: state.cart.totalPrice
    }
}
export default connect(mapStateToProps, {})(Cart);