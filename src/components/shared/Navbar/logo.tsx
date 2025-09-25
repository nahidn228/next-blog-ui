// import Image from "next/image";

// export const Logo = () => (
//   <Image width={90} height={90} src="/logo.jpg" alt="Company Logo"></Image>
// );

const Logo = () => {
  return (
    <div className="w-48 h-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 60"
        fill="none"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Circle Icon */}
        <circle cx="30" cy="30" r="28" fill="url(#nextblogGradient)" />

        {/* Centered NB inside circle */}
        <text
          x="30"
          y="30"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="Inter, Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="18"
          fill="white"
        >
          NB
        </text>

        {/* Title */}
        <text
          x="70"
          y="35"
          fontFamily="Inter, Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="22"
          fill="currentColor"
        >
          NextBlog
        </text>

        <defs>
          {/* Modern gradient */}
          <linearGradient id="nextblogGradient" x1="0" y1="0" x2="60" y2="60">
            <stop offset="0" stopColor="#1A1A1A" />
            <stop offset="1" stopColor="#F2F2F2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
