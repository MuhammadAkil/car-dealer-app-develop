export default function DollarIcon({
  color = "#000000",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill={color}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 512 512"
      enable-background="new 0 0 512 512"
      {...props}
    >
      <path
        d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
      c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
      />
      <path
        d="M267.922,351.734V384h-25.719v-30.406c-19.516-0.609-39.047-6.25-50.203-13.469l8.375-29.766
      c12.406,7.531,29.438,13.781,48.344,13.781c19.812,0,33.141-9.703,33.141-24.438c0-14.391-10.828-23.156-34.078-31.641
      c-32.219-11.906-53.609-27.25-53.609-56.094c0-26.938,18.609-47.938,49.891-53.562V128h25.406v28.828
      c19.516,0.625,32.859,5.641,42.781,10.656l-8.375,28.828c-7.438-3.75-21.078-10.969-42.141-10.969
      c-21.703,0-29.453,11.281-29.453,21.938c0,12.844,11.156,20.359,37.812,30.719C304.797,251.156,320,268.062,320,296.281
      C320,322.922,301.703,346.094,267.922,351.734z"
      />
    </svg>
  );
}
