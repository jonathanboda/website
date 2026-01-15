'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface FacilityItem {
  id: string;
  src: string;
  label: string;
}

const facilityItems: FacilityItem[] = [
  {
    id: 'item-01',
    src: '/images/process/biesse_RoverCutGo_SF_D5.webp',
    label: 'Advanced CNC Cutting',
  },
  {
    id: 'item-02',
    src: '/images/process/RoverEdgeGoSS_C_D5_i5.webp',
    label: 'Edge Banding',
  },
  {
    id: 'item-03',
    src: '/images/process/RoverMultiUpMCS_D5_i5.webp',
    label: '5-Axis Machine',
  },
  {
    id: 'item-04',
    src: '/images/process/plywood lamination.png',
    label: 'Plywood Lamination',
  },
];

// Grid pieces configuration (3x3 = 9 pieces)
const pieces = [
  { row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 },
  { row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 },
  { row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 },
];

// Random explode transforms for each piece
const getExplodeTransform = (index: number) => {
  const transforms = [
    'translate3d(-180px, -150px, 200px) rotateX(45deg) rotateY(-60deg) rotateZ(30deg)',
    'translate3d(20px, -200px, 250px) rotateX(-50deg) rotateY(40deg) rotateZ(-20deg)',
    'translate3d(200px, -120px, 180px) rotateX(35deg) rotateY(55deg) rotateZ(15deg)',
    'translate3d(-220px, 30px, 220px) rotateX(-40deg) rotateY(-45deg) rotateZ(-35deg)',
    'translate3d(0px, 0px, 300px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
    'translate3d(230px, 50px, 190px) rotateX(50deg) rotateY(35deg) rotateZ(25deg)',
    'translate3d(-160px, 180px, 170px) rotateX(-35deg) rotateY(-50deg) rotateZ(-15deg)',
    'translate3d(30px, 220px, 240px) rotateX(45deg) rotateY(-30deg) rotateZ(40deg)',
    'translate3d(190px, 160px, 200px) rotateX(-45deg) rotateY(50deg) rotateZ(-30deg)',
  ];
  return transforms[index];
};

export default function FacilityExplodeCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [nextItemIndex, setNextItemIndex] = useState(1);
  const [phase, setPhase] = useState<'showing' | 'exploding' | 'assembling'>('showing');
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Animation cycle: show current -> explode current while assembling next -> show next
  useEffect(() => {
    if (!isInView) return;

    let isCancelled = false;

    const cycle = async () => {
      // Phase 1: Show current image assembled (2.5s)
      setPhase('showing');
      await new Promise(r => setTimeout(r, 2500));
      if (isCancelled) return;

      // Phase 2: Explode current image (1s animation)
      setPhase('exploding');
      await new Promise(r => setTimeout(r, 1000));
      if (isCancelled) return;

      // Phase 3: Switch to next image and assemble it
      setCurrentItemIndex(nextItemIndex);
      setNextItemIndex((nextItemIndex + 1) % facilityItems.length);
      setPhase('assembling');
      await new Promise(r => setTimeout(r, 1000));
      if (isCancelled) return;

      // Back to showing
      setPhase('showing');
    };

    cycle();

    return () => {
      isCancelled = true;
    };
  }, [isInView, currentItemIndex, nextItemIndex]);

  const currentItem = facilityItems[currentItemIndex];
  const isExploded = phase === 'exploding';
  const isAssembling = phase === 'assembling';

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white"
      style={{ perspective: '1200px' }}
    >
      {/* Label */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-100">
        <p className="text-sm font-semibold text-gray-800">{currentItem.label}</p>
      </div>

      {/* 3D Container */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(5deg)',
        }}
      >
        {/* Card container with rounded corners and shadow */}
        <div
          className="relative"
          style={{
            width: '380px',
            height: '320px',
            borderRadius: '16px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15), 0 10px 25px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            transformStyle: 'preserve-3d',
            overflow: isExploded ? 'visible' : 'hidden',
          }}
        >
          {/* Image split into 9 pieces */}
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {pieces.map((piece, index) => {
              const pieceWidth = 380 / 3;
              const pieceHeight = 320 / 3;
              const baseX = piece.col * pieceWidth;
              const baseY = piece.row * pieceHeight;

              // When exploding, pieces fly outward
              // When assembling, pieces come from exploded positions to assembled
              let transform = 'translate3d(0,0,0) rotateX(0) rotateY(0) rotateZ(0)';
              let opacity = 1;

              if (isExploded) {
                transform = getExplodeTransform(index);
                opacity = 0;
              } else if (isAssembling) {
                // Pieces are coming together
                transform = 'translate3d(0,0,0) rotateX(0) rotateY(0) rotateZ(0)';
              }

              // Calculate transition values
              const duration = isExploded
                ? `${0.5 + index * 0.05}s`
                : isAssembling
                ? `${0.5 + (8 - index) * 0.05}s`
                : '0s';
              const timing = isExploded
                ? 'cubic-bezier(0.55, 0.085, 0.68, 0.53)'
                : 'cubic-bezier(0.34, 1.56, 0.64, 1)';
              const delay = isExploded
                ? `${index * 0.03}s`
                : isAssembling
                ? `${(8 - index) * 0.03}s`
                : '0s';

              return (
                <div
                  key={`${currentItemIndex}-${index}`}
                  className="absolute"
                  style={{
                    width: `${pieceWidth + 1}px`,
                    height: `${pieceHeight + 1}px`,
                    left: `${baseX}px`,
                    top: `${baseY}px`,
                    overflow: 'hidden',
                    transformStyle: 'preserve-3d',
                    transform: transform,
                    opacity: opacity,
                    transitionProperty: 'transform, opacity, box-shadow, border-radius',
                    transitionDuration: duration,
                    transitionTimingFunction: timing,
                    transitionDelay: delay,
                    boxShadow: isExploded ? '0 20px 40px rgba(0,0,0,0.25)' : 'none',
                    borderRadius: isExploded ? '8px' : '0px',
                    zIndex: isExploded ? 10 - index : index,
                  }}
                >
                  <div
                    style={{
                      width: '380px',
                      height: '320px',
                      marginLeft: `-${baseX}px`,
                      marginTop: `-${baseY}px`,
                    }}
                  >
                    <Image
                      src={currentItem.src}
                      alt={currentItem.label}
                      width={380}
                      height={320}
                      className="object-cover"
                      style={{
                        width: '380px',
                        height: '320px',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {facilityItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              setCurrentItemIndex(index);
              setNextItemIndex((index + 1) % facilityItems.length);
              setPhase('showing');
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentItemIndex
                ? 'bg-orange-500 w-8'
                : 'bg-gray-300 hover:bg-gray-400 w-2'
            }`}
            title={item.label}
          />
        ))}
      </div>
    </div>
  );
}
