import React from 'react'
import './ErrorMessage.scss'

const ErrorMessage: React.FC = ({ children }) => {
  return <span className="error-message">{children}</span>
}

export default ErrorMessage
