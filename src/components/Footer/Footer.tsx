import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex bg-[#000000] text-white  text-center text-sm">
      <Link className="ml-10 w-1/3 p-2" href={"/contact"}>
        <div className="linkNav">About Us</div>
      </Link>
      <Link className="w-1/3 p-2" href={"/contact"}>
        <div className="linkNav">Mission & Vision</div>
      </Link>
      <Link className="w-1/3 p-2" href={"/contact"}>
        <div className="linkNav">Contact Us</div>
      </Link>
   
    </footer>
  );
};

export default Footer;
