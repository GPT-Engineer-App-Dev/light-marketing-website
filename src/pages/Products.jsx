const Products = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((product) => (
          <div key={product} className="border p-4 rounded-lg">
            <img src="/placeholder.svg" alt="placeholder" className="w-full h-48 object-cover mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 mb-4">Short description of the product.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;