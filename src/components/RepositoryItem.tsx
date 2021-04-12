interface RepositoryItem {
  repository: {
    name: string
    html_url: string
    description: string
  }
}

export function RepositoryItem({repository}: RepositoryItem) {
  return (
    <li>
      <strong>{repository.name ?? 'bla'}</strong>
      <p>{repository.description ?? 'Forms for React'}</p>
      <a href={repository.html_url ?? '#'}>Link</a>
    </li>
  )
}