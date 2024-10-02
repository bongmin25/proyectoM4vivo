import Link from "next/link";
import types from "../../interfaces/products";
import Image from "next/image";

const Card: React.FC<types> = ({ id, name, price, image }) => {
  return (
    <>
    <Link className="flex items-center mt-2" href={`/products/${id}`}>
      <div className="flex rounded-xl flex-col text-center justify-center hover:scale-[1.01] transition-all duration-300 hover:bg-slate-200 bg-slate-100 p-6 w-[35vh] mb-3">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">{name}</h1>
          <p className="text-gray-500">US${price}</p>
        </div>
        <br />
        <Image width={300} height={300} alt="img" className="mx-auto w-auto h-[20vh] rounded-lg" src={image} />
        <br />
      </div>
    </Link>
    </>

  );
};

export default Card;
