export default function WarningIcon({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.2"
      height="19.2"
      {...props}
    >
      <circle
        cx="9.6"
        cy="9.6"
        r="8.4"
        fill="none"
        stroke="#e04006"
        stroke-width="2.4"
      />
      <path
        fill="none"
        stroke="#e04006"
        stroke-width="2.4"
        d="M9.6 4.8v7.2m0 1.2v2.4"
      />
    </svg>
  );
}
