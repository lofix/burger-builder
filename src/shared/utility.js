export const updateObject = (oldObj, updatedProperties) => {
    return {
        ...oldObj,
        ...updatedProperties
    };
};

export const checkValidation = (val, rule) => {
    let isValid = true;
    if ( rule.required ) {
        isValid = val.trim() !== '' && isValid;
    }

    if (rule.minLength) {
        isValid = val.length >= rule.minLength  && isValid;
    }

    if (rule.maxLength) {
        isValid = val.length >= rule.maxLength  && isValid;
    }
    return isValid;
}