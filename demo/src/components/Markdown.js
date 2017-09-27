import React from 'react';
import marked from 'marked';

const Markdown = props => <div dangerouslySetInnerHTML={{ __html: marked(props.markdown, { sanitize: true }) }} />;

export default Markdown;