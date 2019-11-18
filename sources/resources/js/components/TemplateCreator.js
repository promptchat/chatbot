import React from 'react';
import DefaultCreator from "./DefaultCreator";

export default (props) => {
        return <DefaultCreator
            withMarks
            withImage
            apiUrl={'/templates'}
            {...props}
    />
}
