import DOMPurify from "dompurify";


/**
 * Converts a start date and an optional end date to a formatted string.
 * 
 * @param statDate - The start date to be converted.
 * @param endDate - The optional end date to be converted. If not provided, defaults to "Present".
 * @returns A string representing the formatted date range.
 */
export function convertDate(statDate: Date, endDate?: Date): string {
  const start = new Date(statDate).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
  });

  const end = endDate
    ? new Date(endDate).toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
      })
    : "Present";

  return `${start} - ${end}`;
}

/**
 * Sanitizes a given HTML content string to prevent XSS attacks.
 * 
 * @param content - The HTML content string to be sanitized.
 * @returns An object containing the sanitized HTML string.
 */
export function sanitizeContent(content: string): { __html: string } {
  return { __html: DOMPurify.sanitize(content) };
}