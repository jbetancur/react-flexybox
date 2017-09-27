## <Container />
Optional wrapper

| prop  	  |   type  	          | values 	| default 	| description                 	                                                    |
|---------- |:------------------:	|--------	|---------	| --------------------------------------------------------------------------------- |
| fluid 	  | boolean 	          |        	| false    	| true: sets content to 100% of page width false: sets a max-width for content      |
| className | string 	            |        	|         	| set the className on the Container Element                                        |
| style 	  | object 	            |        	|         	| set the style on the Container Element                                            |
| component | function   string 	|         | div     | The component to render the Container as                                          |

## <Row>
Row wraps Cols

| prop           	|   type  	| values                                                                         	    | default    	| description |
|----------------	|:-------:	|------------------------------------------------------------------------------------	|------------	| ----------- |
| gutter         	| number 	  |                                                                                	    | 0          	|
| columnDivision  | integer   |                                                                                     | 12          | allows columns divisions to be overidden (i.e. 24 = smaller columns than 12)
| minColWidths    | number 	  |                                                                                     |             | override the minWidth for all Cols within the Row
| wrap           	| string  	| nowrap wrap wrap-reverse                                                	  | wrap       	| whether flex items should wrap when the window is resized
| direction      	| string  	| row row-reverse column column-reverse                                  	| row        	|
| justifyContent 	| string  	| flex-start flex-end center space-between space-around space-evenly | flex-start 	| justityContent aligns the items inside a flex container along the x axis
| alignContent   	| string  	| flex-start flex-end center baseline stretch                          	| stretch    	| alignContent aligns the whole structure according to its value and has no effect when items are in a single line
| alignItems     	| string  	| flex-start flex-end center space-between space-around stretch      | stretch    	| alignItems aligns the items inside a flex container along the y axis just like justifyContent does along the x axis
| className       | string 	  |        	                                                                            |         	  | set the className on the `Row` Element                                          |
| style 	        | object 	  |        	                                                                            |         	  | set the style on the `Row` Element                                              |
| debug           | boolean   |                                                                                     | false       | adds bounding boxes to help debug layout issues                               |
| height          | string    |                                                                                     |             | allows setting the `Row` height e.g. height="100px"`                            |
| component       | function string 	|                                                                           | div        | The component to render the `Row` as                                            |
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

## <Col>
Flex Items

| prop  	  |        type        	| values 	                                                            | default 	            | description                 	              |
|---------- |:------------------:	|-------------------------------------------------------------------- |----------------------	|-------------------------------------------- |
| order 	  | integer            	|        	                                                            | 0       	            | set the order of flex items     	          |
| minWidth  | number            	|        	                                                            |        	              | override the minWidth      	                |
| alignSelf | string              | auto flex-start flex-end center baseline stretch   | auto   	              | center the alignments for one of the items inside a flexible element  	              |
| flex  	  | boolean number   |  	                                                                  | false 1-12   	  | sets the default flex size  	              |
| xs    	  | number            	|        	                                                            | 1-12                | 0 - 599px                                   |
| sm    	  | number            	|        	                                                            | 1-12   	            | 600 - 959px                                 |
| md    	  | number            	|        	                                                            | 1-12                | 960px - 1280px              	              |
| lg    	  | number            	|        	                                                            | 1-12                | 1280px or greater           	              |
| className | string              |        	                                                            |         	            | set the className on the `Col` Element        |
| style 	  | object              |                                                                     |         	            | set the style on the Col Element            |
| component | function string 	|                                                                     | div        	        | The component to render the `Col` as          |

* `<Col flex={6}>` sets the default flex size
* `<Col flex>` sets the item to auto stretch
* `<Col flex={6} xs={12}>` xs (xs, sm, md, or lg) used togther with flex - you can easily set a default flex size for any size other than the xs breakpoint 
* `<Col flex={6} order={2}> ... <Col flex={6} order={1}>` The last Col will be ordered as first
* values for flex ranges are dependent on columnDivisions
