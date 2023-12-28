import React from 'react';

interface ISpacer {
  height?: number;
  width?: number;
}

export default function Spacer({ height, width }: ISpacer) {
  return <div style={{ width, height: height || 100, margin: '10px 0' }}></div>;
}
