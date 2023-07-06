"use client"

import React, { useState, useEffect } from 'react';

export const WhatsAppButton = () => {
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 150) {
      setShowWhatsAppButton(true);
    } else {
      setShowWhatsAppButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <script src="botaoZap.js"></script>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css'/>
      {showWhatsAppButton && (
        <div>
            <a className='whatsapp-link' href='https://wa.link/ag8ul1' target='_blank'>
              <i className='fa fa-whatsapp'></i>
            </a>
            <a className='top' href='#menu'>
                <i className='toppage'><img id='seta' src='./seta.png'/> </i>
            </a>
        </div>
      )}
    </main>
  );
};

