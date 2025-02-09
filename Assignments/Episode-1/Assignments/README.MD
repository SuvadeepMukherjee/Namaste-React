## Theory 

#### Q:What is Emmet ? 

**Answer**: Emmet is an essential toolkit for web developers .It allows us to type shortcuts that are expanded into full fledged boiler plate code for writing using HTML and CSS

#### Q:Difference between a Library and Framework ? 

**Answer**:A key difference betwen the two is inversion of control .When using a library , the control remains with the developer who tells the application when to call library functions .When using a framework , the control is reversed which means that the framework tells the developer where code needs to be provided and calls it as it requires

#### Q:What is CDN ? Why do we use it ? 

**Answer**:A **CDN (Content Delivery Network)** is a network of servers that deliver web content faster by caching it in multiple locations worldwide.

### **Why use it?**

- **Faster load times** – Serves content from the nearest server.
- **Reduces server load** – Distributes traffic efficiently.
- **Improves reliability** – Minimizes downtime and DDoS impact.
- **Enhances security** – Protects against cyber threats.

Common CDNs: Cloudflare, Akamai, AWS CloudFront.

#### Q:Why is React known as React ? 

**Answer**:

The name React was chosen because the library was designed to allow developers to react to changes in state and data within an application and to update the user interface in a declarative and efficient manner

#### Q:What is crossorigin in script tag ? 

**Answer**: The crossorigin attribute in the script tag enables cross-origin resource sharing(cors) for loading external javascript files from different origin than the hosting web page.This allows the script to access resources from the server hosting the script such as making HTTP requests or accessing data

#### Q:What is the difference between React and ReactDOM ?

**Answer**:

**React** is for defining components and logic.

**ReactDOM** is for rendering those components in the browser.

#### Q:What is difference between react.development.js and react.production.js files via CDN?

**Answer**:

**`react.development.js`** → Unminified, includes warnings & helpful error messages for debugging.

**`react.production.js`** → Minified, optimized for performance, removes warnings to reduce file size.

#### Q:What is async and defer?

**Answer**:

- **`async`**: Loads the script asynchronously and executes it **immediately** once downloaded.
- **`defer`**: Loads the script asynchronously but **executes it only after** the HTML is fully parsed.

👉 Use **`async`** for independent scripts (e.g., analytics).
👉 Use **`defer`** for scripts that depend on the DOM structure (e.g., UI scripts).

