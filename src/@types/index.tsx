declare module '@mui/material/styles' {

    /* The `interface Palette` is defining a structure that represents a color palette in a TypeScript
    React application. It includes various color options such as primary, third, gradients, info,
    success, warning, error, secondary, gray, transparent, dark, and white. Each color option is
    defined using the `SimplePaletteColorOptions` or `PaletteColorOptions` interfaces, specifying
    different properties like main color, state, focus, light, dark, and other custom properties for
    each color in the palette. This structure helps in organizing and managing the colors used in the
    application's design system. */
    interface Palette {
        primary: SimplePaletteColorOptions;
        third: SimplePaletteColorOptions;
        gradients: SimplePaletteColorOptions;
        info: SimplePaletteColorOptions;
        success: SimplePaletteColorOptions;
        warning: SimplePaletteColorOptions;
        error: SimplePaletteColorOptions;
        secondary: SimplePaletteColorOptions;
        gray: SimplePaletteColorOptions;
        transparent: PaletteColorOptions;
        dark: PaletteColorOptions;
        white: PaletteColorOptions;
    }

    /* The `interface PaletteOptions` is defining a structure that represents the color options available
    for the color palette in a TypeScript React application. Each property in this interface corresponds
    to a specific color option such as primary, third, gradients, info, success, warning, error,
    secondary, gray, transparent, dark, and white. */
    interface PaletteOptions {
        primary: PaletteColorOptions;
        third: PaletteColorOptions;
        gradients: PaletteColorOptions;
        info: PaletteColorOptions;
        success: PaletteColorOptions;
        warning: PaletteColorOptions;
        error: PaletteColorOptions;
        secondary: PaletteColorOptions;
        gray: PaletteColorOptions;
        transparent: PaletteColorOptions;
        dark: PaletteColorOptions;
        white: PaletteColorOptions;
    }

    /* The `interface PaletteColorOptions` is defining a structure that represents the options available
    for a color in a color palette within a TypeScript React application. It includes properties such
    as `main`, `state`, `focus`, `light`, `dark`, `primary`, `secondary`, `tertiary`, `Quaternary`,
    `border`, `lite`, `gradiant1`, and `gradiant2`, each with a corresponding type of `string` or
    `undefined`. */
    interface PaletteColorOptions {
        main: string;
        state?: string;
        focus?: string;
        light?: string;
        dark?: string;
        primary?: string;
        secondary?: string;
        tertiary?: string;
        Quaternary?: string;
        border?: string;
        lite?: string;
        gradiant1?: string;
        gradiant2?: string;
    }

    /* The `interface socialColors` is defining a structure that represents a collection of social
    colors in a TypeScript React application. It uses an index signature `[key: string]:
    socialColorOptions` to allow for dynamic properties where the key is a string and the value is of
    type `socialColorOptions`. This structure enables the application to store and access various
    social colors with different properties such as `main` and optionally `dark`. It provides a
    flexible way to define and manage social colors within the design system of the application. */
    interface socialColors {
        [key: string]: socialColorOptions;
    }

    /* The `interface socialColorOptions` is defining a structure that represents a social color option
    in a TypeScript React application. It has two properties: */
    interface socialColorOptions {
        main: string;
        dark?: string;
    }

    /* The `interface gradientsColors` is defining a structure that represents a collection of gradient
    colors in a TypeScript React application. It uses an index signature `[key: string]:
    gradientsColorsOptions` to allow for dynamic properties where the key is a string and the value
    is of type `gradientsColorsOptions`. This structure enables the application to store and access
    various gradient colors with different properties such as `main`, `state`, `state1`, `light`, and
    `dark`. It provides a flexible way to define and manage gradient colors within the design system
    of the application. */
    interface gradientsColors {
        [key: string]: gradientsColorsOptions;
    }

    /* The `interface gradientsColorsOptions` is defining a structure that represents the options
    available for a gradient color in a color palette within a TypeScript React application. It
    includes the following properties: */
    interface gradientsColorsOptions {
        main: string;
        state: string;
        state1?: string;
        light?: string;
        dark?: string;
    }

    /* The `interface SimplePaletteColorOptions` is defining a structure that represents a simple color
    option in a color palette within a TypeScript React application. It has a required property `main`
    which specifies the main color value as a string. Additionally, it allows for dynamic properties
    using an index signature `[key: string]: string | undefined;`, where any additional properties can
    be added with keys as strings and values as either strings or undefined. This provides flexibility
    to include extra color-related properties if needed while ensuring type safety within the color
    options. */
    interface SimplePaletteColorOptions {
        main: string;
        [key: string]: string | undefined;
    }

    /* The `interface BadgeColors` is defining a structure that represents a collection of badge colors in
    a TypeScript React application. It uses an index signature `[key: string]: BadgeColorsOptions` to
    allow for dynamic properties where the key is a string and the value is of type
    `BadgeColorsOptions`. This structure enables the application to store and access various badge
    colors with different properties such as `background` and `text`. It provides a flexible way to
    define and manage badge colors within the design system of the application. */
    interface BadgeColors {
        [key: string]: BadgeColorsOptions;
    }

    /* The `interface BadgeColorsOptions` is defining a structure that represents the options available for
    a badge color in a TypeScript React application. It has two properties: */
    interface BadgeColorsOptions {
        background: string;
        text: string;
    }

    /* The `interface PaletteColor` is defining a structure that represents a specific color option called
    `indicator` within a color palette in a TypeScript React application. This `indicator` color option
    is defined using the `PaletteColorOptions` interface, which specifies various properties such as
    `main`, `state`, `focus`, `light`, `dark`, `primary`, `secondary`, `tertiary`, `Quaternary`,
    `border`, `lite`, `gradiant1`, and `gradiant2`. By including this interface, it allows for
    organizing and managing the `indicator` color within the overall color palette structure, providing
    a consistent way to access and utilize this particular color option throughout the application's
    design system. */
    interface PaletteColor {
        indicator: PaletteColorOptions;
    }
}
