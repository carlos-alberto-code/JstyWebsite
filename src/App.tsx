import './App.css'
import Card from "./components/home/Card.tsx";
import Grid from "./components/home/Grid.tsx";
import reactIcon from './assets/react.svg';


function App() {
	const cards = [
		<Card key="1" icon={reactIcon} title="Servicio A" content="Descripción breve del servicio A." />,
		<Card key="2" icon={reactIcon} title="Servicio B" content="Descripción breve del servicio B." />,
		<Card key="3" icon={reactIcon} title="Servicio C" content="Descripción breve del servicio C." />,
		<Card key="4" icon={reactIcon} title="Servicio D" content="Descripción breve del servicio D." />,
		<Card key="1" icon={reactIcon} title="Servicio A" content="Descripción breve del servicio A." />,
		<Card key="2" icon={reactIcon} title="Servicio B" content="Descripción breve del servicio B." />,
		<Card key="3" icon={reactIcon} title="Servicio C" content="Descripción breve del servicio C." />,
		<Card key="4" icon={reactIcon} title="Servicio D" content="Descripción breve del servicio D." />
	];
	
	return (
		<Grid
			columns={2}
			cards={cards}
		/>
	)
 }
 
 export default App
