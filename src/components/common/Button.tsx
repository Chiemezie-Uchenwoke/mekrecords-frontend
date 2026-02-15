interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: boolean
  className?: string
}

export const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = ''
}: ButtonProps) => {
  
  const baseStyles = 'px-4 py-2 rounded-3xl font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    danger: 'bg-error-600 hover:bg-error-700 text-white'
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}