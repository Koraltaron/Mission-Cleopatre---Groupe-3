import { useState, useRef } from 'react'
import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const char = [
	{
		charName: "Idefix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/idefix.jpg",
		shortenedLegend: "Salut ! Moi c'est Idéfix je suis la star...",
		fullLegend:
			"Salut ! Moi c'est Idéfix je suis la star du film Astérix lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
	},

	{
		charName: "Cléopâtre",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/cleopatre.jpg",
		shortenedLegend: "Bonjour. Bienvenue étrangers. Comme vous le savez...",
		fullLegend:
			"Bonjour. Bienvenue étrangers. Comme vous le savez je suis la reine d'Egypte Cléopâtre. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
	},

	{
		charName: "César",
		charOrigin: "romain",
		imgSrc: "./src/Images/cesar.jpg",
		shortenedLegend: "Bonjour. Comme vous le savez je suis le grand empereur",

		fullLegend:
			"Bonjour. Comme vous le savez je suis le grand empereur romain César. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
	},

	{
		charName: "Numérobis",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/numerobis.jpg",
		shortenedLegend: "Salut ! Moi c'est Numérobis ! Je suis...",
		fullLegend:
			"Salut ! Moi c'est Numérobis ! Je suis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
	},

	{
		charName: "Astérix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/asterix.jpg",
		shortenedLegend: "Salut ! Moi c'est Astérix comment ça va vous?",
		fullLegend:
			"Salut ! Moi c'est Astérix comment ça va vous? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. ",
	},

	{
		charName: "Caius Antivirus",
		charOrigin: "romain",
		imgSrc: "./src/Images/caius-antivirus.jpg",
		shortenedLegend:
			"Salut ! Je m'appelle Caius Antivirus et très sincèrement...",
		fullLegend:
			"Salut ! Je m'appelle Caius Antivirus et très sincèrement Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.",
	},

	{
		charName: "Cartapus",
		charOrigin: "romain",
		imgSrc: "./src/Images/cartapus.jpg",
		shortenedLegend: "Salut ! Si vous me voyez je suis Cartapus...",
		fullLegend:
			"Salut ! Si vous me voyez je suis Cartapus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. ",
	},

	{
		charName: "Obélix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/obelix.jpg",
		shortenedLegend: " Salut ! Moi c'est Obélix ! Voilà.",
		fullLegend: "Salut ! Moi c'est Obélix ! Voilà.",
	},
	{
		charName: "Amonbeaufils",
		charOrigin: "égyptien",
		imgSrc: "./src/Images/amonbeaufils.jpg",
		shortenedLegend: " Bonjour, je suis Amonbeaufils...",
		fullLegend:
			"Bonjour, je suis Amonbeaufils Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. ",
	},

	{
		charName: "Panoramix",
		charOrigin: "gaulois",
		imgSrc: "./src/Images/panoramix.jpg",
		shortenedLegend: "Bonjour jeunes gens, vous savez...",
		fullLegend:
			"Bonjour jeunes gens, vous savez. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. ",
	},
];

function App() {
	const [input, setInput] = useState<string>("");
	const [goFilter, setGoFilter] = useState(true);

	const handleFilter = () => {
		setGoFilter(!goFilter);
	}

	const handleChange = (event) => {
		console.log(input);
		setInput(event.target.value);
	};

	const buttonRefG = useRef("");
	const buttonRefR = useRef("");
	const buttonRefE = useRef("");

	const [newOrigin, setNewOrigin] = useState<string>("");

	const handleButtonG= () => {
		let newRefG = buttonRefG.current.innerText;
		console.log(newRefG)
		setNewOrigin(newOrigin === newRefG ? !newRefG : newRefG)
	};

	const handleButtonR= () => {
		let newRefR = buttonRefR.current.innerText;
		console.log(newRefR)
		setNewOrigin(newOrigin === newRefR ? "" : newRefR)
	};

	const handleButtonE= () => {
		let newRefE = buttonRefE.current.innerText;
		console.log(newRefE)
		setNewOrigin(newOrigin === newRefE ? "" : newRefE)

	};


	return (
		<>
			<Header />
			<section>
				<div id="filter-and-buttons">
					<div id="filter">
						<input
							onChange={handleChange}
							type="text"
							placeholder="Filtre les personnages !"
						/>
					</div>
				<div id="buttons">
					<button type="button" onClick={handleButtonG} ref={buttonRefG}>gaulois
					</button>
					<button type="button" onClick={handleButtonR} ref={buttonRefR}>romain
					</button>
					<button type="button" onClick={handleButtonE} ref={buttonRefE}>égyptien
					</button>
					<button type="button" onClick={handleFilter}>Filtrer ?</button>
				</div>	
					<div className="charDiv">
						{goFilter ? char
						.filter((yourmom) => yourmom.charName.includes(input))
						.map((character) => (
						<div key={character.charName}>	
							<Card characterList={character} />
						</div>)) : char
						.filter((yourmom) => yourmom.charName.includes(input))
						.filter((pouet) => pouet.charOrigin === newOrigin)
						.map((character) => (
						<div className={character.charOrigin} key={character.charName}>	
							<Card characterList={character} />
						</div>
						))}
					</div>
				</div>		
				{/* </div> 
						{char.filter((pouet) => pouet.charOrigin === newOrigin).map((elem) => (
							< Card characterList={elem}/>	
					))} 
					</div> */}
			</section>
			<section>
				<Footer />
			</section>
		</>
	);
}

export default App;
