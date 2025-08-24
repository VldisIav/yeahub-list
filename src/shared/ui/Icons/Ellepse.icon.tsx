const Ellepse = (data: { width: number; height: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={data.width}
      height={data.height}
      fill="none"
    >
      <circle cx="4" cy="4" r="4" fill="#5533FF" />
    </svg>
  );
};

export default Ellepse;
