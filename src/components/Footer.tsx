import { Mail, MapPin, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aspire Bridge</h3>
            <p className="text-sm opacity-90">
              Empowering global businesses with smart outsourcing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline opacity-90 hover:opacity-100">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline opacity-90 hover:opacity-100">
                  About Us
                </a>
              </li>
              <li>
                <a href="/healthcare-bpo" className="hover:underline opacity-90 hover:opacity-100">
                  Healthcare BPO
                </a>
              </li>
              <li>
                <a href="/call-center" className="hover:underline opacity-90 hover:opacity-100">
                  Call Center Services
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Call Center Support</li>
              <li>Customer Support</li>
              <li>Healthcare BPO</li>
              <li>Medical Data Entry</li>
              <li>Live Chat Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Ramamurthy Nagar, Bangalore – 560016</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@aspirebridge.info" className="hover:underline opacity-90 hover:opacity-100">
                  info@aspirebridge.info
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+919345652616" className="hover:underline opacity-90 hover:opacity-100">
                  +91 9345652616
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={18} className="flex-shrink-0" />
                <a href="http://www.aspirebridge.info" target="_blank" rel="noopener noreferrer" className="hover:underline opacity-90 hover:opacity-100">
                  www.aspirebridge.info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>© {new Date().getFullYear()} Aspire Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
