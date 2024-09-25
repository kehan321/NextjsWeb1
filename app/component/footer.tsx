import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 relative overflow-hidden" style={{ backgroundImage: "url('https://tse4.mm.bing.net/th?id=OIP.H1x3sxaZW5F3l9WRCrxZkwHaE3&pid=Api&P=0&h=220')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-6">
          <p className="text-center text-sm mb-4">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <ul className="flex space-x-6 mb-4">
            <li>
              <Link href="/privacy" className="transition duration-300 hover:text-blue-400">
                Privacy Policy

              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition duration-300 hover:text-blue-400">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition duration-300 hover:text-blue-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
            
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 transition duration-300 hover:text-blue-400" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 transition duration-300 hover:text-blue-400" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 transition duration-300 hover:text-blue-400" />
          </Link>
        </div>
        <div className="text-center text-sm">
          <p>Follow us on social media for the latest updates.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
