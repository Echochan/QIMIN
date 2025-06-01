# ROUTING
## conventions -- conventions was followed, the file automatically becomes available as a route
  1. all routes must live inside the app folder
  2. route files named either page.js or page.tsx
  3. each folder represents a segment of the URL path

## nested routes
  ```
    /blog/first
    /blog/second
  ```

## dynamic routes
  ```
    /products/1
  ```

## nested dynamic routes
  ```
    /products/1/reviews/1
  ```

## catch all segments
  ```
    /docs/feature1/concept1
  ```

## not found page
  ```

  ```

## private folders
```
  文件夹以下划线开头
  如果想在url中用下划线，使用 %5F（URL encoded） 代替
```

## Route Groups
```
(auth)/register 以 http://localhost:3000/register 访问，省略(auth)
```


# Layout 
## Pages are route-specific UI components
## layout is UI that is shared between multiple pages in app

## create layout
```
  layout.tsx中定义
```

## nested layouts

