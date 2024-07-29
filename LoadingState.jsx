import React from 'react'

const LoadingState = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem", marginTop:"250px", color:"black"}}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingState
