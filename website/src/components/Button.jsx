import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../utils/cn';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
        indigo: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
        outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        ghost: 'text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        link: 'text-blue-600 hover:text-blue-500 underline-offset-4 hover:underline',
        vote: 'hover:scale-110 focus:ring-2 focus:ring-offset-1',
        upvote: 'text-green-500 hover:text-green-600 hover:scale-110 focus:ring-2 focus:ring-green-500 focus:ring-offset-1',
        downvote: 'text-red-500 hover:text-red-600 hover:scale-110 focus:ring-2 focus:ring-red-500 focus:ring-offset-1',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        default: 'h-10 py-2 px-4',
        lg: 'h-12 px-6 text-lg',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded',
        default: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      width: {
        auto: 'w-auto',
        full: 'w-full',
        fit: 'w-fit',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      rounded: 'default',
      width: 'auto',
    },
  }
);

const Button = React.forwardRef(({ 
  className, 
  variant, 
  size, 
  rounded, 
  width,
  children, 
  ...props 
}, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, rounded, width, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants };
export default Button;