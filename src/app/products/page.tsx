import Card from "@/components/Card/index";
import IProducts from "@/interfaces/products";

export const fetchProducts = async (): Promise<IProducts[]> => {
  const url = process.env.API_URL + "/products/";
  const response = await fetch(url);
  const products = await response.json();
  return products;
};

export const Products = async () => {
  const fetchData = await fetchProducts();
  return (
    <>
      <h1 className="font-bold text-3xl flex justify-center items-center m-5">
        Our Products
      </h1>
      <div className="flex gap-4 justify-center flex-wrap">
        {fetchData.map((item: IProducts) => {
          return (
            <Card
              id={item.id}
              key={item.id}
              name={item.name}
              price={item.price}
              stock={item.stock}
              image={item.image}
              categoryId={item.categoryId}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
