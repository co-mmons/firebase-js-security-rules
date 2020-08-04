export function allow(...operation) {
    return function (targetClass, propertyKey, descriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, false);
    };
}
export function deny(...operation) {
    return function (targetClass, propertyKey, descriptor) {
        allowImpl(targetClass, propertyKey, descriptor, operation, true);
    };
}
function allowImpl(targetClass, propertyKey, descriptor, operations, negate) {
    const classConstructor = targetClass.constructor;
    if (!classConstructor.hasOwnProperty("__rulesMatchAllows") && !classConstructor.__rulesMatchAllows) {
        classConstructor.__rulesMatchAllows = [];
    }
    classConstructor.__rulesMatchAllows.push({
        operations,
        negate,
        body: (thiz) => descriptor.value.apply(thiz)
    });
}
//# sourceMappingURL=allowDeny.js.map