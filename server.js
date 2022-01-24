module.exports = () => {
    const data = {
        products: []
    }

    for (let i = 0; i < 1000; i++) {
        data.products.push({
            id: i + 1,
            price: i % 2 == 0 ? ( i / 2 + 1 ) : ( i * 3 - i / 1.5 ),
            title: `Camiseta ${i + 1}`
        })
    }

    return data
}