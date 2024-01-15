// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];

    return (
        gamerTag.length >= 8 &&
        haveAtLeastOneSpecialCharacter(gamerTag, specialCharacters) &&
        haveAtLeastOneNumber(gamerTag)
    );
};

function haveAtLeastOneSpecialCharacter(gamerTag, specialCharacters) {
    return specialCharacters.some((specialCharacter) => {
        return gamerTag.includes(specialCharacter);
    });
}

function haveAtLeastOneNumber(gamerTag) {
    for (let i = 0; i < gamerTag.length; i++) {
        if (!isNaN(parseInt(gamerTag[i]))) {
            return true;
        }
    }
    return false;
}

exports.isValid = isValid;
