import React from 'react';
import {TYPE_CALENDAR} from "../../../../help/buttonTypes";
import BaseButton from "./BaseButton";


export default class Calendar  extends BaseButton {
    get type() {
        return TYPE_CALENDAR;
    }
    get renderBlocks() {
        return [
            "Calendar",
        ];
    }
    get requiredFields() {
        return [
            "calendar",
        ];
    }
}