import { Code, Zap, Smartphone, Accessibility } from 'lucide-react';

const Home = () => {
  const features = [
    {
      id: 1,
      title: 'Responsive Design',
      description: 'Beautiful layouts that adapt seamlessly to any screen size',
      icon: <Smartphone size={40} />
    },
    {
      id: 2,
      title: 'Fast Performance',
      description: 'Optimized code for lightning-fast load times and interactions',
      icon: <Zap size={40} />
    },
    {
      id: 3,
      title: 'Modern Code',
      description: 'Built with React, ES6+, and cutting-edge web technologies',
      icon: <Code size={40} />
    },
    {
      id: 4,
      title: 'Accessibility',
      description: 'WCAG compliant with full keyboard and screen reader support',
      icon: <Accessibility size={40} />
    }
  ];

  const stats = [
    { value: '95+', label: 'Lighthouse Score' },
    { value: '100%', label: 'Responsive' },
    { value: '15+', label: 'Components' },
    { value: 'WCAG', label: 'Compliant' }
  ];

  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Master Modern
            <span className="hero-gradient"> Frontend Development</span>
          </h1>
          <p className="hero-description">
            Build production-ready web applications with React, advanced CSS,
            and JavaScript ES6+. Learn responsive design, accessibility, and
            performance optimization.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">
            <Code size={32} />
            <span>React 18</span>
          </div>
          <div className="floating-card card-2">
            <Zap size={32} />
            <span>ES6+</span>
          </div>
          <div className="floating-card card-3">
            <Smartphone size={32} />
            <span>Responsive</span>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="section-header">
          <h2 className="section-title">Core Features</h2>
          <p className="section-description">
            Everything you need to build modern, professional web applications
          </p>
        </div>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Build Amazing Websites?</h2>
          <p className="cta-description">
            Start your frontend development journey today with our comprehensive
            learning program
          </p>
          <button className="btn btn-primary btn-large">Start Learning</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
