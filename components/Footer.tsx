import Image from "next/image";
import Link from "next/link";

const navLinks = [
      { name: "Home", href: "/" },
      { name: "Menu", href: "/menu" },
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
];

const Footer = () => {
      return (
            <footer className="border-t border-black/10 bg-white mt-16">
                  <div className="w-[90vw] mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Brand */}
                        <div className="flex flex-col gap-4">
                              <h1 className="serif text-3xl font-bold text-gray-900">
                                    Spice & Ember
                              </h1>
                              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                    Where every bite tells a story. Crafted with
                                    passion, served with warmth — right in the
                                    heart of the city.
                              </p>
                              {/* Socials */}
                              <div className="flex gap-4 mt-2">
                                    <a
                                          href="#"
                                          className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:bg-[#E85D04] hover:text-white hover:border-[#E85D04] transition-all duration-300"
                                    >
                                          <Image
                                                src="https://www.svgrepo.com/show/424911/instagram-logo-facebook-2.svg"
                                                alt=""
                                                height={20}
                                                width={20}
                                          />
                                    </a>
                                    <a
                                          href="#"
                                          className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:bg-[#E85D04] hover:text-white hover:border-[#E85D04] transition-all duration-300"
                                    >
                                          <Image
                                                src="https://www.svgrepo.com/show/521654/facebook.svg"
                                                alt=""
                                                height={20}
                                                width={20}
                                          />
                                    </a>
                                    <a
                                          href="#"
                                          className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-gray-600 hover:bg-[#E85D04] hover:text-white hover:border-[#E85D04] transition-all duration-300"
                                    >
                                          <Image
                                                src="https://www.svgrepo.com/show/521900/twitter.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                          />
                                    </a>
                              </div>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col gap-4">
                              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900">
                                    Quick Links
                              </h3>
                              <ul className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                          <li key={link.name}>
                                                <Link
                                                      href={link.href}
                                                      className="text-gray-500 text-sm hover:text-[#E85D04] transition-colors duration-300"
                                                >
                                                      {link.name}
                                                </Link>
                                          </li>
                                    ))}
                              </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-4">
                              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900">
                                    Visit Us
                              </h3>
                              <ul className="flex flex-col gap-3 text-gray-500 text-sm">
                                    <li>
                                          📍 123, Connaught Place, New Delhi,
                                          India
                                    </li>
                                    <li>📞 +91 98765 43210</li>
                                    <li>✉️ hello@spiceandember.com</li>
                                    <li>🕐 Mon – Sun: 11:00 AM – 11:00 PM</li>
                              </ul>
                        </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="border-t border-black/10 py-4 text-center text-xs text-gray-400">
                        © {new Date().getFullYear()} Spice & Ember. All rights
                        reserved.
                  </div>
            </footer>
      );
};

export default Footer;
