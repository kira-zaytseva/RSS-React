export function validateName(name: string) {
  const regex = /^\w{3,}\b(\s+\w{3,}\b)+$/g;
  return regex.test(name);
}

export function validateBirthday(birthday: string) {
  const regex = /^(19[0-9]{2}|20[0-1][0-9]|2022)\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/gm;
  return regex.test(birthday);
}
