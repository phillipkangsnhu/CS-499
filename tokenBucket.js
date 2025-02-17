class TokenBucket {
  constructor(capacity, refillRate) {
      this.capacity = capacity; // Max tokens
      this.tokens = capacity;   // Start with a full bucket
      this.refillRate = refillRate; // Tokens added per second
      this.lastRefillTime = Date.now();
  }

  refill() {
      const now = Date.now();
      const elapsedTime = (now - this.lastRefillTime) / 1000; // Convert ms to sec
      const newTokens = elapsedTime * this.refillRate;
      this.tokens = Math.min(this.capacity, this.tokens + newTokens);
      this.lastRefillTime = now;
  }

  consume(tokens = 1) {
      this.refill();
      if (this.tokens >= tokens) {
          this.tokens -= tokens;
          return true;
      }
      return false;
  }
}

// 10 tokens max, refilling 2 tokens per second
const bucket = new TokenBucket(10, 2);

const rateLimiter = (req, res, next) => {
    if (bucket.consume()) {
        next(); // Allow request
    } else {
        res.status(429).json({ error: "Too many requests, slow down!" });
    }
};

module.exports = { TokenBucket, rateLimiter };