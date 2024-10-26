import { Bounce, toast } from 'react-toastify';

const defaultOptions = {
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'dark',
  transition: Bounce,
};

export const showError = (message, options) => {
  toast.error(message, options || defaultOptions);
}