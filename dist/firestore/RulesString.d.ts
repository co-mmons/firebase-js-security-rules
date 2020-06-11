import { RulesString as $RulesString } from "../core/RulesString";
import { RulesValue } from "./RulesValue";
export declare class RulesString extends RulesValue implements $RulesString {
    concat(otherString: RulesString | string): RulesString;
    substring(start: number, end: number): RulesString;
}
