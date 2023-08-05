"use client";
import { LocalAppRouterInstance } from "./interfaces";

// @ts-ignore - monkey patching
declare module "next/dist/shared/lib/app-router-context" {
  interface AppRouterInstance extends LocalAppRouterInstance {}
}

declare global {
  interface Window {
    next?: {
      router?: LocalAppRouterInstance;
    }
  }
}

if (typeof window !== "undefined") {
  if (window.next?.router && !window.next.router.shallow) {
    console.warn(
      "Monkey patching router for next/navigation. This is a temporary fix until next.js exposes shallow routing",
      "in the router natively, and this package will be deprecated immediately after"
    );
    window.next.router.shallow = (href) => {
      history.replaceState(null, "", href);
    };
  }
}

export default {}
