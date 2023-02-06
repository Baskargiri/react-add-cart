import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { TicTak } from "./TicTak";
import { Routes, Route, Link } from "react-router-dom";
import { Gameout } from "./Gameout";

function App() {
  return <Nav_bar />;
}

export default App;

function Nav_bar() {
  const [addcart, setAddCart] = useState(0);
  return (
    <div className="nav">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Shopify
            </Typography>
            <Button color="inherit">
              <ShoppingCartIcon></ShoppingCartIcon> Add Cart {addcart}{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Input addcart={addcart} setAddCart={setAddCart} />
    </div>
  );
}

function Input({ addcart, setAddCart }) {
  const data = [
    {
      img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/f/c/v/-original-imagehzbaw2wugme.jpeg?q=70",
      name: "SAMSUNG F23",
      rate: "16,999",
      rating: "⭐⭐⭐",
    },
    {
      img: "https://rukminim1.flixcart.com/image/312/312/kpmy8i80/mobile/x/q/n/m3-pro-5g-mzb0956in-poco-original-imag3th5e4thsxjt.jpeg?q=70",
      name: "POCO M3",
      rate: "17,999",
      rating: "⭐⭐⭐",
    },
    {
      img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
      name: "APPLE IPHONE 14",
      rate: "66,999",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/q/e/-original-imagk4nz6xgtexam.jpeg?q=70",
      name: "REDMI 10",
      rate: "14,999",
      rating: "⭐⭐",
    },
    {
      img: "https://rukminim1.flixcart.com/image/312/312/l29c9e80/mobile/l/g/m/-original-imagdnefhnhztahe.jpeg?q=70",
      name: "MOTOROLA G52",
      rate: "12,999",
      rating: "⭐⭐",
    },
    {
      img: "https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/x/b/y/-original-imagdznhnzmzfbwx.jpeg?q=70",
      name: "VIVO T1",
      rate: "14,499",
      rating: "⭐⭐⭐",
    },
    {
      img: "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
      name: "APPLE IPHONE 13",
      rate: "61,999",
      rating: "⭐⭐⭐⭐",
    },
  ];
  return (
    <div className="body">
      {data.map((e) => (
        <Cards1 info={e} addcart={addcart} setAddCart={setAddCart} />
      ))}
      ;
    </div>
  );
}

function Cards1({ info, addcart, setAddCart }) {
  return (
    <div className="cards">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 345 }} image={info.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.name}
          </Typography>
          <div className="b1">
            <h4>₹{info.rate}</h4>
            <p>{info.rating}</p>
          </div>
        </CardContent>
        <CardActions className="btn">
          <Button onClick={() => setAddCart(addcart + 1)} size="large">
            Add TO Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
