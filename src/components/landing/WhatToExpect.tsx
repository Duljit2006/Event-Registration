import { Code2, Mic2, Users } from 'lucide-react';

export default function WhatToExpect() {
  const features = [
    {
      title: "Workshops",
      description: "Hands-on sessions with Google Cloud, Firebase, and Flutter. Build real projects.",
      icon: <Code2 className="w-8 h-8 text-google-blue" />,
      color: "bg-google-blue/10"
    },
    {
      title: "Tech Talks",
      description: "Learn from industry experts and Google Developer Experts about the latest tech trends.",
      icon: <Mic2 className="w-8 h-8 text-google-red" />,
      color: "bg-google-red/10"
    },
    {
      title: "Networking",
      description: "Connect with local developers, startups, and tech enthusiasts in your area.",
      icon: <Users className="w-8 h-8 text-google-green" />,
      color: "bg-google-green/10"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What to Expect</h2>
          <p className="text-muted max-w-2xl mx-auto">Get ready for a full day of deep technical content, hands-on learning, and networking with the GDG community.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-card shadow-card hover:shadow-card-hover transition-shadow border border-border"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
