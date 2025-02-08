/// <reference types="vite/client" />

declare const __COMMITID__: string
declare const __BUILDTIME__: string

declare module '*.vue' {
  import type { ComponentOptions } from 'vue'

  const Component: ComponentOptions
  export default Component
}
