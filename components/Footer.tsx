
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Nkatanri</h3>
            <p>Premium Agricultural Exports Worldwide.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#global-supply" className="hover:text-white">Global Supply</a></li>
              <li className="mb-2"><a href="#quality-lab" className="hover:text-white">Quality Lab</a></li>
              <li className="mb-2"><a href="#track-shipment" className="hover:text-white">Track Shipment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-emerald-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.067.087.616 1.92 2.388 3.3 4.491 3.349-1.793 1.407-4.062 2.245-6.516 2.245-.423 0-.84-.025-1.254-.074 2.324 1.493 5.076 2.364 8.04 2.364 9.645 0 14.938-7.994 14.938-14.938 0-.227-.005-.453-.014-.678.98-.707 1.828-1.59 2.5-2.592z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Nkatanri. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
