import styled from "styled-components";
import ConfigDark from "../config/particlesjs-config.json";
import Espacio from "../config/espacio.json";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Box = styled.div`
transition: background 0.5s;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = ({ clickMode}) => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };


  return (
    <Box style={{ background: clickMode ? "black" : "white" }}>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={ConfigDark}
        init={particlesInit}
      />
      {clickMode && (
        <Particles
          id="tsparticles2"
          style={{ position: "absolute", top: 0 }}
          params={Espacio}
          init={particlesInit}
        />
      )}
    </Box>
  );
};

export default ParticlesComponent;