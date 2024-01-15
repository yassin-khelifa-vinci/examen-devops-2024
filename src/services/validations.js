// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    return (
        gamerTag.length >= 8 &&
        (gamerTag.includes('&') ||
            gamerTag.includes('$') ||
            gamerTag.includes('!') ||
            gamerTag.includes('è') ||
            gamerTag.includes('§') ||
            gamerTag.includes('à') ||
            gamerTag.includes('_'))
    );
};

exports.isValid = isValid;
