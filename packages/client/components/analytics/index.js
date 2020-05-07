import React, { useEffect } from "react"
import ReactGA from "react-ga"

const GA_CODE = "G-NFV0RS918Q"

const initGA = () => {
    ReactGA.initialize(GA_CODE)
}

const logPageView = () => {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
}

export default props => {
    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA()
            window.GA_INITIALIZED = true
        }
        logPageView()
    }, [])
    return props.children
}