export default function OnboadringIcon({
  color = "#000000",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>onboard</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width="48" height="48" fill="none" />
        </g>
        <g id="icons_Q2" data-name="icons Q2">
          <path
            d="M9.7,40a2,2,0,0,1-1.4-.6A21.6,21.6,0,0,1,2,24a22,22,0,0,1,44,0,21.6,21.6,0,0,1-6.3,15.4,2,2,0,1,1-2.8-2.8,18,18,0,1,0-25.8,0,1.9,1.9,0,0,1,0,2.8A2,2,0,0,1,9.7,40Z"
            fill={color}
          />
          <path
            d="M22.6,14.6l-8,7.9a2.1,2.1,0,0,0-.2,2.7,1.9,1.9,0,0,0,3,.2L22,20.8V44a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2V20.8l4.6,4.6a1.9,1.9,0,0,0,3-.2,2.1,2.1,0,0,0-.2-2.7l-8-7.9A1.9,1.9,0,0,0,22.6,14.6Z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
}
