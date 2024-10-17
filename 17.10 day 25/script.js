// using promise
// fakestreapi

const mypromise = new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/users")
    .then((strdata) => strdata.json())
    .then((jsondata) => resolve(jsondata)).catch((err)=>console.log(err)
    )
});

async function GetProducts() {
    try {
        console.log("Starting...");
        const products = await mypromise;
        console.log(products);
        console.log("..........ending");
    } catch (error) {
        console.log(error)
    }
}

GetProducts();

