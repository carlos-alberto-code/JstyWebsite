import './App.css'
import Card from "./components/home/Card.tsx";
import Grid from "./components/home/Grid.tsx";
import reactIcon from './assets/react.svg';
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';


const serviciosData = {
	"desarrollo-web": {
		title: "Desarrollo Web",
		description: "Creamos sitios web modernos y responsivos para tu negocio",
		price: "$40,000 MXN",
		features: ["Diseño responsive", "SEO optimizado", "Mantenimiento incluido"]
	},
	"redes-sociales": {
		title: "Manejo de Redes Sociales",
		description: "Gestión profesional de Facebook, Instagram y WhatsApp",
		price: "$8,333 MXN/mes",
		features: ["Contenido diario", "Community management", "Campañas publicitarias"]
	},
	"aplicaciones-moviles": {
		title: "Aplicaciones Móviles",
		description: "Apps nativas para iOS y Android",
		price: "Desde $60,000 MXN",
		features: ["Diseño nativo", "Integración con APIs", "Publicación en stores"]
	}
}

function Servicio() {
	const {servicioId} = useParams();
	const servicio = serviciosData[servicioId as keyof typeof serviciosData]
	if (!servicio) {
		return <div>Servicio no encontrado</div>
	}
	
	return (
		<div style={{padding: '2rem', color: 'white'}}>
			<h1>{servicio.title}</h1>
			<p>{servicio.description}</p>
			<p><strong>Precio:</strong> {servicio.price}</p>
			<h3>Características:</h3>
			<ul>
				{servicio.features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
		</div>
	)
	
}


function App() {
	
	const cards = [
		<Card key="1" icon={reactIcon} title="Servicio A" content="Descripción breve del servicio A."/>,
		<Card key="2" icon={reactIcon} title="Servicio B" content="Descripción breve del servicio B."/>,
		<Card key="3" icon={reactIcon} title="Servicio C" content="Descripción breve del servicio C."/>,
		<Card key="4" icon={reactIcon} title="Servicio D" content="Descripción breve del servicio D."/>,
		<Card key="1" icon={reactIcon} title="Servicio A" content="Descripción breve del servicio A."/>,
		<Card key="2" icon={reactIcon} title="Servicio B" content="Descripción breve del servicio B."/>,
		<Card key="3" icon={reactIcon} title="Servicio C" content="Descripción breve del servicio C."/>,
		<Card key="4" icon={reactIcon} title="Servicio D" content="Descripción breve del servicio D."/>
	];
	
	function NotFound() {
		return <div>Página no encontrada</div>
	}
	
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Grid columns={4} cards={cards}/>}/>
				<Route path="/servicio/:servicioId" element={<Servicio />} />
				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App
