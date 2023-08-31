import { Link } from "react-router-dom";
import Nav from "../componentws/nav";

export default function NotFound() {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main className="text-white  mt-20 lg:mt-32 flex items-center justify-center ">
				<section className=" flex flex-col items-center">
					<svg
						className="mb-12"
						width="480"
						height="596"
						viewBox="0 0 480 596"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0_234_13)">
							<path
								d="M480.115 536V536.244L479.923 536.394L404.056 595.624L403.249 596.255V595.23V498.952V498.708L403.441 498.558L479.308 439.327L480.115 438.697V439.721V536ZM404.249 594.205L479.115 535.756V440.746L404.249 499.196V594.205Z"
								stroke="url(#paint0_linear_234_13)"
							/>
							<path
								d="M312.592 402.442V402.686L312.4 402.836L261.146 442.955L312.4 482.922L312.592 483.072V483.316V537.825L378.293 486.538V267.075H312.592V402.442ZM311.592 402.199V266.575V266.075H312.092H378.793H379.293V266.575V486.782V487.026L379.101 487.176L312.4 539.243L311.592 539.874V538.849V483.56L260.026 443.35L259.521 442.957L260.025 442.562L311.592 402.199Z"
								stroke="url(#paint1_linear_234_13)"
							/>
							<path
								d="M480.115 408.065V408.309L479.923 408.459L404.056 467.69L403.249 468.32V467.295V155.74V155.24H403.749H479.615H480.115V155.74V408.065ZM404.249 466.271L479.115 407.821V156.24H404.249V466.271Z"
								stroke="url(#paint2_linear_234_13)"
							/>
							<path
								d="M287.445 495.092L287.638 495.242V495.486V558.336V558.58L287.445 558.73L240.308 595.547L240 595.787L239.693 595.547L192.555 558.73L192.363 558.58V558.336V495.486V495.242L192.555 495.092L239.693 458.275L240 458.035L240.308 458.275L287.445 495.092ZM286.638 558.092V495.73L240 459.303L193.363 495.73V558.092L240 594.518L286.638 558.092Z"
								stroke="url(#paint3_linear_234_13)"
							/>
							<path
								d="M167.6 402.836L167.408 402.686V402.442V267.075H101.707V486.538L167.408 537.825V483.316V483.072L167.6 482.921L218.93 442.955L167.6 402.836ZM168.408 266.575V402.199L220.051 442.562L220.556 442.957L220.05 443.351L168.408 483.56V538.849V539.874L167.6 539.243L100.899 487.176L100.707 487.026V486.782V266.575V266.075H101.207H167.908H168.408V266.575Z"
								stroke="url(#paint4_linear_234_13)"
							/>
							<path
								d="M287.637 383.88V384.38H287.137H192.862H192.362V383.88V245.595L101.042 213.825L100.706 213.708V213.352V155.74V155.24H101.206H378.793H379.293V155.74V213.352V213.708L378.957 213.825L287.637 245.595V383.88ZM193.362 383.38H286.637V245.24V244.884L286.973 244.767L378.293 212.997V156.24H101.706V212.997L193.027 244.767L193.362 244.884V245.24V383.38Z"
								stroke="url(#paint5_linear_234_13)"
							/>
							<path
								d="M-0.114532 0.38501V-0.11499H0.385468H76.329H76.829V0.38501V54.3399H201.529V0.38501V-0.11499H202.029H277.972H278.472V0.38501V54.3399H403.249V0.38501V-0.11499H403.749H479.615H480.115V0.38501V130.784V131.284H479.615H0.385468H-0.114532V130.784V0.38501ZM75.829 0.88501H0.885468V130.284H479.115V0.88501H404.249V54.8399V55.3399H403.749H277.972H277.472V54.8399V0.88501H202.529V54.8399V55.3399H202.029H76.329H75.829V54.8399V0.88501Z"
								stroke="url(#paint6_linear_234_13)"
							/>
						</g>
						<defs>
							<linearGradient
								id="paint0_linear_234_13"
								x1="479.992"
								y1="517.451"
								x2="403.368"
								y2="517.451"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" />
								<stop offset="0.085261" stopColor="#E2E1E1" />
								<stop offset="0.2676" stopColor="#A8A7A7" />
								<stop offset="0.4438" stopColor="#797677" />
								<stop offset="0.6095" stopColor="#535051" />
								<stop offset="0.7621" stopColor="#393536" />
								<stop offset="0.897" stopColor="#292526" />
								<stop offset="1" stopColor="#231F20" />
							</linearGradient>
							<linearGradient
								id="paint1_linear_234_13"
								x1="379.176"
								y1="402.692"
								x2="259.685"
								y2="402.692"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" />
								<stop offset="0.085261" stopColor="#E2E1E1" />
								<stop offset="0.2676" stopColor="#A8A7A7" />
								<stop offset="0.4438" stopColor="#797677" />
								<stop offset="0.6095" stopColor="#535051" />
								<stop offset="0.7621" stopColor="#393536" />
								<stop offset="0.897" stopColor="#292526" />
								<stop offset="1" stopColor="#231F20" />
							</linearGradient>
							<linearGradient
								id="paint2_linear_234_13"
								x1="479.992"
								y1="311.494"
								x2="403.368"
								y2="311.494"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" />
								<stop offset="0.085261" stopColor="#E2E1E1" />
								<stop offset="0.2676" stopColor="#A8A7A7" />
								<stop offset="0.4438" stopColor="#797677" />
								<stop offset="0.6095" stopColor="#535051" />
								<stop offset="0.7621" stopColor="#393536" />
								<stop offset="0.897" stopColor="#292526" />
								<stop offset="1" stopColor="#231F20" />
							</linearGradient>
							<linearGradient
								id="paint3_linear_234_13"
								x1="287.535"
								y1="526.93"
								x2="192.505"
								y2="526.93"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" />
								<stop offset="0.085261" stopColor="#E2E1E1" />
								<stop offset="0.2676" stopColor="#A8A7A7" />
								<stop offset="0.4438" stopColor="#797677" />
								<stop offset="0.6095" stopColor="#535051" />
								<stop offset="0.7621" stopColor="#393536" />
								<stop offset="0.897" stopColor="#292526" />
								<stop offset="1" stopColor="#231F20" />
							</linearGradient>
							<linearGradient
								id="paint4_linear_234_13"
								x1="220.339"
								y1="402.692"
								x2="100.849"
								y2="402.692"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" />
								<stop offset="0.085261" stopColor="#E2E1E1" />
								<stop offset="0.2676" stopColor="#A8A7A7" />
								<stop offset="0.4438" stopColor="#797677" />
								<stop offset="0.6095" stopColor="#535051" />
								<stop offset="0.7621" stopColor="#393536" />
								<stop offset="0.897" stopColor="#292526" />
								<stop offset="1" stopColor="#231F20" />
							</linearGradient>
							<linearGradient
								id="paint5_linear_234_13"
								x1="379.188"
								y1="269.788"
								x2="100.86"
								y2="269.788"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" />
								<stop offset="0.085261" stopColor="#E2E1E1" />
								<stop offset="0.2676" stopColor="#A8A7A7" />
								<stop offset="0.4438" stopColor="#797677" />
								<stop offset="0.6095" stopColor="#535051" />
								<stop offset="0.7621" stopColor="#393536" />
								<stop offset="0.897" stopColor="#292526" />
								<stop offset="1" stopColor="#231F20" />
							</linearGradient>
							<linearGradient
								id="paint6_linear_234_13"
								x1="479.637"
								y1="65.619"
								x2="-0.328975"
								y2="65.619"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="white" />
								<stop offset="0.085261" stopColor="#E2E1E1" />
								<stop offset="0.2676" stopColor="#A8A7A7" />
								<stop offset="0.4438" stopColor="#797677" />
								<stop offset="0.6095" stopColor="#535051" />
								<stop offset="0.7621" stopColor="#393536" />
								<stop offset="0.897" stopColor="#292526" />
								<stop offset="1" stopColor="#231F20" />
							</linearGradient>
							<clipPath id="clip0_234_13">
								<rect
									width="480"
									height="596"
									fill="white"
									transform="matrix(-1 0 0 1 480 0)"
								/>
							</clipPath>
						</defs>
					</svg>
					<h1 className="text-2xl font-medium mb-4">⚠️ Under Construction</h1>
					<p className=" opacity-80 text-center">
						We apologize for the inconvenience, but this page is currently
						undergoing enhancements to provide you with an even better <br />
						experience. Our team is hard at work to bring you fresh and exciting
						content. We appreciate your understanding <br /> and can't wait to
						showcase the results!
					</p>
					<Link className="  underline px-10 py-2 font-bold rounded-lg" to="/">
						Back To Home
					</Link>
				</section>
			</main>
		</>
	);
}
