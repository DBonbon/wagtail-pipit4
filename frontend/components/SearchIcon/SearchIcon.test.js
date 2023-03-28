import { render, /* screen */ } from '@testing-library/react';
import SearchIcon from './';
// import data from './SearchIcon.data';

describe('<SearchIcon />', () => {
    it('Renders an empty SearchIcon', () => {
        render(<SearchIcon />);
    });

    // it('Renders SearchIcon with data', () => {
    //     const { container } = render(<SearchIcon {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
