import { createUseStyles } from 'react-jss';
import { Radio } from '../../radio';
import {
    sortingOptions,
    SORT_BY_TYPES
} from '../types';

const useStyles = createUseStyles({});

export const FilterTwo: React.FC<{
  filter: SORT_BY_TYPES;
}> = ({filter}) => {
  return (
    <div>
      {sortingOptions.map(option => (
        <Radio label={option} isActive={filter === option} />
      ))}
    </div>
  );
};
