import React, { useEffect } from 'react';
import Particles from 'react-particles';

const MyParticles = () => {
    useEffect(() => {
        // Initialize TSParticles
        const options = {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              straight: false,
              out_mode: 'bounce',
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
        };
    
        // Optional: Set up any event listeners or additional customization here
    
        // Access the particles instance for further manipulation
        const particles = window.tsParticles.init(options);
    
        // Clean up particles when the component is unmounted
        return () => {
          particles.destroy();
        };
      }, []); // Run the effect only once when the component mounts
    
      return (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <Particles />
        </div>
      );
    };
    
    export default MyParticles;