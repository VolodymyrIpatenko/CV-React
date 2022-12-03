import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from "react-icons/bs";
import { Title,Desc,Box} from "../Left.styled";

export default function Contacts() {
	return (
		  <Box>
			<Title>Contacts</Title>
			<Desc><AiOutlineMail></AiOutlineMail>ipatenkovolodymyr5@gmail.com</Desc>
			<Desc><BsTelephone></BsTelephone>+380 98 44 24 827</Desc>
			</Box>
			)
}