import { Title,Desc,Box} from "../Left.styled";
import { TbBulb } from "react-icons/tb";
import { TiMessage } from "react-icons/ti";
import { BiTimeFive } from "react-icons/bi";


export default function Soft() {
	return (
		<Box>
			<Title>Soft Skills</Title>
			<Desc><TbBulb></TbBulb>Critical Thinking</Desc>
			<Desc><TiMessage></TiMessage>Communication</Desc>
			<Desc><BiTimeFive></BiTimeFive>Time Management</Desc>
		</Box>
	)
}