import Link from "next/link";

export const NotFound = () => {
  return (
    <main className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
      <h1>404 | Page not found</h1>
      <Link href={"/"}>
        <button className="buttons mt-10 mb-10">Return</button>
      </Link>
    </main>
  );
};

export default NotFound;
