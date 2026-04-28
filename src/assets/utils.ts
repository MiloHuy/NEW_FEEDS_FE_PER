export const getAssets = (path: string) => {
  return new URL(path, import.meta.url).href
}


export async function loadJsonAsset<T = unknown>(path: string): Promise<T> {
  const url = getAssets(path);

  const res = await fetch(url);

  if (!res.ok) throw new Error(`Failed to load asset: ${url}`);
  return res.json() as Promise<T>;
}

export const getLottieUrl = (fileName: string) => {
  return new URL(`./jsons/${fileName}.json`, import.meta.url).href;
}
