export interface RulesString {
    concat(otherString: RulesString | string): RulesString;
    /**
     * The substring() method returns the part of the string between the start and end indexes (0 based), or to the end of the string.
     */
    substring(start: number, end: number): RulesString;
}
