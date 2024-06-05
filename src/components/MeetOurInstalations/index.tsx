import React from 'react';
import Wrapper from '../Wrapper';
import Space from '../Space';
import CTAButton from '../CTAButton';

const MeetOurInstalations: React.FC = () => {
    return (
        <Wrapper>
            <h1>
            Conheça nossas instalações
            </h1>
            
            <Space height="35px" />
            
        <div className="w-full max-w-[750px] h-full min-h-[350px] max-h-[500px]">
      <iframe
        src='https://champyxoficial.com/wp-content/uploads/2024/03/Design-sem-nome-22.mp4'
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "350px",
          maxHeight: "500px",
        }}
      ></iframe>
        </div>
        
        <Space height="20px" />
        
        <CTAButton />
</Wrapper>
            
            );
}

export default MeetOurInstalations;