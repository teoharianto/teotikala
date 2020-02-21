import { withRouter } from 'next/router'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, href }) => {
  const style = {
    marginRight: 10,
    color: router.pathname === href ? 'white' : 'black',
    background: router.pathname === href ? '#d0a772' : 'transparent',
  }

  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style} className="nav-link nav-item">
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)