const useFormatDates = (date:string) => {
  const formatDateWithHours = new Date(date);

  const obtainDayWithMonthAndYear = formatDateWithHours.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  const obtainHour = formatDateWithHours.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  
  return { obtainDayWithMonthAndYear,obtainHour };
}

export default useFormatDates;
