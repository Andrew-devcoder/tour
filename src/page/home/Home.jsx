
import { Advantages } from "../../component/advantages/Advantages";
import { Intro } from "../../component/intro/Intro";
import { Offers } from "../../component/offers/Offers";
import style from "./Home.module.scss"


const Home = () => {
	return (
		<>
			<Intro />
			<Offers />
			<Advantages />
		</>
	)
};

export { Home }