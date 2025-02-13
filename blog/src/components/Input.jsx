import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = "",
  ...props
}, ref) {
  const id = useId()
  return (
    <div className='w-full'>
      { label && (
        <label 
          className='inline-block mb-1 pl-1 text-black font-medium' 
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-[#defcf9] text-black outline-none focus:bg-[#cadefc] duration-200 border border-[#cca8e9] w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  )
})

export default Input