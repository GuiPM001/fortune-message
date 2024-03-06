export const saveMessage = (message: string) => {
  const currentDate = new Date();
  const dateCopy = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 0, 0, 0)
  
  localStorage.setItem("message", message);
  localStorage.setItem("expiresIn", dateCopy.toISOString());
}

export const getSavedMessage = () => {
  const messageReceived = localStorage.getItem("message");
  const expiresIn = localStorage.getItem("expiresIn");

  if (messageReceived && expiresIn && new Date(expiresIn) > new Date()) {
    return messageReceived;
  }

  return null;
}