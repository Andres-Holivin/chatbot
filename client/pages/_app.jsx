import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'


const MyApp = ({ Component, pageProps }) => {
  return(
    <ChakraProvider>
      <style global jsx>{`
        *{
          margin:0px;
          padding:0px;
        }
      `}</style>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp
