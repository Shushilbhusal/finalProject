
import { useQuery } from "@tanstack/react-query";
interface ProductType {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}


const Card = () => {
 const { data, isLoading, isError } = useQuery({
   queryFn: async () => {
     try {
       const dataFetch = await fetch("https://fakestoreapi.com/products");
       if (dataFetch.ok) {
         const jsonData = await dataFetch.json();
         return jsonData;
       } else {
         throw new Error("Failed to fetch data");
       }
     } catch (error) {
       console.log(error);
     }
   },
   queryKey: ["getProducts"],
 });


 // Check if loading
 if (isLoading) {
   return (
     <div className="flex justify-center items-center h-[100vh]">
       Loading...
     </div>
   );
 }


 // Check if error
 if (isError) {
   console.log("Error while fetching data");
   return <div>Error fetching data</div>;
 }


 // Check if data is undefined or null
 if (!data) {
   console.log("Data is undefined or null");
   return <div>Data </div>;
 }


 return (
   <div className="grid grid-cols-3 gap-12 m-4">
     {data.map((item: ProductType) => (
       <div
         key={item.id}
         className="  rounded-md bg-gray-100 hover:shadow-2xl text-black cursor-pointer p-4"
       >
         <img
           src={item.image}
           alt="product"
           className="h-32 rounded-md mb-4"
         />


         <h1 className="font-bold text-2xl mb-3">{item.name}</h1>
         <div>{item.description}</div>
         <div>${item.price}</div>
         <button className="bg-blue-950 text-white  m-4 h-14 w-14 rounded-full hover:cursor-pointer">Update</button>
         <button className="bg-blue-950 text-white  m-4 h-14 w-14 rounded-full hover:cursor-pointer">Delete</button>
       </div>
     ))}
   </div>
 );
};


export default Card;
