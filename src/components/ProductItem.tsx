import { memo } from "react";
import { Product } from "../types/Product";

interface ProductItemProps {
    product: Product
}

function ProductItemComponent({ product }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(product.price)}</strong>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})