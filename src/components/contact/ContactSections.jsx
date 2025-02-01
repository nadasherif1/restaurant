export default function ContactSections() {
  return (
    <div className="bg-white pt-20 px-4 md:px-8 lg:px-[66px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-y-12 lg:gap-[100px] text-center lg:text-left">
        <div className="text-center mb-8 lg:mr-[50px] max-w-5xl mx-auto">
          <p className="text-red-600 font-bold text-sm">- NEED A PRIVATE SPACE? -</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            RESERVE A TABLE?
            <br />
            <span className="underline">LET'S TALK US.</span>
          </h2>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">WRITE US</h3>
          <p className="text-gray-500">info@yourdomain.com</p>
          <p className="text-gray-500">hr@yourdomain.com</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">FOLLOW US</h3>
          <p className="text-gray-500">📘 Crafto in Facebook</p>
          <p className="text-gray-500">🐦 Crafto in Twitter</p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">CALL US</h3>
          <p className="text-gray-500">+1 234 567 8910</p>
          <p className="text-gray-500">+1 567 234 8910</p>
        </div>
      </div>
    </div>
  );
}
