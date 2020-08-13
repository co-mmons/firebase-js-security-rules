import {concatExpression, RulesString as $RulesString, substringExpression} from "../core/RulesString";
import {trimExpression} from "../core/RulesString/trimExpression";
import {RulesValue} from "./RulesValue";

export class RulesString extends RulesValue implements $RulesString {

    trim() {
        return new RulesString(trimExpression(this));
    }

    concat(...strings: Array<RulesString | string>): RulesString {
        return new RulesString(concatExpression(this, ...strings));
    }

    substring(start: number, end: number): RulesString {
        return new RulesString(substringExpression(this, start, end));
    }


}
