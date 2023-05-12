export function getWindowWidth() {
  if (typeof window === 'undefined') {
    return 770;
  }

  const width = window.innerWidth;
  return width;
}
