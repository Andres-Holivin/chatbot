import { Avatar, HStack, Text, VStack } from "@chakra-ui/react";

const ChatBubble=(props)=>{  
    return(
      props.position==1?
        <HStack alignItems="end" spacing={2} alignSelf="end">
          <VStack alignItems="end" backgroundColor="whiteAlpha.300" paddingY="5px" paddingX="10px" borderTopRadius="15px" borderLeftRadius="15px" spacing={0}>
            <Text>Hello World</Text>
            <Text fontSize="8px" textColor="whiteAlpha.600">10.10 PM</Text>
          </VStack>
          <Avatar size="xs"></Avatar>
        </HStack>
      :
      <HStack alignItems="end" spacing={2} alignSelf="start" W="full">
        <Avatar size="xs"></Avatar>
        <VStack alignItems="start" backgroundColor="whiteAlpha.300" paddingY="5px" paddingX="10px" borderTopRadius="15px" borderRightRadius="15px" spacing={0}>
          <Text>Hello World</Text>
          <Text fontSize="8px" textColor="whiteAlpha.600">10.10 PM</Text>
        </VStack>
      </HStack>
    );
  }
export default ChatBubble;