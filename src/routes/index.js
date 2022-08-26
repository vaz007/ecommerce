import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
    Routes as RoutingFromRouter,
    Route,
    Link,
    Navigate
} from "react-router-dom";


import { Toast } from "../components/Toast";
import Dashboard from "../components/Dashboard";
import Cart from "../components/Cart";


const auth = {
    token: null,
    isAuthenticated: null,
};

// Routes is the function which navigates throughout the application
const Routes = ({ isAuthenticated, token, alert }) => {
    return (
        <>
            <div style={{marginTop: '5%'}}>
                <Toast />
                <div>
                    <RoutingFromRouter>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/cart" element={<Cart />} />
                        {/* <Route path="/Application" exact component={Application} />
                        <Route path="/Sample" component={Sample} /> */}

                        {/* <RouteProtected path="/" exact component={} /> */}
                    </RoutingFromRouter>
                </div>

            </div>
        </>
    );
}

// RouteProtected is used to protect the routes
// Protected routes verify the token and isAuthenticated from your store.
// Component parameter renders the component
// and ...rest parameter is props of the component that you are passing
// const RouteProtected = ({ component: Component, alert, ...rest }) => {
//     const classes = useStyles();
//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 auth.isAuthenticated && auth.token !== null ? (

//                     <Grid container justifyContent="center" alignItems="center">
//                         <Grid item xs={12} sm={12} md={12} lg={12} className={classes.appbar}>
//                             {/* <Appbar /> */}
//                             <Toast />
//                         </Grid>

//                         <Grid item xs={12} sm={12} md={12} lg={11}>
//                             <Component {...props} />
//                         </Grid>
//                     </Grid>

//                 ) : (
//                     <Redirect to="/" />
//                 )
//             }
//         />
//     );
// };




const mapStateToProps = (state) => {
    // console.log("Routes : ", state.auth);
    return {
        // isAuthenticated: state.auth.isAuthenticated,
        // token: state.auth.token,
    };
};
export default connect(mapStateToProps, { })(Routes);
