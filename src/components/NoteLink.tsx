import React from 'react'
import { Link } from 'gatsby'

const NoteLink = ({ post }): JSX.Element => (
  <div>
    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
  </div>
)

export default NoteLink
