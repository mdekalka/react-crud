export const required = value => (value ? undefined : 'This field is required');

export const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined;

export const onlyNumber = value => isNaN(Number(value)) ? 'Must be a number' : undefined;

export const phoneNumber = value => value && !/^(0|[1-9][0-9]{9})$/i.test(value)
  ? 'Invalid phone number, must be 10 digits'
  : undefined;
