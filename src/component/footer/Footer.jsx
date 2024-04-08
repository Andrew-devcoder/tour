
import { useState } from "react";
import style from "./Footer.module.scss"

const { layout, container, upper, title, lower, grid, block, column, row, subtitle } = style

const Footer = () => {
	const [selectedOption, setSelectedOption] = useState('default');

	const options = [
		{ value: 'Турция', label: 'Турция' },
		{ value: 'Египет', label: 'Египет' },
		{ value: 'Шри-Ланка', label: 'Шри-Ланка' },
		{ value: 'Доминикана', label: 'Доминикана' },
	];

	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<footer className={layout}>
			<div className={upper}>
				<div className={container}>
					<h3 className={title}>Хочу предложение по туру</h3>

					<form onSubmit={handleSubmit}>

						<input type="text" placeholder="Имя" pattern="[A-Za-zА-Яа-яЁё]{1,}" required />
						<input type="email" placeholder="Email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required />
						<input type="tel" placeholder="Телефон" pattern="\+?\d{1,4}?[-.\\s]?\(?\d{1,}\)?[-.\\s]?\d{1,}[-.\\s]?\d{1,}[-.\\s]?\d{1,}" required />


						<select defaultValue={selectedOption} onChange={handleOptionChange} >
							<option value={selectedOption} disabled hidden>
								Страна тура
							</option>
							{options.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>
						<div></div>
						<button type="submit">Получить предложение</button>

					</form>

				</div>

			</div>

			<div className={lower}>
				<div className={container}>
					<div className={grid}>

						<div className={column}>
							<div className={row}>
								<img src="/picture/footer-logo.png" alt="" />
							</div>
							<div className={row}>
								<p>Кураж тур агенство,которое предоставляет услуги по поиску, оформлению и подбору туров для вас и ваших родных.</p>
							</div>
							<div className={row}>

								<p>Создание сайта  <span> - </span> </p>
								<img src="/picture/dev-logo.png" alt="" />

							</div>
						</div>
						<div className={block}>
							<div className={column}>
								<h3 className={subtitle}>
									Навигация
								</h3>
								<ul>
									<li>
										<a href="#">
											О компании
										</a>
									</li>
									<li>
										<a href="#">
											Тури
										</a>
									</li>
									<li>
										<a href="#">
											Контакти
										</a>
									</li>
									<li>
										<a href="#">
											Услуги
										</a>
									</li>
								</ul>

							</div>

							<div className={column}>
								<h3 className={subtitle}>
									Навигация
								</h3>
								<ul>
									<li>
										<a href="#">
											FAQ
										</a>
									</li>
									<li>
										<a href="#">
											Блог
										</a>
									</li>
									<li>
										<a href="#">
											Обратная связь
										</a>
									</li>
								</ul>
							</div>

							<div className={column}>
								<h3 className={subtitle}>
									Контакти
								</h3>
								<div className={row}>
									<p>г. Харьков, ул. Лермонтовская 10а</p>
								</div>
								<div className={row}>
									<a href="tel:+380999908100">+38 (099) 990-81-00</a>
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>

		</footer>
	)
};

export { Footer }