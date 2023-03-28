// import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import s from './BlogPage.module.css';

const BlogPage = () => {
    return <div className={s.Root}>BlogPage</div>;
};

export default basePageWrap(BlogPage);
