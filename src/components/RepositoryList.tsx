import { useEffect, useState } from 'react'
import { RepositoryItem } from './RepositoryItem'
import '../styles/repositories.scss'

interface Repository {
  name: string
  html_url: string
  description: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/yarapolana/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Repo List</h1>
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.name} repository={repository} />
        ))}
      </ul>
    </section>
  )
}
