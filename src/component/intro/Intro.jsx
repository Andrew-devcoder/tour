import { Carrousel } from "./carrousel/Carrousel";

import style from "./Intro.module.scss"

const { container, content, wrapper, title } = style

const Intro = () => {
	return (
		<div className={container}>
			<Carrousel />

			<div className={wrapper}>
				<div className={content}>
					<h1 className={title}>Лучшие предложения по солнечному Египту из Харькова</h1>
					<button>Получить предложение</button>
				</div>
			</div>
		</div>
	)
};

export { Intro }