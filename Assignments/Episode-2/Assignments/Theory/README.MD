## THEORY

### 1. What is `NPM`?  
**NPM (Node Package Manager)** is a package manager for JavaScript, used to install, manage, and share dependencies.

### 2. What is `Parcel/Webpack`? Why do we need it?  
**Parcel/Webpack** are bundlers that optimize and compile multiple files into a single package for efficient loading.

### 3. What is `.parcel-cache`?  
A folder where Parcel stores cached files to speed up rebuilds.

### 4. What is `npx`?  
A tool to run Node.js packages without installing them globally.

### 5. Difference between `dependencies` vs `devDependencies`  
- **dependencies**: Required for production.  
- **devDependencies**: Only needed for development (e.g., Parcel, ESLint).

### 6. What is Tree Shaking?  
A technique to remove unused JavaScript code from the final bundle.

### 7. What is Hot Module Replacement (HMR)?  
A feature that updates modules in a running application without a full reload.

### 8. Five superpowers of Parcel  
1. **Zero Config** – No setup required.  
2. **HMR** – Instant updates without reload.  
3. **Tree Shaking** – Removes unused code.  
4. **Code Splitting** – Loads only necessary chunks.  
5. **Faster Builds** – Optimized caching and multi-threading.

### 9. What is `.gitignore`? What should we add and not add into it?  
A file that tells Git which files to ignore.  
**Add**: `node_modules`, `.parcel-cache`, `.env`  
**Don't add**: Essential project files.

### 10. Difference between `package.json` and `package-lock.json`  
- **package.json**: Lists dependencies and project metadata.  
- **package-lock.json**: Locks exact versions of installed dependencies.

### 11. Why should I not modify `package-lock.json`?  
It ensures dependency consistency across environments.

### 12. What is `node_modules`? Should we push it to Git?  
A folder where installed dependencies are stored. **No**, it should not be pushed.

### 13. What is the `dist` folder?  
The folder containing the final production-ready build of the app.

### 14. What is `browserslist`?  
A configuration to specify browser support for tools like Babel and Parcel.