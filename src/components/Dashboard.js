import React, { useState, useEffect } from 'react'
import data from '../data.json';
import { Grid, Box } from '@mui/material'
import { connect } from 'react-redux';
import _ from 'lodash';
import ProductCard from './ProductCard';
import Filter from './Filter';

const Dashboard = ({ filteredRecords, priceRange }) => {
    const [jsonData, setJsonData] = useState(data)
    const [filteredData, setfilteredData] = useState([])
    useEffect(() => {
        console.log("filterRecords : ", filteredRecords)
        if(filteredRecords.length !==0 && priceRange.length !== 0) {
            let filterRecordsResult = jsonData.products.filter(o1 => filteredRecords.some(o2 => o1.category === o2.category));
            console.log("RESULT : ", filterRecordsResult);
            let filterMinAndMaxPrice = filterRecordsResult.filter(item => item.price > priceRange[0] && item.price < priceRange[1]);
            setfilteredData(() => [...filterMinAndMaxPrice])
          
        } else if (filteredRecords.length !== 0) {
            let result = jsonData.products.filter(o1 => filteredRecords.some(o2 => o1.category === o2.category));
            console.log("RESULT : ", result);
            setfilteredData(() => [...result])
            
        } else if (priceRange.length !== 0) {
            let filterMinAndMaxPrice = jsonData.products.filter(item => item.price > priceRange[0] && item.price < priceRange[1]);
            console.log('filterMinAndMaxPrice : ',filterMinAndMaxPrice);
            setfilteredData(() => [...filterMinAndMaxPrice])
          
        }
    }, [filteredRecords, priceRange])

    return (
        <div style={{ width: '100%' }}>
            <Grid container>
                <Grid item lg={3} xl={2}>
                    <Filter />
                </Grid>
                <Grid item md={12} lg={10} xl={10}>
                    <Grid container

                        display='flex'
                        flexWrap='wrap'
                        alignContent='flex-start'
                        bgcolor='background.paper'
                        flexGrow="1"
                    >


                        {
                            filteredData.length !== 0 ? filteredData.map(item => (
                                <div key={item.id} style={{ margin: '3%' }}>
                                    <ProductCard item={item} />
                                </div>

                            )):
                            jsonData.products.map(item => (
                                <div key={item.id} style={{ margin: '3%' }}>
                                    <ProductCard item={item} />
                                </div>

                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div >

    )
}
const mapStateToProps = (state) => {
    return {
        filteredRecords: state.filter.selectedCategory,
        priceRange: state.filter.priceRange
    }
}

export default connect(mapStateToProps, {})(Dashboard);