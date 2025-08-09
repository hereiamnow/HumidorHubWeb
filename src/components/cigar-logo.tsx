export default function CigarLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 5.5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-12" />
      <path d="M16 3.5H3.5a1.5 1.5 0 0 0 0 3h12.5" />
      <path d="M10 9H6" />
      <path d="M10 12H7" />
      <path d="M10 15H8" />
      <path d="M4 20h1" />
      <path d="M5 17h1" />
    </svg>
  );
}
