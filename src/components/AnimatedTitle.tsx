import  { useRef} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';



interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

const AnimatedTitle = ({ title, containerClass = '' } : AnimatedTitleProps) => {
  const containerRef = useRef(null);

    useGSAP(
    () => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });

      titleAnimation.to('.animated-word', {
        opacity: 1,
        transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
        ease: 'power2.inOut',
        stagger: 0.02,
      });
    },
    { scope: containerRef } 
  );


  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      {title.split('<br />').map((line, lineIdx) => (
        <div
          key={lineIdx}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(' ').map((word, wordIdx) => (
            <span
              key={wordIdx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
