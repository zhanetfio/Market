import React from 'react';
import {ButtonBase, Grid, Paper, Typography} from "@material-ui/core";

export const Cart = () => {


    return (
        <div>
            <div style={{textAlign:'center'}}><h1>Your cart is empty</h1></div>
            <div>
                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 500,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase sx={{ width: 128, height: 128 }}>
                                <img alt="complex" src="" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>

                                    <Typography variant="body2" gutterBottom>
                                        Full resolution 1920x1080 • JPEG
                                    </Typography>

                                </Grid>
                                <Grid item>
                                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                        Remove
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" component="div">
                                    $19.00
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>

        </div>
    );
};


type ProductInCart={
    id:string
    image:string
    title:string
    price:number
    count:number
}
/*

const Product = () => {



    return (
        <div>




        </div>
    );
};*/
