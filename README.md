# Temporary Class

Source: [Dan S](http://stackoverflow.com/a/5067113/843131)

Adds a class for 2 seconds, then removes it.
```
$("#myElement").addTemporaryClass("myClass", 2);
```

After 3 seconds, add a class for 2 seconds, then remove it.
```
$("#myElement").addTemporaryClass("myClass", 2, 3);
```
