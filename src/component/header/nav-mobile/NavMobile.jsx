import Hamburger from 'hamburger-react'

import style from "./NavMobile.module.scss"
import { useEffect, useState } from 'react';
import { MenuList } from '../menu-list/MenuList';
import { MenuListMobile } from '../menu-list-mobile/MenuListMobile';


const { wrapper } = style

const NavMobile = () => {
	const [isOpen, setOpen] = useState()
	const [isMobile, setMobile] = useState(false)

	useEffect(() => {
		if (isOpen) {
			setMobile(true)
		}
	})


	return (
		<>
			<div className={wrapper}>
				<Hamburger toggled={isOpen} toggle={setOpen} />

				{
					isOpen &&
					<MenuListMobile />

				}

			</div>

		</>
	)
};

export { NavMobile }