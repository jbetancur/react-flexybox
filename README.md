# React Flexy Box

React flexy box is a simple to use flexbox system for your React project based on the scss library https://github.com/jbetancur/flexybox. If you've used the bootstrao layout sytem them react-flexybox should already be familiar.

* Straight forward and familiar API for controlling your layout
* lightweight when minimized ~19kb
* built with styled-components - no need to add loaders for css/scss
* easily override flex item widths using minWidthCols or minWidth

## Installation

dependencies: react 15+, styled-compoonents 2+

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
### `<Container />`
Optional wrapper

| prop  	  |   type  	          | values 	| default 	| description                 	                                                    |
|---------- |:------------------:	|--------	|---------	| --------------------------------------------------------------------------------- |
| fluid 	  | boolean 	          |        	| false    	| true: sets content to 100% of page width \| false: sets a max-width for content   |
| className | string 	            |        	|         	| set the className on the Container Element                                        |
| style 	  | object 	            |        	|         	| set the style on the Container Element                                            |
| component | function \| string 	|         | `div`     | The component to render the Container as                                          |

### `<Row>`
Row wraps Cols

| prop           	|   type  	| values                                                                         	    | default    	| description |
|----------------	|:-------:	|------------------------------------------------------------------------------------	|------------	| ----------- |
| gutter         	| number 	  |                                                                                	    | 0          	|
| columnDivision  | integer   |                                                                                     | 12          | allows columns divisions to be overidden (i.e. 24 = smaller columns than 12)
| minColWidths    | number 	|                                                                                     |             | override the minWidth for all Cols within the Row
| wrap           	| string  	| `nowrap \| wrap \| wrap-reverse`                                                	  | wrap       	| whether flex items should wrap when the window is resized
| direction      	| string  	| `row \| row-reverse \| column \| column-reverse`                                  	| row        	|
| justifyContent 	| string  	| `flex-start \| flex-end \| center \| space-between \| space-around \| space-evenly` | flex-start 	| justityContent aligns the items inside a flex container along the x axis
| alignContent   	| string  	| `flex-start \| flex-end \| center \| baseline \| stretch`                          	| stretch    	| alignContent aligns the whole structure according to its value and has no effect when items are in a single line
| alignItems     	| string  	| `flex-start \| flex-end \| center \| space-between \| space-around \| stretch`      | stretch    	| alignItems aligns the items inside a flex container along the y axis just like justifyContent does along the x axis
| className       | string 	  |        	                                                                            |         	| set the className on the Row Element                                        |
| style 	        | object 	  |        	                                                                             |         	| set the style on the Row Element                                            |
| debug           | boolean   |                                                                                     | false     | adds bounding boxes to help debug layout issues |
| height          | string    |                                                                                     | auto      | allows setting the Row height e.g. `height="100%"` |
| component     | function \| string 	|         | `div`        	        | The component to render the Row as          |

* `<Row gutter={4} minColWidth={100}>` sets child `Col` flex items to margin of 4px and all min-widths to 100px within `Row`
* `<Row justifyContext="center">` center justifies child `Col` flex items horizontally within the `Row`
* `<Row justifyContext="center" alignItems="center" >` center justifies child `Col` flex items horizontally and vertically within the `Row`

### `<Col>`
Flex Items

| prop  	  |        type        	| values 	| default 	            | description                 	              |
|---------- |:------------------:	|--------	|----------------------	|-------------------------------------------- |
| order 	  | integer            	|        	| 0       	            | set the order of flex items     	          |
| minWidth  | number            	|        	|        	              | override the minWidth      	                |
| flex  	  | boolean \| number   |  	      | `false \| 1-12`   	  | sets the default flex size  	              |
| xs    	  | number            	|        	| `1-12`                | 0 - 599px                                   |
| sm    	  | number            	|        	| `1-12`   	            | 600 - 959px                                 |
| md    	  | number            	|        	| `1-12`                | 960px - 1280px              	              |
| lg    	  | number            	|        	| `1-12`                | 1280px or greater           	              |
| className | string 	            |        	|         	            | set the className on the Col Element        |
| style 	  | object 	            |         |         	            | set the style on the Col Element            |
| component | function \| string 	|         | `div`        	        | The component to render the Col as          |

* `<Col flex={6}>` sets the default flex size
* `<Col flex>` sets the item to auto stretch
* `<Col flex={6} xs={12}>` xs (xs, sm, md, or lg) used togther with flex - you can easily set a default flex size for any size other than the xs breakpoint 
* `<Col flex={6} order={2}> ... <Col flex={6} order={1}>` The last Col will be ordered as first
* values for flex ranges are dependent on columnDivisions

## Basic Usage
```
import { Container, Row, Col } from 'react-flexybox';

// sets Cols to both 50% of the page
<Container>
  <Row>
    <Col flex={6}>
      hello1!
    </Col>
    <Col flex={6}>
      hello2!
    </Col>
  </Row>
</Container>

// sets Cols to both 50% of the page except on xs where they should be 100%
<Container>
  <Row>
    <Col flex={6} xs={12}>
      hello1!
    </Col>
    <Col flex={6} xs={12}>
      hello2!
    </Col>
  </Row>
</Container>

// adds a gutter to all flex items
<Container>
  <Row gutter={3}>
    <Col flex={6} xs={12}>
      hello1!
    </Col>
    <Col flex={6} xs={12}>
      hello2!
    </Col>
  </Row>
</Container>
```

## CDN Hosted
* https://react-flexybox.netlify.com/react-flexybox.js
* https://react-flexybox.netlify.com/react-flexybox.min.js

### Usage (UMD)
```
const {
  Container,
  Row,
  Col,
} = ReactFlexyBox;
```

## Feature Roadmap
* offsets

## Supported Browsers (CSS)
Flexy Box CSS is tested on the following browsers, but it will be up to you to set your autoprefixing.

* Chrome *
* Firefox *
* Safari (flex wrap does not currently work in safari due to webkit bug)*
* Edge *
* IE 11
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
