import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="container mx-auto py-16">
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
    </div>
  );
};

export default Contact;