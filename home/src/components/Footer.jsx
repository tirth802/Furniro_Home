import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Furniro</h3>
            <p className="text-gray-500">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Links</h4>
            <ul className="space-y-3 text-gray-500">
              {['Home', 'Shop', 'About', 'Contact'].map(link => (
                <li key={link}><a href="#" className="hover:text-orange-500">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Help</h4>
            <ul className="space-y-3 text-gray-500">
              {['Payment Options', 'Returns', 'Privacy Policies'].map(link => (
                <li key={link}><a href="#" className="hover:text-orange-500">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-4">Newsletter</h4>
            <form className="flex">
              <input type="email" placeholder="Enter Your Email Address" className="border-b border-gray-400 p-2 focus:outline-none focus:border-orange-500" />
              <button type="submit" className="border-b border-gray-400 p-2 font-semibold hover:border-orange-500">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500">2023 Furniro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
