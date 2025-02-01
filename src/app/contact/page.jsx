import ContactSections from "@/components/contact/ContactSections";
export default function ContactSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-200 px-4 sm:px-6 lg:px-12 py-8 lg:py-16 gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-md overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093766!2d144.9537353153159!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774e5f6d62fa0!2sMelbourne!5e0!3m2!1sen!2sau!4v1614201289415!5m2!1sen!2sau"
            width="100%"
            height="100%"
            className="absolute inset-0 border-0"
            loading="lazy"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 lg:p-12 rounded-md shadow-lg">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-black text-center lg:text-left">
            How We Can Help Your Food?
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Your name*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
              />
              <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">😊</span>
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Your email address*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm"
              />
              <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400">📧</span>
            </div>

            <div className="relative">
              <textarea
                placeholder="Your message"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-sm h-32 resize-none"
              ></textarea>
              <span className="absolute top-4 right-4 text-gray-400">💬</span>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-3 rounded-md shadow-md hover:bg-orange-600 transition font-semibold"
            >
              Send a Message
            </button>
          </form>
        </div>
      </div>
      <ContactSections />
    </>
  );
}
