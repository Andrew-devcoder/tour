
import style from "./Footer.module.scss"

const { layout, container, upper, title, lower, block, column, row } = style

const Footer = () => {
	return (
		<footer className={layout}>
			<div className={upper}>
				<div className={container}>
					<h3 className={title}>Хочу предложение по туру</h3>


					<form action="">

						<input type="text" placeholder="Имя" />
						<input type="mail" placeholder="Email" />
						<input type="tel" placeholder="Телефон" />
						<select name="" id="">
							<option value="default" disabled selected hidden>
								Страна тура
							</option>
							<option value="Турция">Турция</option>
							<option value="Египет">Египет</option>
							<option value="Шри-Ланка">Шри-Ланка</option>
							<option value="Доминикана">Доминикана</option>
						</select>

						<button
							onClick={(e) => e.preventDefault()}
						>
							Получит предложение
						</button>

					</form>

				</div>

			</div>

			<div className={lower}>
				<div className={container}>
					<div className={block}>

						<div className={column}>
							<div className={row}>
								<img src="../../src/assets/picture/footer-logo.png" alt="" />
							</div>
							<div className={row}>
								<p>Кураж тур агенство,которое предоставляет услуги по поиску, оформлению и подбору туров для вас и ваших родных.</p>
							</div>
							<div className={row}>

								<p>Создание сайта</p>
								<img src="../../src/assets/picture/dev-log0.png" alt="" />

							</div>
						</div>

					</div>

				</div>
			</div>

		</footer>
	)
};

export { Footer }