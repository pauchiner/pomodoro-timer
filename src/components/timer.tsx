import { useContext, useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { Context } from "../store/context";
import { motion } from 'framer-motion';

const Timer = () => {
  const { timeLeft }: any = useContext(Context);
  const [screenSize, getScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    window.addEventListener("resize", setScreenSize)
    return (() => {
      window.removeEventListener("resize", setScreenSize)
    })
  }, [screenSize])

  const getTime = () => {
    var minutes = Math.floor((timeLeft % 3600) / 60);
    var seconds = Math.floor((timeLeft % 3600) % 60);

    return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  };

  const getTextSize = () => {
    return (screenSize.width / screenSize.height)
  }

  const setScreenSize = () => {
    getScreenSize({ width: window.innerWidth, height: window.innerHeight });
  }

  return (
    <Box textAlign="center">
      <Text as={motion.h1} initial={{ zoom: 0.7 }} animate={{ zoom: getTextSize() }} fontSize="4xl" fontWeight={500}>
        {timeLeft >= 0 ? getTime() : "00:00"}
      </Text>
    </Box>
  );
};

export default Timer;
