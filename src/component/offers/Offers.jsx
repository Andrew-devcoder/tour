
import { useEffect, useState } from "react";
import { SlickOffers } from "./slick-offers/SlickOffers";

import style from "./Offers.module.scss"

const { container, title, selected } = style

const Offers = () => {
	const [selectedTour, setSelectedTour] = useState(null);

	const handleSelect = (tourType) => {
		setSelectedTour(tourType);
	}

	useEffect(() => {
		handleSelect('hot')
	}, [])

	return (
		<div className={container}>

			<div className={title}>
				<h2 className={selectedTour === 'hot' ? selected : ''} onClick={() => handleSelect('hot')}>Горящие тури</h2>
				<h2 className={selectedTour === 'popular' ? selected : ''} onClick={() => handleSelect('popular')}>Популярние тури</h2>
			</div>

			<SlickOffers selectedTour={selectedTour} />

		</div>
	)
};

export { Offers }