'use client';

import { ISVGIconProps } from '../../types/base';
export default function IPercentIcon({ width, height, fill, className }: ISVGIconProps) {
  return (
    <svg width={width} height={height} fill={fill} className={className} viewBox="0 0 117.35 117.35">
      <path
        d="M76.17,66.96c-2.93,0.39-4.14,1.96-3.77,4.74c0.38,2.86,1.95,4.07,4.88,3.68c2.86-0.38,4.07-1.95,3.69-4.81
				C80.6,67.79,79.02,66.58,76.17,66.96z M58.68,0C26.32,0,0,26.32,0,58.68c0,32.35,26.32,58.68,58.68,58.68
				c32.35,0,58.68-26.32,58.68-58.68C117.35,26.32,91.03,0,58.68,0z M27.81,47.84c-1.05-7.99,2.72-12.73,11.29-13.86
				c8.5-1.12,13.37,2.49,14.42,10.47c1.06,8.06-2.71,12.8-11.21,13.92C33.75,59.5,28.88,55.89,27.81,47.84z M51.06,84.92
				c-0.27,0.57-0.81,0.96-1.43,1.04l-7.85,1.03c-0.73,0.1-1.28-0.66-0.96-1.32L66.3,32.44c0.27-0.57,0.81-0.96,1.43-1.04l7.85-1.03
				c0.73-0.1,1.28,0.66,0.96,1.32L51.06,84.92z M78.33,83.37c-8.57,1.13-13.44-2.48-14.5-10.54c-1.05-7.99,2.72-12.73,11.29-13.86
				c8.5-1.12,13.37,2.49,14.42,10.47C90.6,77.51,86.83,82.25,78.33,83.37z M44.96,45.58c-0.37-2.78-1.94-3.99-4.8-3.62
				c-2.93,0.39-4.14,1.96-3.77,4.74c0.38,2.86,1.95,4.07,4.88,3.68C44.12,50.01,45.33,48.44,44.96,45.58z"
      />
    </svg>
  );
}
