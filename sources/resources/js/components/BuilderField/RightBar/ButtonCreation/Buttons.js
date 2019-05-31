
import {TYPE_BUTTONS} from "../../../../help/buttonTypes";
import BaseButton from "./BaseButton";


export default class Buttons extends BaseButton {
    get type() {
        return TYPE_BUTTONS;
    }
    get renderBlocks() {
        return [
            "Message",
            "Buttons"
        ];
    }
}