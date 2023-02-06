import React, {useEffect, useState} from 'react';
import {getDocs, collection, addDoc} from "firebase/firestore";
import {db} from './firebase'
import './App.css';
import { Card,  CardContent, CardMedia, IconButton, Typography} from "@material-ui/core";
import {AddBoxOutlined} from "@material-ui/icons";

type ItemProductType = {
    id?: string
    image?:string
    title?: string
    price?: string
}



function App() {
    const [product, setProduct] = useState<ItemProductType[]>([])

     useEffect(() => {
         db.collection('products')
             .get()
             .then(snap=>{
                 const product:ItemProductType[] = snap.docs.map(doc=>({
                     id:doc.id,
                     ...doc.data()
                 }))
                 console.log(product)
                   setProduct(product)
             })
             .catch(err=>{
                 console.log('Error getting documents: ' ,err)
             })

     }, [])


    return (
        <div>
            {product.map((p) =>
            <Card sx={{ maxWidth: 200 }} key={p.id} >
                <CardContent>
                    <CardMedia
                        component="img"
                        height="150"
                        width="150"
                        image={p.image}
                        alt={p.title}
                    />
                    <Typography variant="h6" component="div">
                        {p.title}
                    </Typography>
                    <Typography variant="h5" display="inline-flex" >
                        {p.price}$<br/>
                        <IconButton component={"span"}>
                            <AddBoxOutlined fontSize={"medium"}  />
                        </IconButton>
                    </Typography>

                </CardContent>

            </Card>

                )}
        </div>
    );
}

export default App;
