// #666666
// with ' Tailwind Shades' extension enable, select #666666 then cmd+k then cmd+ g
// to get results below
// indigo: {
//     100: "#e0e0e0",
//     200: "#c2c2c2",
//     300: "#a3a3a3",
//     400: "#858585",
//     500: "#666666",
//     600: "#525252",
//     700: "#3d3d3d",
//     800: "#292929",
//     900: "#141414"
// },

// -------------------------------

// color design tokens export
export const tokensDark = {
    grey: {
        0: "#ffffff", // manually adjusted
        10: "#f6f6f6", // manually adjusted
        50: "#f0f0f0", // manually adjusted
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000", // manually adjusted
    },
    primary: {
        // blue
        100: "#d5d4e2",
        200: "#acaac5",
        300: "#827fa9",
        400: "#3e397c", // manually adjusted
        500: "#2f2a6f",
        600: "#262259",
        700: "#1c1943",
        800: "#13112c",
        900: "#090816",
    },
    secondary: {
        // yellow
        50: "#f6f6e6", // manually adjusted
        100: "#fdefe3",
        200: "#fbdfc6",
        300: "#f8cfaa",
        400: "#f6bf8d",
        500: "#f4af71",
        600: "#c38c5a",
        700: "#926944",
        800: "#62462d",
        900: "#312317",
    },
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for (let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1];
        }
        reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      // palette values for dark mode
                      primary: {
                          ...tokensDark.primary,
                          main: tokensDark.primary[400],
                          light: tokensDark.primary[400],
                      },
                      secondary: {
                          ...tokensDark.secondary,
                          main: tokensDark.secondary[500],
                      },
                      neutral: {
                          ...tokensDark.grey,
                          main: tokensDark.grey[500],
                      },
                      background: {
                          default: tokensDark.primary[600],
                          alt: tokensDark.primary[500],
                      },
                  }
                : {
                      // palette values for light mode
                      primary: {
                          ...tokensLight.primary,
                          main: tokensDark.grey[50],
                          light: tokensDark.grey[100],
                      },
                      secondary: {
                          ...tokensLight.secondary,
                          main: tokensDark.secondary[600],
                          light: tokensDark.secondary[700],
                      },
                      neutral: {
                          ...tokensLight.grey,
                          main: tokensDark.grey[500],
                      },
                      background: {
                          default: tokensDark.grey[0],
                          alt: tokensDark.grey[50],
                      },
                  }),
        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};
