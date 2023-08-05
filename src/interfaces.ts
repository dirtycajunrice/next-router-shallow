export enum PrefetchKind {
  AUTO = "auto",
  FULL = "full",
  TEMPORARY = "temporary"
}

export interface NavigateOptions {
  scroll?: boolean;
}

export interface PrefetchOptions {
  kind: PrefetchKind;
}

export interface LocalAppRouterInstance {
  /**
   * Navigate to the previous history entry.
   */
  back(): void;

  /**
   * Navigate to the next history entry.
   */
  forward(): void;

  /**
   * Refresh the current page.
   */
  refresh(): void;

  /**
   * Navigate to the provided href.
   * Pushes a new history entry.
   */
  push(href: string, options?: NavigateOptions): void;

  /**
   * Navigate to the provided href.
   * Replaces the current history entry.
   */
  replace(href: string, options?: NavigateOptions): void;

  /**
   * Prefetch the provided href.
   */
  prefetch(href: string, options?: PrefetchOptions): void;

  /**
   * Shallow navigate to the provided href.
   */
  shallow(href: string): void;
}
