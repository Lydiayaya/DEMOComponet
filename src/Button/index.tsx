import React from 'react';

//简单组件
const Button = ({ value }: { value: string }) => {
  return (
    <div>
      <button
        style={{
          width: '80px',
          height: '30px',
          border: 'none',
          backgroundColor: 'skyblue',
        }}
        value={value}
        onClick={() => {
          alert('被点了！！');
        }}
      ></button>
    </div>
  );
};
export default Button;
