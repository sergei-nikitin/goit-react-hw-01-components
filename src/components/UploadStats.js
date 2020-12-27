import PropTypes from 'prop-types';
import './UploadStats.css';

export default function UploadStats({ title, children }) {
    return <div className="uploadStatsContainer">
        {title && <h2 className="titleStatsContainer">{title}</h2>}
        <div className="statsUpload">
            {children}
        </div>
    </div>;
}

UploadStats.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    }
        