import { MenuList } from "./menu-list/MenuList";
import style from "./Header.module.scss"
import { ContactsHeader } from "./contacts-header/ContactsHeader";

const { container, wrapperMain, wrapperLogo } = style

const Header = () => {
	return (
		<header className={container}>
			<div className={wrapperMain}>

				<div className={wrapperLogo}>
					<img src="../../src/assets/picture/logo.png" alt="" />
				</div>

				<div>
					<ContactsHeader />
					<MenuList />
				</div>

			</div >
		</header >
	)
};

export { Header }