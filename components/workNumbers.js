import { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/workNumbers.module.scss';

export default function WorkNumbers() {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [skilledProfessionals, setSkilledProfessionals] = useState(0);
  const [projects, setProjects] = useState(0);

  const yearsRef = useRef(null);
  const professionalsRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Intersection ratio threshold for triggering animation
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(entry.target);
        }
      });
    };

    const yearsIncrement = Math.ceil(200 / 1000); // Divide the total by a larger duration to slow down the animation
    const professionalsIncrement = Math.ceil(20 / 1000);
    const projectsIncrement = Math.ceil(32 / 1000);

    const animateNumbers = () => {
      let yearsCount = 0;
      let professionalsCount = 0;
      let projectsCount = 0;

      const animateStep = () => {
        if (yearsCount <= 201) {
          setYearsOfExperience(yearsCount);
          yearsCount += yearsIncrement;
        } else {
          setYearsOfExperience(201);
        }

        if (professionalsCount < 20) {
          setSkilledProfessionals(professionalsCount);
          professionalsCount += professionalsIncrement;
        } else {
          setSkilledProfessionals(20);
        }

        if (projectsCount < 32) {
          setProjects(projectsCount);
          projectsCount += projectsIncrement;
        } else {
          setProjects(32);
        }

        if (
          yearsCount < 201 ||
          professionalsCount < 20 ||
          projectsCount < 32
        ) {
          requestAnimationFrame(animateStep);
        }
      };

      requestAnimationFrame(animateStep);
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (yearsRef.current && professionalsRef.current && projectsRef.current) {
      observer.observe(yearsRef.current);
      observer.observe(professionalsRef.current);
      observer.observe(projectsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.workNumbers}>
      <div className={styles.content}>
        <h2 ref={yearsRef}>{yearsOfExperience}+</h2>
        <h3>Years of Experience</h3>
      </div>
      <div className={styles.content}>
        <h2 ref={professionalsRef}>{skilledProfessionals}</h2>
        <h3>Skilled Professionals</h3>
      </div>
      <div className={styles.content}>
        <h2>
          <span>0</span>
          <span ref={projectsRef}>{projects}</span>
        </h2>
        <h3>Projects</h3>
      </div>
    </div>
  );
}
