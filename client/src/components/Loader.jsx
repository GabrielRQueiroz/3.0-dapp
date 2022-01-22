import React from 'react';

const Loader = () => {
	return (
		<div className='flex justify-center items-center py-3'>
			<div className='animate-spin rounded-full h-16 w-16 border-b-2 border-red-700 cursor-wait' />
		</div>
	);
};

export default Loader;
