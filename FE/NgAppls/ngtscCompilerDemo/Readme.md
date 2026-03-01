###### ngc
- compiler for angular;
- generates js instruction for html template and defines component/metadata into a class with static properties, to be used by browser appl to build/render ng comp/appls.

###### Why ɵsetClassMetadata is kept (for now)
- Angular DevTools: When you use the Angular browser extension to inspect a component, it needs to show you the original metadata (like the selector name or the uncompiled template structure). Without this block, the DevTools would only see the "machine code" instructions, making it nearly impossible for a human to debug the component state.

- Testing Frameworks: Some unit testing utilities (like TestBed.overrideComponent) need to look at the original decorator arguments to "patch" them during a test.

- HMR (Hot Module Replacement): During development, when you change a single file, the build system uses this metadata to help swap out the old component for the new one without refreshing the entire page.