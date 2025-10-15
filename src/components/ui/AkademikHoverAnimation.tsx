'use client';

import React, { useState, useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import { useAkademikHover } from '@/components/context/AkademikHoverContext';

interface AkademikHoverAnimationProps {
  children: React.ReactNode;
  className?: string;
}

const AkademikHoverAnimation: React.FC<AkademikHoverAnimationProps> = ({
  children,
  className = '',
}) => {
  const [showItems, setShowItems] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { isAkademikHovered, setIsAkademikHovered } = useAkademikHover();

  // Akademik dropdown items organized as per original Figma design - restored to full size
  const akademikItems = [
    // First row
    { name: 'AKADEMİK KADRO', position: { left: 601, top: 240 } },
    { name: 'AKADEMİK TAKVİM', position: { left: 775, top: 239 } },
    { name: 'AKTS KATALOĞU', position: { left: 949, top: 238 } },
    { name: 'TEKNOLOJİ TRANSFER OFİSİ', position: { left: 1131, top: 234 } },

    // Second row
    { name: 'FAKÜLTELER', position: { left: 601, top: 306 } },
    { name: 'KÜTÜPHANE', position: { left: 780, top: 313 } },
    { name: 'YÜKSEKOKULLAR', position: { left: 949, top: 313 } },
    { name: 'KURALLAR VE KOMİSYONLAR', position: { left: 1131, top: 306 } },

    // Third row
    { name: 'TÜM PROGRAMLAR', position: { left: 601, top: 380 } },
    { name: 'ENSTİTÜLER', position: { left: 780, top: 380 } },
    { name: 'ENDÜSTRİYEL HİZMET', position: { left: 949, top: 380 } },
    { name: 'SÜREKLİ EĞİTİM MERKEZİ', position: { left: 1131, top: 380 } },

    // Fourth row
    {
      name: 'ÖĞRETİM ÜYESİ YETİŞTİRME VE GELİŞTİRME PROGRAMI',
      position: { left: 601, top: 451 },
    },
  ];

  // Lottie animasyon data'sı - Figma'dan indirilen graduation animasyonu
  const [graduationAnimation, setGraduationAnimation] = useState<object | null>(
    null
  );

  // Lottie animasyonunu yükle
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch('/images/figma/graduation-animation.json');
        const animationData = await response.json();
        setGraduationAnimation(animationData);
      } catch (error) {
        console.error('Error loading Lottie animation:', error);
        // Fallback animasyon
        setGraduationAnimation({
          v: '5.7.4',
          fr: 30,
          ip: 0,
          op: 90,
          w: 150,
          h: 150,
          nm: 'Graduation Animation',
          ddd: 0,
          assets: [],
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: 'Computer Screen',
              sr: 1,
              ks: {
                o: { a: 0, k: 100 },
                r: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 0,
                      s: [0],
                    },
                    {
                      i: { x: [0.833], y: [0.833] },
                      o: { x: [0.167], y: [0.167] },
                      t: 45,
                      s: [10],
                    },
                    { t: 90, s: [0] },
                  ],
                },
                p: { a: 0, k: [75, 75, 0] },
                a: { a: 0, k: [0, 0, 0] },
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                      o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                      t: 0,
                      s: [80, 80, 100],
                    },
                    {
                      i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                      o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                      t: 45,
                      s: [120, 120, 100],
                    },
                    { t: 90, s: [80, 80, 100] },
                  ],
                },
              },
              ao: 0,
              shapes: [
                {
                  ty: 'gr',
                  it: [
                    {
                      ty: 'rc',
                      d: 1,
                      s: { a: 0, k: [60, 40] },
                      p: { a: 0, k: [0, 0] },
                      r: { a: 0, k: 5 },
                    },
                    {
                      ty: 'fl',
                      c: { a: 0, k: [0.239, 0.153, 0.451, 1] },
                      o: { a: 0, k: 100 },
                    },
                  ],
                },
              ],
              ip: 0,
              op: 90,
              st: 0,
            },
          ],
        });
      }
    };

    loadAnimation();
  }, []);

  const handleMouseEnter = () => {
    setIsAkademikHovered(true);
    setShowItems(true);
    setAnimatedItems([]);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Animate items one by one
    akademikItems.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => [...prev, index]);
      }, index * 100); // 100ms delay between each item
    });
  };

  const handleMouseLeave = () => {
    // Only close if mouse leaves the entire hover area
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsAkademikHovered(false);
      setShowItems(false);
      setAnimatedItems([]);
    }, 300);
  };

  const handlePanelMouseEnter = () => {
    // Clear timeout when mouse enters the panel
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handlePanelMouseLeave = () => {
    // Close panel when mouse leaves the panel
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsAkademikHovered(false);
      setShowItems(false);
      setAnimatedItems([]);
    }, 300);
  };

  // Context'ten gelen isAkademikHovered değişikliklerini dinle
  useEffect(() => {
    if (isAkademikHovered) {
      setShowItems(true);
      setAnimatedItems([]);

      // Animate items one by one
      akademikItems.forEach((_, index) => {
        setTimeout(() => {
          setAnimatedItems(prev => [...prev, index]);
        }, index * 100); // 100ms delay between each item
      });
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setShowItems(false);
        setAnimatedItems([]);
      }, 300);
    }
  }, [isAkademikHovered]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Hover Panel - Figma Design Implementation */}
      {showItems && (
        <div
          className="absolute z-50 transition-all duration-300 hidden lg:block"
          style={{
            width: '889px', // %30 büyütülmüş (684 * 1.3)
            height: '358px', // %30 büyütülmüş (275 * 1.3)
            left: '150px',
            top: '164px',
          }}
          onMouseEnter={handlePanelMouseEnter}
          onMouseLeave={handlePanelMouseLeave}
        >
          {/* Yellow Background Panel */}
          <div
            className="absolute"
            style={{
              width: 'calc(100% - 6px)',
              height: '358px', // %30 büyütülmüş (275 * 1.3)
              left: '6px',
              top: '0px',
              background: '#FFDD00',
              border: '1px solid #D9D9D9',
              borderRadius: '24px',
              boxSizing: 'border-box',
            }}
          />

          {/* White Left Panel */}
          <div
            className="absolute"
            style={{
              width: '325px', // %30 büyütülmüş (250 * 1.3)
              height: '358px', // %30 büyütülmüş (275 * 1.3)
              left: '0px',
              top: '0px',
              background: '#FFFFFF',
              border: '1px solid #D9D9D9',
              borderRadius: '24px',
              boxSizing: 'border-box',
            }}
          >
            {/* Lottie Animation - Figma tasarımına göre */}
            {graduationAnimation && (
              <div
                className="absolute"
                style={{
                  width: '117px', // %30 büyütülmüş (90 * 1.3)
                  height: '117px', // %30 büyütülmüş (90 * 1.3)
                  left: '104px', // %30 büyütülmüş (80 * 1.3)
                  top: '20px', // %30 büyütülmüş (15 * 1.3)
                }}
              >
                <Lottie
                  animationData={graduationAnimation}
                  loop={true}
                  autoplay={isAkademikHovered}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            )}

            {/* AKADEMİK Title - Figma tasarımına göre */}
            <div
              className="absolute"
              style={{
                width: '156px', // %30 büyütülmüş (120 * 1.3)
                height: '36px', // %30 büyütülmüş (28 * 1.3)
                left: '25px', // %30 büyütülmüş (19 * 1.3)
                top: '161px', // %30 büyütülmüş (124 * 1.3)
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '31px', // %30 büyütülmüş (24 * 1.3)
                lineHeight: '1.171875em',
                textAlign: 'center',
                textTransform: 'uppercase',
                color: '#000000',
              }}
            >
              AKADEMİK
            </div>

            {/* Description Text - Figma tasarımına göre */}
            <div
              className="absolute"
              style={{
                width: '230px', // %30 büyütülmüş (177 * 1.3)
                height: '79px', // %30 büyütülmüş (61 * 1.3)
                left: '25px', // %30 büyütülmüş (19 * 1.3)
                top: '246px', // %30 büyütülmüş (189 * 1.3)
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '13px', // %30 büyütülmüş (10 * 1.3)
                lineHeight: '1.171875em',
                textTransform: 'uppercase',
                color: 'rgba(0, 0, 0, 0.8)',
              }}
            >
              Fakültelerimiz, enstitülerimiz, lisansüstü programlarımız ve
              akademik kaynaklar hakkında bilgi edinin.
            </div>
          </div>

          {/* Menu Items */}
          {akademikItems.map((item, index) => (
            <div
              key={index}
              className={`
                absolute cursor-pointer transition-all duration-300 hover:bg-[#FFDD00]/20 hover:px-2 hover:py-1 hover:rounded-lg
                ${
                  animatedItems.includes(index)
                    ? 'opacity-100 transform translate-x-0'
                    : 'opacity-0 transform translate-x-8'
                }
              `}
              style={{
                left: `${(item.position.left - 150) * 0.78}px`, // %30 büyütülmüş (0.6 * 1.3)
                top: `${(item.position.top - 164) * 0.78}px`, // %30 büyütülmüş (0.6 * 1.3)
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize:
                  item.name ===
                  'ÖĞRETİM ÜYESİ YETİŞTİRME VE GELİŞTİRME PROGRAMI'
                    ? '10px'
                    : '13px', // %30 büyütülmüş
                lineHeight:
                  item.name ===
                  'ÖĞRETİM ÜYESİ YETİŞTİRME VE GELİŞTİRME PROGRAMI'
                    ? '13px'
                    : '14px', // %30 büyütülmüş
                textTransform: 'uppercase',
                color: '#000000',
                transitionDelay: `${index * 100}ms`,
                maxWidth:
                  item.name === 'TEKNOLOJİ TRANSFER OFİSİ'
                    ? '116px' // %30 büyütülmüş (89 * 1.3)
                    : item.name ===
                        'ÖĞRETİM ÜYESİ YETİŞTİRME VE GELİŞTİRME PROGRAMI'
                      ? '122px' // %30 büyütülmüş (94 * 1.3)
                      : 'auto',
              }}
              onClick={() => {
                // Tıklama işlevi - buraya link veya sayfa yönlendirmesi eklenebilir
                console.log(`Clicked on: ${item.name}`);
                // Örnek: window.location.href = `/akademik/${item.name.toLowerCase().replace(/\s+/g, '-')}`
              }}
            >
              {/* Purple Dot */}
              <div
                className="absolute"
                style={{
                  width: '9px', // %30 büyütülmüş (7 * 1.3)
                  height: '9px', // %30 büyütülmüş (7 * 1.3)
                  left: '-16px', // %30 büyütülmüş (-12 * 1.3)
                  top: '3px', // %30 büyütülmüş (2 * 1.3)
                  background: '#3D2673',
                  borderRadius: '50%',
                }}
              />
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/* Mobile Dropdown - Figma Design Implementation */}
      {showItems && (
        <div
          className="lg:hidden fixed z-50 top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg"
          onMouseEnter={handlePanelMouseEnter}
          onMouseLeave={handlePanelMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {akademikItems.map((item, index) => (
                <div
                  key={index}
                  className={`
                    flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer
                    ${
                      animatedItems.includes(index)
                        ? 'opacity-100 transform translate-x-0'
                        : 'opacity-0 transform translate-x-4'
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                  onClick={() => {
                    // Tıklama işlevi - buraya link veya sayfa yönlendirmesi eklenebilir
                    console.log(`Clicked on: ${item.name}`);
                    // Örnek: window.location.href = `/akademik/${item.name.toLowerCase().replace(/\s+/g, '-')}`
                  }}
                >
                  {/* Purple Dot */}
                  <div className="w-3 h-3 bg-[#3D2673] rounded-full flex-shrink-0" />
                  <span
                    className="text-sm sm:text-base font-bold text-black uppercase"
                    style={{
                      fontFamily: 'Roboto',
                      fontSize:
                        item.name ===
                        'ÖĞRETİM ÜYESİ YETİŞTİRME VE GELİŞTİRME PROGRAMI'
                          ? '12px'
                          : '14px',
                    }}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AkademikHoverAnimation;
