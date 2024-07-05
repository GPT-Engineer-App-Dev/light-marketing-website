import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ProductsSection />
      <AboutUsSection />
      <ContactSection />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative w-full h-[500px] bg-gray-800 text-white">
    <img src="/placeholder.svg" alt="placeholder" className="absolute inset-0 w-full h-full object-cover mx-auto" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
      <h1 className="text-5xl font-bold">Illuminate Your World</h1>
      <p className="text-xl">High-quality lighting solutions for every space.</p>
      <Button variant="primary" size="lg">Shop Now</Button>
    </div>
  </section>
);

const ProductsSection = () => (
  <section className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((product) => (
        <div key={product} className="border p-4 rounded-lg">
          <img src="/placeholder.svg" alt="placeholder" className="w-full h-48 object-cover mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Product Name</h3>
          <p className="text-gray-600 mb-4">Short description of the product.</p>
          <Button variant="secondary">Learn More</Button>
        </div>
      ))}
    </div>
  </section>
);

const AboutUsSection = () => (
  <section className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
    <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
      <img src="/placeholder.svg" alt="placeholder" className="w-full md:w-1/2 h-64 object-cover mx-auto" />
      <div className="md:w-1/2">
        <p className="text-gray-600 mb-4">
          Our mission is to provide high-quality lighting solutions that enhance the beauty and functionality of any space. We are committed to innovation, sustainability, and customer satisfaction.
        </p>
        <p className="text-gray-600 mb-4">
          Our vision is to be a leading provider of lighting solutions, known for our exceptional products and services. We value integrity, excellence, and teamwork.
        </p>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="container mx-auto py-16">
    <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
    <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="md:w-1/2">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="w-full border rounded-lg p-2" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" className="w-full border rounded-lg p-2" rows="4"></textarea>
          </div>
          <Button variant="primary" type="submit">Submit</Button>
        </form>
      </div>
      <div className="md:w-1/2 space-y-4">
        <p className="text-gray-600">
          <strong>Address:</strong> 123 Lighting Street, Bright City, Lightland
        </p>
        <p className="text-gray-600">
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> contact@lightingbusiness.com
        </p>
      </div>
    </div>
  </section>
);

export default Index;