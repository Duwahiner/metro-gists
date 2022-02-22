import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Button = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  padding: ${({ padding }) => padding};
  max-width: 300px;
  letter-spacing: 1pt;
  background-color:${({ bgColor }) => bgColor};;
  border-radius: 50px;
  border: solid 2px transparent;
  cursor: pointer;
  transition: all 0.8s;
  &:hover {
    background-color: ${({ bgColorHover }) => bgColorHover};
    color: ${({ colorHover }) => colorHover};
    border: solid 2px ${({ borderColor }) => borderColor};
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`
export const ButtonPrimary = ({
  theme,
  color,
  colorHover,
  bgColor,
  bgColorHover,
  borderColor,
  padding,
  disabled,
  title,
  fontFamily,
  fontSize,
  width,
  height,
  handleOnClick
}) => {
  return (
    <Button
      width={width}
      height={height}
      onClick={handleOnClick}
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      colorHover={colorHover}
      bgColor={bgColor}
      bgColorHover={bgColorHover}
      borderColor={borderColor}
      padding={padding}
      disabled={disabled}
      theme={theme}
    >
      {title}
    </Button>
  )
}

ButtonPrimary.defaultProps = {
  width: '110px',
  height: 'auto',
  fontFamily: 'Roboto',
  color: '#FFF',
  bgColor: '#000',
  fontSize: '0.8rem',
  bgColorHover: '#FFF',
  colorHover: '#000',
  borderColor: '#000',
  padding: '8px',
  disabled: false
}

ButtonPrimary.propTypes = {
  theme: PropTypes.object,
  disabled: PropTypes.bool,
  handleOnClick: PropTypes.func,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  bgColorHover: PropTypes.string,
  colorHover: PropTypes.string,
  borderColor: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
}
