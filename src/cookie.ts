import { DEFAULT_COOKIE_MAX_AGE } from './environment'

const LIBRARY_SLUG = 'next-jwt-secure'

const DEFAULT_NAMES = {
    session: 'session-token'
}

function getCookieName(
    type: keyof typeof DEFAULT_NAMES,
    isSecureContext?: boolean
) {
    return `${isSecureContext ? '__Secure-' : ''}${LIBRARY_SLUG}.${
        DEFAULT_NAMES[type]
    }`
}

function getCookieAge(expires = DEFAULT_COOKIE_MAX_AGE) {
    const cookieExpires = new Date()
    cookieExpires.setTime(cookieExpires.getTime() + expires * 1000)
    return cookieExpires
}

export { getCookieName, getCookieAge }
