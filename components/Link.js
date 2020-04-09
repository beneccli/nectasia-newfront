import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, as, isActiveIfPathStartsWith, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (
      isActiveIfPathStartsWith === true && router.pathname.startsWith(href)
  ||  router.pathname === href
  ) {
    className = `${className} active`
  }

  return <Link href={href} as={as}>{React.cloneElement(children, { className })}</Link>
}
