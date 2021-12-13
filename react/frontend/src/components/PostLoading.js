import React from 'react';

function PostLoading() {
	return function PostLoadingComponent({ isLoading, ...props }) {
		// if (!isLoading) return <Component {...props} />;
		return (
			<p style={{ fontSize: '25px' }}>
				Just Upload your mobile screenshot and you will process it.
			</p>
      
		);
	};
}
export default PostLoading;