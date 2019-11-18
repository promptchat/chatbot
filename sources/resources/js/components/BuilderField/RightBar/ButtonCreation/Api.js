import React from 'react';
import {TYPE_API_CONTENT} from "../../../../help/buttonTypes";
import BaseButton from "./BaseButton";


export default class Api  extends BaseButton {
    get type() {
        return TYPE_API_CONTENT;
    }
    get renderBlocks() {
        return [
            "Message",
            "Api",
            "Buttons"
        ];
    }
}
