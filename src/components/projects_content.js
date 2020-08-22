import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Projects_Card from "./projects_card"

export default function Projects_Content() {
  const [repos, setRepos] = useState([])
  const getData = () =>
    fetch("https://api.github.com/users/ahmeteneskcc/repos")
      .then(res => res.json())
      .then(res => setRepos([...res]))

  useEffect(() => {
    getData()
    console.log(repos)
  }, [])
  const state = useSelector(state => state.queries)
  return (
    <div className="projects_content">
      {repos
        ? repos.map(repo => {
            return (
              <Projects_Card
                text={repo.description}
                title={repo.name}
                repo_link={repo["html_url"]}
                page_link={repo["homepage"]}
              />
            )
          })
        : ""}
    </div>
  )
}
