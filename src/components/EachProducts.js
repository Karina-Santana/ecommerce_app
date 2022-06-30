import { productsInfo } from '../productsInfo'

function EachProducts({ eachProducts, removeProduct }) {
    return (
        <section>
            {eachProducts && eachProducts.map((product, index) =>
                <div>
                    <p>Title</p>
                    <img
                        key={index}
                        src={productsInfo[product]}
                        onClick={() => removeProduct(index)}
                    />
                    <p>Price</p>

                    <p>Description</p>
                    <p>In stock</p>
                </div>

            )}
        </section>
    )
}

export default EachProducts