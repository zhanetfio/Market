import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardMedia, IconButton, Typography} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import {db} from "../firebase";


type ItemProductType = {
    id?: string
    image?: string
    title?: string
    price?: number
}

export const Products = () => {

    const [products, setProducts] = useState<ItemProductType[]>([])

    useEffect(() => {
        db.collection('products')
            .get()
            .then(snap => {
                const product: ItemProductType[] = snap.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(product)
                setProducts(product)
            })
            .catch(err => {
                console.log('Error getting documents: ', err)
            })

    }, [])
    return (
        <div>
            <Box style={{margin:'30px auto'}}// className={style.contentWrapper}
                 sx={
                     {
                         flexWrap: 'wrap',
                         display: 'flex',
                         justifyContent: 'space-around',

                     }}>
                {products.map((p) =>
                    <Card sx={{maxWidth: 250, margin:'5px'}} key={p.id}>
                        <CardContent>
                            <CardMedia
                                component="img"
                                height="200"
                                width="200"
                                image={p.image}
                                alt={p.title}
                            />
                            <Typography variant="h6" component="div">
                                {p.title}
                            </Typography>
                            <Box sx={{display:"flex",justifyContent:"space-between"}}> {/*//alightItems:"center",alignContent:"flex-end"*/}
                                <Typography variant="h5" display="inline-flex">
                                    {p.price}$<br/>
                                </Typography>
                                <IconButton component={"span"}>
                                    <AddShoppingCart fontSize={"medium"} color="primary"/>
                                </IconButton>
                            </Box>
                        </CardContent>

                    </Card>
                )}
            </Box>
        </div>
    );
};

