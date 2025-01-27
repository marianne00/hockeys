'use client'

import Container from "../components/Container"
import SectionHead from "../components/SectionHead"
import data from "../data/product.json"
import ProductCard from "../components/ProductCard"


const Products = () => {




  return (
    <Container>
      <SectionHead
        title="Our New Products"
        description="We have a variety of products for all ages and skill levels. Whether you're a beginner or a pro, we have something for you!"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-16">
        {data?.products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
            rating={product.rating}
            views={product.views}
            likes={product.likes}
            deliveryFee={product.deliveryFee}
          />
        ))}
      </div>
    </Container>
  )
}

export default Products