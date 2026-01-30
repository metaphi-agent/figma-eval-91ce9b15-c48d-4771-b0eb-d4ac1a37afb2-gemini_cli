import React from 'react';
import { Container } from '../ui/Container';

const StatIcon = ({ type }: { type: string }) => {
    switch(type) {
        case 'members':
            return (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M34 22C38.4183 22 42 18.4183 42 14C42 9.58172 38.4183 6 34 6C29.5817 6 26 9.58172 26 14C26 18.4183 29.5817 22 34 22Z" stroke="#4CAF4F" strokeWidth="2"/>
                    <path d="M14 22C18.4183 22 22 18.4183 22 14C22 9.58172 18.4183 6 14 6C9.58172 6 6 9.58172 6 14C6 18.4183 9.58172 22 14 22Z" stroke="#4CAF4F" strokeWidth="2"/>
                    <path d="M44 42V38C44 33.5817 40.4183 30 36 30H32" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M26 42V36C26 30.4772 21.5228 26 16 26H12C6.47715 26 2 30.4772 2 36V42" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            );
        case 'clubs':
             return (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 10L14 26H34L24 10Z" stroke="#4CAF4F" strokeWidth="2"/>
                    <circle cx="16" cy="36" r="4" stroke="#4CAF4F" strokeWidth="2"/>
                    <circle cx="32" cy="36" r="4" stroke="#4CAF4F" strokeWidth="2"/>
                    <circle cx="24" cy="22" r="4" stroke="#4CAF4F" strokeWidth="2"/>
                </svg>
            );
        case 'events':
             return (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M36 10H12C9.79086 10 8 11.7909 8 14V38C8 40.2091 9.79086 42 12 42H36C38.2091 42 40 40.2091 40 38V14C40 11.7909 38.2091 10 36 10Z" stroke="#4CAF4F" strokeWidth="2"/>
                    <path d="M32 6V14" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 6V14" stroke="#4CAF4F" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 20H40" stroke="#4CAF4F" strokeWidth="2"/>
                </svg>
            );
        case 'payments':
             return (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="4" y="10" width="40" height="28" rx="4" stroke="#4CAF4F" strokeWidth="2"/>
                    <path d="M4 18H44" stroke="#4CAF4F" strokeWidth="2"/>
                    <circle cx="12" cy="30" r="2" fill="#4CAF4F"/>
                </svg>
            );
        default: return null;
    }
}

const stats = [
    { label: 'Members', value: '2,245,341', type: 'members' },
    { label: 'Clubs', value: '46,328', type: 'clubs' },
    { label: 'Event Bookings', value: '828,867', type: 'events' },
    { label: 'Payments', value: '1,926,436', type: 'payments' },
];

export const Stats: React.FC = () => {
    return (
        <section className="py-16 bg-[#F5F7FA]">
            <Container className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="text-4xl font-semibold text-[#4D4D4D]">
                        Helping a local <br/>
                        <span className="text-[#4CAF4F]">business reinvent itself</span>
                    </h2>
                    <p className="text-[#18191F]">We reached here with our hard work and dedication</p>
                </div>
                
                <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                            <StatIcon type={stat.type} />
                            <div>
                                <h3 className="text-2xl font-bold text-[#4D4D4D]">{stat.value}</h3>
                                <p className="text-[#717171] text-sm">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
