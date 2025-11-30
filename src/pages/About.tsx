import { Target, Eye, Award, Users, TrendingUp, Globe, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge solutions.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building trust through transparency and honest communication.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with clients as true partners in success.',
    },
  ];

  const teamMembers = [
    {
      name: 'Alexandra Bennett',
      role: 'Chief Executive Officer',
      bio: '15+ years leading technology companies to success.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Marcus Thompson',
      role: 'Chief Technology Officer',
      bio: 'Expert in scalable architecture and emerging technologies.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sofia Martinez',
      role: 'Head of Design',
      bio: 'Award-winning designer with a passion for user experience.',
      image: 'https://images.pexels.com/photos/3756277/pexels-photo-3756277.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      bio: 'Leading high-performance teams to build exceptional products.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Emma Williams',
      role: 'Head of Strategy',
      bio: 'Strategic thinker with expertise in business transformation.',
      image: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'James Anderson',
      role: 'Head of Customer Success',
      bio: 'Dedicated to ensuring every client achieves their goals.',
      image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const milestones = [
    { year: '2008', title: 'Company Founded', description: 'Started with a vision to transform businesses' },
    { year: '2012', title: 'Global Expansion', description: 'Opened offices in 5 countries' },
    { year: '2016', title: 'Industry Recognition', description: 'Awarded Top Innovation Company' },
    { year: '2020', title: 'Major Milestone', description: 'Reached 500+ satisfied clients worldwide' },
    { year: '2024', title: 'Leading the Future', description: 'Pioneering AI-driven solutions' },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About NexaCore</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to transforming businesses
            through technology, strategy, and exceptional service.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded in 2008, NexaCore began with a simple mission: to help businesses
                  harness the power of technology to achieve extraordinary results.
                </p>
                <p>
                  Over the years, we've grown from a small startup to a global leader in
                  digital transformation, serving clients across industries and continents.
                </p>
                <p>
                  Today, we're proud to be at the forefront of innovation, delivering
                  solutions that not only meet current needs but anticipate future challenges.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <TrendingUp className="h-10 w-10 text-blue-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">350%</div>
                <div className="text-gray-600">Average ROI for clients</div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <Globe className="h-10 w-10 text-green-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
                <div className="text-gray-600">Countries served</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <Award className="h-10 w-10 text-orange-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">40+</div>
                <div className="text-gray-600">Industry awards</div>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <Users className="h-10 w-10 text-purple-600 mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Expert team members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To empower businesses worldwide with innovative technology solutions that
                drive growth, efficiency, and competitive advantage in an ever-evolving
                digital landscape.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Eye className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be the global leader in digital transformation, recognized for our
                innovation, excellence, and unwavering commitment to client success.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-lg transition-all">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones that shaped our success</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden lg:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600">The talented people behind our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
