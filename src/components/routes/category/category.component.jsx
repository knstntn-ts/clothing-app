import {CategoryContainer, CategoryTitle} from "./category.styles.jsx";
import { ProductCard } from "../../product-card/product-card.component";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../../contexts/categories.context";
import { useParams } from "react-router-dom";
const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext)

    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])


    return (
        <>
            <CategoryTitle as="h2" className="category-title">{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>

                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }

            </CategoryContainer>
        </>
    )
}


export default Category;