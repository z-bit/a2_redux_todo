# a2_redux_todo
## Angular 2 Redux Todo [Gerard Sans](https://medium.com/google-developer-experts/angular-2-introduction-to-redux-1cf18af27e6e#.v1murrjar)
<pre><code>
$ git clone https://github.com/z-bit/a2seed-rob_jspm.git a2_redux_todo
$ npm install
$ jspm install
$ jspm install npm:redux

$ live-sever
</code></pre>
* (-) combineReducers() still seems not to work

* (+) each modul has a file modulActions.ts which contains:
    * Constants for all possible action.type (used only internally).
    * The ModulActions class with seperate functions for each possible action (action creater).
    * The modul's reducer as exported function
