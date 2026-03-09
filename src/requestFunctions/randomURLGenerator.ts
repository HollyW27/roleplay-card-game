function randomURLGenerator(): string {
  let randomURL: string = '';
  for (let i = 0; i < 10; i++) {
    randomURL = randomURL + String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  return randomURL;
}
export default randomURLGenerator;