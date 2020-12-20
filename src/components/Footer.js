import React from "react"
import { FooterWrapper, CopyWrapper } from "../elements"

export const Footer = () => {
  return <FooterWrapper>
      <CopyWrapper>
          &copy; {new Date().getFullYear()} Webmaster Online Dev All Rights Reserved.
      </CopyWrapper>
  </FooterWrapper>
}
