# {{{ name }}} v{{ version }}

{{#author}}[{{{ name }}}]({{{ url }}}) <[{{{ email }}}](mailto:{{{ email }}}){{/author}}>


{{{ summary }}}

![Screenshot]({{{ screenshot.url }}})

{{{ description }}}


## Links
 * [Homepage]({{{ homepage }}})
 * [Source]({{{ repository.url }}})
 * [Issues, Bugs and Feature Requests]({{{ bugs.url }}})
{{#each links}} * [{{{@key}}}]({{{this}}})
{{/each}}

## License
[{{{ license }}}](http://spdx.org/licenses/{{{ license }}}.html)