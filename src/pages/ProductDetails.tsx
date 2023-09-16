// import React from 'react'
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import "./ProductDetails.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.log(err);
      });
    // console.log('testing');
    // // setProducts([',,']);
  }, []);

  return (
    <>
      <div className="detail">
        <div>
          <h1>ProductDetails</h1>
        </div>
        {/* {console.log(product)} */}
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={product.thumbnail}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
              >
                Category: {product.category}
              </Typography>
              <p></p>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <p></p>
              <Typography variant="body2" fontWeight="bold">
                Price: {product.price}
              </Typography>
              <Typography variant="body2" fontWeight="bold" color="red">
                Discounted Price:{" "}
                {product.price -
                  product.price * 0.01 * product.discountPercentage}
              </Typography>
              <p></p>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
              >
                Ratings: {product.rating}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </>
  );
};
