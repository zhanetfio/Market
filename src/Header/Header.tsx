import React from 'react';
import {AppBar, Badge, Box, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ShoppingBasket} from "@material-ui/icons";

export const Header = () => {
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
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <ShoppingBasket/>
                                </Badge>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

