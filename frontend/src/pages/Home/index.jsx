import { Link } from 'react-router-dom';
import Categories from '../../components/Categories';
import './Home.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card';

async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}

export default function Page() {
  const [selectedBtn, setSelectedBtn] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data.slice(0, 8));
    }
    loadProducts();
  }, []);

  return (
    <div className="home-container">
      <Categories selectBtn={selectedBtn} onSelect={setSelectedBtn} />

      <div className="cards-container">
        {products.map((item, index) => (
          <Card
            key={index}
            name={item.title}
            image={item.image}
            category={item.category}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
