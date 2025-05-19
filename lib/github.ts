export interface Repository {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
  owner: {
    login: string
    avatar_url: string
  }
}

export async function getPinnedRepositories(username: string): Promise<Repository[]> {
  try {
    // GitHub API doesn't have a direct endpoint for pinned repos
    // So we'll fetch user repos and sort by stars as an approximation
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const repos: Repository[] = await response.json()

    // Sort by stars and return top 6
    return repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6)
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error)
    return []
  }
}
