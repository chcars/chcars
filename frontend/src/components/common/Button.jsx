function Button({
  as: Component = 'button',
  children,
  className = '',
  variant = 'primary',
  ...props
}) {
  return (
    <Component
      className={`ui-button ui-button--${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Button