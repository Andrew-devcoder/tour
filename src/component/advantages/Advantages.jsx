
import style from "./Advantages.module.scss"

const { layout, container, title, row } = style

const Advantages = () => {
	return (
		<div className={layout}>
			<div className={container}>
				<h3 className={title}>
					наши преимущества
				</h3>

				<div className={row}>
					<img src="/assets/picture/advantages.png" alt="" />
					<p>
						Очень долго подбирали разные варианты для того, чтобы отпраздновать свой юбилейный День рождения в путешествии и не могли определиться... Решили обратиться за помощью в турагенство. Гульнара, выслушав все пожелания, предложила отдых в Турции, отель Justiniano Club Park Conti 5* в Окурджалар возле Аланьи. Мы очень благодарны ей за предложенный вариант!!!! Отдых получился отличный! Отель с большой ухоженной территорией, внимательный обслуживающий персонал. Отличный номер с видом на море.
					</p>
				</div>
			</div>

		</div>
	)
};

export { Advantages }