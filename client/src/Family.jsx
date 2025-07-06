
import React from 'react';
import family1 from './assets/faamily2.jpg';
import dada from './assets/dada.jpg';
import zarna from './assets/zarna.jpg'
import cul from './assets/cul.jpg'
import parents from './assets/parent.jpg'


const Family = () => {
const familyData = [
  {
    year: '👨‍👩‍👧‍👦 My Family Roots',
    description: [
  "We are happy to welcome a new member into our small and loving family, and equally ready to blend with yours with mutual respect and joy.",
  "We come from a small, connected and nurturing family.",
  "Our home is built on strong values, love, and understanding.",
  "We believe in growing together with shared dreams, hope, and ambition."
]
,
    image: family1,
  },
  {
    year: '👴 Grandparents',
    description: [
    'Shree Champaklal Somchand Doshi (Mahavir Jayanti/1936 - 20-4-2023)',
    'Native place : Nananpur, Gujarat.',
    'Shrimati Sushila Champaklal Doshi (Lily baa) (12-10-1941 - 27-3-2006)',
    'Native place : Dalani Muvadi, Gujarat.',
    
    ],
    image: dada,
  },
  {
    year: '👨‍👩 Parents',
    description: [
    'Shree  Hitesh Champaklal  Doshi',
    'Native place : Nananpur, Gujarat.',
    'Runs a business in [ Automobile Industry ]',
    'Shrimati Sheetal Hitesh Doshi',
    'Native place : Salal, Gujarat.',
    'Home Manager',
    'completed BA form Gujarat'
    ],
    image: parents,
  },
  {
    year: '👧 Siblings',
    description: [
    'Zarna Hitesh Doshi',
    'Head–Accounts & Administration',
    'Cost Management Accountant-CMA (Inter cleared)'
            
    ],
    image: zarna,
  },
  {
    year: '🧘‍♀️ Belief & Culture',
    description: [
        'Respect, simplicity, and togetherness define our culture.'
    ],
    image: cul,
  }
];
const boldNames = [
'Shree Champaklal Somchand Doshi ',
'Shrimati Sushila Champaklal Doshi',
'Shree  Hitesh Champaklal  Doshi',
'Shrimati Sheetal Hitesh Doshi',
'Zarna Hitesh Doshi'
];

  return (
    <section className="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 py-16 px-4 sm:px-10 pt-10 mt-20">
      <h2 className="text-3xl sm:text-4xl text-center font-bold text-purple-800 mb-16 animate-fadeInUp">
        My Family ❤️
      </h2>

      <div className="relative border-l-4 border-pink-500 ml-4 space-y-20">
        {familyData.map((item, idx) => (
          <div
            key={idx}
            className={`relative pl-8 sm:pl-12 ${
              idx % 2 === 0 ? 'md:animate-slideInLeft' : 'md:animate-slideInRight'
            } transition duration-1000 ease-out`}
          >
            {/* Dot */}
            <div className="absolute w-5 h-5 bg-pink-500 rounded-full left-[-11px] top-1.5 border-4 border-white z-10"></div>

            {/* Timeline Block */}
            <div
                className={`flex flex-col md:flex-row  gap-6 ${
                    idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                >
                <img
                    src={item.image}
                    alt={item.year}
                    className="w-full md:w-1/3 h-60  object-cover rounded-lg shadow-lg border-4 border-purple-300"
                />
                <div className="mt-2 md:mt-0 md:w-2/3 text-left">
                    <h3 className="text-xl font-semibold text-purple-900 mb-2">{item.year}</h3>
                    <ul className="list-disc pl-5 text-gray-700 text-base space-y-1">
                    {item.description.map((point, pointIdx) => {
                        const bold = boldNames.find(name => point.includes(name));
                        return (
                        <li key={pointIdx}>
                            {bold ? <strong>{point}</strong> : point}
                        </li>
                        );
                    })}
                    </ul>
                </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Family;

