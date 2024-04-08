import { MenuList } from "./menu-list/MenuList";
import { ContactsHeader } from "./contacts-header/ContactsHeader";

import style from "./Header.module.scss"
import { useState } from "react";
import { NavMobile } from "./nav-mobile/NavMobile";

import { useMediaQuery } from 'react-responsive'

const { container, wrapperMain, wrapperLogo } = style

const Header = () => {


	const isMobileScreen = useMediaQuery({ query: '(max-width: 1024px)' })



	return (
		<header className={container}>
			<div className={wrapperMain}>

				<div className={wrapperLogo}>
					<img src="/picture/logo.png" alt="" />
				</div>

				<div>
					<ContactsHeader />
					{
						isMobileScreen ?
							<NavMobile /> :
							<MenuList />

					}

				</div>

			</div>
		</header >
	)
};

export { Header }