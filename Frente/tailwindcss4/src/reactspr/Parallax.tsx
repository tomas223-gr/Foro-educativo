import React, { useState, useEffect,useRef } from 'react';
import styles from './ParallaxIntro.module.css';
import { motion } from "framer-motion";
import {PlanetA  , PlanetC, PlanetD, PlanetE, PlanetF, PlanetG} from '../Anim/Planet';






//esto es para la constante useIsVisible 
const useIsVisible = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isVisible };
};



const Info = () => {
  const { ref, isVisible } = useIsVisible();
  
  return (
    <div
      ref={ref}
      style={{
        marginTop: "25vh",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 0}} // primero no se ve
          animate={{ opacity: 1, y: ["7px", "-15px", "-1px"] }} //  despues si se ve
          transition={{ duration: 1, delay: 5 }} // Duración de la animación
        >
          <div className={styles.ttt}>
            <p> Sigue bajando para ver más </p>
            <div className="text-4xl">▼</div>

          </div>
        </motion.div>
      ) : null}
    </div>
  )
}






const TextOne = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }} 
      className={styles.container} 
    >
      <div className={styles.center}>
        <h1 className={styles.snt}>Impacta, Influye e Inspira ...</h1>

        <motion.p 
          className={styles.rnt}
          initial={{ opacity: 0, y: -5 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.5 }} 
        >
        <p>  Empieza a crear y sorprende  </p>  
        </motion.p>
      </div>
    </motion.div>
  );
};



const Planetas =()  =>{
  return (
    <motion.div 
    initial={{ opacity: 0, y: -5 }} 
    animate={{ opacity: 1, y: ["10px", "-10px", "0px"] }}
    transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
    >
        <PlanetA/>
        {/* <PlanetB/> */}
        <PlanetC/>
        <PlanetD/>
        <PlanetE/>
        <PlanetF/>
        <PlanetG/>
    </motion.div>
  )
}





const Componente= () => {
  return (
    <div className={styles.background}>
   
    
     <TextOne/>
      <Planetas/>
      <Info/>


    </div>
  )
}


export default Componente;
