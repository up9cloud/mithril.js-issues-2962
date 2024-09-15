# mithril

## Init

```bash
npm create vite@latest
mv vite-project mithril-bug
cd mithril-bug

npm rm typescript
npm i mithril
sed -i -E "s@tsc && vite build@vite build@" package.json
rm tsconfig.json
sed -i -E "s@/src/main.ts@/src/main.jsx@" index.html
mv ./src/main.ts ./src/main.jsx
find ./src ! -name 'main.jsx' -type f -exec rm {} +
rm -fr ./public
```
