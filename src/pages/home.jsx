import Nav from "../componentws/nav";
import About from "../componentws/about";
import Event from "../componentws/event";
import Service from "../componentws/service";
import BlogPostsList from "../componentws/blog";
import Footer from "../componentws/footer";
import Trust from "../componentws/trust";
import HomeSlider from "../componentws/Slider";
import Holding from "../componentws/holding";
const Home = () => {
	const slides = [
		{
			title: "Curating Memorable Moments for Your Event",
			description:
				"Be part of a community that celebrates uniqueness, where each event promises to be a distinct and remarkable affair.",
			image: "https://picsum.photos/seed/picsum/200/300",
		},
		{
			title: "Curating Memorable Moments for Your Event",
			description:
				"Be part of a community that celebrates uniqueness, where each event promises to be a distinct and remarkable affair.",
			image: "https://picsum.photos/seed/picsum/200/300",
		},
	];
	return (
		<>
			<header>
				<Nav />
			</header>
			<main className="flex flex-col gap-20 overflow-x-hidden">
				<HomeSlider slides={slides} />
				<Trust />
				<About />
				<Event />
				<Service />
				<Holding />
				{/* <BlogPostsList /> */}
			</main>
			<Footer />
		</>
	);
};

export default Home;
