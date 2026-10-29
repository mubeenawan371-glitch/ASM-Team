const title = path.basename(src, '.md')
  .replace(/-/g, ' ')
  .replace(/\b\w/g, (c) => c.toUpperCase());
