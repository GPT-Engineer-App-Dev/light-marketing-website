const About = () => {
  return (
    <div className="container mx-auto py-16">
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
    </div>
  );
};

export default About;