import React, { useState } from 'react';
import './style.css';

const convertToRem = (pxValue) => pxValue / 16;

function App() {
	const [px, setPx] = useState(16);
	const [rem, setRem] = useState(convertToRem(px));

	const handleChange = (event) => {
		setPx(event.target.value);
		setRem(convertToRem(event.target.value));
	};

	return (
		<div className='mainDiv'>
			<main className='main'>
				<h1>PX to REM</h1>
				<div className='input-wrapper'>
        <div  className="px-rem">
          <h3>px</h3>
					<input
						type='number'
						className='input'
						value={px}
						onChange={handleChange}
					/>
          </div>
          <div className="px-rem">
          <h3>rem</h3>
					<input value={rem} contentEditable={false} className='input' />
          </div>
				</div>
			</main>
		</div>
	);
}

export default App;