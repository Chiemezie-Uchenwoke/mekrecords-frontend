interface LoaderProps {
  size?: 'sm' | 'md' | 'lg'
  fullScreen?: boolean
  className?: string
}

export const Loader = ({ 
  size = 'md', 
  fullScreen = false,
  className = '' 
}: LoaderProps) => {
  
  const sizeStyles = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  }
  
  const spinner = (
    <div className={`${sizeStyles[size]} border-primary-200 border-t-primary-600 rounded-full animate-spin`}></div>
  )
  
  if (fullScreen) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        {spinner}
      </div>
    )
  }
  
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {spinner}
    </div>
  )
}