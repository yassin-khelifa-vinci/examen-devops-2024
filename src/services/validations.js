// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];

    return (
        gamerTag.length >= 8 &&
        haveAtLeastOneSpecialCharacter(gamerTag, specialCharacters)
    );
};

function haveAtLeastOneSpecialCharacter(gamerTag, specialCharacters) {
    return specialCharacters.some((specialCharacter) => {
        return gamerTag.includes(specialCharacter);
    });
}

exports.isValid = isValid;
