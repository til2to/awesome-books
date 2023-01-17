export const bookExist = (existiingTitle,
  newTitle) => JSON.stringify(existiingTitle) === JSON.stringify(newTitle);