// Una Grid para mostrar Card. El componente recibe un número, que es el número de columnas que mostrará
import React from "react";


interface GridProps {
	columns?: number; // ahora opcional y será clampiada entre 2 y 4
	cards: React.ReactNode | React.ReactNode[]; // aceptar elemento único o lista
	gap?: string | number;
}
const Grid: React.FC<GridProps> = ({
	columns = 3,
	cards,
	gap = '2rem'
}: GridProps) => {
	// Asegurar que el valor de columnas esté entre 2 y 4
	const desired = Math.round(columns);
	const clamped = Math.min(4, Math.max(2, desired));

	// Normalizar cards a arreglo
	const items = Array.isArray(cards) ? cards : [cards];

	// No usar más columnas que la cantidad de items disponibles
	const cols = Math.min(clamped, Math.max(1, items.length));

	return (
		<div
			role="list"
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
				gap,
				justifyItems: 'center',
				alignItems: 'start',
				width: '100%',
				gridAutoRows: '1fr'
			}}>
			{items.map((card, index) => (
				<div role="listitem" key={index} style={{ width: '100%' }}>
					{card}
				</div>
			))}
		</div>
	);
};

export default Grid;
