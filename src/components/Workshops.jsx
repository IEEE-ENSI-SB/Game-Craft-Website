import React from 'react';
import LightComponent from './LightCompnent'; 
import game from '../assets/game.jpg';

const Workshops = () => {
  
    const workshopItems = [
      {
        id: 1,
        title: 'Workshop 1',
        text: 'Description of Workshop 1',
        backgroundUrl: '../assets/game.jpg',
        iconUrl: '../assets/game.jpg',
        imageUrl: '../assets/game.jpg',
        light: <LightComponent />, 
        colorful: true 
      }
    ];
  
    return (
      <div>
        <h1 style={{ textShadow: '2px 4px 6px ', color: '#000', fontSize: '2.7rem', position: 'relative' }}>
          Workshops 
        </h1>
        <br />
        <br />
        <div className="lg:mx-20 mx-10 pb-20 grid grid-flow-row lg:grid-cols-2 gap-8 justify-center hidd cont show"> 
          <div className="flex gap-10 mb-10">
            {workshopItems.map((item) => (
              <div
                className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] 
                hover:scale-105`}
                style={{
                   // backgroundImage: `url(${game})`,
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
                  marginLeft: '100px',
                  
                }}
                key={item.id}
              >
                {/* Conteneur de bordure pour le contenu de l'atelier */}
              <div className="border border-blue-500 rounded p-4"> {/* Changer la couleur de la bordure ici */}
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[0.0rem] pointer-events-none">
                    <div className="relative  mt-auto w-{200} h-{150}">
                      <img
                        src={game}
                       
                      />
                    </div>
                        <h2 className='text-white'>workshop 1 : description </h2>    
                     </div>
                  {item.light}
                </div>
                
              </div>
            ))}
          </div>
          <div className="flex gap-10 mb-10">
            {workshopItems.map((item) => (
              <div
                className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] 
                hover:scale-105`}
                style={{
                   // backgroundImage: `url(${game})`,
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.9)',
                  marginLeft: '100px',
                  
                }}
                key={item.id}
              >
                {/* Conteneur de bordure pour le contenu de l'atelier */}
              <div className="border border-blue-500 rounded p-4"> {/* Changer la couleur de la bordure ici */}
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[0.0rem] pointer-events-none">
                    <div className="relative  mt-auto w-{200} h-{150}">
                      <img
                        src={game}
                       
                      />
                    </div>
                        <h2 className='text-white'>workshop 1 : description </h2>    
                     </div>
                  {item.light}
                </div>
                
              </div>
            ))}
          </div>
          </div>
        </div>
      
    );
  };
  
  export default Workshops;
