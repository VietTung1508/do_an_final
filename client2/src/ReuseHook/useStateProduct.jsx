import { useEffect } from "react";

const UseStateProduct = (setTo, setNewCat) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/product/allProducts"
        );
        const data = await response.json();
        const data2 = data.filter((product) =>
          setNewCat?.some((cat) => cat.title === product.category)
        );
        setTo(data2);
        if (data2) setTo(data2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setTo, setNewCat]);
};

export default UseStateProduct;
