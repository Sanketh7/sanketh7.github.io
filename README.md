This is my personal website built with Next.js. You can view it at [sanketh7.github.io](https://sanketh7.github.io/).

# Local Installation
## Next.js
If you want to use Next.js directly, simply install the needed libraries with
```
yarn install
```
To run the website locally, you can use 
```
yarn dev
```
## Static Files
Since this website only needs to fetch data on build, you can generate static files with the commands:
```
yarn install
yarn build
yarn next export
```
The files with be in the `/out` directory.