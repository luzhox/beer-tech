export const formatDate = (date:string,haveHour?:boolean) => {
  const newDate = new Date(date);
  if(haveHour){
    return newDate.toLocaleString();
  }
  return newDate.toLocaleDateString();
}