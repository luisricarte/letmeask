import { ButtonHTMLAttributes } from "react";
import ca from 'classnames'
import '../styles/button.scss'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutLined?: boolean;
};

export function Button({ isOutLined = false, ...props}: ButtonProps) {
  return (
    <button 
      className={ca('button', {outlined: isOutLined})} {...props}></button>
  )
    
}
