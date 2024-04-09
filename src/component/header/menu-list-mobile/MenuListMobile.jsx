
import { useState } from "react";
import { dataMenuList } from "../../../content/dataMenuList";

import style from "./MenuListMobile.module.scss"

const { menu, dropMenu, dropListMenu, arrow, visible } = style

const MenuListMobile = () => {
	const [dropListStatesMobile, setDropListStatesMobile] = useState({});

	const handleChange = (e, index) => {
		e.preventDefault()
		setDropListStatesMobile((prevState) => {
			const updatedStates = { ...prevState };
			updatedStates[index] = !updatedStates[index];
			return updatedStates;
		});
	};

	return (
		<nav className={menu}>
			<ul>
				{dataMenuList.map((item, index) =>
				(item.dropMenu ? (
					<li
						key={index}
						className={dropMenu}
						onClick={(e) => handleChange(e, index)}
					>
						<a href={item.link}>{item.label}</a>
						{/* <span className={arrow}></span> */}
						<ul
							className={dropListStatesMobile[index] ? `${dropListMenu} ${visible}` : dropListMenu}
						>
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
		</nav>
	)
};

export { MenuListMobile }