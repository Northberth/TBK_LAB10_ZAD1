FROM node:alpine

WORKDIR /app
COPY src/ .

ENV MAX_ALLOCATION_MB=4096 LOOP_ALLOCATION_MB=1024 LOOP_INTERVAL_MS=2000
HEALTHCHECK --interval=1s --timeout=1s --retries=1 --start-period=5s CMD node memory-check.js

CMD node memory-hog.js