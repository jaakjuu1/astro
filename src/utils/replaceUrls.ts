export const replaceUrls = (content: string, replacementUrl: string) => {
  return content
    .replace("https", "http")
    .replaceAll(`${import.meta.env.PUBLIC_WP_URL}`, replacementUrl);
};
