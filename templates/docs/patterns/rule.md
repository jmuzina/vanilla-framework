---
wrapper_template: '_layouts/docs.html'
context:
  title: Rule | Components
---

The rule component indicates the beginning of a new group of elements. This might be at the section level, or between more granular elements, like paragraphs.

It "anchors" elements that are far apart, and at risk of appearing floating in space.

It indicates the direction in which we want the viewer to read the content.

<div class="p-notification--negative">
  <div class="p-notification__content">
    <h5 class="p-notification__title">Deprecated</h5>
    <p class="p-notification__message">The rule component is now deprecated. Use the <a href="/docs/base/separators#no-bottom-margin">base rule with no bottom margin</a> instead.</p>
  </div>
</div>

## Default

Main page sections are often separated by horizontal rules. You can use the `p-rule` class name to create a default horizontal rule.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/default" class="js-example">
View example of a default horizontal rule
</a></div>

## Muted

Muted rules are usually used within sections of content. You can add a muted rule to make it less prominent by using the `p-rule--muted` class name. This is useful for separating smaller blocks of content without drawing too much attention to the rule itself.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/muted" class="js-example">
View example of a muted horizontal rule
</a></div>

## Highlighted

You can add a highlight to a rule to make it stand out more by using `p-rule--highlight` class name. This is useful for drawing attention to a section of content.

Highlighted rules can also be accented by adding the `is-accent` modifier class.

<div class="embedded-example"><a href="/docs/examples/patterns/rule/highlight" class="js-example">
View example of a highlighted rule
</a></div>

## Dark theme

To use rule component on dark background, add `is-dark` modifier class.

[View example of a highlighted rule on dark background](/docs/examples/patterns/rule/default?theme=dark).

## Import

To add a rule into your project, copy the snippet below and include it in your main Sass file.

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-rule;
```

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.
