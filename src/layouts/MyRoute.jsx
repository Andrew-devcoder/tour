import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "../page/home/Home";



const MyRoute = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>

		</>
	)
};

export { MyRoute }