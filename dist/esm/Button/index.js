import React from 'react'; //简单组件

import { jsx as _jsx } from "react/jsx-runtime";

var Button = function Button(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/_jsx("div", {
    children: /*#__PURE__*/_jsx("button", {
      style: {
        width: '80px',
        height: '30px',
        border: 'none',
        backgroundColor: 'skyblue'
      },
      value: value,
      onClick: function onClick() {
        alert('被点了！！');
      }
    })
  });
};

export default Button;