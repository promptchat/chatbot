import React from "react";
import DefaultCreator from "./DefaultCreator";

export default (props) => {
    return <DefaultCreator apiUrl={'/chats'} {...props} />
}
