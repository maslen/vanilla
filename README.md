# Vanilla

What is it?

## Make a new project

Instructions

## Jekyll

Notes on Jekyll

## Sass/CSS framework

A collection of SASS @mixins and CSS classes for typography, layout, interface components and browser support.  Its not a framework.  Use them seperately or together.  Its purpose is to quickly get a responsive website up and running.

```
// GENERATED CSS
/css/classic.css
/css/modern.css
/css/classic_ie.css

// SOURCE SASS
/sass/site/defaults.scss    // Site specific settings for Sass base files
/sass/site/classic.scss     // Site CSS for classic browsers
/sass/site/legacy-ie.scss   // Uncomment out if you want to give IE7/8 a desktop layout
/sass/site/modern.scss      // Site CSS for modern browsers
/sass/base/components/      // Collection of HTML dependant CSS (typography, nav, buttons, etc)
/sass/base/general/         // Setup and reset files
/sass/base/mixins/          // Collection of mixins for you to use in your classic and modern Sass files
```


### Browser support

BBC News' "Cutting The Mustard" technique is used to split browsers into two groups:

* classic - don't cut the mustard
* modern - cuts the mustard

Classic views are mobile first, use basic CSS and don't reference any HTML5 elements.

Modern views can use advanced CSS, especially media queries and can reference all HTML5 elements.

### Layout

Design from the content out, don't create preset canvas sizes to fill in with content.  The layout helper isn't made up of predefined classes called "column_twelve" or "column_six", that describe the layout.  This is the wrong way to do it as those names would only be correct at one canvas size.

Layout has a number of @mixins that you can add to define any class you want.  For example

```
.column {
    @column_width_12;
}
.column_main {
    @column_width_12;
}
.column_side {
    @column_width_12;
}
@media (min-width: 320px) and (max-width: 600px) {
    .column_main {
        @column_width_8;
    }
    .column_side {
        @column_width_4;
    }
}
@media(max-width: 1200px) {
    .column_main {
        @column_width_6;
    }
    .column_side {
        @column_width_6;
    }
}
```

#### respondMinMax

Would create a layout with a main and side column in a vertical stack, when stretched to 600px would appear next to each other split two thirds to main, one third to side, and when stretched to 1200px would both have 50% width.

Layout uses a 12 column grid, and takes care of padding for you so content always aligns vertically.  Anything you add a Layout @mixin to will get horizontal padding.

With Layout you order content into sections.  Sections will always be ordered vertically down the page.  Within each section you add items of content, these will be headings (which you can span multiple content items at different widths) or content items.  It doesn't matter what you call these, its completely up to you.

Layout doesn't come with any preset break points, add these yourself into the CSS using the @mixins above.

```
<body>
    <header>
        <div class="section">
            <div class="column">...</div>
        </div>
    </header>
    <nav>
        <div class="section">
            <div class="column_main">...</div>
            <div class="column_side">...</div>
        </div>
    </nav>
    <section>
        <div class="section">
            <div class="column_main">...</div>
            <div class="column_side">...</div>
        </div>
    </section>
    <footer>
        <div class="section">
            <div class="column_main">...</div>
            <div class="column_side">...</div>
        </div>
    </footer>
</body>
```

### Components

These are HTML specific helpers that allow you to quickly build common website components like navigation elements, forms (currently just buttons) and also typography.

Each component adds considerable CSS to the page, you can include and exclude them in the site default file.

#### Typography

> Design for line lengths.  Make widths that fit the “right” number of letters (and thus words) per line for comfortable human reading.  Read the Trent Walton article on this.

Typography will instantly give your content a clear visual hierachy and typographic style.  Choose from a series of different styles that best suits the content (currently only one style: "Assaye").

Supporting multiple screen sizes/dimensions requires a scaling interface.  Typograhy defines a base font size that increases with the screen width.  Starting from 10pt, it will scale all type on the page up to 16pt.

Typography uses a baseline to define vertical alignment, it creates a visual cadence to align elements horizontally.

Its made up of preset CSS classes, so you label the markup with the relevant styles, except for <p> and list elements, which are already defined.

```
<body>
    <header>
        <div class="section">
            <div class="column">
                <h1 class="site_title">...</h1>
            </div>
        </div>
    </header>
    <section>
        <div class="section">
            <div class="column_main">
                <h2 class="heading_level_1">...</h2>
                <p>...</p>
                <p>...</p>
                <div class="image align_left">
                    <img />
                    <p>...</p>
                </div>
                <p>...</p>
            </div>
            <div class="column_side">
                <h2 class="heading_level_1">...</h2>
                <ul>
                    <li>...</li>
                    <li>...</li>
                    <li>...</li>
                </ul>
            </div>
        </div>
    </section>
</body>
```

#### Nav

#### Buttons

#### Two columned lists











