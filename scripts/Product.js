export const Product = (productObject, typeObject) => {
    return `
        <section class="product">
            <header>
                <h2 class="red">${productObject.name}</h2>
            </header>
            <div>
                Price $${productObject.price}
            </div>
            <div>
                In category ${typeObject.name}
            </div>
        </section>
    `
}

