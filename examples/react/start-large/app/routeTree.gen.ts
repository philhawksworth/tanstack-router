/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RelativeImport } from './routes/relative'
import { Route as LinkPropsImport } from './routes/linkProps'
import { Route as AbsoluteImport } from './routes/absolute'
import { Route as SearchRouteImport } from './routes/search/route'
import { Route as ParamsRouteImport } from './routes/params/route'
import { Route as IndexImport } from './routes/index'
import { Route as SearchSearchPlaceholderImport } from './routes/search/searchPlaceholder'
import { Route as ParamsParamsPlaceholderImport } from './routes/params/$paramsPlaceholder'

// Create/Update Routes

const RelativeRoute = RelativeImport.update({
  id: '/relative',
  path: '/relative',
  getParentRoute: () => rootRoute,
} as any)

const LinkPropsRoute = LinkPropsImport.update({
  id: '/linkProps',
  path: '/linkProps',
  getParentRoute: () => rootRoute,
} as any)

const AbsoluteRoute = AbsoluteImport.update({
  id: '/absolute',
  path: '/absolute',
  getParentRoute: () => rootRoute,
} as any)

const SearchRouteRoute = SearchRouteImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const ParamsRouteRoute = ParamsRouteImport.update({
  id: '/params',
  path: '/params',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SearchSearchPlaceholderRoute = SearchSearchPlaceholderImport.update({
  id: '/searchPlaceholder',
  path: '/searchPlaceholder',
  getParentRoute: () => SearchRouteRoute,
} as any)

const ParamsParamsPlaceholderRoute = ParamsParamsPlaceholderImport.update({
  id: '/$paramsPlaceholder',
  path: '/$paramsPlaceholder',
  getParentRoute: () => ParamsRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/params': {
      id: '/params'
      path: '/params'
      fullPath: '/params'
      preLoaderRoute: typeof ParamsRouteImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchRouteImport
      parentRoute: typeof rootRoute
    }
    '/absolute': {
      id: '/absolute'
      path: '/absolute'
      fullPath: '/absolute'
      preLoaderRoute: typeof AbsoluteImport
      parentRoute: typeof rootRoute
    }
    '/linkProps': {
      id: '/linkProps'
      path: '/linkProps'
      fullPath: '/linkProps'
      preLoaderRoute: typeof LinkPropsImport
      parentRoute: typeof rootRoute
    }
    '/relative': {
      id: '/relative'
      path: '/relative'
      fullPath: '/relative'
      preLoaderRoute: typeof RelativeImport
      parentRoute: typeof rootRoute
    }
    '/params/$paramsPlaceholder': {
      id: '/params/$paramsPlaceholder'
      path: '/$paramsPlaceholder'
      fullPath: '/params/$paramsPlaceholder'
      preLoaderRoute: typeof ParamsParamsPlaceholderImport
      parentRoute: typeof ParamsRouteImport
    }
    '/search/searchPlaceholder': {
      id: '/search/searchPlaceholder'
      path: '/searchPlaceholder'
      fullPath: '/search/searchPlaceholder'
      preLoaderRoute: typeof SearchSearchPlaceholderImport
      parentRoute: typeof SearchRouteImport
    }
  }
}

// Create and export the route tree

interface ParamsRouteRouteChildren {
  ParamsParamsPlaceholderRoute: typeof ParamsParamsPlaceholderRoute
}

const ParamsRouteRouteChildren: ParamsRouteRouteChildren = {
  ParamsParamsPlaceholderRoute: ParamsParamsPlaceholderRoute,
}

const ParamsRouteRouteWithChildren = ParamsRouteRoute._addFileChildren(
  ParamsRouteRouteChildren,
)

interface SearchRouteRouteChildren {
  SearchSearchPlaceholderRoute: typeof SearchSearchPlaceholderRoute
}

const SearchRouteRouteChildren: SearchRouteRouteChildren = {
  SearchSearchPlaceholderRoute: SearchSearchPlaceholderRoute,
}

const SearchRouteRouteWithChildren = SearchRouteRoute._addFileChildren(
  SearchRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/params': typeof ParamsRouteRouteWithChildren
  '/search': typeof SearchRouteRouteWithChildren
  '/absolute': typeof AbsoluteRoute
  '/linkProps': typeof LinkPropsRoute
  '/relative': typeof RelativeRoute
  '/params/$paramsPlaceholder': typeof ParamsParamsPlaceholderRoute
  '/search/searchPlaceholder': typeof SearchSearchPlaceholderRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/params': typeof ParamsRouteRouteWithChildren
  '/search': typeof SearchRouteRouteWithChildren
  '/absolute': typeof AbsoluteRoute
  '/linkProps': typeof LinkPropsRoute
  '/relative': typeof RelativeRoute
  '/params/$paramsPlaceholder': typeof ParamsParamsPlaceholderRoute
  '/search/searchPlaceholder': typeof SearchSearchPlaceholderRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/params': typeof ParamsRouteRouteWithChildren
  '/search': typeof SearchRouteRouteWithChildren
  '/absolute': typeof AbsoluteRoute
  '/linkProps': typeof LinkPropsRoute
  '/relative': typeof RelativeRoute
  '/params/$paramsPlaceholder': typeof ParamsParamsPlaceholderRoute
  '/search/searchPlaceholder': typeof SearchSearchPlaceholderRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/params'
    | '/search'
    | '/absolute'
    | '/linkProps'
    | '/relative'
    | '/params/$paramsPlaceholder'
    | '/search/searchPlaceholder'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/params'
    | '/search'
    | '/absolute'
    | '/linkProps'
    | '/relative'
    | '/params/$paramsPlaceholder'
    | '/search/searchPlaceholder'
  id:
    | '__root__'
    | '/'
    | '/params'
    | '/search'
    | '/absolute'
    | '/linkProps'
    | '/relative'
    | '/params/$paramsPlaceholder'
    | '/search/searchPlaceholder'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ParamsRouteRoute: typeof ParamsRouteRouteWithChildren
  SearchRouteRoute: typeof SearchRouteRouteWithChildren
  AbsoluteRoute: typeof AbsoluteRoute
  LinkPropsRoute: typeof LinkPropsRoute
  RelativeRoute: typeof RelativeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ParamsRouteRoute: ParamsRouteRouteWithChildren,
  SearchRouteRoute: SearchRouteRouteWithChildren,
  AbsoluteRoute: AbsoluteRoute,
  LinkPropsRoute: LinkPropsRoute,
  RelativeRoute: RelativeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/params",
        "/search",
        "/absolute",
        "/linkProps",
        "/relative"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/params": {
      "filePath": "params/route.tsx",
      "children": [
        "/params/$paramsPlaceholder"
      ]
    },
    "/search": {
      "filePath": "search/route.tsx",
      "children": [
        "/search/searchPlaceholder"
      ]
    },
    "/absolute": {
      "filePath": "absolute.tsx"
    },
    "/linkProps": {
      "filePath": "linkProps.tsx"
    },
    "/relative": {
      "filePath": "relative.tsx"
    },
    "/params/$paramsPlaceholder": {
      "filePath": "params/$paramsPlaceholder.tsx",
      "parent": "/params"
    },
    "/search/searchPlaceholder": {
      "filePath": "search/searchPlaceholder.tsx",
      "parent": "/search"
    }
  }
}
ROUTE_MANIFEST_END */