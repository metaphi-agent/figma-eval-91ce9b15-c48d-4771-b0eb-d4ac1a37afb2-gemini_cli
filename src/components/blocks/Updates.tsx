import React from 'react';
import { Container } from '../ui/Container';

const updates = [
    {
        title: 'Creating Streamlined Safeguarding Processes with OneRen',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' 
    },
    {
        title: 'What are your safeguarding responsibilities and how can you manage them?',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
        title: 'Revamping the Membership Model with Triathlon Australia',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
];

export const Updates: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Container className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-semibold text-[#4D4D4D]">Caring is the new marketing</h2>
        <p className="text-[#717171] max-w-2xl mx-auto text-sm leading-relaxed">
            The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
        </p>
      </Container>
      
      <Container className="grid md:grid-cols-3 gap-8">
        {updates.map((update, idx) => (
            <div key={idx} className="relative group cursor-pointer">
                {/* Image Card */}
                <div className="rounded-lg overflow-hidden h-64 md:h-72 w-full shadow-md">
                    <img src={update.image} alt={update.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy"/>
                </div>
                
                {/* Floating Content Card */}
                <div className="bg-[#F5F7FA] p-4 rounded-lg shadow-lg max-w-[90%] mx-auto -mt-24 relative z-10 text-center space-y-4">
                    <h3 className="text-lg font-semibold text-[#717171] group-hover:text-[#4CAF4F] transition-colors">
                        {update.title}
                    </h3>
                    <a href="#" className="inline-flex items-center gap-2 text-[#4CAF4F] font-semibold hover:text-green-700 transition-colors">
                        Readmore
                        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        ))}
      </Container>
    </section>
  );
};
