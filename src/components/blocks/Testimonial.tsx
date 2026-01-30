import React from 'react';
import { Container } from '../ui/Container';

export const Testimonial: React.FC = () => {
    return (
        <section className="py-16 bg-[#F5F7FA]">
            <Container className="grid lg:grid-cols-3 gap-12 items-center">
                <div className="flex justify-center lg:justify-start lg:col-span-1">
                     <div className="w-full max-w-xs aspect-square bg-gray-900 rounded-lg flex items-center justify-center shadow-lg">
                        {/* Placeholder Logo (Tesla-ish) */}
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 30 Q 50 40 90 30 L 90 20 Q 50 30 10 20 Z" fill="white"/>
                            <path d="M50 40 L 50 80" stroke="white" strokeWidth="4"/>
                            <path d="M30 45 Q 50 55 70 45" stroke="white" strokeWidth="2"/>
                        </svg>
                     </div>
                </div>
                
                <div className="lg:col-span-2 space-y-8">
                    <p className="text-[#717171] font-medium text-base leading-relaxed">
                        Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                    </p>
                    
                    <div>
                        <h4 className="text-xl font-semibold text-[#4CAF4F]">Tim Smith</h4>
                        <p className="text-[#89939E]">British Dragon Boat Racing Association</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 pt-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                             <svg key={i} width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-gray-400 hover:text-[#4CAF4F] transition-colors">
                                <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                            </svg>
                        ))}
                        <a href="#" className="flex items-center gap-2 text-[#4CAF4F] font-semibold hover:text-green-700 transition-colors">
                            Meet all customers 
                            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};
