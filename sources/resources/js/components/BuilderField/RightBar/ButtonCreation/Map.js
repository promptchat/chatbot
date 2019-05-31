import React from 'react';
import {TYPE_CALENDAR, TYPE_MAP} from "../../../../help/buttonTypes";
import BaseButton from "./BaseButton";


export default class Map  extends BaseButton {
    get type() {
        return TYPE_MAP;
    }
    get renderBlocks() {
        return [
            "Map",
            "Message",
        ];
    }
    get requiredFields() {
        return [
            "text"
        ];
    }
}