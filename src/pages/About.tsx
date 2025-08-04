import React from 'react';
import { Users, Award, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

export default function About() {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Precision",
      description: "We deliver exactly the data you need with unmatched accuracy and attention to detail."
    },
    {
      icon: <Users className="h-12 w-12 text-green-600" />,
      title: "Partnership",
      description: "We work closely with our clients to understand their unique requirements and challenges."
    },
    {
      icon: <Award className="h-12 w-12 text-purple-600" />,
      title: "Excellence",
      description: "Our commitment to quality ensures every project meets the highest professional standards."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-orange-600" />,
      title: "Innovation",
      description: "We leverage cutting-edge technology and creative solutions for complex data challenges."
    }
  ];

  const capabilities = [
    "Advanced web scraping algorithms",
    "Large-scale data processing",
    "Custom API development",
    "Real-time data extraction",
    "Data cleaning and validation",
    "Automated monitoring systems",
    "Multi-format data delivery",
    "Compliance with data regulations"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">About DataSpider Tech</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We are a leading provider of professional web scraping and data extraction services, 
                helping businesses unlock the power of web data to drive informed decision-making.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-teal-300 mb-2">{stat.number}</div>
                    <div className="text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Data Analysis" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At DataSpider Tech, we believe that data is the key to unlocking business potential. 
                Our mission is to make web data accessible, reliable, and actionable for businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine technical expertise with deep industry knowledge to deliver solutions that 
                not only meet but exceed our clients' expectations. Every project is an opportunity 
                to help our clients gain a competitive edge through superior data insights.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Ethical and compliant data extraction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Custom solutions for unique requirements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Ongoing support and maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Technical Capabilities
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We leverage the latest technologies and methodologies to deliver robust, 
                scalable web scraping solutions that can handle any challenge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Technology Infrastructure" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A dedicated team of data engineers, software developers, and project managers 
              committed to delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Data Engineers</h3>
              <p className="text-gray-600">Specialists in large-scale data extraction and processing systems.</p>
            </div>
            <div className="text-center p-6">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Software Developers</h3>
              <p className="text-gray-600">Expert programmers building robust and scalable scraping solutions.</p>
            </div>
            <div className="text-center p-6">
              <img 
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Team Member" 
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Managers</h3>
              <p className="text-gray-600">Ensuring smooth project delivery and exceptional client communication.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}