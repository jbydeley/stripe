![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Stripe Pay
`stripe-pay` works by hooking into `stripe-checkout.js` and creates a custom web component that you can add to your site to allow accepting payments. It requires you to include `https://checkout.stripe.com/checkout.js` to utilize their sdk and all payments are processed through their popup. As with anything, please read the source code. I've attempted to document it using jsdoc style documentation to make it super simple to read. If you find any issues, feel free to open a Pull Request or an issue.

# Setup
1. Include `https://checkout.stripe.com/checkout.js` before including the stripe-pay component
2. Include `dist/stripe.js`
3. Use it on your page!
```
<stripe-pay
  key="pk_test_blahblahblah"
  name="Product Name"
  description="Product Description"
  currency="usd"
  locale="auto"
  amount="20000"
  image="https://stripe.com/img/documentation/checkout/marketplace.png"
  zipCode="true">
  Click Here to Buy!
</stripe-pay>
```

4. When the user clicks the element, it will open a popup. That is unaltered from how stripe sets things up. The user can then fill in the required fields and hit the submit button. On success, the `stripe-pay` will fire an `onToken` event with information related to the purchase. When the popup closes, `stripe-pay` will fire an `onClose` event.

# Styling
Styling is done with [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables).  The following variables are available to control the text of the link:

```
--stripe-pay-font-family
--stripe-pay-font-size
--stripe-pay-font-weight
--stripe-pay-color
--stripe-pay-decoration
```

You are also able to pass in images which you can control with regular CSS. 

# Local development
1. Clone the repo
2. `npm i` or `yarn`
3. `npm start` or `yarn start`

Note: By default, stencil components only run in Chrome when development happens. This can be changed to add the `--prod` attribute to the `package.json` script but it slows don't recompiling.