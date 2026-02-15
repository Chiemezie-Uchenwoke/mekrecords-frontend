interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'warning' | 'error' | 'info'
  className?: string
}

export const Badge = ({ 
  children, 
  variant = 'info',
  className = ''
}: BadgeProps) => {
  
  const variantStyles = {
    success: 'bg-success-100 text-success-700 border-success-300',
    warning: 'bg-warning-100 text-warning-700 border-warning-300',
    error: 'bg-error-100 text-error-700 border-error-300',
    info: 'bg-primary-100 text-primary-700 border-primary-300'
  }
  
  return (
    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}