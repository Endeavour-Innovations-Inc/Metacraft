import React, { useEffect, useState } from 'react';
import './Explosion.css';

function Explosion() {
  const [explosions, setExplosions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newExplosion = {
        id: Math.random(), // unique id
        left: Math.random() * 100, // random position from 0% to 100%
        top: Math.random() * 100, // random position from 0% to 100%
        size: Math.random() * 200 + 50, // random size from 50px to 250px
      };
      setExplosions((explosions) => [...explosions, newExplosion]);
    }, 1000); // create a new explosion every second

    return () => clearInterval(interval); // clean up on unmount
  }, []);

  return (
    <div>
      {explosions.map((explosion) => (
        <div
          key={explosion.id}
          className="explosion"
          style={{
            left: `${explosion.left}%`,
            top: `${explosion.top}%`,
            width: `${explosion.size}px`,
            height: `${explosion.size}px`,
          }}
        />
      ))}
    </div>
  );
}

export default Explosion;
