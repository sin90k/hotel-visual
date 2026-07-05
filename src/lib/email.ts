export function confirmationEmail(propertyName: string) {
  return `
    <h1>Property Review Request Received</h1>
    <p>Thank you for submitting ${propertyName}.</p>
    <p>Our team will manually review your property.</p>
    <p>You will receive:</p>
    <p>✓ 3 room photo improvement recommendations<br/>✓ 1 complimentary visual sample</p>
    <p>We will contact you after the review is completed.</p>
    <p>Otter Visual</p>
  `;
}
