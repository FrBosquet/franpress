const fromTimestampString = str => new Date(Number(str))

const months = [ 'Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre' ]
const getMonthName = date => months[date.getMonth()]

export const getFormatedDate = str => {
	const date = fromTimestampString(str)
	return `${date.getDate()} de ${getMonthName(date)} de ${date.getFullYear()}`
}