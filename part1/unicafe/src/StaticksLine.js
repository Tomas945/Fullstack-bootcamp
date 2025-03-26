const StatisticsLine = ({ text, value }) => {
	return (
		<tr>
			<td>
				{text} {value}
			</td>
		</tr>
	);
};

export default StatisticsLine;
