import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function loginValidator(username, password) {

  if(username =='' || password ==''){
    toast.error('All fields are required!');
    return false;
  }

  if(username === '') {
    toast.error('You must fill the username field!');
    return false;
  }
  
  if(password === '') {
    toast.error('You must fill the password field!');
    return false;
  }
  return true;
}

export default loginValidator;