const Footer = () => {
  return (
    <div className="text-center bg-white">
      <h3 className="text-black pt-7 text-center text-3xl font-bold">Gadget Heaven</h3>
      <p className="text-gray-700 pt-2">Leading the way in cutting-edge technology and innovation.</p>
      <div className="divider mx-auto w-10/12"></div>
      <footer className="mx-auto w-6/12 flex flex-col lg:flex-row justify-between px-10 pt-2 pb-10">
        <nav className="flex flex-col items-center">
          <h6 className="text-black font-semibold text-xl">Services</h6>
          <a className="text-gray-700">Product Support</a>
          <a className="text-gray-700">Order Tracking</a>
          <a className="text-gray-700">Shipping & Delivery</a>
          <a className="text-gray-700">Returns</a>
        </nav>
        <nav className="flex flex-col items-center my-6 lg:my-0">
          <h6 className="text-black font-semibold text-xl">Company</h6>
          <a className="text-gray-700">About us</a>
          <a className="text-gray-700">Contact</a>
          <a className="text-gray-700">Careers</a>
          
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="text-black font-semibold text-xl">Legal</h6>
          <a className="text-gray-700">Terms of use</a>
          <a className="text-gray-700">Privacy policy</a>
          <a className="text-gray-700">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
