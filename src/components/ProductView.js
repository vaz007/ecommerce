import React from 'react'
import { Typography, Grid, ImageListItem, ImageList, Rating, Divider, Fab } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import data from '../data.json';
import { ShoppingCart } from '@mui/icons-material';

const ProductView = ({ item }) => {
    return (
        <Grid container style={{ marginTop: '5%', justifyContent: 'center' }}>
            <Grid item md={6} lg={6} xl={6} style={{ border: "5px solid red", borderBlock: '1rem', borderColor: 'black' }}>
                <ImageList sx={{ height: 550, margin: '1rem' }} >
                    {data.products[0].images.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                src={`${item}`}
                                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
            <Grid item md={6} lg={6} xl={6} style={{ border: "5px solid yellow", borderBlock: '1rem' }}>
                <div>
                    <Typography gutterBottom variant="h6" component="div">
                        {data.products[0].title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data.products[0].description}
                    </Typography>

                    <Rating name="half-rating-read" precision={0.5} value={data.products[0].rating} readOnly />
                    <Divider />
                    <div>
                        <Typography variant="body2" color="text.primary" style={{ fontSize: "2rem" }}>
                            <CurrencyRupeeIcon fontSize='medium' /> {data.products[0].price}
                            <Typography variant='body2' color="text.secondary">Discount Percentage {data.products[0].discountPercentage}%</Typography>
                        </Typography>


                    </div>

                    <Fab variant="extended" size="medium" color="primary" aria-label="add" style = {{margin:'3rem'}}>
                        Add to cart
                        <ShoppingCart sx={{ mr: 1 }} style = {{marginLeft:'1rem'}}/>
                    </Fab>
                    <Divider />

                </div>
            </Grid>
        </Grid >
    )
}

export default ProductView
