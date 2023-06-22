import Link from 'next/link'

export default function Header() {
  return (
    <header className='header-container'>
      <div className='container flex-cont'>
        <Link href='/' passHref>
          <h2 className='head-text'>Breaking The Habit</h2>
        </Link>
      </div>
    </header>
  )
}
