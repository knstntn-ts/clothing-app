import {CategoryPreviewContainer, Preview} from "./category-preview.styles";
import { ProductCard } from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {

    return (
        <CategoryPreviewContainer>
            <h2>
                <Link to={`/shop/${title}`} className="title">{title.toUpperCase()}</Link>
            </h2>
            <Preview>
                {
                    products.filter((_, index) => index < 4)
                        .map((product) => (<ProductCard key={product.id} product={product} />))
                }

            </Preview>


        </CategoryPreviewContainer>
    )
}


export default CategoryPreview;