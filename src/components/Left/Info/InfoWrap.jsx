import { InfoWrraper } from "./Info.styled";
import ImgWrap from "../ImgWrap/ImgWrraper";
import MyName from "./Name.jsx";
import Position from "./Position.jsx";

export function Info() {
	return (
		<InfoWrraper>
			<ImgWrap></ImgWrap>
			<MyName></MyName>
			<Position></Position>
		</InfoWrraper>
	)
}