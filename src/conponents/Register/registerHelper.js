import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function helperRegister(email, username, password, passwordConfirm) {

  if (username == '' || password == '' || passwordConfirm == '' || email == '') {
    toast.error('All fields are required!');
    return false;
  }

  if (username === '' || username.length < 4) {
    toast.error('Username must be at least 4 characters long!');
    return false;
  }

  if (password.length < 6) {
    toast.error('Password must be at least 6 characters long!');
    return false;
  }
  if(email.includes('@')){
    toast.error('You must put valid email');
    return false;
  }

  if (password !== passwordConfirm) {
    toast.error('Passwords do not match!');
    return false;
  }
  return true;
}

export default helperRegister;