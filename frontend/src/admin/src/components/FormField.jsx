import PropTypes from 'prop-types';

const FormField = ({ id, label, type, value, options, handleChange, className, required, min, max }) => {
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">{label}:</label>
            {type === 'select' ? (
                <div className="dropdown-container">
                    <select
                        id={id}
                        value={value || ''}
                        onChange={(e) => handleChange(id, e.target.value)}
                        className={className}
                        required={required}
                    >
                        {options.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            ) : (
                <input
                    type={type}
                    id={id}
                    value={value || ''}
                    onChange={(e) => handleChange(id, e.target.value)}
                    className={className}
                    required={required}
                    min={min}
                    max={max}
                />
            )}
        </div>
    );
};

FormField.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.any,
    options: PropTypes.array,
    handleChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    required: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
};

export default FormField;
