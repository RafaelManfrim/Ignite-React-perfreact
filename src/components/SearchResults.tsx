import { Product } from "../types/Product"
import { ProductItem } from "./ProductItem"

interface SearchResultsProps {
    results: Product[]
}

export function SearchResults({ results }: SearchResultsProps) {
    return (
        <div>
            {results.map(product => {
                return (
                    <ProductItem key={product.id} product={product} />
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