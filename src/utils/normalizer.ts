function normalize<T>(items: T[], selector: string): Record<string, any> {
  return items.reduce((acc: Record<string, any>, item: any) => {
    const pos = selector.split(".").reduce((acc, key) => acc[key], item);
    acc[pos] = item;
    return acc;
  }, {});
}

export { normalize };
