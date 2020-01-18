import React from 'react';


const SideBarContent = (props) => {

    const label = props.label

    const handleClick = () => {
        props.handleClick(label)
    }
  
    return (
<div
        style={{
          background: isOpen ? '#fae042' : '#6db65b',
          border: '1px solid #008f68',
          padding: '5px 10px',
        }}
      >
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          {label}
          <div style={{ float: 'right' }}>
            {!isOpen && <span>&#9650;</span>}
            {isOpen && <span>&#9660;</span>}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: '#6db65b',
              border: '2px solid #008f68',
              marginTop: 10,
              padding: '10px 20px',
            }}
          >
            {props.children}
          </div>
        )}
      </div>
    )


}

export default SideBarContent