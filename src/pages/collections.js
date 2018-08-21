import React, { Component } from "react"
import CollectionThumb from "../components/CollectionThumb";
import styled from 'styled-components'

class TheCollectionPage extends Component {
	
	render() {
		let photo = 0;
		let projects = this.props.data.allProjectsYaml.edges;
		let results = [];
		projects.map((project, index) => {
			project = project.node;

				results.push(
					<CollectionThumb
					src={project.thumb}
					title={project.name}
					key={index}
					half={project.half ? project.half : false}
					last={project.last ? project.last : false}
					overlay={project.overlay ? project.overlay : false}
					subTitle={project.subtitle}
					to={'/collections/' + project.url}
					/>
				);
		});
		return (
		<div className='Grid' >
		{results}
		</div>
		)
	}
}


const Hr = styled.div`
	display:block;
	float:none;
	clear:both;
`


export default TheCollectionPage

export const TheCollectionPageQuery = graphql`
query CollectionsQuery {
  allProjectsYaml {
    edges {
      node {
        name
        url
		  thumb
        text
        hero
        half
        last
        overlay
        subtitle
      }
    }
	}
}
`