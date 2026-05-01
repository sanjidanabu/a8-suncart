import { Card } from "@heroui/react";



const ProductDetailsPage = async({params}) => {
    const {id} = await params;
    // console.log(id)
     const res = await fetch ('https://a8-suncart.vercel.app/products.json')
    const products = await res.json()

    const product = products.find(p => p.id == id)
    return (
        <div>
            <h2 className=" text-2xl font-bold my-5">Product Details</h2>
            
            <Card className="border rounded-xl mt-5">
                
                            <div className="flex flex-col items-center">
                                <h1 className="font-bold">{product.name}</h1>
                                <p>Brand Name : {product.brand}</p>
                                <p>Stock : {product.stock}</p>
                                <p>price: ${product.price}</p>
                                <p>Description: {product.description}</p>
                            
                            </div>

            </Card>

        </div>
    );
};

export default ProductDetailsPage;