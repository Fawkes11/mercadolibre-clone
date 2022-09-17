import { extendTheme, textDecoration } from '@chakra-ui/react'


const colors = {
    yellow: {
        500: "#fff159"
    },
    blue: {
        500: "#3483fa",
        600: "#0864EE",
        700: "#2968c8",
        800: "#1259c3"
    },
    green: {

    },
    whiteBack: {
        500: '#ededed'
    },
    textGrayColor: {
        300: "rgba(51,51,51,0.6)",
        600: "#333"
    }
}


const components = {
    Link: {

        variants: {
            "with-border": {
                _hover: {
                    border: "solid 1px rgba(51,51,51,0.2)",
                    borderRadius: "4px",
                    textDecoration: "none"
                }
            }
        }


    }
}





const customTheme = extendTheme({ colors, components })

export default customTheme