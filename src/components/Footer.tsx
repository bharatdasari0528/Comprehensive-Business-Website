import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export default function Footer() {
  const { setCurrentPage } = useNavigation();

  const handleNavigate = (path: 'home' | 'about' | 'services' | 'contact') => {
    setCurrentPage(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Briefcase className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white"> BharatITSolutions</span>
            </div>
            <p className="text-sm mb-4">
              Delivering innovative solutions that drive business growth and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/dasari-yagneswar-bharat-372a0a254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/bharath_dasari__?igsh=MWhmbm04em15M3lmdg==" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleNavigate('home')} className="hover:text-blue-500 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('about')} className="hover:text-blue-500 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('services')} className="hover:text-blue-500 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('contact')} className="hover:text-blue-500 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Web Development</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Mobile Apps</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Cloud Solutions</li>
              <li className="hover:text-blue-500 transition-colors cursor-pointer">Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm"> 2000+ IT Business Solutions , Vizag City, Dwaraka Nagar, Madhurawada, and Siripuram</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">91+ (630) 591-7919</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-sm">contact@bharatitsolution.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} BharatITSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
