import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'store/filters/filter-action';
import { selectFilters } from 'store/filters/filter-selector';
import { selectVisiblePosition } from 'store/positions/position-selectors';
import { JobPosition } from './JobPosition';


const JobList = () => {
  const dispatch = useDispatch()
  const currentFIlters = useSelector(selectFilters)
  const positions = useSelector((state) => selectVisiblePosition(state, currentFIlters))
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export { JobList };