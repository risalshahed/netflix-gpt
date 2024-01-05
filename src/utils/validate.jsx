// 2.1 function to check the valid data
export default function chackValidData(email, password) {
  const isEmailvalid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  const isPasswordvalid = /^(?=.*\d)(?=(.*\W){1})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/.test(password);

  if(!isEmailvalid) return 'Email is not valid';
  if(!isPasswordvalid) return 'Password is not valid';
  // else i.e. email & password is VALID
  return null;
}