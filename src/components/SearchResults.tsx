import { ProductListResults } from "../types/Product"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    results: ProductListResults
    onAddToWishList: (id: number) => void
}

export function SearchResults({ results, onAddToWishList }: SearchResultsProps) {
    return (
        <div>
            <h2>Total: {results.totalPrice}</h2>
            {results.data.map(product => {
                return (
                    <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList}/>
                )
            })}
        </div>
    )
}

// Comportamento padrão React:
// Processo de renderização
// 1. Criar uma nova versão do componente
// 2. Comparar com a versão anterior
// 3. Se houverem alterações, vai atualizar o que alterou


// memo - usar quando
// 1. Componentes funcionais puros ( sem funcionalidade própria, apenas exibir informações, criados deixar o código mais limpo e separado )
// 2. Quando o componente renderiza muitas vezes
// 3. Quando o componente renderiza com as mesmas props
// 4. Componentes de tamanho médio para grande


// useMemo - Evitar que um cálculo muito pesado seja refeito toda vez que o componente renderizar
// Memoriza um cálculo até que algum valor que possa afetar o resultado se altere
// Não recria um novo espaço na memória quando o componente pai renderiza
// 1. Cálculos pesados
// 2. Igualdade referencial (quando a gente repassa aquela informação a um componente filho)


// useCallback - Memorizar uma função e não um valor
// Quando o componente atualiza, todas as suas funções são recriadas do zero
// 1. Usar quando a funcão for passada por parãmetro para outro componente


// Boa prática, colocar cálculos no momento da busca