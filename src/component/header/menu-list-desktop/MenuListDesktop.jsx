
import { dataMenuList } from "../../../content/dataMenuList";
import style from "./MenuListDesktop.module.scss"

const { dropMenu, arrow, menu } = style

const MenuListDesktop = () => {
	return (
		<>
			<nav className={menu}>
				<ul>
					{dataMenuList.map((item, index) =>
					(item.dropMenu ? (
						<li
							key={index}
							className={dropMenu}
						// onMouseEnter={() => handleMouseEnter(index)}
						// onMouseLeave={() => handleMouseLeave(index)}
						>
							<a href={item.link}>{item.label}</a>
							{/* <span className={arrow}></span> */}
							<ul
							// className={dropListStates[index] ? `${dropListMenu} ${visible}` : dropListMenu}
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

		</>
	)
};

export { MenuListDesktop }