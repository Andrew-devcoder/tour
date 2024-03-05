
import style from "./ProductCard.module.scss"

const { container, content, title, btnDetails } = style

const ProductCard = ({ card }) => {
	return (
		<div className={container}>
			<img src={card.imgHref} alt="" />
			<div className={content}>
				<div className={title}>
					<h3>{card.title}</h3>
					<p>{card.dateRage}</p>
				</div>
				<p>{card.description}</p>
				<p>{card.price}<sup>/за 1 человека</sup></p>
			</div>
			<button className={btnDetails}>

			</button>
		</div>
	);
};

export { ProductCard }