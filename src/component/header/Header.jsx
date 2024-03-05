


import style from "./Header.module.scss"

const { container, wrapperMain, wrapperLogo, menu } = style

const Header = () => {
	return (
		<header className={container}>
			<div className={wrapperMain}>
				<div className={wrapperLogo}>
					<img src="../../src/assets/picture/logo.png" alt="" />
				</div>

				<div className={menu}>
					<ul>
						<li>Главная</li>
						<li>Тури</li>
						<li>Страни</li>
						<li>Услуги</li>
						<li>О компании</li>
						<li>Контаки</li>
					</ul>
				</div>
			</div>


		</header>
	)
};

export { Header }