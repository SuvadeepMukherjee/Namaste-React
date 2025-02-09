## Theory

#### JJSX and Script Tag Concepts

#### What is JSX?
**Answer**: JSX (JavaScript XML) is a syntax extension for JavaScript used in React. It allows writing HTML-like code inside JavaScript, which gets transformed into React elements.

#### Superpowers of JSX
**Answer**:  
- **Syntax Sugar**: Makes UI representation more readable and maintainable.  
- **JS Integration**: Allows embedding JavaScript expressions inside `{}`.  
- **Element Composition**: Enables nesting and composing React components easily.  
- **Performance Optimization**: Uses Babel to optimize rendering through `React.createElement`.  

#### Role of `type` Attribute in `<script>` Tag
**Answer**: The `type` attribute specifies the script's MIME type. Common options include:  
- `text/javascript` (default): Specifies a standard JavaScript script.  
- `module`: Enables ES6 module support.  
- `application/json`: Treats content as JSON data.  
- `importmap`: Defines module specifier mappings.  

#### `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}`
**Answer**:  
- `{TitleComponent}`: Refers to the component itself, not rendering it.  
- `{<TitleComponent/>}`: Instantiates and renders the component.  
- `{<TitleComponent></TitleComponent>}`: Equivalent to the self-closing tag, used for readability or when passing children.  