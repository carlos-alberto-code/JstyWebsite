import './App.css'
import Card from "./components/home/Card.tsx";
import Grid from "./components/home/Grid.tsx";
import reactIcon from './assets/react.svg';
import {BrowserRouter, Routes, Route, Outlet, useParams} from 'react-router-dom';
import HeaderMegaMenu from "./components/menu";


// Datos simulados para la página de servicios
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

// Componente para mostrar detalles de un servicio específico
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

// Componente para la página de inicio
function Home() {
	const cards = [
		<Card key="1" icon={reactIcon} title="Servicio A" content="Descripción breve del servicio A."/>,
		<Card key="2" icon={reactIcon} title="Servicio B" content="Descripción breve del servicio B."/>,
		<Card key="3" icon={reactIcon} title="Servicio C" content="Descripción breve del servicio C."/>,
		<Card key="4" icon={reactIcon} title="Servicio D" content="Descripción breve del servicio D."/>,
		<Card key="5" icon={reactIcon} title="Servicio E" content="Descripción breve del servicio E."/>,
		<Card key="6" icon={reactIcon} title="Servicio F" content="Descripción breve del servicio F."/>,
		<Card key="7" icon={reactIcon} title="Servicio G" content="Descripción breve del servicio G."/>,
		<Card key="8" icon={reactIcon} title="Servicio H" content="Descripción breve del servicio H."/>
	];
	
	return <Grid columns={4} cards={cards} />;
}

// Componente para la página 404
function NotFound() {
	return <div>Página no encontrada</div>
}

// Componente para la página de proyectos (placeholder)
function Proyectos() {
	return <div style={{padding: '2rem', color: 'white'}}>
		<h1>Nuestros Proyectos</h1>
		<p>Esta página está en construcción</p>
	</div>
}

// Componente para la página de blog (placeholder)
function Blog() {
	return <div style={{padding: '2rem', color: 'white'}}>
		<h1>Nuestro Blog</h1>
		<p>Esta página está en construcción</p>
	</div>
}

// Componente que define el layout principal con navegación
function MainLayout() {
	return (
		<>
			{/* El menú de navegación está posicionado por el layout */}
			<div className="navigation-container">
				<HeaderMegaMenu />
			</div>
			
			{/* Contenido de cada página */}
			<main className="main-content">
				<Outlet />
			</main>
		</>
	);
}

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="servicio/:servicioId" element={<Servicio />} />
					<Route path="proyectos" element={<Proyectos />} />
					<Route path="blog" element={<Blog />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
