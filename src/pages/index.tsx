import type { NextPage } from 'next'
import { FormEvent, useCallback, useState } from 'react'
import { SearchResults } from '../components/SearchResults'
import { Product, ProductListResults } from '../types/Product'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState<ProductListResults>({
    totalPrice: 0,
    data: []
  })

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if(!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()


    const totalPrice = data.reduce((acc: number, product: Product) => acc + product.price, 0)

    setResults({ totalPrice, data })
  }

  const addToWishList = useCallback(async (id: number) => {
    console.log(id)
  } , [])

  return (
    <main className={styles.container}>
      <h1>Pesquisa</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults onAddToWishList={addToWishList} results={results} />
    </main>
  )
}

export default Home
