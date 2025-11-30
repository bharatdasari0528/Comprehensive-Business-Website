import { Code, Smartphone, Cloud, BarChart, Palette, ShoppingCart, Lock, Headphones, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';

export default function Services() {
  const { setCurrentPage } = useNavigation();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'web-dev',
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies.',
      features: [
        'Responsive, mobile-first design',
        'Modern frameworks (React, Vue, Angular)',
        'Progressive Web Apps (PWA)',
        'API integration and development',
        'Performance optimization',
        'SEO best practices',
      ],
      color: 'blue',
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: [
        'Native iOS and Android apps',
        'Cross-platform solutions (React Native, Flutter)',
        'App Store optimization',
        'Push notifications',
        'Offline functionality',
        'App maintenance and updates',
      ],
      color: 'green',
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      features: [
        'AWS, Azure, Google Cloud',
        'Cloud migration strategy',
        'Infrastructure as Code',
        'Auto-scaling and load balancing',
        'Disaster recovery planning',
        '24/7 monitoring and support',
      ],
      color: 'purple',
    },
    {
      id: 'analytics',
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Turn data into actionable insights with advanced analytics.',
      features: [
        'Business intelligence dashboards',
        'Predictive analytics',
        'Data warehousing',
        'Real-time reporting',
        'Machine learning integration',
        'Custom analytics solutions',
      ],
      color: 'orange',
    },
    {
      id: 'design',
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered designs that drive engagement.',
      features: [
        'User research and testing',
        'Wireframing and prototyping',
        'Brand identity design',
        'Design systems',
        'Accessibility compliance',
        'Interactive animations',
      ],
      color: 'pink',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Complete e-commerce solutions to grow your online business.',
      features: [
        'Custom online stores',
        'Payment gateway integration',
        'Inventory management',
        'Shopping cart optimization',
        'Multi-currency support',
        'Marketing automation',
      ],
      color: 'teal',
    },
    {
      id: 'security',
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Protect your business with enterprise-grade security.',
      features: [
        'Security audits and testing',
        'Penetration testing',
        'Compliance (GDPR, HIPAA, SOC 2)',
        'Threat detection and response',
        'Security training',
        'Incident response planning',
      ],
      color: 'red',
    },
    {
      id: 'consulting',
      icon: Headphones,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to drive digital transformation.',
      features: [
        'Digital transformation strategy',
        'Technology roadmap planning',
        'Process optimization',
        'Vendor evaluation',
        'Change management',
        'Ongoing advisory services',
      ],
      color: 'cyan',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; hover: string; light: string }> = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', hover: 'hover:bg-blue-700', light: 'bg-blue-100' },
      green: { bg: 'bg-green-600', text: 'text-green-600', hover: 'hover:bg-green-700', light: 'bg-green-100' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', hover: 'hover:bg-purple-700', light: 'bg-purple-100' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', hover: 'hover:bg-orange-700', light: 'bg-orange-100' },
      pink: { bg: 'bg-pink-600', text: 'text-pink-600', hover: 'hover:bg-pink-700', light: 'bg-pink-100' },
      teal: { bg: 'bg-teal-600', text: 'text-teal-600', hover: 'hover:bg-teal-700', light: 'bg-teal-100' },
      red: { bg: 'bg-red-600', text: 'text-red-600', hover: 'hover:bg-red-700', light: 'bg-red-100' },
      cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', hover: 'hover:bg-cyan-700', light: 'bg-cyan-100' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to drive your business forward.
            From concept to deployment, we're your trusted partner.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const colors = getColorClasses(service.color);
              const isSelected = selectedService === service.id;

              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer ${
                    isSelected ? 'ring-2 ring-offset-2' : ''
                  } ring-${service.color}-600`}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                >
                  <div className="p-6">
                    <div className={`${colors.light} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                      <service.icon className={`h-7 w-7 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <button className={`text-sm font-semibold ${colors.text} flex items-center hover:opacity-80 transition-opacity`}>
                      {isSelected ? 'Show less' : 'Learn more'}
                      <ArrowRight className={`ml-1 h-4 w-4 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  {isSelected && (
                    <div className="border-t border-gray-100 p-6 bg-gray-50">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <div className={`${colors.bg} w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentPage('contact');
                        }}
                        className={`mt-4 w-full ${colors.bg} text-white px-4 py-2 rounded-lg ${colors.hover} transition-colors text-sm font-medium`}
                      >
                        Get Started
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that delivers results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We start by understanding your business, goals, and challenges.',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop a comprehensive plan tailored to your specific needs.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Our expert team brings the strategy to life with precision.',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing optimization and support to ensure continued success.',
              },
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="text-5xl font-bold text-blue-600 mb-4 opacity-20">{phase.step}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals.
              Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all font-semibold"
              >
                Contact Us
              </button>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-all font-semibold border-2 border-blue-500">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Industry-leading professionals with years of experience in their respective fields.',
              },
              {
                title: 'Proven Results',
                description: 'Track record of delivering successful projects that exceed client expectations.',
              },
              {
                title: 'Ongoing Support',
                description: 'Comprehensive support and maintenance to ensure long-term success.',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
