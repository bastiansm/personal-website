import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Stack from "./components/Stack"
import Loading from "./components/Loading"
import { GlobalStyles } from "./styles/Global.styled"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="app">
      <GlobalStyles />
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loading />
          </motion.div>
        ) :
          <>
            <Navbar />
            <Hero />
            <Project />
            <Stack />
            <Footer />
          </>
        }
      </AnimatePresence>
    </div>
  )
}

export default App
