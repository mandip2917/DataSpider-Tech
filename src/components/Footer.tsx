import React from 'react';
import { Database, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Database className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">DataSpider Tech</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional web scraping and data extraction services. We help businesses unlock valuable insights from web data.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Web Scraping</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Data Mining</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">API Development</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Data Analytics</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Our Process</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Case Studies</li>
              <li className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>maulikasathavara11@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91 7777935926</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Ahemdabad</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 DataSpider Tech. All rights reserved. | Professional Web Scraping Services
          </p>
        </div>
      </div>
    </footer>
  );
}