FROM node:20.10.0-alpine3.18 as dependencies

WORKDIR /app-dashboard
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile  --production 

FROM node:20.10.0-alpine3.18 as builder
WORKDIR /app-dashboard
COPY . .
COPY --from=dependencies /app-dashboard/node_modules ./node_modules

ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_API_TIMEOUT

ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_TIMEOUT=$NEXT_PUBLIC_API_TIMEOUT
ENV NODE_ENV=production


RUN yarn build

FROM node:20.10.0-alpine3.18 as runner
WORKDIR /app-dashboard




# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /app-dashboard/next.config.js ./
COPY --from=builder /app-dashboard/public ./public
COPY --from=builder /app-dashboard/.next ./.next
COPY --from=builder /app-dashboard/node_modules ./node_modules
COPY --from=builder /app-dashboard/package.json ./package.json

EXPOSE 5501
CMD ["yarn", "start"]