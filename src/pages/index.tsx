import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { SearchResults } from '../components/SearchResults'
import { Product } from '../types/Product'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState<Product[]>([])

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if(!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()
    setResults(data)
  }

  return (
    <main className={styles.container}>
      <h1>Pesquisa</h1>

      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results} />
    </main>
  )
}

export default Home