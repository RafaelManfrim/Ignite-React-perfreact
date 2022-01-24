import { Product } from "../types/Product";

interface ProductItemProps {
    product: Product
}

export function ProductItem({ product }: ProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(product.price)}</strong>
        </div>
    )
}