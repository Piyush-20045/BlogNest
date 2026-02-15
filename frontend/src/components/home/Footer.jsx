import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quicklinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Posts", href: "/posts" },
    { name: "Categories", href: "/posts" },
    { name: "Contact", href: "/about" },
  ];
  const categories = [
    { name: "Web Dev", href: "/posts?cat=Web Dev" },
    { name: "Technology", href: "/posts?cat=Technology" },
    { name: "Finance", href: "/posts?cat=Finance" },
    { name: "Fitness", href: "/posts?cat=Fitness" },
    { name: "Lifestyle", href: "/posts?cat=Lifestyle" },
  ];

  return (
    <footer className="mt-12 bg-gray-200 2xl:bg-gray-100 2xl:border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-1 text-2xl font-bold font-mono">
            <img src="logo.jpg" className="w-9 rounded-full" />
            BlogNest
          </h2>
          <p className="text-sm leading-relaxed">
            Your cozy corner of the internet for thoughtful writing and
            meaningful conversations.
          </p>
          <div className="flex space-x-4">
            <a
              target="_blank"
              href="https://x.com/Piyush9436"
              className=" hover:text-blue-600 transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a href="#" className=" hover:text-orange-700 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className=" hover:text-blue-900 transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:ml-8 space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="flex flex-col text-sm space-y-2">
            {quicklinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="w-fit hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="md:ml-4 space-y-4">
          <h3 className="text-lg font-semibold">Categories</h3>
          <div className="flex flex-col text-sm space-y-2">
            {categories.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="w-fit hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-2 ">
              <Mail size={16} />
              <span>info-blognest@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 ">
              <Phone size={16} />
              <span>(+91) 782295084</span>
            </div>
            <div className="flex items-start space-x-2 ">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>
                1234 Sadan Tower
                <br />
                Bandra, Mumbai - 022323
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-6 py-4 border-gray-400 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2025 BlogNest. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-xs md:text-sm">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
