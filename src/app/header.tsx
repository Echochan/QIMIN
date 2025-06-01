export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">My Website</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
    </header>
  )
}
