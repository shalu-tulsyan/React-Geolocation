# How to use Geolocation in React

This is a simple react project that is created to learn how to implemented geolocation in web application. There are few simple steps:

1. create a simple button
2. On event triggered just call the "Geolocation API" to fetch the current location
3. We can check the availability of geolocation services by calling "navigator.geolocation" (returns true if the object exists) 
4. Further, if the object exists, we can fetch the current position by calling "navigator.geolocation.getCurrentPosition()", getCurrentPosition() accepts a success callback function inside which we can fetch our current location details, and an optional error callback function to handle any errors if occured.
