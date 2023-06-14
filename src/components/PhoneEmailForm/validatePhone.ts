import {COUNTRY_CODE} from '../../constants.ts'

const validatePhone = (value: string): boolean =>
  Boolean(value.match(`^\\+${COUNTRY_CODE}\\d{10}$`));


export default validatePhone
