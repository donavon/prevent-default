# @donavon/prevent-default
[![Build Status](https://travis-ci.org/donavon/prevent-default.svg?branch=master)](https://travis-ci.org/donavon/prevent-default)

A wrapper that calls event.preventDefault() for you.

## Install
```
> npm i @donavon/prevent-default --save
```

## Usage
To use `prevent-default`, simply `import` it (ES6) and wrap your `onClick` with `pd()` as shown below.
Although useful with React components, it is not React specific and can be used without React.  

```js
import pd from "@donavon/prevent-default";

const noClicking = () => {
    alert("You can't click here, buddy!");
}

const MyLinkComponent = ({ children }) => {
    return (
        <a href="#" onClick={pb(noClicking)}>
            {children}
        </a>
    );
};

export default MyLinkComponent;
```
Don't recognize the format of the React component shown above? It's stateless. You should be using [stateless components](https://facebook.github.io/react/docs/reusable-components.html#stateless-functions) in your app when applicable.
