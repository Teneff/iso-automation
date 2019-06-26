module.exports = {
  // @see https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
  launch: {
    /*
     * Whether to run browser in headless mode. Defaults to true unless the devtools option is true.
     * boolean
     */
    headless: false
    /*
     * Whether to ignore HTTPS errors during navigation. Defaults to false.
     * boolean
     */
    //ignoreHTTPSErrors

    //headless
    /*
     * Path to a Chromium or Chrome executable to run instead of the bundled Chromium. If executablePath is a relative path, then it is resolved relative to current working directory. BEWARE: Puppeteer is only guaranteed to work with the bundled Chromium, use at your own risk.
     * string
     */
    //executablePath
    /*
     * Slows down Puppeteer operations by the specified amount of milliseconds. Useful so that you can see what is going on.
     * number
     */
    //slowMo
    /*
     * Sets a consistent viewport for each page. Defaults to an 800x600 viewport. null disables the default viewport.
     * ?Object
     */
    //defaultViewport
    /*
     * page width in pixels.
     * number
     */
    //width
    /*
     * page height in pixels.
     * number
     */
    //height
    /*
     * Specify device scale factor (can be thought of as dpr). Defaults to 1.
     * number
     */
    //deviceScaleFactor
    /*
     * Whether the meta viewport tag is taken into account. Defaults to false.
     * boolean
     */
    //isMobile
    /*
     * Specifies if viewport supports touch events. Defaults to false
     * boolean
     */
    //hasTouch
    /*
     * Specifies if viewport is in landscape mode. Defaults to false.
     * boolean
     */
    //isLandscape
    /*
     * Additional arguments to pass to the browser instance. The list of Chromium flags can be found here.
     * Array<string>
     */
    //args
    /*
     * If true, then do not use puppeteer.defaultArgs(). If an array is given, then filter out the given default arguments. Dangerous option; use with care. Defaults to false.
     * boolean|Array<string>
     */
    //ignoreDefaultArgs
    /*
     * Close the browser process on Ctrl-C. Defaults to true.
     * boolean
     */
    //handleSIGINT
    /*
     * Close the browser process on SIGTERM. Defaults to true.
     * boolean
     */
    //handleSIGTERM
    /*
     * Close the browser process on SIGHUP. Defaults to true.
     * boolean
     */
    //handleSIGHUP
    /*
     * Maximum time in milliseconds to wait for the browser instance to start. Defaults to 30000 (30 seconds). Pass 0 to disable timeout.
     * number
     */
    //timeout
    /*
     * Whether to pipe the browser process stdout and stderr into process.stdout and process.stderr. Defaults to false.
     * boolean
     */
    //dumpio
    /*
     * Path to a User Data Directory.
     * string
     */
    //userDataDir
    /*
     * Specify environment variables that will be visible to the browser. Defaults to process.env.
     * Object
     */
    //env
    /*
     * Whether to auto-open a DevTools panel for each tab. If this option is true, the headless option will be set false.
     * boolean
     */
    //devtools
    /*
     * Connects to the browser over a pipe instead of a WebSocket. Defaults to false.
     * boolean
     */
    //pipe
  },
  // @see https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerconnectoptions
  connect: {},
  // @see https://github.com/smooth-code/jest-puppeteer/tree/master/packages/jest-dev-server
  server: {}
};
