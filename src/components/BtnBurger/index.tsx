import { useState } from 'react';
import './btn-burger.scss';

const btnBurger = () => {
	const initialState = false;
	const [isOpen, setIsOpen] = useState(initialState);

	return (
		<div
			className={`btn_icon icon ${isOpen ? 'open' : ''}`}
			onClick={() => setIsOpen(!isOpen)}>
			<div className='icon__line'></div>
			<div className='icon__line'></div>
			<div className='icon__line'></div>
		</div>
	);
};

export default btnBurger;
