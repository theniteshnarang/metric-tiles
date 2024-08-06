export type Breakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'default';

export function getCurrentBreakpoint(): Breakpoints {
  const breakpoints = {
    sm: window.matchMedia('(min-width: 640px)').matches,
    md: window.matchMedia('(min-width: 768px)').matches,
    lg: window.matchMedia('(min-width: 1024px)').matches,
    xl: window.matchMedia('(min-width: 1280px)').matches,
    '2xl': window.matchMedia('(min-width: 1536px)').matches,
  };

  if (breakpoints['2xl']) return '2xl';
  if (breakpoints.xl) return 'xl';
  if (breakpoints.lg) return 'lg';
  if (breakpoints.md) return 'md';
  if (breakpoints.sm) return 'sm';
  return 'default';
}
