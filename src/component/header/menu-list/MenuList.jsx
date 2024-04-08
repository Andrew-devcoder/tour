
import { useEffect, useState } from "react";
import style from "./MenuList.module.scss"

const dataMenuList = [
	{
		label: 'Главная',
		link: '#'
	},
	{
		label: 'Тури',
		link: '#',
		dropMenu: [
			{
				label: 'Горящие туры',
				link: '#',
			},
			{
				label: 'Поиск тура',
				link: '#',
			},
			{
				label: 'Горящие туры',
				link: '#',
			},
			{
				label: 'Туры по Украине',
				link: '#',
			},
			{
				label: 'Экскурсионные туры',
				link: '#',
			},
			{
				label: 'Week end туры',
				link: '#',
			},
		]
	},
	{
		label: 'Страни',
		link: '#'
	},
	{
		label: 'Услуги',
		link: '#',
		dropMenu: [
			{
				label: 'Авиабилеты',
				link: '#',
			},
			{
				label: 'Визовая поддержка',
				link: '#',
			},
			{
				label: 'Индивидуальный трансфер',
				link: '#',
			},
			{
				label: 'Подарочные сертификаты',
				link: '#',
			},
			{
				label: 'Бронирование отелей и апартаментов',
				link: '#',
			},
			{
				label: 'Как забронировать и оплатить тур',
				link: '#',
			},
		]
	},
	{
		label: 'О компании',
		link: '#'
	},
	{
		label: 'Контаки',
		link: '#'
	},
]

const { menu, dropMenu, dropListMenu, visible, arrow, menuMobile } = style

const MenuList = ({ mobile }) => {
	const [dropListStates, setDropListStates] = useState({});
	const [isMobile, setMobile] = useState(false)

	useEffect(() => {
		if (mobile) {
			setMobile(true)
		}
	}, [mobile])

	const handleMouseEnter = (index) => {
		setDropListStates((prevStates) => ({
			...prevStates,
			[index]: true,
		}));
	};

	const handleMouseLeave = (index) => {
		setDropListStates((prevStates) => ({
			...prevStates,
			[index]: false,
		}));
	};

	const handleChange = (index) => {
		setDropListStates((prevState) => {
			const updatedStates = { ...prevState };
			updatedStates[index] = !updatedStates[index]; // зміна стану для відповідного елементу
			return updatedStates;
		});
	};


	return (
		<>
			{
				isMobile ? (<div className={menuMobile} >
					< ul >
						{
							dataMenuList.map((item, index) =>
							(item.dropMenu ? (
								<li
									key={index}
									className={dropMenu}
									onClick={() => handleChange(index)}
								>
									<a href={item.link}>{item.label}</a><span className={arrow}></span>
									<ul className={dropListStates[index] ? `${dropListMenu} ${visible}` : dropListMenu}>
										{item.dropMenu.map((subItem, subIndex) => (
											<li key={subIndex}>
												<a href={subItem.link}>{subItem.label}</a>
											</li>
										))}
									</ul>
								</li>
							) : <li key={index}><a href={item.link}>{item.label}</a></li>)
							)
						}
					</ul >
				</div >) : (<div className={menu}>
					<ul>
						{dataMenuList.map((item, index) =>
						(item.dropMenu ? (
							<li
								key={index}
								className={dropMenu}
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={() => handleMouseLeave(index)}
							>
								<a href={item.link}>{item.label}</a><span className={arrow}></span>
								<ul className={dropListStates[index] ? `${dropListMenu} ${visible}` : dropListMenu}>
									{item.dropMenu.map((subItem, subIndex) => (
										<li key={subIndex}>
											<a href={subItem.link}>{subItem.label}</a>
										</li>
									))}
								</ul>
							</li>
						) : <li key={index}><a href={item.link}>{item.label}</a></li>)
						)}
					</ul>
				</div>)}

		</>
	)

};

export { MenuList }