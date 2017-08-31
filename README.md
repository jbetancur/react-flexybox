# React Flexy Box

React flexy box is a simple to use flexbox system for your React project based on the scss library https://github.com/jbetancur/flexybox

* Straight forward and familiar API for controlling your layout
* lightweight when minimized @58kb (including styled-components dependancy)
* built with styled-components - no need to add loaders for css/scss

## Installation

dependencies: react 15+

```
npm install react-flexybox
```
or

```
yarn add react-flexy-box
```

## Live Demo
https://codepen.io/johnnyazee/pen/prqREK/

## API
### `<Grid />`
Optional wrapper

| prop  	|   type  	| values 	| default 	| description                 	                                                    |
|-------	|:-------:	|--------	|---------	| --------------------------------------------------------------------------------- |
| fluid 	| boolean 	|        	| true    	| true: sets content to 100% of page width \| false: sets a max-width for content   |

### `<Row>`
Row wraps Cols

| prop           	|   type  	| values                                                                         	    | default    	|
|----------------	|:-------:	|------------------------------------------------------------------------------------	|------------	|
| gutter         	| integer 	|                                                                                	    | 0          	|
| columnDivision  | integer 	|  allows columns divisions to be overidden (i.e. 24 = smaller columns than 12)       | 12          |
| wrap           	| string  	| `nowrap \| wrap \| wrap-reverse`                                                	  | wrap       	|
| direction      	| string  	| `row \| row-reverse \| column \| column-reverse`                                  	| row        	|
| justifyContent 	| string  	| `flex-start \| flex-end \| center \| space-between \| space-around \| space-evenly` | flex-start 	|
| alignContent   	| string  	| `flex-start \| flex-end \| center \| baseline \| stretch`                          	| stretch    	|
| alignItems     	| string  	| `flex-start \| flex-end \| center \| space-between \| space-around \| stretch`      | stretch    	|

### `<Col>`
Flex Items

| prop  	|        type        	| values 	| default 	| description                 	    |
|-------	|:------------------:	|--------	|---------	|---------------------------------- |
| order 	| integer            	|        	| 0       	| set the order of flex items in px	|
| flex  	| integer or boolean 	| `1-12` 	| false   	| sets the default flex size  	    |
| xs    	| integer            	| `1-12` 	|         	| 0 - 599px                         |
| sm    	| integer            	| `1-12` 	|         	| 600 - 959px                       |
| md    	| integer            	| `1-12` 	|         	| 960px - 1280px              	    |
| lg    	| integer            	| `1-12` 	|         	| 1280px or greater           	    |

* `<Col flex={6}>` sets the default flex size
* `<Col flex>` sets the item to auto stretch
* `<Col flex={6} xs={12}>` xs (xs, sm, md, or lg) used togther with flex - you can easily set a default flex size for any size other than the xs breakpoint 
* values for flex ranges are dependent on columnDivisions

## Basic Usage
```
import { Grid, Row, Col } from 'react-flexybox';

// sets Cols to both 50% of the page
<Grid>
  <Row>
    <Col flex={6}>
      hello1!
    </Col>
    <Col flex={6}>
      hello2!
    </Col>
  </Row>
</Grid>

// sets Cols to both 50% of the page except on xs where they should be 100%
<Grid>
  <Row>
    <Col flex={6} xs={12}>
      hello1!
    </Col>
    <Col flex={6} xs={12}>
      hello2!
    </Col>
  </Row>
</Grid>

// adds a gutter to all flex items
<Grid>
  <Row gutter={3}>
    <Col flex={6} xs={12}>
      hello1!
    </Col>
    <Col flex={6} xs={12}>
      hello2!
    </Col>
  </Row>
</Grid>
```

## CDN Hosted
* https://react-flexybox.netlify.com/react-flexybox.js
* https://react-flexybox.netlify.com/react-flexybox.min.js

### Usage (UMD)
```
const {
  Grid,
  Row,
  Col,
} = ReactFlexyBox;
```

## Feature Roadmap
* offsets

## Supported Browsers (CSS)
Flexy Box CSS is prefixed and tested for the following browsers. If are loading the scss directly (webpack, gulp, etc) then you will need to ensure that you create a task
to auto prefix.

* Chrome *
* Firefox *
* Safari (flex wrap does not currently work in safari due to webkit bug)*
* Edge *
* IE 10 & 11 -- (maybe)
* iOS *

# Contributing
* The files under the `dev` folder are the ones that should be distributed.*
* install yarn `npm install yarn -g`

## Scripts

* `yarn build` - produces production version of your library under the `dist` folder
* `yarn build-all` - produces production & dev version of your library under the `dist` folder
* `yarn dev` - produces development version of react-flexybox and runs a watcher
* `yarn test` - runs the tests
* `yarn test:watch` - same as above but in a watch mode

## Inspiration
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://v4-alpha.getbootstrap.com/
