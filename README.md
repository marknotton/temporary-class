# Temporary Class

Add a class to an element for a specified amount of time.

> **Credit:** This plugin is an expansion from [this forum post](http://stackoverflow.com/a/5067113/843131) by [Dan S](http://stackoverflow.com/users/625248/dan-s)

### Parameters

| Param | Type   | Description
| ----- | ------ | -----------
| 1     | string | The name of the class to be added
| 2     | number | How long the class should exist on the element
| 3     | number | Delay for then the class should be added innitially

### Usage

Add a class for 2 seconds, then remove it.
```
$("#myElement").addTemporaryClass("myClass", 2);
```

After 3 seconds, add a class for 2 seconds, then remove it.
```
$("#myElement").addTemporaryClass("myClass", 2, 3);
```
