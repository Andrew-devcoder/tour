

import style from "./Intro.module.scss"
import { Carrousel } from "./carrousel/Carrousel";



const Intro = () => {



	return (
		<div className={style.container}>
			<Carrousel />
		</div>
	)
};

export { Intro }