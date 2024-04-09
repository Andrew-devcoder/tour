
import { useEffect, useState } from "react";
import style from "./MenuList.module.scss"

import { dataMenuList } from "../../../content/dataMenuList";

const { menu, dropMenu, dropListMenu, visible, arrow, menuMobile } = style

const MenuList = ({ mobile }) => {
	const [dropListStates, setDropListStates] = useState({});
	const [isMobile, setMobile] = useState(false)

	useEffect(() => {
		if (mobile) {
			setMobile(true)
		}
	}, [mobile])

	useEffect(() => {
		if (mobile) {
			setMobile(true)
		}
	}, [])

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
									onClick={(e) => handleChange(e, index)}
								>
									<a href={item.link}>{item.label}</a><span className={arrow}></span>
									<ul className={dropListStatesMobile[index] ? `${dropListMenu} ${visible}` : dropListMenu}>
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