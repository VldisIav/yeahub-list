const Arrow = (data: { width: number; height: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={data.width}
      height={data.height}
      fill="none"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#6A0BFF"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
