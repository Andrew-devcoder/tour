import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css"

const Carrousel = () => {

	const settings = {
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3500,
		dots: true,
	};
	return (
		<>
			<Slider {...settings} className="intro-slick">
				<div>
					<img src="/picture/banner1.png" alt="" />
				</div>
				<div>
					<img src="/picture/banner2.png" alt="" />
				</div>
				<div>
					<img src="/picture/banner3.png" alt="" />
				</div>
				<div>
					<img src="/picture/banner4.png" alt="" />
				</div>
				<div>
					<img src="/picture/banner5.png" alt="" />
				</div>

			</Slider>

		</>
	)
};

export { Carrousel }