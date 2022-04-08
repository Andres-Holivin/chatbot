import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'

const Home = () => {
  return (
    <Box>
      <p>only this paragraph will get the style :)</p>

        {/* you can include <Component />s here that include
            other <p>s that don't get unexpected styles! */}

        <style jsx>{`
          p {
            color: red;
          }
        `}</style>
    </Box>
  )
}
export default Home;
