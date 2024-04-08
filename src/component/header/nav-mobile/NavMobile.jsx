import Hamburger from 'hamburger-react'

import style from "./NavMobile.module.scss"
import { useEffect, useState } from 'react';
import { MenuList } from '../menu-list/MenuList';


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
					isOpen && <div>
						<MenuList mobile={isMobile} />
					</div>
				}

			</div>

		</>
	)
};

export { NavMobile }