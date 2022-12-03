import  ImgWrraper  from "./ImgWrap.styled";

export default function ImgWrap() {
	return (
		<ImgWrraper>
			<img src={require("./my.jpeg")} alt="myPhoto" />
		</ImgWrraper>
	)
}