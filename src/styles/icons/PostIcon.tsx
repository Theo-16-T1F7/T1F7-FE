import { SVGProps } from 'react';

export const PostIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="53" height="65" viewBox="0 0 53 65" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_37_363)">
      <circle cx="26.3667" cy="34.5667" r="22.3667" fill="#EA464A" />
      <path
        d="M24.7309 42.9782V23.9157H27.9657V42.9782H24.7309ZM16.817 35.0644V31.8295H35.8795V35.0644H16.817Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_37_363"
        x="0"
        y="12.2"
        width="52.7334"
        height="52.7333"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_363" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_363" result="shape" />
      </filter>
    </defs>
  </svg>
);
