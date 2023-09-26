export const countryFormat = (value) => !value ? '' : new Intl.DisplayNames(['en'], { type: 'region' }).of(value)
