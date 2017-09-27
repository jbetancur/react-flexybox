
e.g. override `flex` when `xs` or `sm` and uses flex for all remaining sizes

```
<Row gutter={3}>
  <Col flex={3} xs={12} sm={2} md={6} />
  <Col flex={3} xs={12} sm={4} md={6} />
  <Col flex={3} xs={12} sm={4} md={6} />
  <Col flex={3} xs={12} sm={2} md={6} />
</Row>
```

| size  	  | description                 	              |
|---------- |-------------------------------------------- |
| flex  	  | sets the default flex size. if no value is specified the zize will auto grow	                |
| xs    	  | 0 - 599px                                   |
| sm    	  | 600 - 959px                                 |
| md    	  | 960px - 1280px              	              |
| lg    	  | 1280px or greater           	              |
