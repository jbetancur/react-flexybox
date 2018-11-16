# React Flexy Box

React flexy box is a simple to use flexbox system for your React project based on the original [flexybox library](https://github.com/jbetancur/flexybox)

If you've used the bootstrap layout system, then react-flexybox should be relatively familiar.

* Straight forward and familiar API for controlling your layout
* built with [styled-components](https://github.com/styled-components/styled-components) - no css/scss means no need to add special loaders/config
* based off actual uses cases in production apps

## Live Demo
https://react-flexybox-demo.netlify.com/

## Browser Support
```
"Chrome >= 48",
"Firefox >= 44",
"Firefox ESR",
"Safari >= 9.1",
"Edge >= 12",
"ios_saf >= 9.3",
"ie 11"
```

## Installation

dependencies: react 15+, styled-components 3+

```
npm install react-flexybox styled-components
```
or

```
yarn add react-flexy-box styled-components
```

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
| minColWidths    | number 	  |                                                                                     |             | override the minWidth for all Cols within the Row
| wrap           	| string  	| `nowrap \| wrap \| wrap-reverse`                                                	  | wrap       	| whether flex items should wrap when the window is resized
| direction      	| string  	| `row \| row-reverse \| column \| column-reverse`                                  	| row        	|
| justifyContent 	| string  	| `flex-start \| flex-end \| center \| space-between \| space-around \| space-evenly` | flex-start 	| justityContent aligns the items inside a flex container along the x axis
| alignContent   	| string  	| `flex-start \| flex-end \| center \| baseline \| stretch`                          	| stretch    	| alignContent aligns the whole structure according to its value and has no effect when items are in a single line
| alignItems     	| string  	| `flex-start \| flex-end \| center \| space-between \| space-around \| stretch \| baseline`      | stretch    	| alignItems aligns the items inside a flex container along the y axis just like justifyContent does along the x axis
| className       | string 	  |        	                                                                            |         	  | set the className on the Row Element                                          |
| style 	        | object 	  |        	                                                                            |         	  | set the style on the Row Element                                              |
| debug           | boolean   |                                                                                     | false       | adds bounding boxes to help debug layout issues                               |
| height          | string    |                                                                                     |             | allows setting the Row height e.g. `height="100px"`                            |
| component       | function \| string 	|                                                                           | `div`       | The component to render the Row as                                            |
| center          | boolean	  |                                                                                     | false       | shortcut to center child `Col` items horizontally and vertically              |
| fill            | boolean 	|                                                                                     | false       | shortcut that sets `Row` to `height: 100%` - *(overrides 'height')*                                  |
| padding         | string 	  |                                                                                     | 0           | sets padding on `Row`                                                         |
| paddingTop      | string 	  |                                                                                     | 0           | sets padding-top on `Row`                                                     |
| paddingLeft     | string 	  |                                                                                     | 0           | sets padding-left on `Row`                                                    |
| paddingBottom   | string 	  |                                                                                     | 0           | sets padding-bottom `Row`                                                     |
| paddingRight    | string 	  |                                                                                     | 0           | sets padding-right on `Row`                                                   |

* `<Row gutter={4} minColWidth={100}>` sets child `Col` flex items to margin of 4px and all min-widths to 100px within `Row`
* `<Row justifyContext="center">` center justifies child `Col` flex items horizontally within the `Row`
* `<Row justifyContext="center" alignItems="center" >` center justifies child `Col` flex items horizontally and vertically within the `Row`

### `<Col>`
Flex Items

| prop  	  |        type        	| values 	                                                            | default 	            | description                 	              |
|---------- |:------------------:	|-------------------------------------------------------------------- |----------------------	|-------------------------------------------- |
| order 	  | integer            	|        	                                                            | 0       	            | set the order of flex items     	          |
| alignSelf | string              | `auto \| flex-start \| flex-end \| center \| baseline \| stretch`   | auto   	              | center the alignments for one of the items inside a flexible element  	              |
| flex  	  | boolean \| number   |  	                                                                  | `false \| 1-12`   	  | sets the default flex size  	              |
| xs    	  | number            	|        	                                                            | `1-12`                | 0 - 599px                                   |
| sm    	  | number            	|        	                                                            | `1-12`   	            | 600 - 959px                                 |
| md    	  | number            	|        	                                                            | `1-12`                | 960px - 1280px              	              |
| lg    	  | number            	|        	                                                            | `1-12`                | 1280px or greater           	              |
| className | string              |        	                                                            |         	            | set the className on the Col Element        |
| style 	  | object              |                                                                     |         	            | set the style on the Col Element            |
| component | function \| string 	|                                                                     | `div`        	        | The component to render the Col as          |

* `<Col flex={6}>` sets the default flex size
* `<Col flex>` sets the item to auto stretch
* `<Col flex={6} xs={12}>` xs (xs, sm, md, or lg) used togther with flex - you can easily set a default flex size for any size other than the xs breakpoint 
* `<Col flex={6} order={2}> ... <Col flex={6} order={1}>` The last Col will be ordered as first
* values for flex ranges are dependent on columnDivisions

## Basic Usage
```
import { Container, Row, Col } from 'react-flexybox';
```

### UMD Usage
```
...
<head>
  <link rel="stylesheet" href="https://react-flexybox.netlify.com/react-flexybox.min.js">
</head>
...

// ES6
const {
  Container,
  Row,
  Col,
} = ReactFlexyBox;

//ES Old School
var Container = ReactFlexyBox.Container;
var Row = ReactFlexyBox.Row;
var Col = ReactFlexyBox.Col;

```

## Supported Browsers
react-flexybox is supports on browsers that support flex. It will be up to you to set your autoprefixing appropriatly especially if you use IE 11

[Supported Browsers](https://caniuse.com/#search=flex)

# Contributing
* `npm install yarn jest -g`
* `yarn build-all` to generate dist
* `yarn build-demo` to generate/update demo

## Scripts
* `yarn build` - produces production version of your library under the `dist` folder
* `yarn build-all` - produces production & dev version of your library under the `dist` folder
* `yarn dev` - produces development version of react-flexybox and runs a watcher
* `yarn test` - runs the tests
* `yarn test:watch` - same as above but in a watch mode
* `yarn demo:build` - builds the demo

# Built with react-flexybox
* [Galactic Fog's Gestalt Platform](http://www.galacticfog.com/)

# Inspiration
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://v4-alpha.getbootstrap.com/
