import OurExpertise from './Our_expertise';
import Projects from './Projects';
import React, { Fragment } from 'react';
import WhoWeAre from './Who_we_are';
import WhyChooseUs from './Why_choose_us';

export default function Home() {
    return(
      <Fragment>
        
          <WhoWeAre />
          <WhyChooseUs />
          <OurExpertise />
          <Projects /> 
        
      </Fragment>
    );
}
  