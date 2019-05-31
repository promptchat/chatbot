import React from 'react';
import {TYPE_MESSAGE} from "../../../../help/buttonTypes";
import BaseButton from "./BaseButton";


export default class Message  extends BaseButton {
    get type() {
        return TYPE_MESSAGE;
    }
    get renderBlocks() {
        return [
            "Message",
        ];
    }
}