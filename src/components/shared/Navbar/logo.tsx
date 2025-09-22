// import Image from "next/image";

// export const Logo = () => (
//   <Image width={90} height={90} src="/logo.jpg" alt="Company Logo"></Image>
// );

const Logo = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="180"
        height="50"
        viewBox="0 0 180 50"
        fill="none"
      >
        {/* <!-- Circle Icon --> */}
        <circle cx="25" cy="25" r="23" fill="url(#nextblogGradient)" />
        <text
          x="25"
          y="32"
          textAnchor="middle"
          fontFamily="Inter, Helvetica, Arial, sans-serif"
          fontWeight="bold"
          fontSize="18"
          fill="white"
        >
          NB
        </text>

        {/* <!-- Adaptive Title --> */}
        <text
          x="60"
          y="22"
          fontFamily="Inter, Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="18"
          fill="currentColor"
        >
          Next
        </text>
        <text
          x="60"
          y="40"
          fontFamily="Inter, Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="18"
          fill="currentColor"
        >
          Blog
        </text>

        <defs>
          {/* <!-- Neutral gradient for the icon --> */}
          <linearGradient id="nextblogGradient" x1="0" y1="0" x2="50" y2="50">
            <stop offset="0" stopColor="#1A1A1A" />
            <stop offset="1" stopColor="#F2F2F2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
