export interface DayContent {
  title: string;
  description: string;
  code?: string;
  links: {
    mdn?: string;
    webdev?: string;
    youtube?: string;
  };
  browserSupport: {
    chrome: string;
    firefox: string;
    safari: string;
    edge: string;
  };
}

export const adventContent: Record<number, DayContent> = {
  1: {
    title: "CSS Feature: :has() Pseudo-Class",
    description: "The :has() pseudo-class is a powerful new addition to CSS that allows you to select an element based on its children or descendants.",
    code: `.container:has(.child) {
  border: 2px solid blue;
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/:has",
      youtube: "https://youtu.be/OGJvhpoE8b4"
    },
    browserSupport: {
      chrome: "105+",
      firefox: "121+",
      safari: "15.4+",
      edge: "105+"
    }
  },
  2: {
      title: "CSS Custom Highlight API",
      description: "The CSS Custom Highlight API provides a mechanism for styling arbitrary text ranges on a document by using JavaScript to create the ranges, and CSS to style them.",
      code: `::highlight(custom-highlight) {
  background-color: #ff0;
  color: black;
}`,
      links: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/::highlight",
        youtube: "https://www.youtube.com/watch?v=1qldqyT324o"
      },
      browserSupport: {
        chrome: "105+",
        firefox: "Nightly",
        safari: "17.2+",
        edge: "105+"
      }
    },
  3: {
        title: ":user-valid and :user-invalid Pseudo-Classes",
        description: "The :user-valid and :user-invalid pseudo-class selectors help improve the user experience of input validation by giving feedback about mistakes only after a user has changed input. With these new selectors, there's no longer a need to write stateful code to keep track of input a user has changed.",
        code: `input:user-invalid {
  border-color: red;
}
    
input:user-valid {
  border-color: green;
}`,
        links: {
          mdn: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid',
          webdev: "https://web.dev/articles/user-valid-and-user-invalid-pseudo-classes"
        },
        browserSupport: {
          chrome: "119+",
          firefox: "88+",
          safari: "16.5+",
          edge: "119+"
        }
      },
      4: {
        title: "Popover API",
        description: "The Popover API provides a native way to create popups, tooltips, and other floating UI elements with proper keyboard navigation and focus management.",
        code: `<button popovertarget="my-popover">Open Popover</button>
        
<div id="my-popover" popover>
  <p>I am a popover with more information.</p>
</div>`,
        links: {
          mdn: "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API",
          webdev: "https://web.dev/blog/popover-api",
          youtube: "https://www.youtube.com/watch?v=0_wgyB64a8I",
        },
        browserSupport: {
          chrome: "114+",
          firefox: "125+",
          safari: "17+",
          edge: "114+"
        }
      },
      5: {
        title: "Custom <select> styling",
        description: "Experimental: new ways to style select menus. The current, work-in-progress way to do this is to use an appearance property in CSS, set to appearance: base-select. Once appearance is set, you'll be opting-in to a new, customizable select experience.",
        code: `select {
  appearance: base-select;
}`,
        links: {
          webdev: "https://developer.chrome.com/blog/new-in-web-ui-io-2024#selectmenu"
        },
        browserSupport: {
          chrome: "Experimental",
          firefox: "No",
          safari: "No",
          edge: "Experimental"
        }
      },
      6: {
        title: "Anchor Positioning",
        description: "Using anchor positioning, with just a few lines of code, the browser can handle the logic to tether a positioned element to one or more anchor elements. In the following example, a simple tooltip is anchored to each button, positioned at the bottom center.",
        code: `.anchor {
  anchor-name: --my-anchor;
}
        
.positioned {
  position: absolute;
  position-anchor: --my-anchor;
}`,
        links: {
          mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning",
          webdev: "https://developer.chrome.com/blog/anchor-positioning-api",
          youtube: "https://www.youtube.com/watch?v=ri8mBLXK9gE"
        },
        browserSupport: {
          chrome: "125+",
          firefox: "No",
          safari: "No",
          edge: "125+"
        }
      },
//   3: {
//     title: "Scroll-Driven Animations",
//     description: "Create animations that progress based on scroll position, perfect for engaging storytelling and interactive experiences.",
//     code: `@keyframes fade {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }
// 
// .element {
//   animation: fade linear;
//   animation-timeline: scroll();
// }`,
//     links: {
//       mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline",
//       webdev: "https://web.dev/articles/scroll-driven-animations",
//       youtube: "https://youtu.be/Qj2JjDq8cWI"
//     },
//     browserSupport: {
//       chrome: "115+",
//       firefox: "Pending",
//       safari: "Pending",
//       edge: "115+"
//     }
//   },
//   4: {
//     title: "Subgrid",
//     description: "Subgrid allows nested grid items to participate in the parent grid's track sizing, making complex layouts easier to achieve.",
//     code: `.grid {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
// }
// 
// .nested {
//   display: grid;
//   grid-template-columns: subgrid;
// }`,
//     links: {
//       mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid",
//       webdev: "https://web.dev/articles/css-subgrid",
//       youtube: "https://youtu.be/3F5ALBxJqPY"
//     },
//     browserSupport: {
//       chrome: "117+",
//       firefox: "71+",
//       safari: "16+",
//       edge: "117+"
//     }
//   },
//   5: {
//     title: "CSS Nesting",
//     description: "Native CSS nesting allows you to write more maintainable and logical stylesheets without a preprocessor.",
//     code: `.card {
//   background: white;
//   
//   & .title {
//     color: navy;
//   }
//   
//   &:hover {
//     background: #f0f0f0;
//   }
// }`,
//     links: {
//       mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting",
//       webdev: "https://web.dev/articles/css-nesting",
//       youtube: "https://youtu.be/YnWPeA6l5UE"
//     },
//     browserSupport: {
//       chrome: "112+",
//       firefox: "117+",
//       safari: "16.4+",
//       edge: "112+"
//     }
//   },
//   6: {
//     title: "Custom Properties with @property",
//     description: "Define custom properties with type checking, default values, and inheritance behavior.",
//     code: `@property --hue {
//   syntax: '<number>';
//   initial-value: 0;
//   inherits: false;
// }
// 
// .element {
//   background: hsl(var(--hue), 50%, 50%);
// }`,
//     links: {
//       mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/@property",
//       webdev: "https://web.dev/articles/at-property",
//       youtube: "https://youtu.be/kX3ELv3-9C0"
//     },
//     browserSupport: {
//       chrome: "85+",
//       firefox: "104+",
//       safari: "15.4+",
//       edge: "85+"
//     }
//   },
  7: {
    title: "View Transitions API",
    description: "The View Transitions API provides a mechanism for easily creating animated transitions between different website views. This includes animating between DOM states in a single-page app (SPA), and animating the navigation between documents in a multi-page app (MPA).",
    code: `::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.5s;
}

/* Trigger with JS:
document.startViewTransition(() => {
  // DOM updates here
}); */`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",
      youtube: "https://youtu.be/JCJUPJ_zDQ4"
    },
    browserSupport: {
      chrome: "126+",
      firefox: "No",
      safari: "Technical Preview",
      edge: "126+"
    }
  },
  8: {
    title: "CSS Layers",
    description: "Control specificity with more granularity by creating explicit layers of styles.",
    code: `@layer base, components, utilities;

@layer base {
  h1 { font-size: 2rem; }
}

@layer components {
  .card { padding: 1rem; }
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/@layer",
    },
    browserSupport: {
      chrome: "99+",
      firefox: "97+",
      safari: "15.4+",
      edge: "99+"
    }
  },
  9: {
    title: "CSS Masonry Layout",
    description: "Create Pinterest-style masonry layouts using CSS Grid's upcoming masonry value. Still in discussion.",
    code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-template-rows: masonry;
  gap: 1rem;
}
`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Masonry_layout",
    },
    browserSupport: {
      chrome: "No",
      firefox: "77+ (with feature flag)",
      safari: "TP",
      edge: "No"
    }
  },
  10: {
    title: "color-mix()",
    description: "The color-mix() functional notation takes two <color> values and returns the result of mixing them in a given colorspace by a given amount.",
    code: `li:nth-child(1) {
  background-color: color-mix(in oklab, #a71e14 0%, white);
}
`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix",
    },
    browserSupport: {
      chrome: "111+",
      firefox: "113+",
      safari: "16.2+",
      edge: "111+"
    }
  },
  11: {
    title: "scroll-snap-type",
    description: "The scroll-snap-type CSS property is set on a scroll container, opting it into scroll snapping by setting the direction and strictness of snap point enforcement within the snap port.",
    code: `/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}
.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}
.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}
.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type",
    },
    browserSupport: {
      chrome: "69+",
      firefox: "99+",
      safari: "11+",
      edge: "79+"
    }
  },
  12: {
    title: "Relative Color Syntax",
    description: "Relative color syntax in CSS allows a color to be defined relative to another color using the from keyword and optionally calc() for any of the color values.",
    code: `/* Complementary colors */
/* Base color, and base color with hue channel +180 degrees */
  
.comp :nth-child(1) {
  background-color: var(--base-color);
}
  
.comp :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h + 180));
}

/* Use @supports to add in support old syntax that requires deg units
   to be specified in hue calculations. This is required for Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 180deg))) {
  .comp :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h + 180deg));
  }
}

/* Triadic colors */
/* Base color, base color with hue channel -120 degrees, and base color */
/* with hue channel +120 degrees */

.triadic :nth-child(1) {
  background-color: var(--base-color);
}

.triadic :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h - 120));
}

.triadic :nth-child(3) {
  background-color: lch(from var(--base-color) l c calc(h + 120));
}

/* Use @supports to add in support old syntax that requires deg units
   to be specified in hue calculations. This is required for Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 120deg))) {
  .triadic :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h - 120deg));
  }

  .triadic :nth-child(3) {
    background-color: lch(from var(--base-color) l c calc(h + 120deg));
  }
}

/* Tetradic colors */
/* Base color, and base color with hue channel +90, +180, and +270 degrees */

.tetradic :nth-child(1) {
  background-color: var(--base-color);
}

.tetradic :nth-child(2) {
  background-color: lch(from var(--base-color) l c calc(h + 90));
}

.tetradic :nth-child(3) {
  background-color: lch(from var(--base-color) l c calc(h + 180));
}

.tetradic :nth-child(4) {
  background-color: lch(from var(--base-color) l c calc(h + 270));
}

/* Use @supports to add in support old syntax that requires deg units
   to be specified in hue calculations. This is required for Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 90deg))) {
  .tetradic :nth-child(2) {
    background-color: lch(from var(--base-color) l c calc(h + 90deg));
  }

  .tetradic :nth-child(3) {
    background-color: lch(from var(--base-color) l c calc(h + 180deg));
  }

  .tetradic :nth-child(4) {
    background-color: lch(from var(--base-color) l c calc(h + 270deg));
  }
}

/* Monochrome colors */
/* Base color, and base color with lightness channel -20, -10, +10, and +20 */

.monochrome :nth-child(1) {
  background-color: lch(from var(--base-color) calc(l - 20) c h);
}

.monochrome :nth-child(2) {
  background-color: lch(from var(--base-color) calc(l - 10) c h);
}

.monochrome :nth-child(3) {
  background-color: var(--base-color);
}

.monochrome :nth-child(4) {
  background-color: lch(from var(--base-color) calc(l + 10) c h);
}

.monochrome :nth-child(5) {
  background-color: lch(from var(--base-color) calc(l + 20) c h);
}

/* Hide unused swatches for each palette type */
.comp :nth-child(2) ~ div,
.triadic :nth-child(3) ~ div,
.tetradic :nth-child(4) ~ div {
  display: none;
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors",
    },
    browserSupport: {
      chrome: "131+",
      firefox: "133+",
      safari: "18.0+",
      edge: "131+"
    }
  },
  13: {
    title: "Trigonometric Functions",
    description: "Use mathematical functions like sin, cos, and tan in CSS.",
    code: `/* Single <angle> values */
width: calc(100px * cos(45deg));
width: calc(100px * cos(0.125turn));
width: calc(100px * cos(0.785398163rad));

/* Single <number> values */
width: calc(100px * cos(63.673));
width: calc(100px * cos(2 * 0.125));

/* Other values */
width: calc(100px * cos(pi));
width: calc(100px * cos(e / 2));`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/cos",
      webdev: "https://web.dev/articles/css-trig-functions",
    },
    browserSupport: {
      chrome: "111+",
      firefox: "108+",
      safari: "15.4+",
      edge: "111+"
    }
  },
  14: {
    title: "@scope",
    description: "The @scope CSS at-rule enables you to select elements in specific DOM subtrees, targeting elements precisely without writing overly-specific selectors that are hard to override, and without coupling your selectors too tightly to the DOM structure.",
    code: `@scope (.light-scheme) {
  :scope {
    background-color: plum;
  }

  a {
    color: darkmagenta;
  }
}

@scope (.dark-scheme) {
  :scope {
    background-color: darkmagenta;
    color: antiquewhite;
  }

  a {
    color: plum;
  }
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/@scope",
    },
    browserSupport: {
      chrome: "118+",
      firefox: "128+ (feature flag)",
      safari: "17.4+",
      edge: "118+"
    }
  },
  15: {
    title: "@font-palette-values",
    description: "The @font-palette-values CSS at-rule allows you to customize the default values of font-palette created by the font-maker.",
    code: `@font-palette-values --identifier {
  font-family: Bixa;
}

.my-class {
  font-palette: --identifier;
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-palette-values",
    },
    browserSupport: {
      chrome: "101+",
      firefox: "107+",
      safari: "14.4+",
      edge: "101+"
    }
  },
  16: {
      title: "Field Sizing",
      description: "Without field-sizing, to create a content-sized input field you had to either guess at an average size of a text field input or use JavaScript to count characters and increase the element height or width as the user entered text. Now it's a CSS one-liner.",
      code: `textarea, select, input {
  field-sizing: content;
}`,
      links: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/field-sizing",
      },
      browserSupport: {
        chrome: "123+",
        firefox: "No",
        safari: "No",
        edge: "123+"
      }
    },
  17: {
          title: "interpolate-size",
          description: "The interpolate-size CSS property allows you to enable animations and transitions between a <length-percentage> value and an intrinsic size value such as auto, fit-content, or max-content.",
          code: `:root {
  interpolate-size: allow-keywords;
}`,
          links: {
            mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/interpolate-size",
            webdev: "https://developer.chrome.com/docs/css-ui/animate-to-height-auto"
          },
          browserSupport: {
            chrome: "129+",
            firefox: "No",
            safari: "No",
            edge: "129+"
          }
        },
  18: {
              title: "light-dark()",
              description: "System colors have the ability to react to the current used color-scheme value. The light-dark() function exposes the same capability to authors.",
              code: `:root {
  color-scheme: light dark;
}

body {
  color: light-dark(#333b3c, #efefec);
  background-color: light-dark(#efedea, #223a2c);
}
`,
              links: {
                mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark",
              },
              browserSupport: {
                chrome: "123+",
                firefox: "120+",
                safari: "17.5+",
                edge: "123+"
              }
            },
  19: {
    title: "CSS Module Scripts",
    description: "With the new CSS module scripts feature, you can load CSS style sheets with import statements, just like JavaScript modules. The style sheets can then be applied to documents or shadow roots in the same manner as constructable stylesheets. This can be more convenient and more performant than other ways of importing and applying CSS.",
    code: `import sheet from './styles.css' assert { type: 'css' };
document.adoptedStyleSheets = [sheet];
shadowRoot.adoptedStyleSheets = [sheet];`,
    links: {
      webdev: "https://web.dev/articles/css-module-scripts",
    },
    browserSupport: {
      chrome: "93+",
      firefox: "No",
      safari: "No",
      edge: "93+"
    }
  },
  20: {
    title: "Scroll Timeline",
    description: "The scroll-timeline CSS shorthand property is used to define a named scroll progress timeline, which is progressed through by scrolling a scrollable element (scroller) between top and bottom (or left and right). scroll-timeline is set on the scroller that will provide the timeline. The starting scroll position represents 0% progress and the ending scroll position represents 100% progress. If the 0% position and 100% position coincide (i.e., the scroll container has no overflow to scroll), the timeline is inactive.",
    code: `#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline: --squareTimeline y;
  /* Firefox supports the older "vertical" syntax */
  scroll-timeline: --squareTimeline vertical;
  position: relative;
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/@scroll-timeline",
    },
    browserSupport: {
      chrome: "115+",
      firefox: "111+ (Feature Flag)",
      safari: "No",
      edge: "115+"
    }
  },
  21: {
    title: "Custom scrollbar width & colour",
    description: "Available from Chrome 121 are the scrollbar-width and scrollbar-color properties to style the width and, respectively, the color of the scrollbar. scrollbar-width is supposed in Safari and Firefox, but scrollbar-color is not.",
    code: `.scroller {
  scrollbar-color: hotpink blue;
  scrollbar-width: 10%;
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width",
    },
    browserSupport: {
      chrome: "121+",
      firefox: "64+",
      safari: "18.2+",
      edge: "121+"
    }
  },
  22: {
    title: "Scroll Snap Events",
    description: "Built-in snap events have made previously invisible moments during scrolling, visible, at the right time, and always correct. They are the missing piece of the puzzle that makes scroll snapping a complete solution.",
    code: `scroller.addEventListener('scrollsnapchange', event=> {
  console.log(event.snapTargetBlock);
  console.log(event.snapTargetInline);
})`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap/Using_scroll_snap_events",
    },
    browserSupport: {
      chrome: "129+",
      firefox: "No",
      safari: "No",
      edge: "129+"
    }
  },
  23: {
    title: "starting-style",
    description: "The @starting-style at-rule is used to define styles for an element before it has received the first style update. When setting those targeted properties to transition with CSS transitions, you can use these starting-styles to create entry effects.",
    code: `div {
  transition: background-color 0.5s;
  background-color: transparent;

  @starting-style {
    background-color: yellow;
  }
}`,
    links: {
      mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/@starting-style",
    },
    browserSupport: {
      chrome: "117+",
      firefox: "129+ Partial Support",
      safari: "17.5+",
      edge: "117+"
    }
  },
  24: {
      title: "Backdrop inheritance",
      description: "Historically the ::backdrop pseudo-element didn’t inherit from anywhere. From Chrome 122, this ::backdrop pseudo-element has been converted into a tree abiding element, meaning that it inherits any inheritable properties from its originating element. Thanks to this change it is possible to override custom property values on specific elements and ::backdrop will have access to them. For example, the ::backdrop associated with an open <dialog> element can now access the custom properties available in that <dialog>.",
      code: `dialog {
  --border-color: #6300ff;
  --backdrop-color: #6300ff33; /* Could also use relative color syntax here :) */
}
      
::backdrop {
  background-color: var(--backdrop-color); /* This works as of Chrome 122 */
}`,
      links: {
        mdn: "https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop",
      },
      browserSupport: {
        chrome: "122+",
        firefox: "125+",
        safari: "17+",
        edge: "122+"
      }
    }
};
