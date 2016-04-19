media-query-event
=================
a module that help you detect CSS media query changing event and run the callback function.

## Installation
```
npm install media-query-event --save
```

## Usage
```
var mediaQueryEvent = require('media-query-event');
mediaQueryEvent.bind(range, callback, callbackWhenPageInit);
```
### range
|  | Type | Example Value | Description |
|:------|:------:|:------:|:------|
| single range | string | 'xs', 'sm', 'md', 'lg' | 由其他 range 進入到這個 range 時，觸發 callback function |
| multiple range | array | ['xs', 'sm'] | 由陣列以外的 range 進入到陣列中這些 range 時，觸發 callback function |


### callback


| Type | Description |
|:------:|:------|
| function | A callback function that you want to run when media query is changing. |

### callbackWhenPageInit
| Type | Example Value | Default Value | Description |
|:------:|:------:|:------|:------:|
| boolean  | true, false | false | Run the callback function when the web page initialized.|

## Example
### Single Range
```
mediaQueryEvent.bind('sm', function() {
  alert('sm');
});
```
### Multiple Range
```
mediaQueryEvent.bind(['md', 'lg'], function() {
  alert('desktop');
});
```
### Run callback when the page initialized
```
mediaQueryEvent.bind('sm', function() {
  alert('sm');
}, true);
```

#### About more examples, please see the "demo" directory.
