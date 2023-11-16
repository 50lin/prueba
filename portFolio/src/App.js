import { Routes, Route, useLocation } from 'react-router'
import { ThemeProvider } from 'styled-components'
import { lightTheme, DarkTheme } from './components/Themes'
import { useState } from 'react'
import GlobalStyles from './globalStyles'
import Main from './components/Main'
import WorkPage from './components/WorkPage'
import AboutPage from './components/AboutPage'
import MySkillsPage from './components/MySkillsPage'
import { AnimatePresence, motion } from 'framer-motion'
import SoundBar from './subComponents/SoundBar'
import ThemeSwitch from './subComponents/ThemeSwitch';
import LogoComponent from './subComponents/LogoComponent'
import PowerButton from './subComponents/PowerButton'
import styled from 'styled-components'



const DivLoco = styled.div`
position: absolute;

`;


function App() {

  const location = useLocation()
  const [theme, setTheme] = useState(lightTheme);
  const [clickMode, setclickMode] = useState(false)

  const handleClick = () => setclickMode(!clickMode);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === DarkTheme ? lightTheme : DarkTheme));
    handleClick()
  };

  const themeWithClickMode = { ...theme, clickMode };


  return (
    <>
      <GlobalStyles clickMode={clickMode} />
      <ThemeProvider theme={themeWithClickMode}>

        <DivLoco>
          <PowerButton />
          <LogoComponent />
          <SoundBar clickMode={clickMode} />
          <ThemeSwitch toggleTheme={toggleTheme} />
        </DivLoco>



        <AnimatePresence mode='wait'>


          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0, y: '100%' }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: '-100%' }}
                  transition={{ duration: 1 }}
                >
                  <Main clickMode={clickMode} />
                </motion.div>
              }
            />
            <Route
              path="/work"
              element={
                <motion.div

                >
                  <WorkPage clickMode={clickMode} />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0, x: '-100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '100%' }}
                  transition={{ duration: 1 }}
                >
                  <AboutPage clickMode={clickMode} />
                </motion.div>
              }
            />
            <Route
              path="/skills"
              element={
                <motion.div
                  initial={{ opacity: 0, x: '100%' }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: '-100%' }}
                  transition={{ duration: 1 }}
                >
                  <MySkillsPage clickMode={clickMode} />
                </motion.div>
              }
            />
          </Routes>

        </AnimatePresence>

      </ThemeProvider>
    </>
  )
}

export default App

