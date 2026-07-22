/**
 * Sanitisers for user-supplied values that end up in outgoing mail.
 *
 * Anything a visitor types can reach an SMTP conversation. A raw CR or LF in a
 * header value lets the sender close the intended header and inject their own
 * (a hidden `Bcc:` being the classic abuse), turning the contact form into an
 * open relay. Header values are single-line by definition, so stripping the
 * line breaks costs nothing and closes the hole regardless of what the mail
 * library does downstream.
 */

// CR, LF, NUL, and the Unicode line/paragraph separators (U+2028/U+2029).
// Written as escapes so the characters can never terminate the literal itself.
const HEADER_BREAKERS = /[\r\n\u2028\u2029\0]+/g;

/** Collapse anything that could terminate a header line. */
export function headerSafe(value: string, maxLen = 200): string {
  return value
    .replace(HEADER_BREAKERS, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen);
}

/**
 * Accept an address only if it is plausibly one, else return undefined.
 * Used for `replyTo`, which is a header and therefore injectable.
 */
export function emailSafe(value: string): string | undefined {
  const v = headerSafe(value, 254);
  return /^[^\s@<>,;:"'\\]+@[^\s@<>,;:"'\\]+\.[a-z]{2,}$/i.test(v) ? v : undefined;
}

/**
 * Body text is not header-injectable, but it is worth bounding so a script
 * cannot post a multi-megabyte payload through the form.
 */
export function bodySafe(value: string, maxLen = 5000): string {
  return value
    .replace(/\r\n/g, '\n')
    .replace(/\0/g, '')
    .trim()
    .slice(0, maxLen);
}
