import React, { useState } from 'react'


function main() {

	const [imgUrl, setImgUrl] = useState("");
	const callImg = () => {
		fetch("https://api.thecatapi.com/v1/images/search")
			.then(res => res.json())
			// .then(data => console.log(data))
			.then(data => setImgUrl(data[0].url))
	}

	return (
		<>
			<div className='container'>
				<div className='box'>
					{/* Merhaba Burası Main.jsx */}
					<h2>Enjoy the kittie</h2>
					<img src={imgUrl} />
					<button onClick={() => callImg()}>Click Me</button>
				</div>
			</div>
		</>
	)
}

export default main
