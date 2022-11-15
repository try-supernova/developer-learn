---
id: limits
title: Limitations
---

On Mobile, in Firefox, the IndexedDB limit is 5MBs, however, the user can allow unlimited storage use, while in Chrome, it can store data up to the specified Quota (which can be tuned in Settings). On Desktop, Firefox has a limit of 50MBs unless of course the user allow unlimited storage. In Chrome, it still respects the Quota, which can be tuned in DevTools > Application > Storage.
Additionally, navigator.webkitPersistentStorage exists and can be used as seen here: https://github.com/chromium/permission.site/blob/29f41b82a63ab736a9f7177f55fab40a0b6f08ad/index.js#L385.