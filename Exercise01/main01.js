let product = {
    name: "headphones",
    price: 120,
    doesItWork: false,
    previousOwner: "Bob"
}

for (let i in product) {
    console.log(`${i}: ${product[i]}`);
}

delete product.previousOwner
product.doesItWork = true

console.log(product);

if (product.price> 100) {
    product.dicountPercentage = 10
    product.price = product.price - product.price*.1
}



console.log(product);

