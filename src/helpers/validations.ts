/**
 * Verifica se todos os caracteres se repetem
 */
export function hasRepeatedAll(value: string): boolean {
  const chars = value.split('');
  const repeated = chars.filter((char, index) => chars.indexOf(char) !== index);
  if (repeated.length === chars.length - 1) return true;
  return false;
}
export function isNumber(value: string): boolean {
  return !isNaN(Number(value));
}
/**
 * Faz o calculo de validação do digito verificador do CPF
 */
export function validateCPF(cpf: string): boolean {
  // Remove todos os caracteres que não sejam números
  cpf = cpf.replace(/[\D]+/g, '');
  // Verifica se o tamanho bate e se não tem repetidos
  if (cpf.length !== 11 || hasRepeatedAll(cpf)) return false;
  // Valida 1o digito
  let add = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
  let rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(9))) return false;
  // Valida 2o digito
  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11) rev = 0;
  if (rev != parseInt(cpf.charAt(10))) return false;
  // Valido! Passou em todos os testes.
  return true;
}
/**
 * Verifica se o DDD existe
 */
export function existsDDD(ddd: number): boolean {
  const ddds = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48,
    49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89,
    91, 92, 93, 94, 95, 96, 97, 98, 99,
  ];
  return ddds.includes(ddd);
}
export function validatePhone(value: string) {
  const REGEX_SPLIT = /^(?<ddd>\d{2})(?<start>\d{4,5})(?<end>\d{4})$/;
  const REGEX_DDD = /^[1-9]{2}$/;
  const REGEX_CELLPHONE = /^9[8-9]\d{3}$/;
  const REGEX_FIXEDPHONE = /^[1-7]\d{3}$/;
  const REGEX_ENDS = /^\d{4}$/;
  const phone = value.replace(/\D/g, '');
  const match = REGEX_SPLIT.exec(phone);
  const { ddd, start, end } = match?.groups || {};
  if (phone.length < 10) return false;
  if (phone.length > 11) return false;
  if (!ddd) return false;
  if (!start) return false;
  if (!end) return false;
  if (hasRepeatedAll(phone)) return false;
  if (!REGEX_DDD.test(ddd)) return false;
  if (!existsDDD(Number(ddd))) return false;
  if (!REGEX_CELLPHONE.test(start) && !REGEX_FIXEDPHONE.test(start)) return false;
  if (!REGEX_ENDS.test(end)) return false;
  return true;
}
