/* re-usable function to compare two two things */ 
export const bookExist = (existiingTitle,
  newTitle) => JSON.stringify(existiingTitle) === JSON.stringify(newTitle);