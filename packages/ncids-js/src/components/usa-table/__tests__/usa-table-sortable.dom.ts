export const usaTableSortableDOM = (): HTMLElement => {
	const div = document.createElement('div');

	div.innerHTML = `
	<div class="usa-table-container--scrollable" tabindex="0">
		<table data-sortable class="usa-table">
			<caption>Recently admitted US states (sortable table example)</caption>
			<thead>
				<tr>
					<th>
						Name
					</th>
					<th>
						Order admitted to union
					</th>
					<th data-sortable-type="date">
						Date of ratification vote
					</th>
					<th data-sortable-type="date">
						Date admitted to union
					</th>
					<th>
						Percent of voters in favor of ratification
					</th>
					<th>
						Votes cast in favor of ratification
					</th>
					<th>
						Estimated population at time of admission
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Hawaii</th>
					<td>50th</td>
					<td>Jun. 27, 1959</td>
					<td>Aug. 21, 1959</td>
					<td>94.3%</td>
					<td>132,773</td>
					<td>632,772</td>
				</tr>
				<tr>
					<th>Alaska</th>
					<td>49th</td>
					<td>Apr. 24, 1956</td>
					<td>Jan. 3, 1959</td>
					<td>68.1%</td>
					<td>17,477</td>
					<td>226,167</td>
				</tr>
				<tr>
					<th>Arizona</th>
					<td >48th</td>
					<td>Feb. 9, 1911</td>
					<td>Feb. 14, 1912</td>
					<td>78.7%</td>
					<td>12,187</td>
					<td>204,354</td>
					<td>February</td>
				</tr>
				<tr>
					<th>New Mexico</th>
					<td>47th</td>
					<td>Nov. 5, 1911</td>
					<td>Jan. 6, 1912</td>
					<td>70.3%</td>
					<td>31,742</td>
					<td>327,301</td>
				</tr>
				<tr>
					<th>Oklahoma</th>
					<td>46th</td>
					<td>Sep. 17, 1907</td>
					<td>Nov. 16, 1907</td>
					<td>71.2%</td>
					<td>180,333</td>
					<td>1,657,155</td>
				</tr>
				<tr>
					<th>Utah</th>
					<td>45th</td>
					<td>Nov. 5, 1895</td>
					<td>Jan. 4, 1896</td>
					<td>80.5%</td>
					<td>31,305</td>
					<td>210,779</td>
				</tr>
			</tbody>
		</table>
		<div class="usa-sr-only usa-table__announcement-region" aria-live="polite">
			<!-- this content will change when sort changes -->
		</div>
		<p class="margin-bottom-3">Data for illustration purposes only.</p>
	</div>

	<div class="usa-table-container--scrollable" tabindex="0">
		<table data-sortable class="usa-table usa-table--striped">
			<caption>Sortable striped table with various content types</caption>
			<thead>
				<tr>
					<th>
						Alphabetical
					</th>
					<th>
						Month
					</th>
					<th>
						Percent
					</th>
					<th>
						Count
					</th>
					<th data-fixed>
						Rank (Ordinal)
					</th>
					<th data-fixed>
						Rank (Cardinal)
					</th>
					<th data-sortable-type="date">
						Unix Timestamp
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Tango</th>
					<td>March</td>
					<td>20.6%</td>
					<td>23,612</td>
					<td>Third</td>
					<td>3rd</td>
					<td>March 27, 2012</td>
				</tr>
				<tr>
					<th scope="row">Foxtrot</th>
					<td>April</td>
					<td>2.6%</td>
					<td>-32</td>
					<td>First</td>
					<td>1st</td>
					<td>April 9, 2021</td>
				</tr>
				<tr>
					<th scope="row">Hilo</th>
					<td>January</td>
					<td>-3.6%</td>
					<td>0.002</td>
					<td>Second</td>
					<td>2nd</td>
					<td>January 20, 2021</td>
				</tr>
				<tr>
					<th scope="row">Bravo</th>
					<td>December</td>
					<td>-300.6%</td>
					<td>0</td>
					<td>Fourth</td>
					<td>4th</td>
					<td>December 16, 2020</td>
				</tr>
			</tbody>
		</table>
		<div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
	</div>

	<div class="usa-table-container--scrollable" tabindex="0">
		<table data-sortable class="usa-table usa-table--borderless">
			<caption>Sortable borderless table with various content types</caption>
			<thead>
				<tr>
					<th>
						Alphabetical
					</th>
					<th>
						Month
					</th>
					<th>
						Percent
					</th>
					<th>
						Count
					</th>
					<th data-fixed>
						Rank (Ordinal)
					</th>
					<th data-fixed>
						Rank (Cardinal)
					</th>
					<th data-sortable-type="date">
						Unix Timestamp
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Tango</th>
					<td>March</td>
					<td>20.6%</td>
					<td>23,612</td>
					<td>Third</td>
					<td>3rd</td>
					<td>March 27, 2012</td>
				</tr>
				<tr>
					<th scope="row">Foxtrot</th>
					<td>April</td>
					<td>2.6%</td>
					<td>-32</td>
					<td>First</td>
					<td>1st</td>
					<td>April 9, 2021</td>
				</tr>
				<tr>
					<th scope="row">Hilo</th>
					<td>January</td>
					<td>-3.6%</td>
					<td>0.002</td>
					<td >Second</td>
					<td>2nd</td>
					<td>January 20, 2021</td>
				</tr>
				<tr>
					<th scope="row">Bravo</th>
					<td>December</td>
					<td>-300.6%</td>
					<td>0</td>
					<td>Fourth</td>
					<td>4th</td>
					<td>December 16, 2020</td>
				</tr>
			</tbody>
		</table>
		<div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
	</div>`;
	return div;
};

export const usaTableSortableSortedDOM = (): HTMLElement => {
	const div = document.createElement('div');

	div.innerHTML = `
	<div class="usa-table-container--scrollable" tabindex="0">
		<table data-sortable class="usa-table">
			<caption>Recently admitted US states (sortable table example)</caption>
			<thead>
				<tr>
					<th data-sortable aria-sort="descending">
						Name
					</th>
					<th data-sortable>
						Order admitted to union
					</th>
					<th data-sortable data-sortable-type="date">
						Date of ratification vote
					</th>
					<th data-sortable data-sortable-type="date">
						Date admitted to union
					</th>
					<th data-sortable>
						Percent of voters in favor of ratification
					</th>
					<th data-sortable>
						Votes cast in favor of ratification
					</th>
					<th data-sortable>
						Estimated population at time of admission
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>Hawaii</th>
					<td>50th</td>
					<td>Jun. 27, 1959</td>
					<td>Aug. 21, 1959</td>
					<td>94.3%</td>
					<td>132,773</td>
					<td>632,772</td>
				</tr>
				<tr>
					<th>Alaska</th>
					<td>49th</td>
					<td>Apr. 24, 1956</td>
					<td>Jan. 3, 1959</td>
					<td>68.1%</td>
					<td>17,477</td>
					<td>226,167</td>
				</tr>
				<tr>
					<th>Arizona</th>
					<td >48th</td>
					<td>Feb. 9, 1911</td>
					<td>Feb. 14, 1912</td>
					<td>78.7%</td>
					<td>12,187</td>
					<td>204,354</td>
				</tr>
				<tr>
					<th>New Mexico</th>
					<td>47th</td>
					<td>Nov. 5, 1911</td>
					<td>Jan. 6, 1912</td>
					<td>70.3%</td>
					<td>31,742</td>
					<td>327,301</td>
				</tr>
				<tr>
					<th>Oklahoma</th>
					<td>46th</td>
					<td>Sep. 17, 1907</td>
					<td>Nov. 16, 1907</td>
					<td>71.2%</td>
					<td>180,333</td>
					<td>1,657,155</td>
				</tr>
				<tr>
					<th>Utah</th>
					<td>45th</td>
					<td>Nov. 5, 1895</td>
					<td>Jan. 4, 1896</td>
					<td>80.5%</td>
					<td>31,305</td>
					<td>210,779</td>
				</tr>
			</tbody>
		</table>
		<div class="usa-sr-only usa-table__announcement-region" aria-live="polite">
			<!-- this content will change when sort changes -->
		</div>
		<p class="margin-bottom-3">Data for illustration purposes only.</p>
	</div>

	<div class="usa-table-container--scrollable" tabindex="0">
		<table data-sortable class="usa-table usa-table--striped">
			<caption>Sortable striped table with various content types</caption>
			<thead>
				<tr>
					<th>
						Alphabetical
					</th>
					<th>
						Month
					</th>
					<th>
						Percent
					</th>
					<th>
						Count
					</th>
					<th data-fixed>
						Rank (Ordinal)
					</th>
					<th data-fixed>
						Rank (Cardinal)
					</th>
					<th data-sortable-type="date">
						Unix Timestamp
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Tango</th>
					<td>March</td>
					<td>20.6%</td>
					<td>23,612</td>
					<td>Third</td>
					<td>3rd</td>
					<td>March 27, 2012</td>
				</tr>
				<tr>
					<th scope="row">Foxtrot</th>
					<td>April</td>
					<td>2.6%</td>
					<td>-32</td>
					<td>First</td>
					<td>1st</td>
					<td>April 9, 2021</td>
				</tr>
				<tr>
					<th scope="row">Hilo</th>
					<td>January</td>
					<td>-3.6%</td>
					<td>0.002</td>
					<td>Second</td>
					<td>2nd</td>
					<td>January 20, 2021</td>
				</tr>
				<tr>
					<th scope="row">Bravo</th>
					<td>December</td>
					<td>-300.6%</td>
					<td>0</td>
					<td>Fourth</td>
					<td>4th</td>
					<td>December 16, 2020</td>
				</tr>
			</tbody>
		</table>
		<div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
	</div>

	<div class="usa-table-container--scrollable" tabindex="0">
		<table data-sortable class="usa-table usa-table--borderless">
			<caption>Sortable borderless table with various content types</caption>
			<thead>
				<tr>
					<th>
						Alphabetical
					</th>
					<th>
						Month
					</th>
					<th>
						Percent
					</th>
					<th>
						Count
					</th>
					<th data-fixed>
						Rank (Ordinal)
					</th>
					<th data-fixed>
						Rank (Cardinal)
					</th>
					<th data-sortable-type="date">
						Unix Timestamp
					</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">Tango</th>
					<td>March</td>
					<td>20.6%</td>
					<td>23,612</td>
					<td>Third</td>
					<td>3rd</td>
					<td>March 27, 2012</td>
				</tr>
				<tr>
					<th scope="row">Foxtrot</th>
					<td>April</td>
					<td>2.6%</td>
					<td>-32</td>
					<td>First</td>
					<td>1st</td>
					<td>April 9, 2021</td>
				</tr>
				<tr>
					<th scope="row">Hilo</th>
					<td>January</td>
					<td>-3.6%</td>
					<td>0.002</td>
					<td >Second</td>
					<td>2nd</td>
					<td>January 20, 2021</td>
				</tr>
				<tr>
					<th scope="row">Bravo</th>
					<td>December</td>
					<td>-300.6%</td>
					<td>0</td>
					<td>Fourth</td>
					<td>4th</td>
					<td>December 16, 2020</td>
				</tr>
			</tbody>
		</table>
		<div class="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
	</div>`;
	return div;
};
