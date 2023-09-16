// import * as React from 'react';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
export default function MediaCard() {
  const [product, setProduct] = useState<any>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data) => setProduct(data.products))
      .catch((err) => {
        console.log(err);
      });
    // console.log('testing');
    // // setProducts([',,']);
  }, []);
  //////////////////////////////////////////////////////////////////////////////////////////////////
  const [footer, setFooter] = useState({
    show: false,
    discountPrice: 0,
    name: "",
  });

  const showFooter = (product) => {
    // if (footer === false) {
    //   setFooter((footer) => !footer); { show:boolean, discountedPrice: Produc*2}
    // }

    const price =
      product.price - product.price * 0.01 * product.discountPercentage;

    // const foot = [{ show:"false", discountedPrice:}]

    setFooter({
      show: footer.show === false ? !footer.show : footer.show,
      discountPrice: price,
      name: product.title,
    });
  };
  //////////////////////////////////////////////////////////////////////////////////////////////////

  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    // Pass the product ID as a URL parameter
    navigate(`/${productId}`);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////
  console.log(product);
  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"} padding={"2rem"}>
        {product.length > 0 && (
          <Grid container item spacing={2}>
            {product.map((product: any) => {
              return (
                <>
                  <Grid item xs={4} key={product.id}>
                    <Card
                      sx={{ maxWidth: 345, maxHeight: 565, minHeight: 549 }}
                      key={product.id}
                    >
                      <CardMedia
                        sx={{ height: 300, objectFit: "contain" }}
                        image={product.thumbnail}
                        title={product.title}
                        key={product.id}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.description}
                        </Typography>
                        <p></p>
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          fontSize="20px"
                        >
                          Price : ${product.price}
                        </Typography>
                        <Typography fontWeight="bold" color="red">
                          Discount : {product.discountPercentage}%
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => handleProductClick(product.id)}
                        >
                          View Details
                        </Button>
                        <Button
                          size="small"
                          onClick={() => showFooter(product)}
                        >
                          View Discount
                        </Button>
                      </CardActions>
                      {/* {footer.show && (
                        <div>
                          <h2>
                            Discounted Price is: $
                            {product.price -
                              0.01 * product.price * product.discountPercentage}
                          </h2>
                        </div>
                      )} */}
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
        )}
      </Stack>
      {footer.show && (
        <Footer name={footer.name} discount={footer.discountPrice} />
      )}
    </>
  );
}
