export const dateFormat = (value, options) => !value ? '' : new Intl.DateTimeFormat('en', options).format(new Date(value))
