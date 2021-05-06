import OurExpertise from './Our_expertise';
import Projects from './Projects';
import React, { Fragment } from 'react';
import WhoWeAre from './Who_we_are';
import WhyChooseUs from './Why_choose_us';

export default function Home() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1.5
      },
      exit: {
        x: -100 + 'vw',
        transition: { ease: 'easeInOut'}
      }
    }
  }

    return(
      <Fragment>
        
          <WhoWeAre />
          <WhyChooseUs />
          <OurExpertise />
          <Projects /> 
        
      </Fragment>
    );
}
  