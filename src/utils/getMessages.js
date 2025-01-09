export async function getMessages(locale) {
  const messageModule = await import(`../../dictionaries/${locale}.json`);
  return messageModule.default;
}