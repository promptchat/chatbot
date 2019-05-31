import React from 'react';
import { TYPE_QUESTION} from "../../../../help/buttonTypes";

import BaseButton from "./BaseButton";


export default class Question  extends BaseButton {
    get type() {
        return TYPE_QUESTION;
    }
    get renderBlocks() {
        return [
            "Message",
            "Validators",
            "Variable"
        ];
    }

    get requiredFields() {
        return [
            "variable",
            "text"
        ]
    }
}