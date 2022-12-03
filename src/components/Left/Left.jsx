import { LeftSide } from "./Left.styled";
import { Info } from "./Info/InfoWrap.jsx";
import Contacts from "./Contact/Contacts.jsx"
import Soft from "./SoftSkills/SoftSkills.jsx";
import Hard from "./HardSkills/Hard.jsx";
import Education from "./education/Education.jsx";



export default function Left() {
	return (
		<LeftSide>
			<Info>
			</Info>
			<Contacts></Contacts>
			<Soft></Soft>
			<Hard></Hard>
			<Education></Education>
		</LeftSide>
	)
}