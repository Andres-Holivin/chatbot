import { HStack, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { IoIosWarning} from "react-icons/io";
const ModalMaintenance=(props)=>{
    return (
        <Modal isCentered isOpen={props.open} onClose={props.close} >
            <ModalOverlay bg='blackAlpha.400' backdropFilter='blur(5px)'/>
            <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <HStack spacing={2} justify="center">
                        <Icon as={IoIosWarning} color="yellow.400" fontSize="32px" />
                        <Text paddingY="25px">This feature is in Development!!!</Text>
                    </HStack>
                </ModalBody>           
            </ModalContent>
        </Modal>
    )
}
export default ModalMaintenance;