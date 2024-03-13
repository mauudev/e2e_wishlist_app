npx create-next-app@latest
npm install -D prisma @genql/cli ts-node-dev nodemon
npm install graphql nexus graphql-scalars @prisma/client graphql-yoga graphql-ws swr

"scripts": {
//next scripts
"generate:nexus": "nodemon --exec 'ts-node --transpile-only -P nexus.tsconfig.json src/pages/api/graphql' --ext 'ts' --watch '_/graphql/\*\*/_.ts'",
"generate:genql": "nodemon --exec 'genql --schema ./graphql/schema.graphql --output ./graphql/generated/genql' --watch 'graphql/schema.graphql'"
}

npx prisma init
npx prisma migrate dev --name project_init
npx prisma studio
