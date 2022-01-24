import { memo } from "react";
import { Product } from "../types/Product";

interface ProductItemProps {
    product: Product
    onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    return (
        <article>
            {product.title} - <strong>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(product.price)}</strong>
            <button onClick={() => onAddToWishList(product.id)}>Add to wishlist</button>
        </article>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})