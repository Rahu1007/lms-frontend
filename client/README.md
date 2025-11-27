#LMS FrontEnd
 
 ### setup instruction

 1.clone the project to use github repo
```
git add -A

# Create your first commit (this will actually create the branch)
git commit -m "Initial commit"

# Make sure the branch is named main
git branch -M main

# Push to GitHub
git push -u origin main
```
2.install dependencies
```
npm i
```
3.run the server
```
npm run dev
```
###setup instruction of tailwindcss
1.install tailwindcss
```
npm install -D tailwindcss@3
npx tailwindcss init
```
2.add file 
```
"./src/**/*.{html,js}"
```
3. add this in 'index.css' file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### adding plugins and dependencies 
```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp

```

### adding eslint for simple import
```
npm i eslint-plugin-simple-import-sort
```

### adding postcss
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


```
