// Allow TypeScript to import modules directly from CDN URLs (e.g. jsDelivr, Skypack)
declare module "https://cdn.jsdelivr.net/*" {
  const value: any
  export default value
}
