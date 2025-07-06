import React from 'react';
import childhood from './assets/childhood.jpg'
import monil from './assets/monil.jpg'
import goal from './assets/goals.jpg'
import other from './assets/other.jpg'
import b from './assets/b.jpg'
import passion from './assets/passion.jpg'

const timelineData = [
  {
    year: '👶 Childhood',
    description: 'I was born in Himmatnagar, Gujarat on 24th September 2003, and raised in Mumbai. I grew up with strong family values and humble beginnings.',
    image: childhood,
  },
  {
    year: '🎓 Education',
    description: 'Completed my Diploma and Bachelor’s degree in Information Technology (BE/IT) in 2025 from Mumbai, developing strong skills in both development and teamwork.',
    image: monil,
  },
  {
    year: '💼 Career & Goals',
    description: 'Currently working as a Support Developer (Intern), gaining hands-on experience while continuing to learn and grow professionally.',
    image: goal,
  },
  {
    year: '🌱 Hobbies & Passion',
    description: 'I enjoy cricket, badminton, mythology, sci-fi, and exploring new technologies and startups. Driving is — just love being on the road.',
    image: passion,
  },
  {
    year: '👤 Who Am I Beyond the Bio-Data?',
    description: 'Just someone who believes in Karma, stays open-minded, and enjoys exploring life’s endless possibilities with a humble heart.',
    image: b,
  },
  {
    year: '🧭 More Details',
    description: '',
    image: other,
  }
];

const About = () => {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 py-16 px-4 sm:px-10 pt-10 mt-20">
      <h2 className="text-3xl sm:text-4xl text-center font-bold text-purple-800 mb-16 animate-fadeInUp">
        My Journey 🚀
      </h2>

      <div className="relative border-l-4 border-pink-500 ml-4 space-y-20">
        {timelineData.map((item, idx) => (
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
              className={`flex flex-col md:flex-row items-center gap-6 ${
                idx % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''
              }`}
            >
              <img
                src={item.image}
                alt={item.year}
                className="w-full md:w-1/3 h-80 object-cover rounded-lg shadow-lg border-4 border-purple-300"
              />
              <div className="mt-4 md:mt-0 md:w-2/3 text-left">
                <h3 className="text-xl font-semibold text-purple-900 mb-2">{item.year}</h3>
                <p className="text-gray-700 text-base">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Personal Details */}
      <div className="text-base sm:text-lg text-gray-800 leading-relaxed italic px-4 sm:px-10 ml-7">
        <p>🏡 <strong>Native Place:</strong> Nananpur, Gujarat</p>
        <p>📍 <strong>Currently Residing:</strong> Mumbai, Maharashtra</p>
        <p>⚖️ <strong>Zodiac Sign (Rashi):</strong> सिंह राशि (leo zodiac sign)</p>
        <p>🧬 <strong>Gotra:</strong> Kherju</p>
        <p>🕉️ <strong>Religion:</strong> 42 DH-Digamber Jain </p>
        <p>🗣️ <strong>Mother Tongue:</strong> Gujarati</p>
        <p>🌿 <strong>Belief:</strong> Embracing simplicity, spirituality, and strong family values.</p>
      </div>
    </section>
  );
};

export default About;
