import React, { useEffect } from 'react';
import { gsap } from "gsap";

const Lottie: React.FC = () => {
    
    // use gsap
    useEffect(() => {
        const dots = document.querySelectorAll('.dot');
        gsap.to(dots, {
            duration: 0.3,
            stagger: 0.3,
            yoyo: true,
            repeat: -1,
            scale: 1.5,
            ease: 'power2.inOut',
        });
    }, []);
    
    
    return (
        <div className="dots" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20vh',
            width: '100vw',
        }}>
            {[...Array(3)].map((_, i) => (
                <div key={i} className="dot" style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    margin: '10px',
                }} />
            ))}
          
        </div>
    );
}

export default Lottie;