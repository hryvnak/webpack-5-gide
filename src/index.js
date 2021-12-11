const point1 = [4, 6];
const point2 = [8, 2];

const calculateDistance = (point1, point2) => {
	const [x1, y1] = point1;
	const [x2, y2] = point2;

	// В математике заглавной дельтой обозначают разницу между двумя величинами
	const deltaX = x1 - x2;
	const deltaY = y1 - y2;

	const result = Math.sqrt((deltaX ** 2) + (deltaY ** 2)); 
	console.log(result);
	return result;
}
calculateDistance(point1, point2);