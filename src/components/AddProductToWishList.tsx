export interface addProductToWishListProps {
    onAddToWishList: () => void;
    onRequestClose: () => void;
}

export function AddProductToWishList({ onAddToWishList, onRequestClose }: addProductToWishListProps) {
    return (
        <span>
            Deseja adicionar aos favoritos?
            <button onClick={onAddToWishList}>Sim</button>
            <button onClick={onRequestClose}>Não</button>
        </span>
    )
}