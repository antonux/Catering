import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-9 mt-auto bottom-0 font-roboto z-50">
      <div className="font-sans container mx-auto mb-auto text-center py-5 text-sm">
        <p>&copy; {new Date().getFullYear()} GPU Development, LLC All Rights Reserved.</p>
        <div className="social-links mt-2">
          <a href="https://facebook.com" className="mx-2 text-white hover:text-blue-500" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" className="mx-2 text-white hover:text-blue-400" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://instagram.com" className="mx-2 text-white hover:text-pink-500" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;