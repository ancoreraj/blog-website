import Link from 'next/link'

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} passHref>

      <div className='card'>
        <img src={post.frontmatter.cover_image} alt={post.slug} />
        <h3 className='card-title'>{post.frontmatter.title}</h3>
        <p className='card-desc'>{post.frontmatter.excerpt}</p>

      </div>
    </Link>
  )
}
