import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Img from "gatsby-image"
import styled from "styled-components"

const NewsListing = ({ title, excerpt, to, sizes }) => (
  <div>
    <div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <Link to={to}>Read More</Link>
    </div>
    {sizes && <Img sizes={sizes} />}
  </div>
)

NewsListing.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  sizes: PropTypes.object
}

export default NewsListing
