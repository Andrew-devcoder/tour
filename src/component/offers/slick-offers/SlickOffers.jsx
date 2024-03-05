import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from "../product-card/ProductCard";

import style from "./SlickOffers.module.scss"

const { arrows, rightArrow, leftArrow } = style

const NextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} ${arrows} ${rightArrow}`}
			style={{ ...style, display: "block", background: "transparent" }}
			onClick={onClick}
		/>
	);
}

const PrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} ${arrows} ${leftArrow}`}
			style={{ ...style, display: "block", background: "transparent" }}
			onClick={onClick}
		/>
	);
}

const SlickOffers = () => {

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 1500,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />
	}

	const cardList = [
		{
			imgHref: '/picture/product1.png',
			title: '8 марта в Cyrene Sharm hotel',
			dateRage: '(12.03.2018 — 19.03.2018)',
			description: 'Перелёт, питание по системе all inclusive, трансфер',
			price: '1 259 грн'
		},
		{
			imgHref: '/picture/product2.png',
			title: '8 марта в Cyrene Sharm hotel',
			dateRage: '(12.03.2018 — 19.03.2018)',
			description: 'Перелёт, питание по системе all inclusive, трансфер',
			price: '1 259 грн'
		},
		{
			imgHref: '/picture/product2.png',
			title: '8 марта в Cyrene Sharm hotel',
			dateRage: '(12.03.2018 — 19.03.2018)',
			description: 'Перелёт, питание по системе all inclusive, трансфер',
			price: '1 259 грн'
		},
	]

	return (
		<div className={style.container}>



			<Slider {...settings}>
				{cardList.map((card, index) => (
					<div key={index}>
						<ProductCard card={card} />
					</div>
				))}
			</Slider >

		</div >
	)
};

export { SlickOffers }