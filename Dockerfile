# Stage 1: Build
FROM node:22-alpine3.18 AS builder

WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

RUN npm run build


# Stage 2: Prod
FROM node:22-alpine3.18 AS runner

WORKDIR /docker-app

COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package.json ./package.json
COPY --from=builder /build/package-lock.json ./package-lock.json
COPY --from=builder /build/dist ./dist

EXPOSE 4173

CMD ["npm","run","preview"]