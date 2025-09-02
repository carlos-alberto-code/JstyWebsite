import {
	IconChevronDown,
} from '@tabler/icons-react';
import {
	Anchor,
	Burger,
	Button,
	Center,
	Collapse,
	Divider,
	Drawer,
	Group,
	HoverCard,
	ScrollArea,
	SimpleGrid,
	Text,
	ThemeIcon,
	UnstyledButton,
	useMantineTheme,
	Box,
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import {ServiceData, LearningData} from "./mockData.ts";
import { useNavigate, Link } from 'react-router-dom';

const mockdata = ServiceData;

/**
 * Componente de navegación principal con menús desplegables para servicios y aprendizaje
 */
export function HeaderMegaMenu() {
	const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);
	const [linksOpened, {toggle: toggleLinks}] = useDisclosure(false);
	const [learningOpened, {toggle: toggleLearning}] = useDisclosure(false);
	const navigate = useNavigate();
	useMantineTheme();
	
	// Mapea los datos de servicio a componentes de UI
	const links = mockdata.map((item) => (
		<UnstyledButton className={classes.subLink} key={item.title}>
			<Group wrap="nowrap" align="flex-start">
				<ThemeIcon size={34} variant="default" radius="md" className={classes.iconTheme}>
					<item.icon size={22} color="rgba(0, 245, 255, 0.8)"/>
				</ThemeIcon>
				<div>
					<Text size="sm" fw={500} c="#f8fafc">
						{item.title}
					</Text>
					<Text size="xs" c="#cbd5e1">
						{item.description}
					</Text>
				</div>
			</Group>
		</UnstyledButton>
	));

	// Mapea los datos de aprendizaje a componentes de UI
	const learningLinks = LearningData.map((item) => (
		<UnstyledButton className={classes.subLink} key={item.title}>
			<Group wrap="nowrap" align="flex-start">
				<ThemeIcon size={34} variant="default" radius="md" className={classes.iconTheme}>
					<item.icon size={22} color="rgba(0, 245, 255, 0.8)"/>
				</ThemeIcon>
				<div>
					<Text size="sm" fw={500} c="#f8fafc">
						{item.title}
					</Text>
					<Text size="xs" c="#cbd5e1">
						{item.description}
					</Text>
				</div>
			</Group>
		</UnstyledButton>
	));
	
	return (
		<header className={classes.header}>
			<Group justify="space-between" h="100%">
				<Group h="100%" gap={0} visibleFrom="sm">
					<Link to="/" className={classes.link}>
						Home
					</Link>
					<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal
					           classNames={{dropdown: classes.dropdown}}>
						<HoverCard.Target>
							<a href="#" className={classes.link}>
								<Center inline>
									<Box component="span" mr={5}>
										Servicios
									</Box>
									<IconChevronDown size={16} color="rgba(0, 245, 255, 0.8)"/>
								</Center>
							</a>
						</HoverCard.Target>
						
						<HoverCard.Dropdown style={{overflow: 'hidden'}}>
							<Group justify="space-between" px="md">
								<Text fw={500} c="#f8fafc">Nuestros Servicios</Text>
								<Anchor href="#" fz="xs" c="rgba(0, 245, 255, 0.8)">
									Ver todos
								</Anchor>
							</Group>
							
							<Divider my="sm" color="rgba(0, 245, 255, 0.1)"/>
							
							<SimpleGrid cols={2} spacing={0}>
								{links}
							</SimpleGrid>
							
							<div className={classes.dropdownFooter}>
								<Group justify="space-between">
									<div>
										<Text fw={500} fz="sm" c="#f8fafc">
											Comienza tu proyecto
										</Text>
										<Text size="xs" c="#cbd5e1">
											Transforma tus ideas en realidad con nuestro equipo de expertos
										</Text>
									</div>
									<Button
										variant="default"
										className={classes.buttonPrimary}
										onClick={() => navigate('/contacto')}
									>
										Contáctanos
									</Button>
								</Group>
							</div>
						</HoverCard.Dropdown>
					</HoverCard>
					
					<HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal
					           classNames={{dropdown: classes.dropdown}}>
						<HoverCard.Target>
							<a href="#" className={classes.link}>
								<Center inline>
									<Box component="span" mr={5}>
										Aprende
									</Box>
									<IconChevronDown size={16} color="rgba(0, 245, 255, 0.8)"/>
								</Center>
							</a>
						</HoverCard.Target>
						
						<HoverCard.Dropdown style={{overflow: 'hidden'}}>
							<Group justify="space-between" px="md">
								<Text fw={500} c="#f8fafc">Recursos de Aprendizaje</Text>
								<Anchor href="#" fz="xs" c="rgba(0, 245, 255, 0.8)">
									Ver todos
								</Anchor>
							</Group>
							
							<Divider my="sm" color="rgba(0, 245, 255, 0.1)"/>
							
							<SimpleGrid cols={2} spacing={0}>
								{learningLinks}
							</SimpleGrid>
							
							<div className={classes.dropdownFooter}>
								<Group justify="space-between">
									<div>
										<Text fw={500} fz="sm" c="#f8fafc">
											Mejora tus habilidades
										</Text>
										<Text size="xs" c="#cbd5e1">
											Accede a contenido educativo de alta calidad creado por expertos
										</Text>
									</div>
									<Button
										variant="default"
										className={classes.buttonPrimary}
										onClick={() => navigate('/cursos')}
									>
										Explorar cursos
									</Button>
								</Group>
							</div>
						</HoverCard.Dropdown>
					</HoverCard>
					
					<Link to="/proyectos" className={classes.link}>
						Proyectos
					</Link>
					<Link to="/blog" className={classes.link}>
						Blog
					</Link>
				</Group>
				
				<Burger
					opened={drawerOpened}
					onClick={toggleDrawer}
					hiddenFrom="sm"
					className={classes.burgerMenu}
					color="#f8fafc"
				/>
			</Group>
			
			<Drawer
				opened={drawerOpened}
				onClose={closeDrawer}
				size="100%"
				padding="md"
				title="Navegación"
				hiddenFrom="sm"
				zIndex={1000000}
				classNames={{body: classes.drawer}}
			>
				<ScrollArea h="calc(100vh - 80px)" mx="-md" className={classes.scrollArea}>
					<Divider my="sm" color="rgba(0, 245, 255, 0.1)"/>
					
					<Link to="/" className={classes.link}>
						Inicio
					</Link>
					<UnstyledButton className={classes.link} onClick={toggleLinks}>
						<Center inline>
							<Box component="span" mr={5}>
								Servicios
							</Box>
							<IconChevronDown size={16} color="rgba(0, 245, 255, 0.8)"/>
						</Center>
					</UnstyledButton>
					<Collapse in={linksOpened}>{links}</Collapse>
					
					<UnstyledButton className={classes.link} onClick={toggleLearning}>
						<Center inline>
							<Box component="span" mr={5}>
								Aprende
							</Box>
							<IconChevronDown size={16} color="rgba(0, 245, 255, 0.8)"/>
						</Center>
					</UnstyledButton>
					<Collapse in={learningOpened}>{learningLinks}</Collapse>
					
					<Link to="/proyectos" className={classes.link}>
						Proyectos
					</Link>
					<Link to="/blog" className={classes.link}>
						Blog
					</Link>
					
					<Divider my="sm" color="rgba(0, 245, 255, 0.1)"/>

					{/* Eliminado el grupo de botones de inicio de sesión y registro */}
				</ScrollArea>
			</Drawer>
		</header>
	);
}

export default HeaderMegaMenu;
