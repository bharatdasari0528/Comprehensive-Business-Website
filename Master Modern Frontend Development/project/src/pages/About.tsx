import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const team = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Senior Frontend Developer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['React', 'TypeScript', 'CSS']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Design Systems', 'Figma', 'Accessibility']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'JavaScript Specialist',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['ES6+', 'Performance', 'Testing']
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Full Stack Developer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['React', 'Node.js', 'APIs']
    }
  ];

  const values = [
    {
      icon: <Target size={40} />,
      title: 'Excellence',
      description: 'We strive for perfection in every line of code and pixel of design'
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'Building together creates better solutions and stronger teams'
    },
    {
      icon: <Award size={40} />,
      title: 'Innovation',
      description: 'Embracing new technologies and pushing the boundaries of web development'
    },
    {
      icon: <Heart size={40} />,
      title: 'User Focus',
      description: 'Every decision is made with the end user experience in mind'
    }
  ];

  return (
    <div className="page about-page">
      <section className="page-hero">
        <h1 className="page-title">About Us</h1>
        <p className="page-description">
          Passionate frontend developers dedicated to creating exceptional web experiences
          through modern technology and thoughtful design
        </p>
      </section>

      <section className="about-story">
        <div className="story-content">
          <h2 className="section-title">Our Story</h2>
          <div className="story-text">
            <p>
              Founded on the principle that great web experiences start with solid
              frontend fundamentals, we've built a reputation for delivering
              production-ready applications that combine beautiful design with
              robust functionality.
            </p>
            <p>
              Our team specializes in React, modern JavaScript, and advanced CSS
              techniques. We believe in writing clean, maintainable code that
              follows industry best practices and accessibility standards.
            </p>
            <p>
              With every project, we aim to push the boundaries of what's possible
              on the web while ensuring optimal performance and user experience
              across all devices.
            </p>
          </div>
        </div>
        <div className="story-stats">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-text">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-text">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-text">Years Experience</div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-title">Our Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="team-section">
        <div className="section-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-description">
            Talented professionals passionate about frontend development
          </p>
        </div>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-expertise">
                  {member.expertise.map((skill, index) => (
                    <span key={index} className="expertise-tag">{skill}</span>
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

export default About;
