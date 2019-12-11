import React from 'react';
export default (props) => props.children&& <div className={'message'} dangerouslySetInnerHTML={{__html: props.children}} />
