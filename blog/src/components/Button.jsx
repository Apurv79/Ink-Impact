import React from 'react'

const Button = ({
  children,
  type = "button",
  bgColor = "bg-[#cadefc]", // default background using provided color #cadefc
  textColor = "text-black", // default text color using provided color #c3bef0
  className = "",
  fullWidth = false,
  isLoading = false,
  disabled = false,
  onClick,
  ...props
}) => {
  const handleClick = (e) => {
    console.log("Button clicked")
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}
                ${fullWidth ? 'w-full' : ''} 
                ${disabled || isLoading 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-[#cca8e9] hover:scale-105 transition-transform duration-200'} 
            `}
      type={type}
      disabled={disabled || isLoading}
      onClick={handleClick}
      {...props}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  )
}

export default Button
