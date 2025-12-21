import { Layout, Palette, Server, Sparkles, Globe, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Layout size={48} />,
      title: 'Responsive Web Design',
      description: 'Create beautiful, fluid layouts that work perfectly on all devices using CSS Grid, Flexbox, and modern responsive techniques.',
      features: ['Mobile-First Approach', 'Cross-Browser Compatible', 'Fluid Typography', 'Breakpoint Optimization']
    },
    {
      id: 2,
      icon: <Sparkles size={48} />,
      title: 'React Development',
      description: 'Build dynamic, interactive user interfaces with React 18, hooks, and modern state management patterns.',
      features: ['Component Architecture', 'State Management', 'Custom Hooks', 'Performance Optimization']
    },
    {
      id: 3,
      icon: <Palette size={48} />,
      title: 'UI/UX Design Implementation',
      description: 'Transform designs into pixel-perfect, accessible interfaces with attention to detail and user experience.',
      features: ['Design Systems', 'Accessibility (WCAG)', 'Animations & Transitions', 'Dark/Light Themes']
    },
    {
      id: 4,
      icon: <Server size={48} />,
      title: 'API Integration',
      description: 'Connect your frontend to backend services with modern async JavaScript and RESTful API patterns.',
      features: ['REST APIs', 'Async/Await', 'Error Handling', 'Data Caching']
    },
    {
      id: 5,
      icon: <Globe size={48} />,
      title: 'Web Performance',
      description: 'Optimize your applications for speed with code splitting, lazy loading, and performance best practices.',
      features: ['Code Splitting', 'Image Optimization', 'Bundle Analysis', 'Core Web Vitals']
    },
    {
      id: 6,
      icon: <Shield size={48} />,
      title: 'Security & Best Practices',
      description: 'Implement security measures and follow industry best practices for production-ready applications.',
      features: ['XSS Prevention', 'CSRF Protection', 'Secure Headers', 'Code Quality']
    }
  ];

  return (
    <div className="page services-page">
      <section className="page-hero">
        <h1 className="page-title">Our Services</h1>
        <p className="page-description">
          Comprehensive frontend development services built on modern web technologies
          and industry best practices
        </p>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-outline">Learn More</button>
            </div>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="section-header">
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-description">
            A structured approach to delivering high-quality frontend solutions
          </p>
        </div>
        <div className="process-timeline">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3>Planning & Research</h3>
            <p>Understand requirements, analyze user needs, and plan architecture</p>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <h3>Design & Prototyping</h3>
            <p>Create wireframes, design systems, and interactive prototypes</p>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <h3>Development</h3>
            <p>Build components, integrate APIs, and implement functionality</p>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <h3>Testing & Launch</h3>
            <p>Quality assurance, performance optimization, and deployment</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
