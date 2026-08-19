const axios = require("axios");
const fs = require("fs");

axios.get("https://fakestoreapi.com/products")
    .then(response => {
        const products = response.data;

        const db = {
            products: products
        };

        fs.writeFileSync("db.json", JSON.stringify(db, null, 2));

        console.log("Products added successfully!");
    })
    .catch(error => {
        console.log("Error:", error.message);
    });