import { PiMapPinFill } from "react-icons/pi";
import { BsTelephoneFill } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { PiInstagramLogo } from "react-icons/pi";

import style from "./ContactsHeader.module.scss"

const { container, wrapper } = style

const ContactsHeader = () => {
	return (
		<div className={container}>
			<div className={wrapper}>
				<PiMapPinFill color="#f2f2f2" />
				<p>г. Харьков, ул. Мироносицкая 10а</p>
			</div>

			<div className={wrapper}>
				<BsTelephoneFill color="#f2f2f2" />
				<p><a href="tel:+380999908100">+38 (099) 990-81-00</a> (viber, telegram)</p>

			</div>

			<div className={wrapper}>
				<FaSquareFacebook color="#f2f2f2" />
				<PiInstagramLogo color="#f2f2f2" />
			</div>
		</div>
	)
};

export { ContactsHeader }