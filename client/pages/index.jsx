import { Avatar, Box, Container, Flex, Heading, HStack, Icon, IconButton, Input, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { IoIosSend ,IoIosAdd} from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import ChatBubble from './components/ChatBubble';
import { useEffect, useRef } from 'react';
import { GoPrimitiveDot } from "react-icons/go";
import ModalMaintenance from './components/modal/ModalMaintenance';
import ModalLogin from './components/modal/ModalLogin';

const Home = () => {
  const chatScroll = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    chatScroll.current.scrollIntoView({ behavior: "smooth" });
    chatScroll.current.scrollTo(0,chatScroll.current.scrollHeight);
  }, [chatScroll]);
  return (
    <Box backgroundColor="gray.700" h="100vh" maxH="100vh" padding="15px" textColor="white">
      <VStack backgroundColor="blackAlpha.300" h="full" borderRadius="8px" padding="20px" align='stretch' justify="space-between" spacing={3}>
        <HStack backgroundColor="whiteAlpha.200" borderRadius="8px" padding="8px" spacing={3}>
          <Avatar></Avatar>
          <VStack alignItems="start" spacing={1}>
            <Heading fontSize="xl">hello</Heading>
            <HStack spacing={1} alignItems="center">
              <Icon as={GoPrimitiveDot} color="green.300" boxSize="12px"/>
              <Text fontSize="12px" textColor="whiteAlpha.600">Hello</Text>
            </HStack>
          </VStack>
        </HStack>
        <style jsx>{`

        `}</style>
        <Box overflow="auto" className='custom-scroll' h="full" ref={chatScroll}>
          <VStack  justifyContent="end" paddingX="25px" minH="full">
            <ChatBubble position={2}/>
            <ChatBubble position={1}/>
          </VStack>
        </Box>
        <HStack backgroundColor="whiteAlpha.200" borderRadius="8px" padding="8px" spacing={1}>          
          <IconButton size='sm' borderRadius="8px" backgroundColor="blackAlpha.300" colorScheme="blackAlpha" _focus={{boxShadow:"0 0 0 0 transparent"}} 
            icon={<Icon as={IoIosAdd} boxSize="30px" color="white"/>}
          />          
          <Input paddingX="5px" type="" variant='unstyled' placeholder='Type a message here...' />
          <IconButton
            onClick={onOpen}
            size='sm' borderRadius="8px" backgroundColor="transparent" colorScheme="blackAlpha" _focus={{boxShadow:"0 0 0 0 transparent"}} 
            icon={<Icon as={BsEmojiSmile} boxSize="22px" color="white"/>}
          />
          <IconButton size='sm' borderRadius="8px" backgroundColor="blackAlpha.300" colorScheme="blackAlpha" _focus={{boxShadow:"0 0 0 0 transparent"}} 
            icon={<Icon as={IoIosSend} boxSize="22px" color="white"/>}
          />
        </HStack>
      </VStack>
      {/* <ModalMaintenance open={isOpen} close={onClose}/> */}
      <ModalLogin open={isOpen} close={onClose}/>
    </Box>
  )
}
export default Home;

