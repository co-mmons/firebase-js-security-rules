import { RulesString as $RulesString } from "../core/RulesString";
import { RulesBoolean } from "./RulesBoolean";
import { RulesInteger } from "./RulesInteger";
import { RulesValue } from "./RulesValue";
export declare class RulesString extends RulesValue implements $RulesString {
    static is(value: RulesValue): RulesBoolean;
    matches(re: RulesString | string): RulesBoolean;
    trim(): RulesString;
    size(): RulesInteger;
    concat(...strings: Array<RulesString | string>): RulesString;
    substring(start: number, end: number): RulesString;
}
export declare namespace RulesString {
    function l(strings: TemplateStringsArray, ...expr: any[]): RulesString;
}
