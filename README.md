## Summary

Hello reviewer! This is my submission for the aircall challenge. I decided to make an implementation of the air call UI. There are two tabs, one for call activity and one for archived calls. Users can archive calls, unarchive the calls and mass reset the archived calls.

I wanted to use functional components and hooks, so I did update the version of React in the project. I believe that using these kinds of components is a best practice for long term support.

### Some Thoughts

- I debated extracting out the activity and archive feeds into their own single component but I decided this didn't really offer much benefit currently, as the component grew in complexity I would certainly opt to extract this UI into one or more separate components.
- I would like to change up the date structure I store in state in the `useCallData` hook. Since we are already iterating over the data, i link I could store archived calls and active calls into separate keys holding the lists of the respective calls. Both would still be stored in a date object.
- I would like to remove the update and reset functions outside of the component files and would explore using redux or the context API for this.
- I would look into using a UI library. Material UI is one that I have been enjoying using. I opted to use MUI Icons, but perhaps we could extent that since I had to include MUI core as a dependency to use icons.
