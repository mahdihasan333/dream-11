const Footer = () => {
  return (
    <div className="bg-[#06091a] pt-52 pb-8 text-white">
      <div className="w-11/12 mx-auto border bg-[url('../assets/bg-shadow.png')] bg-no-repeat bg-cover bg-center">

      </div>
      <div className="flex justify-center items-center mb-10">
        <img
          
          src="../assets/logo-footer.png"
          alt="logo"
        />
      </div>
      <footer className="w-11/12 mx-auto grid pb-10 gap-10 grid-cols-1 md:grid-cols-3">
        <div className="space-y-3">
          <h6 className="">About Us</h6>
          <p className="w-full md:w-4/6 ">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div className="space-y-3">
          <h6 className="">Quick Links</h6>
          <ul className="ml-5 space-y-3 list-disc">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <form className="space-y-3">
          <h6 className="">Subscribe</h6>
          <p>Subscribe to our newsletter for the latest updates.</p>

          <div className="join">
            <input
              type="email"
              placeholder="Enter your email"
              className="join-item outline-none text-black"
            />
            <button className="btn bg-yellow-600 join-item border-none">
              Subscribe
            </button>
          </div>
        </form>
      </footer>
      <hr />
      <div className="footer text-sm text-white footer-center pt-8">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All Company All Rights
            Reserved
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
