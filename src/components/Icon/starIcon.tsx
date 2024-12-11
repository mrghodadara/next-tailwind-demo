import React from 'react';

interface IStarIcon {
  color?: string;
}

const StarIcon = ({ color }: IStarIcon) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1652 3.32432L15.8167 6.81005C16.0874 7.38068 16.6101 7.77617 17.2149 7.86777L20.9084 8.4268C22.4312 8.65722 23.0393 10.606 21.9372 11.7248L19.2638 14.4377C18.8263 14.8819 18.6266 15.522 18.7299 16.1493L19.3607 19.9804C19.6211 21.56 18.029 22.7643 16.6674 22.0187L13.3637 20.211C12.8228 19.9147 12.1765 19.9147 11.6356 20.211L8.33198 22.0199C6.97035 22.7655 5.37819 21.5598 5.6386 19.9816L6.26947 16.1505C6.3732 15.5228 6.17337 14.8823 5.73556 14.4377L3.06278 11.7245C1.96072 10.6057 2.56885 8.65692 4.09164 8.4265L7.78515 7.86746C8.38994 7.77585 8.91258 7.38033 9.18328 6.80975L10.8342 3.32436C11.516 1.8867 13.4834 1.88665 14.1652 3.32432Z"
        fill={color || '#FFAE43'}
      />
    </svg>
  );
};

export default StarIcon;
