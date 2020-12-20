import React from "react"
import { Link } from "gatsby"

import { NavWrapper } from "../elements"

export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <div>Webmaster Online Dev</div>
      </Link>
    </NavWrapper>
  )
}
