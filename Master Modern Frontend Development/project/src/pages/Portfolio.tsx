import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'react',
      description: 'Full-featured shopping platform with cart, checkout, and payment integration',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      category: 'css',
      description: 'Modern admin dashboard with charts, data visualization, and responsive design',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['CSS Grid', 'Flexbox', 'JavaScript'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Social Media App',
      category: 'react',
      description: 'Real-time social platform with posts, comments, and user interactions',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Hooks', 'REST API'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'css',
      description: 'Creative portfolio with smooth animations and stunning visual effects',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML5', 'CSS3', 'Animations'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Weather Application',
      category: 'javascript',
      description: 'Real-time weather app with geolocation and forecast visualization',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['JavaScript', 'API Integration', 'Async/Await'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Task Management System',
      category: 'react',
      description: 'Productivity app with drag-and-drop, filters, and local storage',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'State Management', 'LocalStorage'],
      link: '#',
      github: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'react', label: 'React' },
    { id: 'css', label: 'CSS' },
    { id: 'javascript', label: 'JavaScript' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="page portfolio-page">
      <section className="page-hero">
        <h1 className="page-title">Our Portfolio</h1>
        <p className="page-description">
          Explore our collection of modern, responsive web applications built with
          cutting-edge technologies
        </p>
      </section>

      <section className="portfolio-filters">
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="portfolio-grid-section">
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-overlay">
                  <div className="portfolio-links">
                    <a href={project.link} className="portfolio-link" aria-label="View project">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.github} className="portfolio-link" aria-label="View source code">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
