import React from 'react';
import { Globe, ShoppingCart, TrendingUp, Building, Users, BarChart3, Clock, Shield, Zap } from 'lucide-react';

interface ServicesProps {
  onPageChange: (page: string) => void;
}

export default function Services({ onPageChange }: ServicesProps) {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Web Data Extraction",
      description: "Comprehensive web scraping solutions for any website or platform.",
      features: ["Custom scraping scripts", "Real-time data extraction", "API integration", "Data validation"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-green-600" />,
      title: "E-commerce Monitoring",
      description: "Track prices, inventory, and competitor data across multiple platforms.",
      features: ["Price monitoring", "Inventory tracking", "Product catalogs", "Competitor analysis"]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-purple-600" />,
      title: "Market Research",
      description: "Gather comprehensive market intelligence and consumer insights.",
      features: ["Market trends", "Consumer behavior", "Industry analysis", "Competitive intelligence"]
    },
    {
      icon: <Building className="h-12 w-12 text-orange-600" />,
      title: "Real Estate Data",
      description: "Extract property listings, prices, and market data from real estate sites.",
      features: ["Property listings", "Market analysis", "Price trends", "Location data"]
    },
    {
      icon: <Users className="h-12 w-12 text-teal-600" />,
      title: "Social Media Analytics",
      description: "Monitor social platforms for brand mentions, sentiment, and trends.",
      features: ["Social monitoring", "Sentiment analysis", "Trend tracking", "Engagement metrics"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-red-600" />,
      title: "Business Intelligence",
      description: "Transform raw web data into actionable business insights.",
      features: ["Data analysis", "Custom dashboards", "Reporting tools", "Predictive analytics"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description: "We understand your data requirements and project goals."
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a custom scraping strategy tailored to your needs."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Build and deploy robust scraping solutions."
    },
    {
      step: "04",
      title: "Delivery",
      description: "Provide clean, structured data in your preferred format."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Save Time",
      description: "Automate data collection processes that would take hours manually."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Reliable & Compliant",
      description: "Ethical scraping practices with full legal compliance."
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Scalable Solutions",
      description: "From small projects to enterprise-level data extraction."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Data Extraction Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web scraping solutions designed to meet your specific business requirements. 
            From simple data collection to complex enterprise projects.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional web scraping services across multiple industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to deliver high-quality data extraction solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our professional web scraping services are designed to give you a competitive advantage 
                through reliable, accurate, and timely data extraction.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Data Processing" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Contact us today to discuss your data extraction needs and get a custom quote for your project.
          </p>
          <button 
            onClick={() => onPageChange('contact')}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  );
}