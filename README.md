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
/sass/base/classic.scss
/sass/base/classic_ie.scss
/sass/base/modern.scss
/sass/base/components/
/sass/base/general/
/sass/base/grid/
/sass/base/typography/
/sass/site/defaults.scss
```

The components are:

 * bootstrap
 * grid
 * typography
 * components

## Bootstrap

This ties everything together and has some global helpers.

## Layout

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

== Typography

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

== Components

=== Nav

=== Buttons

=== Two columned lists

== Browser support

=== respondMinMax

=== Cutting The Mustard


---------------------------------------------------------------------------------------

=============================
NOTES ON MAKING A GRID SYSTEM
=============================

Everyone should make their own grid system.  Use off the shelf ones to learn, but if you're a professional developer, then you should learn everything there is about responsive, so learn it by making your own.

Frameworks by their nature are bloated, ultimately we only ever want to download only what we use.  A good trade off is a micro framework that gets you started, does all the grid layout for you but doesn't do anything else.  A modular approach is good for JavaScript, so its good for a CSS grid system.

Mobile first!


1) Naming

In base file give sections of content a semantic name, not a layout name: i.e. 

    .section .sub-section

instead of 

    .row .column.three

Create layout names for column definitions in a mixin file

Then in each breakpoint media query, add mixins to sub-sections.

It's impossible to second guess semantic naming conventions for groups of content

Here's some ideas...

.group .columnFull {}
.group .columnMain {}
.group .columnSide {}

.section .columnWide {}
.section .columnStandard {}
.section .columnThin {}

.sectionWide {}
.sectionStandard {}
.sectionThin {}


.section {}
.section .columnFull {}
.section .column {}
.section .columnThin {}

.row {}
.row .columnFull {}
.row .column {}
.row .columnThin {}

.row .column .article {}

Decided to go with ".row .column" because that is how we lay our content onto the page semantically (order of content) and for presentation.  A .row is really a group of content that you want to appear on the page before content in other groups.  Then columns in a row dictate the order that you want the content to appear in a row.  This is kinda similiar to how we used to layout content with tables.

There are currently two lines of thought for naming classes:

- First is to name it semantically according to the type of content it is (i.e. <div class="news">...</div>) this doesn't work with a framework where all the presentation is done first and there is no knowledge of the content.

- Second is to use IDs for naming the content semantically and then for classes to be used purely as presentational hooks for CSS and JS.  This works for a framework but is hard for a responsive layout as something called "column1", "column2" and "column3" looses its meaning if those columns change completely depending on the media query.

I've decided to try and use a middle ground approach.  I don't know what content will be used with the framework, and the presentation will change depending on the media query.  So instead I want the developer to markup the sections of content based on how "important" each section is.

I also think there are parts of the page that - no matter what dimensions the screen is set to - always have to be presented in the same way.

First of all I break all the content in groups.  If this was using just semantic HTML5 I would use the <section> tag, but I don't want to limit the framework to HTML5 browsers only, and I want to completely seperate content semantics from presentational semantics.  So I'm using the class name "row".

.row {
    overflow: hidden;
    margin: 0 auto;
    width: $width;
}

This breaks the page into logical sections, for example...

<div id="header" class="row">...</div>
<div id="some-content" class="row">...</div>
<div id="more-content" class="row">...</div>
<div id="footer" class="row">...</div>

Row order in the HTML will always be reflected in the layout.

Rows are then split into columns.  This makes sense presentationally, but what it doesn't do is immediately define exactly how they will be styled.  It also makes sense from a content perspective.  There are different types of columns:

.row .columnFull {}

This always takes the full breadth of the row no matter what media query.

.row .column {}

A generic type of column, that will always be roughly 11 words long.


------------------------------------------------------------------------------------------

Typography notes

Title sizes are too big for small screen


Design for line lengths.  Make widths that fit the “right” number of letters (and thus words) per line for comfortable human reading.


p:        16px (1em)

baseline: 24px (1.5em)

h2:       32px (2em)

switch (true){
    case (w > 1200):
        t = '@import url("<?= $this->staticPrefix ?>/css/wide.css") (min-width: 1056px);' + t;
    case ((w > 640) || (screen.height > 800)):
        t = '@import url("<?= $this->staticPrefix ?>/css/tablet.css") (min-width: 641px);' + t;
    default:
        t = '@import url("<?= $this->staticPrefix ?>/css/compact.css") (max-width: 640px);' + t;

// CORE default

html {
   font-size: 10px;
}

// COMPACT max-width = 640px

html {
   font-size: 10px;
}

@media (min-width: 480px) {
   html {
    font-size: 11px;
   }
}

@media (min-width: 540px) {
   html {
    font-size: 12px;
   }
}

// TABLET 641px -> 1200px

@media (min-width: 913px) {
   html {
    font-size: 12px;
   }
}

@media (max-width: 912px) {
   html {
    font-size: 11px;
   }
}

@media (max-width: 836px) {
   html {
    font-size: 10px;
   }
}

@media (max-width: 760px) {
   html {
    font-size: 9px;
   }
}

@media (max-width: 684px) {
   html {
    font-size: 8px;
   }
}

// WIDE min-width 1201px

html {
    font-size: 10px;
}











