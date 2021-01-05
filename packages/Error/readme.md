# @im-ui/error

Error components for use on 404, 500 and other pages.
Contains two line error message, and images:
'https://cdn.instamotion.com/images/500_desktop.svg' &&
'https://cdn.instamotion.com/images/500_mobile.svg' - for statusCode 500

'https://cdn.instamotion.com/images/404_desktop.svg' &&
'https://cdn.instamotion.com/images/404_mobile.svg' - for other's statusCode 

## How to use:

```
npm install @im-ui/error
```

## Required translations keys

For more details, check the `stories/locales.ts` file

```
page404.line_one
page404.line_two
page500.line_one
page500.line_two
```
Could be extended for different codes like: `page{code}.line_one`, `page{code}.line_two` - where `{code}` replaced with code number