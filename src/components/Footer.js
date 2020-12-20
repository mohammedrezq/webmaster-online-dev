import React from "react"
import { FooterWrapper, CopyWrapper, P } from "../elements"

export const Footer = () => {
  return <FooterWrapper>
      <CopyWrapper>
          <P size="small" color="dark3">&copy; {new Date().getFullYear()} Webmaster Online Dev All Rights Reserved.</P>
      </CopyWrapper>
  </FooterWrapper>
}
