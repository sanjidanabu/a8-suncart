import PopularCard from '@/components/PopularCard';


const AllProducts = async() => {
    const res = await fetch ('https://a8-suncart.vercel.app/products.json')
    const products = await res.json()
    // console.log(products)
    return (
        <div>
            <h1 className='text-2xl font-bold m-4'>All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                   {products.map(p => <PopularCard key={p.id} p={p} /> )}
                </div>
        </div>
    );
};

export default AllProducts;