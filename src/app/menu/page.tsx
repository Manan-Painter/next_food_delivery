import Link from "next/link";

export const Menupage = () => {
  return (
    <div className="p-4 lg:px-20 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link href={`/menu/${category.slug}`} key={category.id} className="w-full h-2/3 bg-cover p-8 md:h-1/2" style={{backgroundImage:`url(${category.img})`}}>
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>   
            <button className={`hidden 2xl:block bg-${category.color} bg-orange-600 py-2 px-4 rounded-md`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

// Menu data type
type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
};

// Menu data
const menu: Menu[] = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/images/food1.webp",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/images/burger.avif",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/images/food1.webp",
    color: "white",
  },
];

// Export the page component as the default export
export default Menupage;
