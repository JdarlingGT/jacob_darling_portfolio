export function track(event: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return;
  // GA4 guard
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const g: any = (window as any).gtag;
  if (typeof g === "function") {
    g("event", event, params);
  }
}
