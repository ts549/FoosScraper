import { connectSearchBox } from 'react-instantsearch-dom';

function SearchBar({ currentRefinement, isSearchStalled, refine }) {

return (
	
	<form noValidate action="" role="search">
		<input
		value={currentRefinement}
		onChange={event => refine(event.currentTarget.value)}
		placeholder="Search any term"
		style={{ height:'40px',width:'280px',borderRadius:"10px"}}
		title='Search bar'
        onInput={event => {
            console.log(event.target.value)
          }}
		/>
	</form>
	
)
}

export default connectSearchBox(SearchBar);