export default function Navigation() {
  return (
    <>
      <nav className="fixed inset-x-0 top-0 bg-white py-[30px] z-50">
        <div className="container flex items-center justify-between">
          <img src="/logo.svg" alt="" />
          <ul className="flex items-center space-x-10">
            {["Home", "Features", "Showcases", "Pricing", "Testimonial"].map(
              (item) => (
                <li className={`${item === "Home" ? "font-bold text-black" : null} hover:text-black`}>
                  {item}
                </li>
              ),
            )}
          </ul>
          <button className="btn bg-black">Sign In</button>
        </div>
      </nav>
    </>
  );
}
