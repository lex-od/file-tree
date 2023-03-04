// Юзаем Intl.DateTimeFormat() вместо toLocaleString(), т. к.
// при этом ненужно создавать промежуточный объект даты.
// Timestamp напрямую конвертируется в строку.

const timezoneFormat = Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "numeric",
  minute: "2-digit",
});

export const toTimezone = timezoneFormat.format;
