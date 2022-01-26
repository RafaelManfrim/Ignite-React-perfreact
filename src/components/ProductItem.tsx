import { memo, useState } from "react";
import { Product } from "../types/Product";
import { addProductToWishListProps } from "./AddProductToWishList"
import dynamic from "next/dynamic";

const AddProductToWishList = dynamic<addProductToWishListProps>(() => {
    return import("./AddProductToWishList").then(mod => mod.AddProductToWishList) ;
}, { loading: () => <span>Carregando...</span> })

interface ProductItemProps {
    product: Product
    onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    const [isAddingToWishList, setIsAddingToWishList] = useState(false)

    return (
        <article>
            {product.title} - <strong>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(product.price)}</strong>
            <button onClick={() => setIsAddingToWishList(true)}>Adicionar aos favoritos</button>
            { isAddingToWishList && <AddProductToWishList onAddToWishList={() => onAddToWishList(product.id)} onRequestClose={() => setIsAddingToWishList(false)} />}
        </article>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})