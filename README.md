# Landis

__Client:__ Landis  

__Project:__ Corp Site  

__Domain:__ landisproperty.com.au 

__Domain Owner:__ Joanne Livanidis –Landis Properties.  

__Launch Date:__ June 2018  

__Status:__ LIVE  

### Tech Stack

__Site Generator:__ [Gatsby](https://www.gatsbyjs.org/)

__CSS Preprocessor:__ [Styled Components](https://www.styled-components.com/)

__JavaScript Version:__ ES6 + React

__Hosting:__ Hosted on Baracons FTP Server [115.70.226.234](ftp://115.70.226.234)

__Hosting Notes:__ Once changes and build is run. Re upload (& overwrite) files to server.

### Packages

See package.json  

### Tracking

Registration form triggers being sent to [AWS Lambda Function](https://ap-southeast-2.console.aws.amazon.com/apigateway/home?region=ap-southeast-2#/apis/vds9c5imf1/resources/ugavgg/methods/POST) with information being sent to client



## Usage

### System Requirements

* Node JS [https://nodejs.org/en/](https://nodejs.org/en/)

### Installation

* Clone this repository
* Run `npm install`
* Run `gatsby develop` to start locally

### Building

* Run `gatsby build`

Destination folder will be `public`


## Miscellaneous

#### Hints for frequently updated pages:
#### THE COLLECTION
 - Collection data comes from `projects.yml`
 - Page layout comes from `CollectionThumb.js`
 - Individual project page layout comes from `templates/projects.js`

#### Agents login
 - Collection data comes from `pages/portals`.
 - Individual page comes from project-name.js, ie `como.js`, `queens-carlton.js`

