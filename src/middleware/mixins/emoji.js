export const  getFlagEmoji = (countryCode) => countryCode.toUpperCase().replace(/./g, char => String.fromCodePoint(127397 + char.charCodeAt()))
