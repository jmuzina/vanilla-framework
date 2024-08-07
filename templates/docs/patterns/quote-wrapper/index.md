---
wrapper_template: '_layouts/docs.html'
context:
  title: Quote Wrapper | Patterns
---

A quote wrapper is a pattern used to prominently display a quotation alongside an optional citation, logo, and image.

- [H2](#H2)
- [H4](#H4)

The quote wrapper pattern is composed of the following elements:

| Element                   | Description                       |
| ------------------------- | --------------------------------- |
| Quote text (**required**) | Quote text                        |
| Header                    | Header (describe better later)    |
| Logo                      | Logo to associate with the quote  |
| Image                     | Image to associate with the quote |
| Citation name             | Name of the citation's source     |
| Citation title            | Title of the citation's source    |

## H2 Quote

For very short or succinct quotes, use H2-sized text to make the quote stand out.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/h2" class="js-example">
View example of the quote wrapper pattern with a H2 text.
</a></div>

### Without signpost logo

If the quote is not associated with a specific brand or entity, or no logo is available, the logo can be omitted.
Set the second grid column in the quote row to start in the fourth column with <code>.col-start-large-4</code> to make up for
the space that would normally be taken up by the signpost logo.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/h2-no-logo" class="js-example">
View example of the quote wrapper pattern with H2 text, without a signpost logo.
</a></div>

### Without citation

When no citation is available or needed, the citation row can be omitted, and the quote body does not need to be wrapped in a nested grid.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/h2-no-citation" class="js-example">
View example of the quote wrapper pattern with H2 text, without a citation.
</a></div>

## H4 Quote

For longer quotes, use H4-sized text to maintain content balance.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/h4" class="js-example">
View example of the quote wrapper pattern with H4 text.
</a></div>

### Without signpost logo

If the quote is not associated with a specific brand or entity, or no logo is available, the logo can be omitted.
Set the second grid column in the quote row to start in the fourth column with <code>.col-start-large-4</code> to make up for
the space that would normally be taken up by the signpost logo.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/h4-no-logo" class="js-example">
View example of the quote wrapper pattern with H2 text, without a signpost logo.
</a></div>

### Without citation

When no citation is available or needed, the citation row can be omitted, and the quote body does not need to be wrapped in a nested grid.

<div class="embedded-example"><a href="/docs/examples/patterns/quote-wrapper/h4-no-citation" class="js-example">
View example of the quote wrapper pattern with H4 text, without a citation.
</a></div>

## Import

Since Patterns leverage many other parts of Vanilla in their composition and content, we
recommend [importing the entirety of Vanilla](/docs#install) for full support.
