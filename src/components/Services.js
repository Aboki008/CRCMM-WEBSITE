import React from 'react';
import { FaBullseye, FaHospitalAlt, FaBook } from 'react-icons/fa';

const Services = () => {
  const programs = [
    {
      title: 'Skills Training',
      schedule: 'Bi-weekly',
      description: 'Vocational and digital skills workshops to improve employability',
      icon: FaBullseye,
      color: 'from-primary to-secondary',
      delay: '0s'
    },
    {
      title: 'Health Drives',
      schedule: 'Monthly',
      description: 'Community health awareness camps and medical checkups',
      icon: FaHospitalAlt,
      color: 'from-accent to-primary',
      delay: '0.1s'
    },
    {
      title: 'Education Support',
      schedule: 'Ongoing',
      description: 'Scholarships and tutoring for underprivileged children',
      icon: FaBook,
      color: 'from-secondary to-accent',
      delay: '0.2s'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Our core programs deliver tangible impact across communities through consistent, quality-focused initiatives.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: program.delay }}
            >
              <div className={`bg-gradient-to-r ${program.color} h-24 flex items-center justify-center text-4xl text-white`}>
                <program.icon className="w-10 h-10" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {program.schedule}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;