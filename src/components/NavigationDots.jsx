import React from 'react';

const NavigationDots = ({ active }) => (
  <div className='app__navigation'>
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#1190cb', height: 15 } : {}}
      />
    ))}
  </div>
);
export default NavigationDots;