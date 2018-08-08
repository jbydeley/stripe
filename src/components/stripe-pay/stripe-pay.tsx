import { Component, Prop, Event, EventEmitter, Method } from '@stencil/core';

declare const StripeCheckout: StripeCheckoutStatic;

@Component({
  tag: 'stripe-pay',
  styleUrl: 'stripe-pay.css',
  shadow: true
})
export class StripePay {
  handler: StripeCheckoutHandler
  
  /** The amount to charge */
  @Prop() amount: number;

  /** The stripe key to charge against */
  @Prop() key: string;

  /** The image to use in the stripe popup */
  @Prop() image: string = 'https://stripe.com/img/documentation/checkout/marketplace.png'

  /** The currency to use */
  @Prop() currency: string = 'usd';

  /** The name of the product */
  @Prop() name: string;

  /** The description of the product */
  @Prop() description: string;

  /** The locale to use in the stripe popup */
  @Prop() locale: string = 'auto';

  /** Try to require zip code in the stripe popup */
  @Prop() zipcode: boolean = true;

  /** Called when a token is received after payment */
  @Event() onToken: EventEmitter;

  /** Called when the stripe popup is closed */
  @Event() onClose: EventEmitter;

  /**
   * Open the stripe popup to accept payment
   * @param options to pass to the payment
   */
  @Method()
  openStripe({ name, description, currency, amount }) {
    if( !this.handler ) {
      console.log('"handler" not set');
      return;
    }

    if( !this.amount || this.amount < 1 ) {
      console.log('"amount" is a required property')
      return;
    }

    if( !this.name ) {
      console.log('"name" is a required property')
      return;
    }

    this.handler.open({
      name,
      description,
      currency,
      amount,
      closed: () => this.onClose.emit()
    });
  }
  
  /**
   * Instantiates the handler with the key, image and locale
   */
  componentWillLoad() {
    if( !this.key ) {
      console.log('"key" is a required property')
      return;
    }

    const { key, image, locale } = this;

    this.handler = StripeCheckout.configure({
      key,
      image,
      locale,
      token: (token) => this.onToken.emit(token)
    })
  }

  /**
   * Renders the component
   */
  render() {
    return <a
      href="javascript:void(0)"
      onClick={() => this.openStripe(this)}
      title={this.name}
        >
        <slot />
      </a>;
  }
}
