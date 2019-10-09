import React from 'react';
import { TYPE_SELECT} from "../../../../help/buttonTypes";
import BaseButton from "./BaseButton";

export default class Select extends BaseButton {
    get type() {
        return TYPE_SELECT;
    }
    get renderBlocks() {
        return [
            "Message",
            "Variable",
            "MaxCountValues",
            "Variants",
        ];
    }

    get requiredFields() {
        return [
            "text",
            "variable",
        ];
    }
}