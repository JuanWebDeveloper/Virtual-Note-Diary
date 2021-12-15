export const SingleNote = () => {
	return (
		<div className='diary__single-note'>
			<div
				className='diary__single-note-picture'
				style={{
					backgroundSize: 'cover',
					backgroundImage: `url(https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg)`,
				}}
			></div>

			<div className='diary__single-note-body'>
				<p className='diary__single-note-title'>Application under construction</p>
				<p className='diary__single-note-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eum?</p>
			</div>

			<div className='diary__single-note-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
