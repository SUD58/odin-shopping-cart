export function Footer() {
  return (
    <footer className="sticky bottom-0 -z-20 snap-end bg-gray-800 p-16 text-white">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-xl font-semibold">Quick Links</h4>
          <ul>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/faq" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-400 hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h4 className="mb-4 text-xl font-semibold">Follow Us</h4>
          <div className="flex justify-center space-x-6 md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center md:text-right">
          <h4 className="mb-4 text-xl font-semibold">Stay Updated</h4>
          <p className="mb-4 text-gray-400">
            Subscribe to our newsletter for the latest deals and updates.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-60 rounded-l-md p-2 text-black"
              required
            />
            <button
              type="submit"
              className="rounded-r-md bg-green-500 p-2 font-semibold text-white hover:bg-green-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2025 ShopEase. All Rights Reserved.</p>
        Created by{" "}
        <a
          href="https://github.com/SUD58/"
          className="text-blue-500 underline visited:text-purple-500 hover:no-underline"
          target="_blank"
        >
          Suhrud Shringarputale
        </a>{" "}
        as part of{" "}
        <a
          href="https://theodinproject.com"
          className="text-blue-500 underline visited:text-purple-500 hover:no-underline"
          target="_blank"
        >
          The Odin Project
        </a>
      </div>
    </footer>
  );
}
