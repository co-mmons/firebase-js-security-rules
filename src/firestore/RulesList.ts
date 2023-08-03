import {RulesExpression} from "../core/RulesExpression";
import {RulesList as $RulesList} from "../core/RulesList";
import {InternalRulesValue} from "../internal";
import {AssignableType} from "../utils/Type";
import {RulesBoolean} from "./RulesBoolean";
import {RulesInteger} from "./RulesInteger";
import {RulesValue} from "./RulesValue";

/**
 * List type. Items are not necessarily homogenous.
 *
 * {@link https://firebase.google.com/docs/reference/rules/rules.List}
 */
export class RulesList<T extends RulesValue = RulesValue> extends RulesValue implements $RulesList {

    constructor();

    constructor(array: Array<string | number>);

    constructor(expression: RulesExpression);

    constructor(arrayOrExpression?: Array<string | number> | RulesExpression) {
        if (Array.isArray(arrayOrExpression)) {
            super(new RulesExpression(RulesExpression.l`[`,arrayOrExpression, RulesExpression.l`]`));
        } else if (arrayOrExpression) {
            super(arrayOrExpression);
        } else {
            super();
        }
    }

    get<V extends RulesValue = RulesValue>(index: number, valueType?: AssignableType<V>) {
        const type = new (valueType || RulesValue);
        (type as any as InternalRulesValue).__rulesExpression = new RulesExpression(RulesExpression.l`(`, this, RulesExpression.l`)`, RulesExpression.l`[`, index, RulesExpression.l`]`);
        return type as V;
    }

    /**
     * Get the number of values in the list.
     */
    size() {
        return new RulesInteger(new RulesExpression(this, RulesExpression.l`.size()`));
    }

    /**
     * Determine whether the list contains all elements in another list.
     */
    hasAll(list: RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasAll", list);
    }

    /**
     * Determine whether the list contains any element in another list.
     */
    hasAny(list: RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasAny", list);
    }

    /**
     * Determine whether all elements in the list are present in another list.
     */
    hasOnly(list: RulesList | Array<RulesValue | string | number | boolean>) {
        return this.buildHasExpression("hasOnly", list);
    }

    private buildHasExpression(method: "hasOnly" | "hasAny" | "hasAll", list: RulesList | Array<RulesValue | string | number | boolean>) {

        const expression: any[] = [this, RulesExpression.l`.${method}(`];

        if (list instanceof Array) {
            expression.push(RulesExpression.l`[`);

            for (let i = 0; i < list.length; i++) {

                if (i > 0) {
                    expression.push(RulesExpression.l`, `);
                }

                expression.push(list[i]);
            }

            expression.push(RulesExpression.l`]`);
        } else {
            expression.push(list);
        }

        expression.push(RulesExpression.l`)`);

        return new RulesBoolean(new RulesExpression(expression));
    }

}
