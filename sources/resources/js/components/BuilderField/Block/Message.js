import React from 'react';
export default (props) => <div className={'message'} dangerouslySetInnerHTML={{__html: props.children}} />