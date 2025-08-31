import React from 'react';
import './Card.css';


interface CardProps {
	icon?: string;
	title: string;
	content: string;
	onHover?: () => void;
}


const Card: React.FC<CardProps> = ({
	icon,
	title,
	content,
	onHover
}: CardProps) => {
	return (
		<div
			className="jsty-card"
			onMouseEnter={onHover}
		>

			{/* Card Header */}
			<div className="jsty-card__header">
				{icon && (
					<div className="jsty-card__icon-container">
						<img src={icon} alt="Service Icon" className="jsty-card__icon"/>
					</div>
				)}
				<h3 className="jsty-card__title">{title}</h3>
			</div>

			{/* Card Content */}
			<div className="jsty-card__content">
				<p className="jsty-card__description">{content}</p>
			</div>

			
		</div>
	);
};

export default Card;