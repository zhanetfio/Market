import React from 'react';
import {AppBar, Badge, Box, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ShoppingBasket} from "@material-ui/icons";
import {useLocation, useNavigate} from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const onClickHandler = () => {
        if(location.pathname==='/cart') {
            navigate('/products')
        }if(location.pathname==='/products'){
            navigate('/cart')
        }
    }
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{display: {xs: 'none', sm: 'block'}}}
                        >
                            E-SHOP
                        </Typography>
                        <Box sx={{flexGrow: 1}}/>
                        <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                            {location.pathname !== '/cart'
                                ?
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <ShoppingBasket onClick={onClickHandler}/>
                                    </Badge>
                                </IconButton>
                                :
                                <Button color='secondary' onClick={onClickHandler}>Continue shopping</Button>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}
