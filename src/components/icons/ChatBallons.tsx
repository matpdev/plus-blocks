'use client';

import { ISVGIconProps } from '../../types/base';
export default function ChatBallonsIcon({ width, height, fill, className }: ISVGIconProps) {
  return (
    <svg width={width} height={height} fill={fill} className={className} viewBox="0 0 174.57 105.39">
      <path
        d="M162.87,35.74h-58.16V11.65C104.72,5.22,99.49,0,93.03,0H11.69C5.23,0,0,5.22,0,11.65v36.91
        C0,55,5.23,60.21,11.69,60.21h58.16v35.74v9.44l6.05-6.03c2.19-2.19,5.17-3.41,8.27-3.41h78.71c6.46,0,11.69-5.22,11.69-11.65
        V47.39C174.57,40.95,169.33,35.74,162.87,35.74z M168.07,84.3c0,2.86-2.33,5.18-5.2,5.18H84.16c-2.75,0-5.41,0.61-7.82,1.75
        V60.21H90.4c3.1,0,6.07,1.23,8.27,3.41l6.05,6.03v-9.44v-18h58.16c2.87,0,5.2,2.32,5.2,5.18V84.3z"
      />
    </svg>
  );
}
