import React from 'react'
import { Link } from 'gatsby'

const NoteLink = ({ post }): JSX.Element => (
  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
)

export default NoteLink
