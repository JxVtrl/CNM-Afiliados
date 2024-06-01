import React from 'react';
import Wrapper from '../Wrapper';

// import { Container } from './styles';

const MeetOurInstalations: React.FC = () => {
    return (
        <Wrapper>
            <h1>
            Conheça nossas instalações
            </h1>
            
            
        <div className="w-full max-w-[750px] h-full min-h-[350px] max-h-[500px]">
      <iframe
        src='https://champyxoficial.com/wp-content/uploads/2024/03/Design-sem-nome-22.mp4'
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "350px",
          maxHeight: "500px",
        }}
      ></iframe>
            </div>
</Wrapper>
            
            );
}

export default MeetOurInstalations;