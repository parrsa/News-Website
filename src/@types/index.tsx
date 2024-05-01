


declare module '@mui/material/styles' {
    interface PaletteOptions {
        socialMedias: socialColors
        gradients: gradientsColors
        red: SimplePaletteColorOptions
        pink: SimplePaletteColorOptions
        purple: SimplePaletteColorOptions
        deepPurple: SimplePaletteColorOptions
        indigo: SimplePaletteColorOptions
        blue: SimplePaletteColorOptions
        lightBlue: SimplePaletteColorOptions
        cyan: SimplePaletteColorOptions
        teal: SimplePaletteColorOptions
        green: SimplePaletteColorOptions
        lightGreen: SimplePaletteColorOptions
        lime: SimplePaletteColorOptions
        yellow: SimplePaletteColorOptions
        amber: SimplePaletteColorOptions
        orange: SimplePaletteColorOptions
        deepOrange: SimplePaletteColorOptions
        brown: SimplePaletteColorOptions
        blueGrey: SimplePaletteColorOptions
        badgeColors: BadgeColors
        white: PaletteColorOptions
        transparent: PaletteColorOptions
        light: PaletteColorOptions
        black: PaletteColorOptions
        dark: PaletteColorOptions
        inputBorderColor: PaletteColorOptions
        coloredShadows: PaletteColorOptions
        tabs: PaletteColor
        kaarnas: Palettekaarnas
    }

    interface Palettekaarnas {
        main: string,
        yellow: string
        ratingyellow: string
        graybox: string
    }
    // SocialColors

    interface socialColors {
        facebook: socialColorOptions
        twitter: socialColorOptions
        instagram: socialColorOptions
        linkedin: socialColorOptions
        pinterest: socialColorOptions
        youtube: socialColorOptions
        vimeo: socialColorOptions
        slack: socialColorOptions
        dribbble: socialColorOptions
        github: socialColorOptions
        reddit: socialColorOptions
        tumblr: socialColorOptions
        GooglePlus: socialColorOptions
        Steam: socialColorOptions
        Soundcloud: socialColorOptions
        Yahoo: socialColorOptions
        Amazon: socialColorOptions
        Spotify: socialColorOptions
        Discord: socialColorOptions
        Twitch: socialColorOptions
        WhatsApp: socialColorOptions
        Snapchat: socialColorOptions
        Pinterest: socialColorOptions
        TikTok: socialColorOptions
        Skype: socialColorOptions

    }

    interface socialColorOptions {
        main: string
        dark?: string
    }


    // GradientsColors

    interface gradientsColors {
        primary: gradientsColorsOptions
        secondary: gradientsColorsOptions
        info: gradientsColorsOptions
        success: gradientsColorsOptions
        warning: gradientsColorsOptions
        error: gradientsColorsOptions
        light: gradientsColorsOptions
        dark: gradientsColorsOptions
        Grade_Grey: gradientsColorsOptions
        Piggy_Pink: gradientsColorsOptions
        Cool_Blues: gradientsColorsOptions
        Mega_Tron: gradientsColorsOptions
        Moonlit_Asteroid: gradientsColorsOptions

    }


    interface gradientsColorsOptions {
        main: string
        state: string
        state1?: string
    }

    interface PaletteColorOptions {
        main: string
        state?: string
        focus?: string
        light?: string
        dark?: string
        primary?: string
        secondary?: string
        tertiary?: string
        Quaternary?: string
    }


    // SimpleColors
    interface SimplePaletteColorOptions {
        main: string
        50?: string
        100?: string
        200?: string
        300?: string
        400?: string
        500?: string
        600?: string
        700?: string
        800?: string
        900?: string
        A100?: string
        A200?: string
        A300?: string
        A400?: string
        A700?: string
        fucos?: string;
    }

    //BadgeColors
    interface BadgeColors {
        primary: BadgeColorsOptions
        secondary: BadgeColorsOptions
        info: BadgeColorsOptions
        success: BadgeColorsOptions
        warning: BadgeColorsOptions
        error: BadgeColorsOptions
        light: BadgeColorsOptions
        dark: BadgeColorsOptions
    }

    interface BadgeColorsOptions {
        background: string
        text: string
    }

    interface PaletteColor {
        indicator: PaletteColorOptions
    }
}
export interface PageLayoutProps {
    children?: React.ReactNode;
};

export interface Listnav {
    title: string,
    path: string,
    id: number,
    icon?: React.ReactNode
}

export interface AllRoutes {
    type: string,
    name: string,
    key: string,
    route: string,
    component: React.ReactNode
    children?: any
}




export { }