import PropTypes from 'prop-types'

function Card({ children, reverse }) {
    // conditional class for reverse cards
    // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    return (
        <div 
        className='card' 
        style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000',
        }}
        >
        {children}

        </div>
    )
}
Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

// prop to pass into card with dark background with light text
export default Card