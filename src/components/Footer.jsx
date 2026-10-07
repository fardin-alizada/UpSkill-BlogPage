import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Column 1: About */}
          <div>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              Empowering Afghan Youth with Skills for a Digital Future <span className="font-semibold">• Powered by Upskill</span>
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 mb-6">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5c-.563-.074-2.326-.236-4.479-.236-4.414 0-7.48 2.692-7.48 7.635V8z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
            
            {/* Let's Connect */}
            <p className="text-gray-700 font-semibold text-sm mb-4">Let's Connect</p>
            
            {/* QR Code */}
            <div className="w-24 h-24 bg-white p-1.5 rounded border border-gray-300">
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='white'/%3E%3C/svg%3E" alt="QR Code" className="w-full h-full" />
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-gray-800 font-semibold text-base sm:text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Tech Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Online Courses</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Scholarship</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Student Projects</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Corporate Training</a></li>
            </ul>
          </div>

          {/* Column 3: Helpful Links */}
          <div>
            <h3 className="text-gray-800 font-semibold text-base sm:text-lg mb-6">Helpful Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Our Instructors</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Information */}
          <div>
            <h3 className="text-gray-800 font-semibold text-base sm:text-lg mb-6">Information</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 text-sm sm:text-base transition-colors">Contact Us</a></li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 text-lg mt-0.5">📍</span>
                <span className="text-gray-600 text-sm sm:text-base">Kabul, Afghanistan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-500 text-lg mt-0.5">📞</span>
                <span className="text-gray-600 text-sm sm:text-base">+93 78 078 5151</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-6 text-center sm:text-left">
          <a href="#" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors">Privacy & Policy</a>
          <a href="#" className="text-gray-500 hover:text-gray-700 text-xs sm:text-sm transition-colors">Terms & Condition</a>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-right">
          © 2025 Upskill Kabul. All rights reserved.<br className="sm:hidden" /> Powered by Upskill
        </p>
      </div>
    </footer>
  );
}